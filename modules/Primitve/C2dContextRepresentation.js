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
        
        // Properties not for user updating
        me._boundingBox = {};
        me._pictureUnderPrimitive = {};

        me.Update = function(O) {
            this._ctx = O.ctx || this._ctx;

        };

        me.GetCtx = function() {
            return this._ctx;
        };


        me.ShowDebugInfo = function(ctx) {
            console.log("VisualProperties:");
            console.log(this.GetVisualProperties());

        };

        me.Update( O );

        return me;
    };

    ArmContext.C2dContextRepresentation = C2dContextRepresentation;
})();
