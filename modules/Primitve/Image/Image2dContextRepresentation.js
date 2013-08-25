(function(window) {
    var Image2dContextRepresentation = function(O) {

        gizmo.Filter(O,"Object");

        var me = ArmContext.C2dContextRepresentation( O );

        // ViewProperties
        me._src = null;
        me._image = null;
        me._isLoaded = false;
        //me._boundingBox = {};
        //me._pictureUnderPrimitive = {};

        me._ctx = O.ctx || null;
        me._src = O.src || null;
        me._image = O.image || null;

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

        me.Load(me._src);

        return me;
    };

    ArmContext.Image2dContextRepresentation = Image2dContextRepresentation;
})();