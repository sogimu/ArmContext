(function(window) {
    var GlobalRepresentation = function() {

        var me = {};

        me._points = new $M( [
            [0,0,0]
        ] );

        me.GetPoints = function() {
            return this._points.elements;
        };

        me.SetPoints = function(O) {
            gizmo.Filter(O,"Array");
            this._points.elements = O;
        };

        me.GetMatrixOfPoints = function() {
            return this._points;
        };
        
        me.SetMatrixOfPoints = function(O) {
            gizmo.Filter(O,"Object");
            return this._points = O;
        };

        me.Update = function(internalRepresentation, C2dContextRepresentation, mvMatrix) {
            gizmo.Filter(internalRepresentation,"Object");
            gizmo.Filter(C2dContextRepresentation,"Object");
            gizmo.Filter(mvMatrix,"Object");

            this.SetPoints( internalRepresentation.GetPoints() );
            this.SetMatrixOfPoints( this.GetMatrixOfPoints().x(mvMatrix.GetMatrix().transpose()) );

            // Метод не реализован
            //console.log("Virtual method Update");

            return this;
        };

        me.ShowDebugInfo = function(ctx) {
            var points = this.GetPoints();

            console.log("Points of global representation");
            for(var i in points) {
                console.log(points[i]);

            }
        };

        me.ShowPoints = function(ctx) {
            var points = this.GetPoints();

            for(var i in points) {      
                CTX.save();
                    CTX.beginPath();        
                        CTX.fillStyle = "#00ff00";
                        CTX.rect(points[i][0]-2,points[i][1]-2,4,4);
                        CTX.stroke();
                        CTX.fill();
                    CTX.closePath();
                CTX.restore();

            }  
        };


        return me;

    }

    ArmContext.GlobalRepresentation = GlobalRepresentation;
})();

