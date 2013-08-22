(function(window) {
    var RectGlobalRepresentation = function() {

        var me = ArmContext.GlobalRepresentation();

        // me.Update = function(points, visualProperties, mvMatrix) {
        //     gizmo.Filter(points,"Object");
        //     gizmo.Filter(visualProperties,"Object");
        //     gizmo.Filter(mvMatrix,"Object");

        //     // Метод не реализован
        //     console.log("Virtual method Update of RectGlobalRepresentation");

        //     return this;
        // }

        return me;

    }

    ArmContext.RectGlobalRepresentation = RectGlobalRepresentation;
})();

