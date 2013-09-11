(function(window) {
    var Image2dContextRepresentation = function() {

        var me = ArmContext.C2dContextRepresentation();

        me.parentUpdate = me.Update ? me.Update : null;

        // View properties

        me._image = null;

        me.GetImage = function() {
            return this._image;
        };

        me.Update = function(O) {
            if(this.parentUpdate) {    this.parentUpdate( O );    };
            
            this._image = O.image || this._image;             
        };

        return me;
    };

    ArmContext.Image2dContextRepresentation = Image2dContextRepresentation;
})();