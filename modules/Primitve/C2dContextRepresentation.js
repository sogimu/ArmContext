(function(window) {
    var C2dContextRepresentation = function() {

        var me = {};

        me._ctx = null;
        // GeometryProperties
        me._x = 0;
        me._y = 0;
        me._width = 10;
        me._height = 10;
        me._angle = 0;
        me._scale = {x:1,y:1};
        // ViewProperties
        me._fillObject = "default";
        me._strokeObject = "default";
        me._widthLine = "default";
        me._boundingBox = {};
        me._pictureUnderPrimitive = {};

        // Обновляет геометрические свойства
        me.UpdateGeometryProperties = function(points) {
            console.log("Virtual method UpdateGeometryProperties. This is method of abstract class!!!");

            return this;
        };

        // Возвращает визуальные свойства
        me.GetVisualProperties = function() {
            return {
                fillObject: me._fillObject = "default",
                strokeObject: me._strokeObject = "default",
                widthLine: me._widthLine,
                boundingBox: me._boundingBox,
                pictureUnderPrimitive: me._pictureUnderPrimitive
            }
        }

        return me;
    };

    ArmContext.C2dContextRepresentation = C2dContextRepresentation;
})();
