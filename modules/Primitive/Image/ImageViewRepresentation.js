/**
 * @classdesc
 * Описывает класс ImageViewRepresentation. Класс описывающий внешний вид примитива Image.
 * 
 * @class ImageViewRepresentation
 * @this {ArmContext.ImageViewRepresentation}
 * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
 * @version 0.1
 *
 * @requires ArmContext/ArmContext.js
 * @requires Primitive/ViewRepresentation.js
 */

(function(window) {
    var ImageViewRepresentation = function(primitive) {

        var me = ArmContext.ViewRepresentation(primitive);

        me.parentSet = me.Set ? me.Set : null;

        // View properties

        me._image = null;

        me.GetImage = function() {
            return this._image;
        };

        me.Set = function(O) {
            if(this.parentSet) {    this.parentSet( O );    };
            
            this._image = O.image || this._image;             
        };

        return me;
    };

    ArmContext.ImageViewRepresentation = ImageViewRepresentation;
})();