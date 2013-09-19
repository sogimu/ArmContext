
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

        me.SetLisener = function(name,func) {
            gizmo.Filter(name,"String");
            gizmo.Filter(func,"Function");
            if(name && func) {
            	if(this['_'+name]) {
            		gizmo.Filter(this['_'+name], "Array");
            		var index = 0;
		            if( (index = this['_'+name].indexOf(func)) == -1) {
	            		this['_'+name].push( func );

		            } else {
		            	console.log("This Function allredy added for event " + name + " of layer " + this.GetName());
		            }
            	} else {
                	this['_'+name] = [];
                	this.SetLisener(name, func);
                }        
            }

            return this;
        };

        me.GetLisener = function(name) {
            gizmo.Filter(name,"String");
            if(this['_'+name]) {
                return this['_'+name];        
            };

            return false;

        };

        me.GetTopestPrimitiveUnderPoint = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            for(var i=this._childs.length-1;i>=0;i--) {
            	if(this._childs[i].IsLisened()) {
            		if( this._childs[i].HasPoint(O) ) {
            			return this._childs[i];
            		}
            	}
            }

            return null;

        };

		me.SetCtx = function( O ) {
			gizmo.Filter(O,"CanvasRenderingContext2D");
			this._ctx = O;	
		};

		me.SetName = function( O ) {
			gizmo.Filter(O,"String");
			this._name = O;
		};
		
		me.GetCtx = function() {
			return this._ctx;
		};

		me.GetName = function() {
			return this._name;
		};
		
		me.GetDefaultName = function() {
			return this._defaultName;
		};

		me.GetCanvasElement = function() {
			return this._canvasElement;
		};

		me.SetContainerElement = function( O ) {
			// gizmo.Filter(O,"HTMLBodyElement");
			this._containerElement = O;
		};

		me.SetCanvasElement = function( O ) {
			gizmo.Filter(O,"HTMLCanvasElement");
			this._canvasElement = O;
		};

        me.ListenMouseEvents = function() {
        	var self = this;
            this.GetCanvasElement().onmousedown = function(e) {
            	self.__onMouseDown(e);
            };
            this.GetCanvasElement().onmouseup = function(e) {
            	self.__onMouseUp(e);
            };
            this.GetCanvasElement().onmousemove = function(e) {
            	self.__onMouseMove(e);
            };
        };

        me.NotListenMouseEvents = function() {
            this.GetCanvasElement().onmousedown = null;
            this.GetCanvasElement().onmouseup = null;
            this.GetCanvasElement().onmousemove = null;
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

        // event form mouse
        me.__onMouseDown = function(e) {
        	if(this._onMouseDown) {
	        	gizmo.Filter(this._onMouseDown, "Array");
	            for(var i in this._onMouseDown) {
            	    this._onMouseDown[i](e);  
	                  
	            };
        	};


        };

        me.__onMouseUp = function(e) {
        	if(this._onMouseUp) {
	        	gizmo.Filter(this._onMouseUp, "Array");
	            for(var i in this._onMouseUp) {
            	    this._onMouseUp[i](e);  
	                  
	            };
        	};

        }

        me.__onMouseMove = function(e) {
        	if(this._onMouseMove) {
	        	gizmo.Filter(this._onMouseMove, "Array");
	            for(var i in this._onMouseMove) {
            	    this._onMouseMove[i](e);  
	                  
	            };
        	};

        };

        me._onMouseDown = [];
        me._onMouseUp = [];
        me._onMouseMove = [];

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

			this._loop.Set( O );

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