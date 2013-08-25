(function(window) {
    var RectInternalRepresentation = function(O) {

        gizmo.Filter(O,"Object");

        var me = new ArmContext.InternalRepresentation({});

        var X = O.x || 0;
        var Y = O.y || 0;
        var Width = O.width || 10;
        var Height = O.height || 10;

        me._x = X;
        me._y = Y;
        me._width = Width;
        me._height = Height;

        me._points = new $M([[me._x,me._y,1],[me._x+me._width,me._y,1],[me._x+me._width,me._y+me._height,1],[me._x,me._y+me._height,1]]);

        me.GetWidth = function() {
            //return this._points.elements[1][0];
            return this._width;
        };
        
        me.SetWidth = function(O) {
            gizmo.Filter(O, "Number");
            this._width = O;
            this.UpdatePoints({ x: this.GetX(), y: this.GetY(), width: this.GetWidth(), height: this.GetHeight() });
        };

        me.GetHeight = function() {
            //return this._points.elements[2][1];
            return this._height;
        };
        
        me.SetHeight = function(O) {
            gizmo.Filter(O, "Number");
            this._height = O;
            this.UpdatePoints({x:this._x, y: this._y, width: this._width, height: this._height});
        };

        me.GetX = function() {
            //return this._points.elements[0][0];
            return this._x;
        };

        me.SetX = function(O) {
            gizmo.Filter(O, "Number");
            this._x = O;
            this.UpdatePoints({ x: this.GetX(), y: this.GetY(), width: this.GetWidth(), height: this.GetHeight() });
        };

        me.GetY = function() {
            return this._y;
        };

        me.SetY = function(O) {
            gizmo.Filter(O, "Number");
            this._y = O;
            this.UpdatePoints({x:this._x, y: this._y, width: this._width, height: this._height});
        };

        me.GetPointsOfMatrix = function() {
            return this._points;
        };

        me.SetPointsOfMatrix = function(O) {
            gizmo.Filter(O, "Array");
            return this._points;
        };

        me.UpdatePoints = function(O) {
            me._points = new $M( [
            [O.x,O.y,1],
            [O.x+O.width,O.y,1],
            [O.x+O.width,O.y+O.height,1],
            [O.x,O.y+O.height,1]
        ] );
        };

        me.UpdatePoints({ x: me.GetX(), y: me.GetY(), width: me.GetWidth(), height: me.GetHeight() });

        return me;
    }

    ArmContext.RectInternalRepresentation = RectInternalRepresentation;
})();
