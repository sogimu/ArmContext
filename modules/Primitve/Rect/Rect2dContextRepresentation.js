(function(window) {
    var Rect2dContextRepresentation = function(O) {

        gizmo.Filter(O,"Object");

        var me = ArmContext.C2dContextRepresentation( O );
        
        // View properties
        me._fillObject = "#ff0000";
        me._strokeObject = "#000000";
        me._lineWidth = 1;

        me.GetFillObject = function() {
            return this._fillObject;
        };

        me.GetStrokeObject = function() {
            return this._strokeObject;
        };

        me.GetLineWidth = function() {
            return this._lineWidth;
        };

        me.Set = function(O) {
            me._fillObject = O.fillObject || me._fillObject;
            me._strokeObject = O.strokeObject || me._strokeObject;
            me._lineWidth    = O.lineWidth || me._lineWidth;
             
        };

        me.Set( O );

        return me;
    };

    ArmContext.Rect2dContextRepresentation = Rect2dContextRepresentation;
})();
