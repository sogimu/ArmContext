(function(window) {
    var Rect2dContextRepresentation = function(O) {

        gizmo.Filter(O,"Object");

        var me = ArmContext.C2dContextRepresentation( O );
        
        // View properties
        me._fillObject = "default";
        me._strokeObject = "default";
        me._widthLine = 1;

        me.Update = function(O) {
            me._fillObject = O.fillObject || me._fillObject;
            me._strokeObject = O.strokeObject || me._strokeObject;
            me._widthLine = O.widthLine || me._widthLine;
             
        };

        me.Update( O );

        return me;
    };

    ArmContext.Rect2dContextRepresentation = Rect2dContextRepresentation;
})();
