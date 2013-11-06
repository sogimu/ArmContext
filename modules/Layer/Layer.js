
(function(window) {
	var Layer = function( O ) {

		gizmo.Filter(O,"Object");

		var me = {};

        // me.AddPrimitive = function( O ) {
        //     gizmo.Filter(O,"Object");

        //     this._primitives.Add( O );
        // };

        // me.RemovePrimitive = function( O ) {
        //     gizmo.Filter(O,"Object");

        // 	return this._primitives.Remove( O );
        // };

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
            } else {
                return false;
            }
        };

        // me.GetTopestPrimitiveUnderPoint = function(O) {
        //     gizmo.Filter(O,"Object");
        //     gizmo.Filter(O.x,"Number");
        //     gizmo.Filter(O.y,"Number");

        //     return this._primitives.GetTopestPrimitiveUnderPoint( O );

        // };

	    // me.SortByZindex = function() {
	    // 	this._primitives.SortByZindex();
	    // };

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

   //      me.__draw = function() {
			// var primitives = this._primitives.GetArray();
   //          for(var primitive in primitives) {
   //              primitives[primitive].Draw();
   //          };
           
            
   //      };

   //      me.__clear = function() {
   //          stats.begin();

   //          var primitives = this._primitives.GetArray();
   //          for(var primitive in primitives) {
   //          	primitives[primitive].Clear();
   //          };

   //      };

   //      me.__update = function() {
   //          var primitives = this._primitives.GetArray();
   //          for(var primitive in primitives) {
   //              primitives[primitive].Update();    
   //          };

   //          stats.end();

   //      };

   //      me.ReDraw = function() {
   //          this.__clear();
   //          this.__draw();
   //          this.__update();
   //      };

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

        };

        me.__onMouseMove = function(e) {
        	if(this._onMouseMove) {
	        	gizmo.Filter(this._onMouseMove, "Array");
	            for(var i in this._onMouseMove) {
            	    this._onMouseMove[i](e);  
	                  
	            };
        	};

        };

        me.Constructor = function() {
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
            canvas.className = "ArmCanvasClass ArmCanvas"+this._canvasElemetName;
            container.appendChild( canvas );
            var ctx = canvas.getContext('2d');

            this.SetName( this._canvasElementName );
            this.SetContainerElement( container );
            this.SetCanvasElement( canvas );
            this.SetCtx( ctx );

            // Initializing fps counter (stats.js from mrdoob)
            stats = new Stats();
            stats.setMode( 0 );
            document.body.appendChild( stats.domElement );

        };

		me.Set = function( O ) {
			this.SetName( O.name || this.GetName() );
			//if(document.getElementById( this.GetName() ) == null) {
			me._canvasElementName = this.GetName();
			//} else {
			//	me._canvasElementName = this.GetName() + "." + ArmContext.GetNewUnicalNumber();
			//}			
			this._containerElementName = O.container || this._containerElementName;
			this._width = O.width || this._width;
			this._height = O.height || this._height;
			this._left = O.left || this._left;
			this._top = O.top || this._top;
			this._zindex = O.zindex || this._zindex;

			// this.Init();
		};

		me._defaultName = "Layer";
		me._name = me.GetDefaultName() + ArmContext.GetNewUnicalNumber();	 		
		
		me._containerElement = null;
		me._canvasElement = null;
		me._ctx = null;
		
		me._width = 500;
		me._height = 500;
		me._left = 0;
		me._top = 0;
		
        me._onMouseDown = [];
        me._onMouseUp = [];
        me._onMouseMove = [];

        // me._primitives = new ArmContext.Primitives();

		me.Set( O );

        me.Constructor();

		return me;

	};

	window.ArmContext.Layer = Layer;

})(window);