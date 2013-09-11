/**
 * Описывает абстрактный класс ответственный за визуальные свойства примитива.
 *
 * @this {ArmContext.C2dContextRepresentation}
 * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
 * @version 0.1
 */

(function(window) {
    var C2dContextRepresentation = function() {

        var me = {};

        //  Not view properties
        me._ctx = null;
        me._layer = null;

        // View properties
        me._globalAlpha = "default";  // 0 < 1 
        me._shadowColor = "default";
        me._shadowBlur = "default";
        me._shadowOffsetX = "default";
        me._shadowOffsetY = "default";
         
        // Properties not for user updating
        me._boundingBox = {};
        me._pictureUnderPrimitive = {};

        me.Update = function(O) {
            this._ctx = O.ctx || this._ctx;
            this._layer = O.layer || this._layer;
            this._ctx = this._layer ? this._layer.GetCtx() : this._ctx;
   
            this._globalAlpha = O.globalAlpha || this._globalAlpha;
            this._shadowColor = O.shadowColor || this._shadowColor;
            this._shadowBlur = O.shadowBlur || this._shadowBlur;
            this._shadowOffsetX = O.shadowOffsetX || this._shadowOffsetX;
            this._shadowOffsetY = O.shadowOffsetY || this._shadowOffsetY;

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

        me.ShowDebugInfo = function(ctx) {
            console.log("VisualProperties:");
            console.log("Method have not realisation");

        };

        return me;
    };

    ArmContext.C2dContextRepresentation = C2dContextRepresentation;
})();
