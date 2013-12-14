/**
 * @classdesc
 * Описывает виртуальный класс Primitive. Методы и свойства общие для примитивов.
 * 
 * @class Primitive
 * @this {ArmContext.Primitive}
 * @author Alexander Lizin sogimu@nxt.ru
 * @version 0.1
 *
 * @requires ArmContext/ArmContext.js
 * @requires Primitive/BoundingBox.js
 * @requires Primitive/Debug.js
 * @requires Primitive/GlobalRepresentation.js
 * @requires Primitive/InternalRepresentation.js
 * @requires Primitive/MvMatrix.js
 * @requires Primitive/ViewRepresentation.js
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
        /**
         * Метод для перемещения примитива в заданную точку
         *
         * @method Primitive.TranslateTo
         * @this {ArmContext.Primitive}
         * @param {object} 0
         * @param {number} O.x координата X
         * @param {number} O.y координата Y
         */
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

        /**
         * Метод для смещения примитива на заданное число пикселей по оси X и Y
         *
         * @method Primitive.Translate
         * @this {ArmContext.Primitive}
         * @param {object} 0
         * @param {number} O.x смещение по X
         * @param {number} O.y смещение по Y
         */
        me.Translate = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            this._mvMatrix.Translate( O.x, O.y );

            this.Update();
            

            return this;
        };

        /**
         * Метод для поворота примитива относительно верхнего левого угла
         *
         * @method Primitive.Rotate
         * @this {ArmContext.Primitive}
         * @param {object} 0
         * @param {number} O.gradAngle угол в градусах
         * @param {number} O.gradRad угол в радианах
         */
        me.Rotate = function(O) {
            gizmo.Filter(O.gradAngle || O.radAngle,"Number");

            var radAngle = O.radAngle || ( (O.gradAngle > 360 ? O.gradAngle % 360:O.gradAngle) / 180 * Math.PI);

            this._mvMatrix.Rotate( radAngle );
            
            this.Update();

            return this;
        };

        /**
         * Метод для поворота примитива относительно точки
         *
         * @method Primitive.RotateAt
         * @this {ArmContext.Primitive}
         * @param {object} 0
         * @param {number} O.x координата X
         * @param {number} O.y координата Y
         */
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

        /**
         * Метод для массштабирования примитива по осям X и Y
         *
         * @method Primitive.Scale
         * @this {ArmContext.Primitive}
         * @param {object} 0
         * @param {number} O.x массштаб по X
         * @param {number} O.y массштаб по Y
         */
        me.Scale = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            this._mvMatrix.Scale( O.x, O.y );

            this.Update();

            return this;
        };

        /**
         * Метод для массштабирования примитива по осям X и Y, но без изменения положения на экране относительно точки
         *
         * @method Primitive.ScaleAt
         * @this {ArmContext.Primitive}
         * @param {object} 0
         * @param {number} O.x массштаб по X
         * @param {number} O.y массштаб по Y
         * @param {number} O.x координата X
         * @param {number} O.y координата Y
         */
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

        /**
         * Метод для скоса примитива
         *
         * @method Primitive.Scos
         * @this {ArmContext.Primitive}
         * @param {object} 0
         * @param {number} O.x смещение по X
         * @param {number} O.y смещение по Y
         */
        me.Scos = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            this._mvMatrix.Scos( O.x, O.y );

            this.Update();

            return this;
        };

        /**
        * Метод для прорисовки примитива
        *
        * @method Primitive.Draw
        * @abstract
        * @this {ArmContext.Primitive}
        * @param {Layer} layer объект класса Layer
        */
        
        me.Draw = function(layer) {
            /*
            Should using layer->GetCtx() for geting 2d-context and draw with it
            Check this._viewRepresentation.IsRounding() for rounding coordinats, this will speed up drawing
            */

            console.log("Virtual method Draw");

            return this;
        };

        /**
        * Метод для удаления изображения примитива с экрана
        *
        * @method Primitive.Clear
        * @abstract
        * @this {ArmContext.Primitive}
        * @param {Layer} layer объект класса Layer
        */
        me.Clear = function(layer) {
            /*
            Should using layer->GetCtx() for geting 2d-context and drawing with it
            */
            console.log("Virtual method Clear");

            return this;
        };

        /**
        * Проверка принадлежности точки примитиву
        *
        * @method Primitive.HasPoint
        * @this {ArmContext.Primitive}
        * @param {object} 0
        * @param {number} O.x координата X
        * @param {number} O.y координата Y
        * @return {boolean}
        */
        me.HasPoint = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            return this._globalRepresentation.HasPoint(O.x, O.y);
        };

        /**
        * Получить объект класса BoundingBox, описывающий минимальный примоугольник вокруг примитива
        *
        * @method Primitive.GetBoundingBox
        * @this {ArmContext.Primitive}
        * @return {BoundingBox}
        */
        me.GetBoundingBox = function() {
            return this._boundingBox;
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