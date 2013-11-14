/**
 * Описывает виртуальный класс Primitive. Методы и свойства общие для примитивов.
 *
 * @this {ArmContext.Primitie}
 * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
 * @version 0.1
 */

(function(window) {
    var Primitive = function() {
        var me = {};

        me._internalRepresentation = null;
        me._viewRepresentation = null;
        me._globalRepresentation = null;
        me._mvMatrix = ArmContext.MvMatrix(me);
        me._debug = ArmContext.Debug(me);
        me._boundingBox = ArmContext.BoundingBox();

        me.TranslateTo = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            var gX = this._globalRepresentation.GetX();
            var gY = this._globalRepresentation.GetY();

            var dX = O.x - gX;
            var dY = O.y - gY;

            this._mvMatrix.Translate( dX, dY );

            this.Update();

            return this;
        };

        me.Translate = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            this._mvMatrix.Translate( O.x, O.y );

            this.Update();
            
            return this;
        };

        me.Rotate = function(O) {
            gizmo.Filter(O.gradAngle || O.radAngle,"Number");

            var radAngle = O.radAngle || ( (O.gradAngle > 360 ? O.gradAngle % 360:O.gradAngle) / 180 * Math.PI);

            this._mvMatrix.Rotate( radAngle );
            
            this.Update();

            return this;
        };

        me.RotateAt = function(O) {
            gizmo.Filter(O.gradAngle || O.radAngle,"Number");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            var radAngle = O.radAngle || ( (O.gradAngle > 360 ? O.gradAngle % 360:O.gradAngle) / 180 * Math.PI);

            this._mvMatrix.Translate( -O.x, -O.y );
            this._mvMatrix.Rotate( radAngle );
            this._mvMatrix.Translate( O.x, O.y );
            
            this.Update();

            return this;
        };

        me.Scale = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            this._mvMatrix.Scale( O.x, O.y );

            this.Update();

            return this;
        };

        me.ScaleAt = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.scaleX,"Number");
            gizmo.Filter(O.scaleY,"Number");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            var dX = O.x - (O.x * O.scaleX);
            var dY = O.y - (O.y * O.scaleY);

            this._mvMatrix.Scale( O.scaleX, O.scaleY );
            this._mvMatrix.Translate( O.x, O.y );

            this.Update();

            return this;
        };

        me.Scos = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            this._mvMatrix.Scos( O.x, O.y );

            this.Update();

            return this;
        };

        me.Draw = function(layer) {
            /*
            Should using layer->GetCtx() for geting 2d-context and draw with it
            Check this._viewRepresentation.IsRounding() for rounding coordinats, this will speed up drawing
            */

            console.log("Virtual method Draw");

            return this;
        };

        me.Clear = function(layer) {
            /*
            Should using layer->GetCtx() for geting 2d-context and drawing with it
            */
            console.log("Virtual method Clear");

            return this;
        };

        me.HasPoint = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            return this._globalRepresentation.HasPoint(O.x, O.y);
        };

        me.GetBoundingBox = function() {
            return this._boundingBox;
        };

        me.BoundingBoxHaveIntersectionWith = function(primitive) {
            return this._boundingBox.IntersectWith( primitive.GetBoundingBox() );
        };

        me.Update = function(O) {
            this._globalRepresentation.Update( this._internalRepresentation, this._viewRepresentation, this._mvMatrix);
            this._boundingBox.Update( this._globalRepresentation );
        };

        me.Set = function(O) {
            this._internalRepresentation.Set( O );
            this._viewRepresentation.Set( O );
            
        };

        return me;

    };

    window.ArmContext.Primitive = Primitive;

})(window);