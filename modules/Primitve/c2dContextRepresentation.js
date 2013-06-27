(function(window) {
    var C2dContextRepresentation = function(O) {

        gizmo.Filter(O,"Object");

        var me = {};

        me._ctx = O.ctx || null;
        me._x = O.x || 0;
        me._y = O.y || 0;
        me._width = O.width || 10;
        me._height = O.height || 10;
        me._angle = O.radAngle || (O.gradAngle || 0) * Math.PI/180;
        me._scale = O.scale || {x:1,y:1};
        me._fillObject = O.fillObject || "default";
        me._strokeObject = O.strokeObject || "default";
        me._boundingBox = {};
        me._pictureUnderPrimitive = {};

        me.Update = function(internalRepresentation) {
            gizmo.Filter(internalRepresentation,"Object");
            var points = internalRepresentation.GetPoints();
            gizmo.Filter(points[0],"Array");
            gizmo.Filter(points[0][0],"Number");
            gizmo.Filter(points[0][1],"Number");
            gizmo.Filter(points[0][2],"Number");

            function getRadAngle(center, point) {
                var x = point.x - center.x;
                var y = point.y - center.y;
                if(x==0) return (y>0) ? Math.PI : 0;
                var a = Math.atan(y/x);
                a = (x > 0) ? a+Math.PI/2 : a+Math.PI*3/2;
                return a;
            }

            var p0x = points[0][0];
            var p0y = points[0][1];

            var p1x = points[1][0];
            var p1y = points[1][1];

            var p3x = points[3][0];
            var p3y = points[3][1];

            var dX10 = p1x - p0x;
            var dY10 = p1y - p0y;

            var dX30 = p3x - p0x;
            var dY30 = p3y - p0y;

            var k = angleRad = dY10/dX10;

            this._angle = getRadAngle({x:p3x,y:p3y}, {x:p0x,y:p0y});
            this._x = p0x;
            this._y = p0y;

            this._width = Math.sqrt( dX10 * dX10 + dY10 * dY10 );
            this._height = Math.sqrt( dX30 * dX30 + dY30 * dY30 );

            return this;

        }

        return me;
    };

    ArmContext.C2dContextRepresentation = C2dContextRepresentation;
})();
