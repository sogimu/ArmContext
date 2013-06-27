/**
 * Описывает виртуальный класс Primitive.
 *
 * @constructor
 * @this {ArmContext.Primitie}
 * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
 * @version 0.1
 */

(function(window) {
    var Primitie = function() {

        var me = {};

        me._interalRepresentation = null;
        me._2dContextRepresentation = null;
        me._globalRepresentation = null;

        me.TranslateTo = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            this._interalRepresentation.TranslateTo( O );
            this._2dContextRepresentation.Update( this._interalRepresentation );
            this._globalRepresentation.Update( this._2dContextRepresentation );

            return this;
        };

        me.Rotate = function(O) {
            gizmo.Filter(O.gradAngle || O.radAngle,"Number");
            gizmo.Filter(O.point,"Object");
            gizmo.Filter(O.point.x,"Number");
            gizmo.Filter(O.point.y,"Number");

            this._interalRepresentation.Rotate( O );
            this._2dContextRepresentation.Update( this._interalRepresentation );
            this._globalRepresentation.Update( this._2dContextRepresentation );

            return this;
        };

        me.Scale = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            this._interalRepresentation.Scale( O );
            this._2dContextRepresentation.Update( this._interalRepresentation.GetPoints() );
            this._globalRepresentation.Update( this._2dContextRepresentation );

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
            console.log("Virtual method Has Point");

            return this;
        };

        return me;

    }

    window.ArmContext.Primitie = Primitie;

})(window);