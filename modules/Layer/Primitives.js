
(function(window) {
	var Primitives = function(O) {

		// gizmo.Filter(O,"Object");

		var me = {};

        me.Add = function( O ) {
            gizmo.Filter(O,"Object");
            this._primitives.push(O);

            this.SortByZindex();

            return this;
        };

        me.Remove = function( O ) {
            gizmo.Filter(O,"Object");
            var index = 0;
            if( (index = this._primitives.indexOf(O)) != -1) {
                delete( this._primitives[ index ] );
                return true;
            } else {
                return false;
            };
        };

        me.GetArray = function() {
            return this._primitives;
        };

        me.SortByZindex = function() {
        	this._primitives = gizmo.nativeSort({mas: this._primitives, target: '<', field: '_2dContextRepresentation._zindex'});
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

            for(var i=this._primitives.length-1;i>=0;i--) {
            	if(this._primitives[i].IsLisened()) {
            		if( this._primitives[i].HasPoint(O) ) {
            			return this._primitives[i];
            		}
            	}
            }

            return null;

        };

        me.GetChanged = function() {
            var changedPrimitives = [];
            var primitive;
            for(var name in this._primitives) {
                primitive = this._primitives[name];
                if(primitive.IsChanged) {
                    changedPrimitives.push( primitive );
                }
            };

            return new ArmContext.Primitives({"primitives": changedPrimitives});

        };

        me.GetIntersectionGroups = function() {
            var firstPrimitive, secondPrimitive;

            for(var firstPrimitiveName in this._primitives) {
                firstPrimitive = this._primitives[firstPrimitiveName];
                for(var secondPrimitiveName in this._primitives) {
                    secondPrimitive = this._primitives[secondPrimitiveName];
                    if( firstPrimitive.BoundingBoxHaveIntersectionWith(secondPrimitive) ) {
                        // Доделать
                    }    
                };
            };
        };

        me.GetOneBoundingBox = function() {
            var primitive;
            var boundingBox;
            var OneBoundingBox = new ArmContext.BoundingBox();

            for(var name in this._primitives) {
                primitive = this._primitives[name];
                boundingBox = primitive.GetBoundingBox();
                OneBoundingBox = OneBoundingBox.SumWith(boundingBox);
            };
            return OneBoundingBox;
        };

		me.Set = function( O ) {
            for(var name in O) {
                switch( name ) {
                    case "primitives" : {
                        var primitives = O[name];

                        gizmo.Filter(primitives, "Array");
                        for(var primitive in primitives) {
                            this.Add( primitives[primitive] );
                        };
                    }; break;

                };
            };

		};

		me._primitives = [];

		me.Set( O || {} );

		return me;

	};

	window.ArmContext.Primitives = Primitives;

})(window);