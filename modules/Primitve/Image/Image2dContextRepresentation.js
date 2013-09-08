(function(window) {
    var Image2dContextRepresentation = function() {

        var me = ArmContext.C2dContextRepresentation();

        me.parentUpdate = me.Update ? me.Update : null;

        // View properties
        me._fillObject = "#ff0000";
        me._strokeObject = "#000000";
        me._lineWidth = 10;

        me._image = null;

        me.GetFillObject = function() {
            return this._fillObject;
        };

        me.GetStrokeObject = function() {
            return this._strokeObject;
        };

        me.GetLineWidth = function() {
            return this._lineWidth;
        };

        me.GetImage = function() {
            return this._image;
        };

        me.Update = function(O) {
            if(this.parentUpdate) {    this.parentUpdate( O );    };

            this._fillObject = O.fillObject || this._fillObject;
            this._strokeObject = O.strokeObject || this._strokeObject;
            this._lineWidth    = O.lineWidth || this._lineWidth;
            this._image = O.image || this._image;             
        };

        return me;
    };

    ArmContext.Image2dContextRepresentation = Image2dContextRepresentation;
})();