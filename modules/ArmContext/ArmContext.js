/**
 * @classdesc
 * Описывает описывает пространство имен ArmContext.
 * 
 * @class ArmContext
 * @this {ArmContext}
 * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
 * @version 0.1
 *
 */

(function(window) {
    var ArmContext = function() {

        var me = {};

        me._lastUnicalNumber = 0;

        me.GetNewUnicalNumber = function() {
        	this._lastUnicalNumber+=1;
        	return this._lastUnicalNumber;
        };

        return me;

    };

    window.ArmContext = ArmContext();

})(window);