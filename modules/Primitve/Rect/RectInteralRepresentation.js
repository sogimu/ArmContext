(function(window) {
    var RectInteralRepresentation = function(O) {

        gizmo.Filter(O,"Object");

        var me = new ArmContext.InteralRepresentation({});

        //gizmo.Filter(O.points, "Array");

        me._points = new $M([[0]]);

        me.GetMatrixPoints = function() {
            return this._points;
        }

        return me;
    }

    ArmContext.RectInteralRepresentation = RectInteralRepresentation;
})();
