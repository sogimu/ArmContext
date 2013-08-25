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

        var me = ArmContext.Primitie();

        // Инициализация видовой матрицы
        me._mvMatrix = ArmContext.MvMatrix();

        // Инициализация внутреннего представления
        me._internalRepresentation = ArmContext.RectInternalRepresentation( O );

        // Инициализация canvas представления
        me._2dContextRepresentation = ArmContext.Rect2dContextRepresentation( O );

        // Инициализация глобального представления примитива
        me._globalRepresentation = ArmContext.RectGlobalRepresentation(me._internalRepresentation  , me._2dContextRepresentation, me._mvMatrix );

        me.Draw = function() {

            var ctxRep = this._2dContextRepresentation;
            var intRep = this._internalRepresentation;
            var ctx = ctxRep.GetCtx();

            ctx.save();
                ctx.beginPath();
                    params = this._mvMatrix.GetTransformParams();
                    ctx.setTransform(params.a, params.b, params.c, params.d, params.e, params.f);
                    ctx.rect(0,0, intRep.GetWidth(), intRep.GetHeight());
                ctx.closePath();
            ctx.stroke();
            ctx.fill();

            ctx.restore();

        };

        return me;

    };

    window.ArmContext.Rect = Rect;

})(window);