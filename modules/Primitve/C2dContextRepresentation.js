/**
 * Описывает абстрактный класс ответственный за визуальные свойства примитива.
 *
 * @this {ArmContext.C2dContextRepresentation}
 * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
 * @version 0.1
 */

(function(window) {
    var C2dContextRepresentation = function(O) {

        var me = {};

        //  Not view properties
        me._ctx = null;

        // View properties
        me._globalAlpha = 1;  // 0 < 1 
        me._shadowColor = "#aaffaa";
        //me._shadowBlur = "?";
        me._shadowOffsetX = 1;
        me._shadowOffsetY = 1;
        // me._lineCap = "?";
        // me._lineDash = "?";
        // me._lineJoin = "?";
        // me._miterLimit = "?";
         
        // Properties not for user updating
        me._boundingBox = {};
        me._pictureUnderPrimitive = {};

        me.Set = function(O) {
            this._ctx = O.ctx || this._ctx;
            this._globalAlpha = O.globalAlpha || this._globalAlpha;
            this._shadowColor = O.shadowColor || this._shadowColor;
            // this._shadowBlur = O.shadowBlur || this._shadowBlur;
            this._shadowOffsetX = O.shadowOffsetX || this._shadowOffsetX;
            this._shadowOffsetY = O.shadowOffsetY || this._shadowOffsetY;
            // this._lineCap = O.lineCap || this._lineCap;
            // this._lineDash = O.lineDash || this._lineDash;
            // this._lineJoin = O.lineJoin || this._lineJoin;
            // this._miterLimit = O.miterLimit || this._miterLimit;

        };

        me.GetCtx = function() {
            return this._ctx;
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

        me.GetLineCap = function() {
            return this._lineCap;
        };

        me.GetLineDash = function() {
            return this._lineDash;
        };

        me.GetLineJoin = function() {
            return this._lineJoin;
        };

        me.ShowDebugInfo = function(ctx) {
            console.log("VisualProperties:");
            console.log("Method have not realisation");

        };

        me.Set( O );

        return me;
    };

    ArmContext.C2dContextRepresentation = C2dContextRepresentation;
})();
