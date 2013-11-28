/**
 * @classdesc
 * Описывает класс Image. Данный класс описывает объект "изображение".
 *
 * @class Image
 * @param {object} O
 * @param {string} O.ctx           Объект графического контекста
 * @param {number} O.x             X
 * @param {number} O.y             Y
 * @param {number} O.width         Ширина изображения
 * @param {number} O.height        Высота изображения
 * @param {string} O.fillObject    Определяет внешний вид заливки, может быть как цветом ("#FFaa00"), так и градиентом
 * @param {string} O.strokeObject  Определяет внешний вид линий, может быть как цветом ("#FFaa00"), так и градиентом
 * @param {number} O.globalAlpha   Уровень прозрачности, можно изменять от 0..1
 * @param {number} O.lineWidth     толщина контура
 * @this {ArmContext.Image}
 * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
 * @version 0.1
 *
 * @requires ArmContext/ArmContext.js
 * @requires Primitive/Primitive.js
 * @requires Primitive/Image/ImageGlobalRepresentation.js
 * @requires Primitive/Image/ImageInternalRepresentation.js
 * @requires Primitive/Image/ImageViewRepresentation.js
 */

(function(window) {
    var Image = function( O ) {

        gizmo.Filter(O,"Object");

        var me = ArmContext.Primitive();

        // Инициализация внутреннего представления
        me._internalRepresentation = ArmContext.ImageInternalRepresentation();

        // Инициализация canvas представления
        me._2dContextRepresentation = ArmContext.Image2dContextRepresentation(me);

        // Инициализация глобального представления примитива
        me._globalRepresentation = ArmContext.ImageGlobalRepresentation();

        /**
        * Метод для прорисовки примитива
        *
        * @method Image.Draw
        * @this {ArmContext.Image}
        * @param {Layer} layer объект класса Layer
        */
        me.Draw = function() {
            var ctxRep = this._2dContextRepresentation;
            var intRep = this._internalRepresentation;
            var ctx = ctxRep._ctx;
            ctx.save();
                params = this._mvMatrix.GetTransformParams();
                ctx.setTransform(params.a, params.b, params.c, params.d, params.e, params.f);
                ctx.drawImage(ctxRep.GetImage(), 0,0, intRep.GetWidth(), intRep.GetHeight());
            ctx.restore();
        };

        /**
        * Метод для удаления изображения примитива с экрана
        *
        * @method Image.Clear
        * @this {ArmContext.Image}
        * @param {Layer} layer объект класса Layer
        */
        me.Clear = function() {
            var ctxRep = this._viewRepresentation;
            var intRep = this._internalRepresentation;
            var ctx = layer.GetCtx();

            var boundingBox = this._boundingBox.GetOldPoints();
            if(this._viewRepresentation.IsRounding()) {
            // console.log(Math.round(boundingBox.point0.x),Math.round(boundingBox.point0.y),Math.round(boundingBox.width),Math.round(boundingBox.height))
            // console.log(boundingBox.point0.x,boundingBox.point0.y,boundingBox.width,boundingBox.height)
                ctx.clearRect(Math.round(boundingBox.point0.x),Math.round(boundingBox.point0.y),Math.round(boundingBox.width),Math.round(boundingBox.height));

            } else {
                ctx.clearRect(boundingBox.point0.x,boundingBox.point0.y,boundingBox.width,boundingBox.height);

            }

        };

        me.Set( O );
        me.Update();
                
        return me;

    };

    window.ArmContext.Image = Image;

})(window);