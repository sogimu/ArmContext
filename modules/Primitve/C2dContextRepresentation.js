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

        me._ctx = null;

        // ViewProperties
        me._fillObject = "default";
        me._strokeObject = "default";
        me._widthLine = "default";
        me._boundingBox = {};
        me._pictureUnderPrimitive = {};

        // Возвращает визуальные свойства
        me.GetVisualProperties = function() {
            return {
                fillObject: me._fillObject = "default",
                strokeObject: me._strokeObject = "default",
                widthLine: me._widthLine,
                boundingBox: me._boundingBox,
                pictureUnderPrimitive: me._pictureUnderPrimitive
            }
        };

        me.ShowDebugInfo = function(ctx) {
            console.log("VisualProperties:");
            console.log(this.GetVisualProperties());

        };

        return me;
    };

    ArmContext.C2dContextRepresentation = C2dContextRepresentation;
})();
