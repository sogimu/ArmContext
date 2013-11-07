
(function(window) {
	var Layer = function( O ) {

		gizmo.Filter(O, "Object");

		var me = {};

        // me.SetLisener = function(name,func) {
        //     gizmo.Filter(name,"String");
        //     gizmo.Filter(func,"Function");
        //     if(name && func) {
        //     	if(this['_'+name]) {
        //     		gizmo.Filter(this['_'+name], "Array");
        //     		var index = 0;
		      //       if( (index = this['_'+name].indexOf(func)) == -1) {
	       //      		this['_'+name].push( func );

		      //       } else {
		      //       	console.log("This Function allredy added for event " + name + " of layer " + this.GetName());
		      //       }
        //     	} else {
        //         	this['_'+name] = [];
        //         	this.SetLisener(name, func);
        //         }        
        //     }

        //     return this;
        // };

        // me.GetLisener = function(name) {
        //     gizmo.Filter(name,"String");
        //     if(this['_'+name]) {
        //         return this['_'+name];        
        //     } else {
        //         return false;
        //     }
        // };

		me.SetCtx = function( O ) {
			gizmo.Filter(O,"CanvasRenderingContext2D");
			this._ctx = O;	
		};

        me.SetName = function( O ) {
            gizmo.Filter(O,"String");
            this._name = O;
            this.SetCanvasElement();

        };

        me.SetWidth = function( width ) {
            gizmo.Filter(width,"Number");
            // this._width = width;
            this.GetCanvasElement().width = width;
        };

        me.SetHeight = function( height ) {
            gizmo.Filter(height,"Number");
            // this._height = height;
            this.GetCanvasElement().height = height;

        };

        // me.SetLeft = function( left) {
        //     gizmo.Filter(left,"Number");
        //     this._left = left;       
        // };

        // me.SetTop = function( top ) {
        //     gizmo.Filter(top,"Number");
        //     this._top = top;
        // };

        me.SetzIndex = function( zIndex ) {
            gizmo.Filter(zIndex,"Number");
            // this._zindex = zIndex;
            this.GetCanvasElement().style.zIndex = zIndex;

        };

        me.SetContainerElement = function(containerElementID) {
            gizmo.Filter(containerElementID,"String");
            var container = document.getElementById(containerElementID);
            if(container) {
                this._containerElement = container;
            } else {
                this._containerElement = document.getElementsByTagName("body")[0];
            }

        };
        
        me.SetCanvasElement = function() {
            var containerElement = this.GetContainerElement();

            if(this.GetCanvasElement() == null) {
                var canvas = document.createElement('canvas');
                canvas.width = 500;
                canvas.height = 500;
                canvas.id = this.GetName();
                canvas.style.zIndex = 0;
                canvas.className = "ArmLayerClass " + this.GetName();
                this.SetCtx(canvas.getContext('2d'));

                container.appendChild( canvas );
                this._canvasElement = canvas;
            }
            

        };

        // me.SetCanvasElementID = function(canvasElementID) {
        //     this._canvasElementID = canvasElementID;
        // };

		me.GetCtx = function() {
			return this._ctx;
		};

		me.GetName = function() {
			return this._name;
		};
		
        me.GetWidth = function() {
            return this.GetCanvasElement().width;
        };

        me.GetHeight = function() {
            return this.GetCanvasElement().height;
        };

        // me.GetLeft = function() {
        //     return this._left;    
        // };

        // me.GetTop = function() {
        //     return this._top;
        // };

        me.GetzIndex = function() {
            return this.GetCanvasElement().style.zIndex;
        };

        me.GetContainerElement = function() {
            return this._containerElement;
        };

        // me.GetContainerElementID = function() {
        //     return this._containerElementID;
        // };
        
        me.GetCanvasElement = function() {
            return this._canvasElement;
        };

        // me.GetCanvasElementID = function()) {
        //     return this._canvasElementID;
        // };

		me.GetDefaultName = function() {
			return this._defaultName;
		};

        // me.ListenMouseEvents = function() {
        // 	var self = this;

        //     this.GetCanvasElement().onmousedown = function(e) {
        //     	self.__onMouseDown(e);
        //     };
        //     this.GetCanvasElement().onmouseup = function(e) {
        //         self.__onMouseUp(e);    
        //     };
        //     this.GetCanvasElement().onmousemove = function(e) {
        // 	    self.__onMouseMove(e);    
        //     };
        // };

        // me.NotListenMouseEvents = function() {
        //     this.GetCanvasElement().onmousedown = null;
        //     this.GetCanvasElement().onmouseup = null;
        //     this.GetCanvasElement().onmousemove = null;
        // };

        // // event form mouse
        // me.__onMouseDown = function(e) {
        // 	if(this._onMouseDown) {
	       //  	gizmo.Filter(this._onMouseDown, "Array");
	       //      for(var i in this._onMouseDown) {
        //     	    this._onMouseDown[i](e);  
	                  
	       //      };
        // 	};


        // };

        // me.__onMouseUp = function(e) {
        // 	if(this._onMouseUp) {
	       //  	gizmo.Filter(this._onMouseUp, "Array");
	       //      for(var i in this._onMouseUp) {
        //     	    this._onMouseUp[i](e);  
	                  
	       //      };
        // 	};

        // };

        // me.__onMouseMove = function(e) {
        // 	if(this._onMouseMove) {
	       //  	gizmo.Filter(this._onMouseMove, "Array");
	       //      for(var i in this._onMouseMove) {
        //     	    this._onMouseMove[i](e);  
	                  
	       //      };
        // 	};

        // };

        me.Constructor = function() {
            //  var container;
            // if(this._containerElementName == null) {
            //     container = document.getElementsByTagName("body")[0];
            // } else {
            //     container = document.getElementById(this._containerElementName);
            // }
            
            // var canvas = document.createElement('canvas');
            // canvas.width = this._width;
            // canvas.height = this._height;
            // canvas.id = this._canvasElemetName;
            // canvas.className = "ArmCanvasClass ArmCanvas"+this._canvasElemetName;
            // container.appendChild( canvas );
            // var ctx = canvas.getContext('2d');

            // this.SetName( this._canvasElementName );
            // this.SetContainerElement( container );
            // this.SetCanvasElement( canvas );
            // this.SetCtx( ctx );

            // // Initializing fps counter (stats.js from mrdoob)
            // stats = new Stats();
            // stats.setMode( 0 );
            // document.body.appendChild( stats.domElement );

        };

		me.Set = function( O ) {
            for(var name in O) {
                switch( name ) {
                    case "name"     : {
                        this.SetName( O[name] );
                    }; break;

                    case "containerID"     : {
                        this.SetContainerElement( O[name] );
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

/*			this.SetName( O.name || this.GetName() );
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
			this._zindex = O.zindex || this._zindex;*/

			// this.Init();
		};

		me._defaultName = "Layer";

		me._containerElement = null;
		// me._containerElementID = null;
        me._canvasElement = null;
        // me._canvasElementID = null;
		me._ctx = null;
		
		// me._width = 500;
		// me._height = 500;
		
        me.SetName.call(me,me.GetDefaultName() + ArmContext.GetNewUnicalNumber());          

        // me._left = 0;
		// me._top = 0;
		
        // me._onMouseDown = [];
        // me._onMouseUp = [];
        // me._onMouseMove = [];

        // me._primitives = new ArmContext.Primitives();
        
		me.Set( O );

        // me.Constructor();

		return me;

	};

	window.ArmContext.Layer = Layer;

})(window);