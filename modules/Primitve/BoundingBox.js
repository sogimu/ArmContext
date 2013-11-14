/**
 * Описывает виртуальный класс BoundingBox.
 *
 * @this {ArmContext.BoundingBox}
 * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
 * @version 0.1
 */

(function(window) {
    var BoundingBox = function(O) {
        var me = {};

        me._rect = [{point0: new gizmo.Math.Point2D(0,0),
                    point1: new gizmo.Math.Point2D(0,0),
                    point2: new gizmo.Math.Point2D(0,0),
                    point3: new gizmo.Math.Point2D(0,0),
                    width: 0,
                    height: 0},
                    {point0: new gizmo.Math.Point2D(0,0),
                    point1: new gizmo.Math.Point2D(0,0),
                    point2: new gizmo.Math.Point2D(0,0),
                    point3: new gizmo.Math.Point2D(0,0),
                    width: 0,
                    height: 0}];

        me.SetRect = function(points) {            
            gizmo.Filter(points, "Object");
            gizmo.Filter(points.point0, "Object");
            gizmo.Filter(points.point1, "Object");

            var rect = {point0: points.point0,
                        point1: points.point1,
                        point2: {x: points.point1.x, y: points.point0.y},
                        point3: {x: points.point0.x, y: points.point1.y},
                        width: points.point1.x - points.point0.x,
                        height: points.point1.y - points.point0.y};
            
            this._rect[0] = rect;
            this._rect[1] = rect;

        };

        me.GetNewPoints = function() {
            return this._rect[0];
        };

        me.GetOldPoints = function() {
            return this._rect[1];
        };

        me.IntersectWith = function(BoundingBox) {
            var firstPoints = this.GetOldPoints();
            var secondPoints = BoundingBox.GetOldPoints();

            if(secondPoints.point0.x > firstPoints.point1.x) {return false};
            if(secondPoints.point1.x < firstPoints.point0.x) {return false};
            if(secondPoints.point0.y > firstPoints.point3.y) {return false};
            if(secondPoints.point3.y < firstPoints.point0.x) {return false};

            return true;
        };

        me.SumWith = function(BoundingBox) {
            var localOldPoints = this.GetOldPoints();
            var oldPoints = BoundingBox.GetOldPoints();

            var minX = localOldPoints.point0.x;
            var minY = localOldPoints.point0.y;
            var maxX = localOldPoints.point2.x;
            var maxY = localOldPoints.point2.y;

            minX = Math.min(localOldPoints.point0.x, localOldPoints.point1.x, localOldPoints.point2.x, localOldPoints.point3.x, oldPoints.point0.x, oldPoints.point1.x, oldPoints.point2.x, oldPoints.point3.x);
            minY = Math.min(localOldPoints.point0.y, localOldPoints.point1.y, localOldPoints.point2.y, localOldPoints.point3.y, oldPoints.point0.y, oldPoints.point1.y, oldPoints.point2.y, oldPoints.point3.y);

            maxX = Math.max(localOldPoints.point0.x, localOldPoints.point1.x, localOldPoints.point2.x, localOldPoints.point3.x, oldPoints.point0.x, oldPoints.point1.x, oldPoints.point2.x, oldPoints.point3.x);
            maxY = Math.max(localOldPoints.point0.y, localOldPoints.point1.y, localOldPoints.point2.y, localOldPoints.point3.y, oldPoints.point0.y, oldPoints.point1.y, oldPoints.point2.y, oldPoints.point3.y);

            return new ArmContext.BoundingBox({points: {point0: {x: minX, y: minY}, point1: {x: maxX, y: maxY}}});

        };

        me.ShowPoints = function(ctx) {
            var points = this.GetOldPoints();

            ctx.save();
            ctx.fillStyle = "#ff0000";
            ctx.strokeStyle = "#ffff00";
            
            ctx.beginPath();

            ctx.moveTo(points["point0"].x,points["point0"].y);
                
            for(var i in points) {
                ctx.lineTo(points[i].x,points[i].y);
                ctx.rect(points[i].x-2,points[i].y-2,4,4);
                
            }

            ctx.lineTo(points["point0"].x,points["point0"].y);

            ctx.closePath();
            ctx.stroke();
            ctx.fill();

            points = this.GetNewPoints();

            ctx.fillStyle = "#0000ff";            
            ctx.beginPath();        

            ctx.moveTo(points["point0"].x,points["point0"].y);
            
            for(var i in points) {      
                ctx.lineTo(points[i].x,points[i].y);
                ctx.rect(points[i].x-2,points[i].y-2,4,4);
                
            };
            ctx.lineTo(points["point0"].x,points["point0"].y);

            ctx.closePath();

            ctx.stroke();
            ctx.fill();

            ctx.restore();

        };

        me.Update = function(globalRepresentation) {
            var points = globalRepresentation.GetPoints();
            var minX = points[0][0];
            var minY = points[0][1];
            var maxX = points[0][0];
            var maxY = points[0][1];

            for(var pointName in points) {
                var point = points[pointName];
                minX = Math.min(point[0], minX);
                minY = Math.min(point[1], minY);

                maxX = Math.max(point[0], maxX);
                maxY = Math.max(point[1], maxY);
            };
            
            var rect = {point0: {x: minX, y: minY},
                        point1: {x: maxX, y: minY},
                        point2: {x: maxX, y: maxY},
                        point3: {x: minX, y: maxY},
                        width: maxX - minX,
                        height: maxY - minY};

            this._rect.reverse();

            this._rect[0] = rect;
            // console.log("BoundingBox.Update");
        };

        me.Set = function( O ) {
            for(var name in O) {
                switch( name ) {
                    case "points" : {
                        this.SetRect(O[name])
                    }; break;

                };
            };

        };

        me.Set( O || {} );

        return me;

    };

    window.ArmContext.BoundingBox = BoundingBox;

})(window);