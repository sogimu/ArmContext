(function(window) {
    var TransformList = function() {
        me = {};
        me._transformList = [];

        me.AddTransform = function(O) {
            this._transformList.push(O);
            return this;
        };

        me.RemoveTransform = function(O) {
            var index = -1;
            if((index = this._transformList.indexOf(O) )!= -1) {
                delete this._transformList[index];
                return true;
            }
            return false;
        };

        me.GetTransformList = function() {
            return this._transformList;
        };

        return me;
    }

    ArmContext.TransformList = TransformList;
})();
