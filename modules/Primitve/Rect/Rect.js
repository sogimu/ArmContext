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

        // Инициализация внутреннего представления
        me._interalRepresentation = ArmContext.InteralRepresentation({
            points:
                [ [0                 ,0               ,1],
                  [(O.width || 10)   ,0               ,1],
                  [(O.width || 10)   ,(O.height || 10),1],
                  [0                 ,(O.height || 10),1] ]
        }).TranslateTo({x: (O.x || 0),y: (O.y || 0)});

        // Инициализация canvas представления
        me._2dContextRepresentation = ArmContext.C2dContextRepresentation({
                   ctx: (O.ctx || null),
            fillObject: (O.fillObject || "default"),
          strokeObject: (O.strokeObject || "default"),
           globalAlpha: (O.globalAlpha || 1),
             lineWidth: (O.lineWidth || 1)
        }).Update( me._interalRepresentation );

        // Инициализация глобального представления примитива
        me._globalRepresentation = ArmContext.GlobalRepresentation({

        }).Update( me._2dContextRepresentation );

        me.Draw = function() {
            var ctxRep = this._2dContextRepresentation;
            ctxRep._ctx.save();
            ctxRep._ctx.beginPath();

                ctxRep._ctx.translate(ctxRep._x, ctxRep._y);
                ctxRep._ctx.rotate(ctxRep._angle);
                ctxRep._ctx.translate(-ctxRep._x, -ctxRep._y);

                ctxRep._ctx.rect(ctxRep._x, ctxRep._y, ctxRep._width,ctxRep._height);

                ctxRep._ctx.stroke();
                ctxRep._ctx.fill();

            ctxRep._ctx.closePath();

            ctxRep._ctx.restore();

        }

        return me;

    }

    window.ArmContext.Rect = Rect;

})(window);