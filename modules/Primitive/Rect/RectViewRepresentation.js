/**
 * @classdesc
 * Описывает класс RectViewRepresentation. Класс описывающий внешний вид примитива Rect.
 * 
 * @class RectViewRepresentation
 * @this {ArmContext.RectViewRepresentation}
 * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
 * @version 0.1
 *
 * @requires ArmContext/ArmContext.js
 * @requires Primitive/ViewRepresentation.js
 */

(function(window) {
    var RectViewRepresentation = function(primitive) {

        var me = ArmContext.ViewRepresentation(primitive);

        me.parentSet = me.Set ? me.Set : null;
        
        // View properties
        me._fillObject = "default";
        me._strokeObject = "default";
        me._lineWidth = "default";
        me._lineDash = "default";
        me._miterLimit = "default";
        me._lineCap = "default";
        me._lineJoin = "default";
        

        me.GetFillObject = function() {
            return this._fillObject;
        };

        me.GetStrokeObject = function() {
            return this._strokeObject;
        };

        me.GetLineWidth = function() {
            return this._lineWidth;
        };

        me.GetLineDash = function() {
            return this._lineDash;
        };

        me.GetMiterLimit = function() {
            return this._miterLimit;
        };

        me.GetLineCap = function() {
            return this._lineCap;
        };

        me.GetLineJoin = function() {
            return this._lineJoin;
        };
        
        me.Set = function(O) {
            gizmo.Filter(O, "Object");

            if(this.parentSet) {    this.parentSet( O );    };

            for(var name in O) {
                switch( name ) {
                    case "fillObject" : { 
                        this._fillObject  = O[name];
                        if(this._onChanged) {
                this._onChanged.call(primitive);
            };
                    }; break;
                    
                    case "strokeObject" : {
                        this._strokeObject = O[name];
                        if(this._onChanged) {
                this._onChanged.call(primitive);
            };
                    };
                    break;

                    case "lineWidth" : { 
                        this._lineWidth  = O[name];
                        if(this._onChanged) {
                this._onChanged.call(primitive);
            };
                    }; break;
                    
                    case "lineDash" : {
                        this._lineDash = O[name];
                        if(this._onChanged) {
                this._onChanged.call(primitive);
            };
                    };
                    break;

                    case "miterLimit" : { 
                        this._miterLimit  = O[name];
                        if(this._onChanged) {
                this._onChanged.call(primitive);
            };
                    }; break;
                    
                    case "lineCap" : {
                        switch(O[name]) {
                            case "butt" : { 
                                this._lineCap  = O[name];
                                if(this._onChanged) {
                this._onChanged.call(primitive);
            };
                            }; break;
                            
                            case "round" : { 
                                this._lineCap  = O[name];
                                if(this._onChanged) {
                this._onChanged.call(primitive);
            };
                            }; break;
                            
                            case "square" : { 
                                this._lineCap  = O[name];
                                if(this._onChanged) {
                this._onChanged.call(primitive);
            };
                            }; break;
                        }
                        if(this._onChanged) {
                this._onChanged.call(primitive);
            };
                    };
                    break;

                    case "lineJoin" : {
                        switch(O[name]) {
                            case "miter" : { 
                                this._lineJoin  = O[name];
                                if(this._onChanged) {
                this._onChanged.call(primitive);
            };
                            }; break;

                            case "round" : { 
                                this._lineJoin  = O[name];
                                if(this._onChanged) {
                this._onChanged.call(primitive);
            };
                            }; break;
                            
                            case "bevel" : { 
                                this._lineJoin  = O[name];
                                if(this._onChanged) {
                this._onChanged.call(primitive);
            };
                            }; break;
                        };
                        if(this._onChanged) {
                this._onChanged.call(primitive);
            };
                    };
                    break;
                };
            };


        };

        return me;
    };

    ArmContext.RectViewRepresentation = RectViewRepresentation;
})();
