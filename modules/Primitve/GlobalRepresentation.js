(function(window) {
    var GlobalRepresentation = function(O) {

        gizmo.Filter(O,"Object");

        var me = {};

        me._x = O.x || 0;
        me._y = O.y || 0;
        me._width = O.width || 10;
        me._height = O.height || 10;
        me._angle = O.radAngle || (O.gradAngle || 0) * Math.PI/180;
        me._fillObject = O.fillObject || "default";
        me._strokeObject = O.strokeObject || "default";
        me._clipObject = O.clipObject || null;

        me.Update = function(points, visualProperties) {
            gizmo.Filter(points,"Array");

            gizmo.Filter(points[0],"Array");
            gizmo.Filter(points[0][0],"Number");
            gizmo.Filter(points[0][1],"Number");
            gizmo.Filter(points[0][2],"Number");

            gizmo.Filter(visualProperties,"Object");

            // Метод не реализован
            console.log("Virtual method Update");

            return this;
        }

        return me;

    }

    ArmContext.GlobalRepresentation = GlobalRepresentation;
})();

