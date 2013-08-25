/**
 * Описывает виртуальный класс Primitive. Методы и свойства общие для примитивов.
 *
 * @this {ArmContext.Primitie}
 * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
 * @version 0.1
 */

(function(window) {
    var Primitie = function() {
        var me = {};

        me._internalRepresentation = null;
        me._2dContextRepresentation = null;
        me._globalRepresentation = null;
        me._mvMatrix = null;
        me._debug = ArmContext.Debug(me);

        me.TranslateTo = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            var gX = this._globalRepresentation.GetX();
            var gY = this._globalRepresentation.GetY();

            var dX = O.x - gX;
            var dY = O.y - gY;

            this._mvMatrix.Translate( dX, dY );
            this._globalRepresentation.Update( this._internalRepresentation, this._2dContextRepresentation, this._mvMatrix);

            return this;
        };

        me.Rotate = function(O) {
            gizmo.Filter(O.gradAngle || O.radAngle,"Number");
            gizmo.Filter(O.point,"Object");
            gizmo.Filter(O.point.x,"Number");
            gizmo.Filter(O.point.y,"Number");

            var radAngle = O.radAngle || ( (O.gradAngle > 360 ? O.gradAngle % 360:O.gradAngle) / 180 * Math.PI);

            this._mvMatrix.Translate( -O.point.x, -O.point.y );
            this._mvMatrix.Rotate( radAngle );
            this._mvMatrix.Translate( O.point.x, O.point.y );
            
            this._globalRepresentation.Update( this._internalRepresentation, this._2dContextRepresentation, this._mvMatrix);

            return this;
        };

        me.Scale = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            var gX = this._globalRepresentation.GetX();
            var gY = this._globalRepresentation.GetY();

            var dX = gX - (gX * O.x);
            var dY = gY - (gY * O.y);

            this._mvMatrix.Scale( O.x, O.y );
            this._mvMatrix.Translate( dX, dY );

            this._globalRepresentation.Update( this._internalRepresentation, this._2dContextRepresentation, this._mvMatrix);

            return this;
        };

        me.Draw = function() {
            console.log("Virtual method Draw");

            return this;
        };

        me.Clear = function() {
            console.log("Virtual method Clear");

            return this;
        };

        me.HasPoint = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            // Метод не реализован
            //console.log("Virtual method Has Point");

            return this._globalRepresentation.HasPoint(O.x, O.y);
        };

        return me;

    }

    window.ArmContext.Primitie = Primitie;

})(window);