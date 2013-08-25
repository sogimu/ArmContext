/**
 * Описывает класс содержащий матрицу преобразования примитива.
 *
 * @this {ArmContext.MvMatrix}
 * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
 * @version 0.1
 */

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
                    [a,c,e],
                    [b,d,f],
                    [0,0,1]
            ]);

            // a,b,0
            // c,d,0
            // e,f,0

            var rotateMatrix = new $M([
                    [a,b,0], // -b
                    [-b,a,0], // b
                    [0,0,1]
            ]);

            this._matrix = this._matrix.x(rotateMatrix);

            //this._matrix = this._matrix.x(transformMatrix);

            return this;
        };

        me.Scale = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            var x = O.x;
            var y = O.y;

            var transformMatrix = new $M([
                [x,0,0], //x,0,0
                [0,y,0], //0,y,0
                [0,0,1]
            ]);

            this._matrix = this._matrix.x(transformMatrix);

            return this;
        };

        me.TranslateTo = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            var x = O.x;
            var y = O.y;

            var transformMatrix = new $M([
                [1,0,0], // 1,0,x
                [0,1,0], // 0,1,y
                [x,y,1]
            ]);

            this._matrix = this._matrix.x(transformMatrix);

            return this;
 
        };

        me.GetMatrix = function() {
            return this._matrix;
        };

        me.GetTransformParams = function() {
                var matrix = this.GetMatrix();

                // var a = matrix.elements[0][0];
                // var b = matrix.elements[1][0];
                // var c = matrix.elements[0][1];
                // var d = matrix.elements[1][1];
                // var e = matrix.elements[0][2];
                // var f = matrix.elements[1][2];

                var a = matrix.elements[0][0];
                var b = matrix.elements[0][1];
                var c = matrix.elements[1][0];
                var d = matrix.elements[1][1];
                var e = matrix.elements[2][0];
                var f = matrix.elements[2][1];

                return {a: a, b: b, c: c, d: d, e: e, f: f};

        };

        me.ShowDebugInfo = function(ctx) {
            var matrix = this.GetMatrix();
            console.log("mvMatrix:");
            console.log(matrix.elements[0]);
            console.log(matrix.elements[1]);
            console.log(matrix.elements[2]);

        };

        return me;
    }

    ArmContext.MvMatrix = MvMatrix;
})();
