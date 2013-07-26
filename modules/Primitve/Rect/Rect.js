/**
 * Описывает класс Rect. Данный класс описывает объект "прямоугольник".
 *
 * @constructor
 * @param {object} O
 * @param {string} O.ctx           Объект графического контекста
 * @param {number} O.x             X
 * @param {number} O.y             Y
 * @param {number} O.width         Ширина прямоугольника
 * @param {number} O.height        Высота прямоугольника
 * @param {string} O.fillObject    Определяет внешний вид заливки, может быть как цветом ("#FFaa00"), так и градиентом
 * @param {string} O.strokeObject  Определяет внешний вид линий, может быть как цветом ("#FFaa00"), так и градиентом
 * @param {number} O.globalAlpha   Уровень прозрачности, можно изменять от 0..1
 * @param {number} O.lineWidth     толщина контура
 * @this {ArmContext.Rect}
 * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
 * @version 0.1
 */

(function(window) {
    var Rect = function(O) {

        gizmo.Filter(O,"Object");

        var me = ArmContext.Primitie({});

        // Инициализация видовой матрицы

        me._mvMatrix = ArmContext.MvMatrix();

        // Инициализация внутреннего представления
        me._interalRepresentation = ArmContext.RectInteralRepresentation( O );

        // Инициализация canvas представления
        me._2dContextRepresentation = ArmContext.Rect2dContextRepresentation( O );

        // Инициализация глобального представления примитива
        me._globalRepresentation = ArmContext.RectGlobalRepresentation(me._interalRepresentation.GetMatrixPoints()  , me._2dContextRepresentation.GetVisualProperties(), me._mvMatrix.GetMatrix() );

        me.Draw = function() {
            /*this._2dContextRepresentation.UpdateGeometryProperties( this._interalRepresentation.GetPoints() );

            var ctxRep = this._2dContextRepresentation;
            ctxRep._ctx.save();

//            ctxRep._ctx.translate(ctxRep._x, ctxRep._y);
//            ctxRep._ctx.rotate(-ctxRep._angle);
//            ctxRep._ctx.translate(-ctxRep._x, -ctxRep._y);

            // Вытягиваем повернутый прямоугольник
            ctxRep._ctx.translate(ctxRep._x, ctxRep._y);
            ctxRep._ctx.scale(this._2dContextRepresentation._scale.x, this._2dContextRepresentation._scale.y);
            ctxRep._ctx.translate(-ctxRep._x, -ctxRep._y);

            // Рисуем повернутый прямоугольник
            //ctxRep._ctx.beginPath();
                ctxRep._ctx.translate(ctxRep._x, ctxRep._y);
                ctxRep._ctx.rotate(ctxRep._angle);
                ctxRep._ctx.translate(-ctxRep._x, -ctxRep._y);

                ctxRep._ctx.rect(ctxRep._x, ctxRep._y, 100,100);
            //ctxRep._ctx.closePath();


            ctxRep._ctx.stroke();
            ctxRep._ctx.fill();


            ctxRep._ctx.restore();*/

        }

        return me;

    }

    window.ArmContext.Rect = Rect;

})(window);