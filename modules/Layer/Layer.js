
(function(window) {
	var Layer = function( O ) {

		gizmo.Filter(O,"Object");

		var me = {};

        me.AddPrimitive = function( O ) {
            gizmo.Filter(O,"Object");
            this._childs.push(O);

            this.SortByZindex();
        };

        me.RemovePrimitive = function( O ) {
            gizmo.Filter(O,"Object");
            var index = 0;
            if( (index = this._childs.indexOf(O)) != -1) {
                delete( this._childs[ index ] );
            };
        };

        me.Start = function() {
        	this._loop.Start();
        };

        me.Stop = function() {
        	this._loop.Stop();
        };

        me.SortByZindex = function() {
        	this._childs = gizmo.nativeSort({mas: this._childs, target: '<', field: '_2dContextRepresentation._zindex'});
        };

		me.GetDefaultName = function() {
			return this._defaultName;
		};

		me.SetCtx = function( O ) {
			gizmo.Filter(O,"CanvasRenderingContext2D");
			this._ctx = O;	
		};

		me.GetCtx = function() {
			return this._ctx;
		};

		me.SetName = function( O ) {
			gizmo.Filter(O,"String");
			this._name = O;
		};

		me.GetName = function() {
			return this._name;
		};


		me.SetContainerElement = function( O ) {
			// gizmo.Filter(O,"HTMLBodyElement");
			this._containerElement = O;
		};

		me.SetCanvasElement = function( O ) {
			gizmo.Filter(O,"HTMLCanvasElement");
			this._canvasElement = O;
		};


		me.Init = function() {
			var container;
			if(this._containerElementName == null) {
				container = document.getElementsByTagName("body")[0];
			} else {
				container = document.getElementById(this._containerElementName);
			}
			
			var canvas = document.createElement('canvas');
			canvas.width = this._width;
			canvas.height = this._height;
			canvas.id = this._canvasElemetName;
			canvas.style.position = 'absolute';
			container.appendChild( canvas );
			var ctx = canvas.getContext('2d');

			this.SetName( this._canvasElementName );
			this.SetContainerElement( container );
			this.SetCanvasElement( canvas );
			this.SetCtx( ctx );

		};

        me.__draw = function() {
            for(var i in this._childs) {
                this._childs[i].Draw();
            }
            
        };

        me.__clear = function() {
            //for(var i=0;i<this._childs.length;i++) {            
            for(var i=this._childs.length-1;i>=0;i--) {
                this._childs[i].Clear();
            };
        };


		me.Set = function( O ) {
			this.SetName( O.name || this.GetName() );
			if(document.getElementById( this.GetName() ) == null) {
				me._canvasElementName = this.GetName();
			} else {
				me._canvasElementName = this.GetName() + "." + ArmContext.GetNewUnicalNumber();
			}			
			this._containerElementName = O.container || this._containerElementName;
			this._width = O.width || this._width;
			this._height = O.height || this._height;
			this._left = O.left || this._left;
			this._top = O.top || this._top;
			this._zindex = O.zindex || this._zindex;
			this._fps = O.fps || this._fps;

			this.Init();
		};

		me._defaultName = "Layer";
		me._ctx = null;
		me._name = me.GetDefaultName() + ArmContext.GetNewUnicalNumber();	 		
		me._canvasElement = null;
		me._containerElement = null;
		me._width = 500;
		me._height = 500;
		me._left = 0;
		me._top = 0;
		me._fps = 0;

		me._childs = [];

		me._loop = new ArmContext.Loop({
			"stepFunc": (function(O) {
        					return function() {
				            	O.__clear();
					            O.__draw();                            
					        };
					    })(me),
			"fps": me._fps
		});

		me.Set( O );

		return me;

	};

	window.ArmContext.Layer = Layer;

})(window);