/**
 * Описывает абстрактный класс ответственный за визуальные свойства примитива.
 *
 * @this {ArmContext.ViewRepresentation}
 * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
 * @version 0.1
 *
 * @requires ArmContext/ArmContext.js
 */

(function(window) {
    var ViewRepresentation = function(primitive) {

        var me = {};
        
        // Ссылка на примитив-владелец объекта данного класса
        me._primitive = primitive; 

        // View properties
        me._globalAlpha = "default";  // 0 < 1 
        me._shadowColor = "default";
        me._shadowBlur = "default";
        me._shadowOffsetX = "default";
        me._shadowOffsetY = "default";
        me._zindex = 0;

        // Properties not for user updating
        me._boundingBox = {};
        me._pictureUnderPrimitive = {};

        me._isRounding = false;

        me.Set = function(O) {
            for(var name in O) {
                switch( name ) {
                    case "globalAlpha"     : {
                        this.SetGlobalAlpha( O[name] );
                    }; break;

                    case "shadowColor"     : {
                        this.SetShadowColor( O[name] );
                    }; break;

                    case "shadowBlur"     : {
                        this.SetBlur( O[name] );
                    }; break;

                    case "shadowOffsetX"     : {
                        this.SetShadowOffsetX( O[name] );
                    }; break;

                    case "shadowOffsetY"     : {
                        this.SetShadowOffsetY( O[name] );
                    }; break;

                    case "zindex"     : {
                        this.SetZindex( O[name] );
                    }; break;

                    case "rounding"     : {
                        this.SetRounding( O[name] );
                    }; break;

                };
            };

        };

        me.SetGlobalAlpha = function(O) {
            gizmo.Filter(O, "Number");
            this._globalAlpha = O;
        };

        me.SetShadowColor = function(O) {
            gizmo.Filter(O, "String");
            this._shadowColor = O;
        };

        me.SetShadowBlur = function(O) {
            gizmo.Filter(O, "Number");
            this._shadowBlur = O;
        };

        me.SetShadowOffsetX = function(O) {
            gizmo.Filter(O, "Number");
            this._shadowOffsetX = O;
        };

        me.SetShadowOffsetY = function(O) {
            gizmo.Filter(O, "Number");
            this._shadowOffsetY = O;
        };

        me.SetZindex = function( zindex ) {
            gizmo.Filter(zindex,"Number");
            this._zindex = zindex;
            
            // this.GetLayer().SortByZindex();
        };

        me.SetRounding = function(status) {
            gizmo.Filter(status, "Boolean");
            return this._isRounding = status;
        };

        me.IsRounding = function() {
            return this._isRounding;
        };

        me.GetGlobalAlpha = function() {
            return this._globalAlpha;
        };

        me.GetShadowColor = function() {
            return this._shadowColor;
        };

        me.GetShadowBlur = function() {
            return this._shadowBlur;
        };

        me.GetShadowOffsetX = function() {
            return this._shadowOffsetX;
        };

        me.GetShadowOffsetY = function() {
            return this._shadowOffsetY
        };

        me.GetZindex = function() {
            return this._zindex;
        };

        me.SetLisener = function(name, func) {
            gizmo.Filter(name,"String");
            gizmo.Filter(func,"Function");
            if(name && func) {
                this['_' + name] = func;
            }

            return this;
        };

        me.GetLisener = function(name) {
            gizmo.Filter(name,"String");
            if(this['_' + name]) {
                return this['_' + name];        
            } else {
                return false;
            }

        };


        me.ShowDebugInfo = function(ctx) {
            console.log("VisualProperties:");
            console.log("Method have not realisation");

        };

        return me;
    };

    ArmContext.ViewRepresentation = ViewRepresentation;
})();
