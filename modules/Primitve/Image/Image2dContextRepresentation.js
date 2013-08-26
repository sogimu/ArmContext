(function(window) {
    var Image2dContextRepresentation = function(O) {

        gizmo.Filter(O,"Object");

        var me = ArmContext.C2dContextRepresentation( O );
        // View properties
        me._fillObject = "#ff0000";
        me._strokeObject = "#000000";
        me._lineWidth = 10;

        me._src = null;
        me._image = null;
        me._isLoaded = false;

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

        me.IsLoaded = function() {
            return this._isLoaded;
        };

        me.Load = function(src) {
            gizmo.Filter(src,"String");
            this._image = new Image();
            this._image.src = src;
            var self = this;
            this._image.onload = function() {
                    self.SetLoaded();
                    //self.__onLoad.call(self);
            };
            return this;
        };

        me.SetLoaded = function() {
            this._isLoaded = true;
            console.log("Loaded");
        };

        me.Set = function(O) {
            this._fillObject = O.fillObject || this._fillObject;
            this._strokeObject = O.strokeObject || this._strokeObject;
            this._lineWidth    = O.lineWidth || this._lineWidth;
            this._src = O.src || this._src;
            this._image = O.image || this._image;             
        };

        me.Set( O );
        me.Load(me._src);

        return me;
    };

    ArmContext.Image2dContextRepresentation = Image2dContextRepresentation;
})();