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
 */

(function(window) {
	var Layer = function( O ) {
		gizmo.Filter(O, "Object");

		var me = {};

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
            this.SetCanvasTag();

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
            this.GetCanvasTag().width = width;
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
            this.GetCanvasTag().height = height;

        };

        /**
         * Установить z-индекс слоя. Z-индекс тега <canvas>.
         *
         * @method Layer.SetzIndex
         * @this {Layer}
         * @param {number} zIndex
         */
        me.SetzIndex = function( zIndex ) {
            gizmo.Filter(zIndex,"Number");
            this.GetCanvasTag().style.zIndex = zIndex;

        };

        /**
         * Установить тег-контейнер для слоя через ID тега-контайнера.
         *
         * @method Layer.SetContainerTag
         * @this {Layer}
         * @param {number} containerTagID
         */
        me.SetContainerTag = function(containerTagID) {
            gizmo.Filter(containerTagID,"String");
            var container = document.getElementById(containerTagID);
            if(container) {
                this._containerTag = container;
            } else {
                this._containerTag = document.getElementsByTagName("body")[0];
            }

        };
        
        me.SetCanvasTag = function() {
            var containerTag = this.GetContainerTag();

            if(this.GetCanvasTag() == null) {
                var canvas = document.createElement('canvas');
                canvas.width = 500;
                canvas.height = 500;
                canvas.id = this.GetName();
                canvas.style.zIndex = 0;
                canvas.className = "ArmLayerClass " + this.GetName();
                this._ctx = canvas.getContext('2d');

                container.appendChild( canvas );
                this._canvasTag = canvas;
            }
            

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
            return this.GetCanvasTag().width;
        };

        /**
         * Получить высоту слоя 
         *
         * @method Layer.GetHeight
         * @this {ArmContext.Layer}
         * @return {number}
         */
        me.GetHeight = function() {
            return this.GetCanvasTag().height;
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
            for(var name in O) {
                switch( name ) {
                    case "name"     : {
                        this.SetName( O[name] );
                    }; break;

                    case "containerID"     : {
                        this.SetContainerTag( O[name] );
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
        me._canvasTag = null;
		me._ctx = null;
				
        me.SetName.call(me,me.GetDefaultName() + ArmContext.GetNewUnicalNumber());          
        
		me.Set( O );

		return me;

	};

	window.ArmContext.Layer = Layer;

})(window);