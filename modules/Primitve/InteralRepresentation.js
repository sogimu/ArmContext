(function(window) {
    var InteralRepresentation = function(O) {

        gizmo.Filter(O,"Object");

        var me = {};

        me.Rotate = function(O) {
            gizmo.Filter(O.gradAngle || O.radAngle,"Number");
            gizmo.Filter(O.point,"Object");
            gizmo.Filter(O.point.x,"Number");
            gizmo.Filter(O.point.y,"Number");

            return this;
        };

        me.Scale = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            return this;
        };

        me.TranslateTo = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            var points = this._points.elements;
            var p0x = O.x;
            var p0y = O.y;
            var p1x = ( points[1][0] - points[0][0] ) + O.x;
            var p1y = ( points[1][1] - points[0][1] ) + O.y;
            var p2x = ( points[2][0] - points[0][0] ) + O.x;
            var p2y = ( points[2][1] - points[0][1] ) + O.y;
            var p3x = ( points[3][0] - points[0][0] ) + O.x;
            var p3y = ( points[3][1] - points[0][1] ) + O.y;

            this._points.elements[0][0] = p0x;
            this._points.elements[0][1] = p0y;
            this._points.elements[1][0] = p1x;
            this._points.elements[1][1] = p1y;
            this._points.elements[2][0] = p2x;
            this._points.elements[2][1] = p2y;
            this._points.elements[3][0] = p3x;
            this._points.elements[3][1] = p3y;

            return this;
        };

        me.GetPoints = function() {
            return this._points.elements;
        }

        me.Show = function(ctx) {
            var radiusOfpoints = 5
            var points = this._points.elements;

            ctx.save();

            ctx.beginPath();

                for(var i in points) {
                    ctx.moveTo(points[i][0],points[i][1]);
                    ctx.arc(points[i][0],points[i][1], radiusOfpoints, 0, Math.PI*2, false);
                }

            ctx.closePath();

            ctx.strokeStyle = "green";
            ctx.fillStyle = "#00ffaa";
            ctx.stroke();
            ctx.fill();

            ctx.restore();

            return this;
        }

        return me;
    }

    ArmContext.InteralRepresentation = InteralRepresentation;
})();
