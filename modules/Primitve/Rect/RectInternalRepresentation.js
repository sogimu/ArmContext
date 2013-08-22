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
            this.UpdatePoints({x:this._x, y: this._y, width: this._width, height: this._height});
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

        me.GetMatrixPoints = function() {
            return this._points;
        };

        me.SetX = function(O) {
            gizmo.Filter(O, "Number");
            this._x = O;
            this.UpdatePoints({x:this._x, y: this._y, width: this._width, height: this._height});
        };

        me.GetX = function() {
            //return this._points.elements[0][0];
            return this._x;
        };

        me.SetY = function(O) {
            gizmo.Filter(O, "Number");
            this._y = O;
            this.UpdatePoints({x:this._x, y: this._y, width: this._width, height: this._height});
        };

        me.GetY = function() {
            return this._y;
        };

        me.UpdatePoints = function(O) {
            me._points = new $M( [
            [O.x,O.y,1],
            [O.x+O.width,O.y,1],
            [O.x+O.width,O.y+O.height,1],
            [O.x,O.y+O.height,1]
        ] );
        };

        me.TranslateTo = function(O) {
            gizmo.Filter(O,"Object");
            gizmo.Filter(O.x,"Number");
            gizmo.Filter(O.y,"Number");

            // var points = this._points.elements;
            // var p0x = O.x;
            // var p0y = O.y;
            // var p1x = ( points[1][0] - points[0][0] ) + O.x;
            // var p1y = ( points[1][1] - points[0][1] ) + O.y;
            // var p2x = ( points[2][0] - points[0][0] ) + O.x;
            // var p2y = ( points[2][1] - points[0][1] ) + O.y;
            // var p3x = ( points[3][0] - points[0][0] ) + O.x;
            // var p3y = ( points[3][1] - points[0][1] ) + O.y;

            // this._points.elements[0][0] = p0x;
            // this._points.elements[0][1] = p0y;
            // this._points.elements[1][0] = p1x;
            // this._points.elements[1][1] = p1y;
            // this._points.elements[2][0] = p2x;
            // this._points.elements[2][1] = p2y;
            // this._points.elements[3][0] = p3x;
            // this._points.elements[3][1] = p3y;

            this.SetX(O.x);
            this.SetY(O.y);

            return this;
        };


        me.UpdatePoints({x:this._x, y: this._y, width: this._width, height: this._height});

        return me;
    }

    ArmContext.RectInternalRepresentation = RectInternalRepresentation;
})();
