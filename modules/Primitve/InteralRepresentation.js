(function(window) {
    var InteralRepresentation = function(O) {

        gizmo.Filter(O,"Object");

        var me = {};

        gizmo.Filter(O.points, "Array");

        me._points = new $M( O.points );

        me.Rotate = function(O) {
            gizmo.Filter(O.gradAngle || O.radAngle,"Number");
            gizmo.Filter(O.point,"Object");
            gizmo.Filter(O.point.x,"Number");
            gizmo.Filter(O.point.y,"Number");

            var radAngle = O.radAngle || ( (O.gradAngle > 360 ? O.gradAngle % 360:O.gradAngle) / 180 * Math.PI);

            var x = O.point.x;
            var y = O.point.y;

            var a = Math.cos(radAngle);
            var b = Math.sin(radAngle);
            var c = -b;
            var d = a;
            var e = (-x * (a-1)) + (y * b);
            var f = (-x * b) - (y * (a-1));

            var transformMatrix = new $M([
                [a,b,0],
                [c,d,0],
                [e,f,1]
            ]);

            this._points = this._points.x(transformMatrix);

            return this;
        }

        me.Scale = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            // Метод не реализован
            console.log("Virtual method Scale");

            return this;
        }

        me.TranslateTo = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            // Метод не реализован
            console.log("Virtual method TranslateTo");

            return this;
        }

        me.GetPoints = function() {
            return this._points.elements;
        }

        me.Show = function(ctx) {
            var points = this._points.elements;

            ctx.save();

            ctx.beginPath();

                for(var i in points) {
                    ctx.moveTo(points[i][0],points[i][1]);
                    ctx.arc(points[i][0],points[i][1], 1, 0, Math.PI*2, false);
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
