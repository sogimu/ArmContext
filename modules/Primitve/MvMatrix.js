(function(window) {
    var MvMatrix = function() {

        var me = {};

        me._matrix = new $M( [[1,0,0],
                              [0,1,0],
                              [0,0,1]] );

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

            this._matrix = this._matrix.x(transformMatrix);

            return this;
        };

        me.Scale = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            var x = O.x;
            var y = O.y;

            var transformMatrix = new $M([
                [x,0,0],
                [0,y,0],
                [0,0,1]
            ]);

            this._matrix = this._matrix.x(transformMatrix);

            return this;
        };

        me.TranslateTo = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

/*            var points = this._points.elements;
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
*/
            return this;
        };

        me.GetMatrix = function() {
            return this._matrix;
        };

        return me;
    }

    ArmContext.MvMatrix = MvMatrix;
})();
