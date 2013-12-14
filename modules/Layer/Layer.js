/**
 * @classdesc
 * Класс для описания слоя, абстракция над тегом canvas
 *
 * @class Layer
 * @param {object} O
 * @param {string} O.name          Имя слоя. Так же данное имя устанавливается для id тега <canvas>.
 * @param {number} O.containerID   ID тега-контейнера для создаваемого тега <canvas>
 * @param {number} O.width         Ширина слоя
 * @param {number} O.height        Высота слоя
 * @param {number} O.top           Смещение относительно верха экрана
 * @param {number} O.left          Смещение относительно левой стороны экрана
 * @param {number} O.zIndex        Z-индекс слоя
 * @this {ArmContext.Layer}
 * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
 * @version 0.1
 *
 * @requires ArmContext/ArmContext.js
 */

(function(window) {
	var Layer = function( O ) {

		var me = {};

        /**
         * Установить объект 2d-context
         *
         * @method Layer.SetCtx
         * @this {ArmContext.Layer}
         * @param {CanvasRenderingContext2D} ctx
         */
        me.SetCtx = function(ctx) {
            this._ctx = ctx;
        };

        /**
         * Установить имя слоя. Так же данное имя устанавливается для id тега <canvas>. 
         *
         * @method Layer.SetName
         * @this {Layer}
         * @param {string} name
         */
        me.SetName = function( O ) {
            gizmo.Filter(O,"String");
            this._name = O;

        };

        /**
         * Установить ширину слоя. Ширина тега <canvas>. 
         *
         * @method Layer.SetWidth
         * @this {Layer}
         * @param {number} width
         */
        me.SetWidth = function( width ) {
            gizmo.Filter(width,"Number");
            this._width = width;
        };
        
        /**
         * Установить высоту слоя. Высота тега <canvas>.
         * 
         * @method Layer.SetHeight
         * @this {Layer}
         * @param {number} height
         */
        me.SetHeight = function( height ) {
            gizmo.Filter(height,"Number");
            this._height = height;

        };

        /**
         * Установить z-индекс слоя. Z-индекс тега <canvas>.
         *
         * @method Layer.SetzIndex
         * @this {Layer}
         * @param {number} zIndex
         */
        me.SetZindex = function( zIndex ) {
            gizmo.Filter(zIndex,"Number");
            if(this.GetCanvasTag()) {
                this.GetCanvasTag().style.zIndex = zIndex;    
            }
            this._zIndex = zIndex;

        };

        /**
         * Установить тег-контейнер для слоя через ID тега-контейнера.
         *
         * @method Layer.SetContainerTag
         * @this {Layer}
         */
        me.SetContainerTag = function() {
            if(this.GetContainerTagID()) {
                gizmo.Filter(this.GetContainerTagID(),"String");
                var container = document.getElementById(this._containerTagID);
                if(container) {
                    this._containerTag = container;
                } else {
                    this._containerTag = document.getElementsByTagName("body")[0];
                }
            } else {
                this._containerTag = document.getElementsByTagName("body")[0];
            }

        };
        
        me.SetCanvasTag = function() {
            this.SetContainerTag();

            var containerTag = this.GetContainerTag();

            if(this.GetContainerTag()) {
                if(this.GetCanvasTag() == null) {
                    var canvas = document.createElement('canvas');
                    canvas.width = this.GetWidth();
                    canvas.height = this.GetHeight();
                    canvas.id = this.GetName();
                    canvas.style.zIndex = 0;
                    canvas.className = "ArmLayerClass " + this.GetName();
                    this.SetCtx(canvas.getContext('2d'));

                    containerTag.appendChild( canvas );
                    this._canvasTag = canvas;
                    this.SetCanvasTagID(this.GetName());

                } else {
                    console.log("Canvas already created container ID: " + this.GetContainerTagID() + ", canvas ID: " + this.GetCanvasTagID());
                }
            } else {
                console.log("Container tag is unknown!");
            }

        };

        /**
         * Установить ID тега-контейнера.
         *
         * @method Layer.SetContainerTagID
         * @this {Layer}
         */
        me.SetContainerTagID = function(id) {
            this._containerTagID = id;
        };

        me.SetCanvasTagID = function(id) {
            this._canvasTagID = id;
        };

        /**
         * Получить объект 2d-context
         *
         * @method Layer.GetCtx
         * @this {ArmContext.Layer}
         * @return {CanvasRenderingContext2D}
         */
		me.GetCtx = function() {
			return this._ctx;
		};

        /**
         * Получить имя слоя
         *
         * @method Layer.GetName
         * @this {ArmContext.Layer}
         * @return {string}
         */
		me.GetName = function() {
			return this._name;
		};

		/**
         * Получить ширину слоя
         *
         * @method Layer.GetWidth
         * @this {ArmContext.Layer}
         * @return {number}
         */
        me.GetWidth = function() {
            if(this.GetCanvasTag()) {
                return this.GetCanvasTag().width;
            }
            return this._width;

        };

        /**
         * Получить высоту слоя 
         *
         * @method Layer.GetHeight
         * @this {ArmContext.Layer}
         * @return {number}
         */
        me.GetHeight = function() {
            if(this.GetCanvasTag()) {
                return this.GetCanvasTag().height;
            }
            return this._height;

        };

        /**
         * Получить z-индекс слоя
         *
         * @method Layer.GetzIndex
         * @this {ArmContext.Layer}
         * @return {number}
         */
        me.GetzIndex = function() {
            return this.GetCanvasTag().style.zIndex;
        };

        /**
         * Получить тег-контейнер в котором находится тег canvas слоя
         *
         * @method Layer.GetContainerTag
         * @this {ArmContext.Layer}
         * @return {tag}
         */
        me.GetContainerTag = function() {
            return this._containerTag;
        };

        /**
         * Получить тег canvas
         *
         * @method Layer.GetCanvasTag
         * @this {ArmContext.Layer}
         * @return {canvasTag}
         */
        me.GetCanvasTag = function() {
            return this._canvasTag;
        };

        /**
         * Получить ID тега-контейнера тега canvas слоя
         *
         * @method Layer.GetContainerTagID
         * @this {ArmContext.Layer}
         * @return {string}
         */
        me.GetContainerTagID = function() {
            return this._containerTagID;
        };

        /**
         * Получить ID тега canvas слоя
         *
         * @method Layer.GetCanvasTagID
         * @this {ArmContext.Layer}
         * @return {string}
         */
        me.GetCanvasTagID = function() {
            return this._canvasTagID;
        };

        /**
         * Получить имя слоя по-умолчанию
         *
         * @method Layer.GetDefaultName
         * @this {ArmContext.Layer}
         * @return {string}
         */
		me.GetDefaultName = function() {
			return this._defaultName;
		};

		me.Set = function( O ) {
            gizmo.Filter(O, "Object");

            for(var name in O) {
                switch( name ) {
                    case "name"     : {
                        this.SetName( O[name] );
                    }; break;

                    case "containerID"     : {
                        this.SetContainerTagID( O[name] );
                    }; break;

                    case "width"     : {
                        this.SetWidth( O[name] );
                    }; break;

                    case "height"     : {
                        this.SetHeight( O[name] );
                    }; break;

                    case "top"     : {
                        this.SetTop( O[name] );
                    }; break;

                    case "left"     : {
                        this.SetLeft( O[name] );
                    }; break;

                    case "zIndex"     : {
                        this.SetZindex( O[name] );
                    }; break;

                };
            };

		};

		me._defaultName = "Layer";

        me._containerTag = null;
		me._containerTagID = "";
        me._canvasTag = null;
        me._canvasTagID = null;

        me._width = 500;
        me._height = 500;

		me._ctx = null;
				
        me.SetName.call(me,me.GetDefaultName() + ArmContext.GetNewUnicalNumber());          
        
		me.Set( O || {} );

        me.SetCanvasTag();

		return me;

	};

	window.ArmContext.Layer = Layer;

})(window);