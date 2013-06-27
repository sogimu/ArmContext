window.onload = function() {

    var container = document.getElementById("container");

    var canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 500;
    canvas.id = "canvas";

    canvas.style.position = 'absolute';
    container.appendChild( canvas );
    CTX = canvas.getContext('2d');

    A = new ArmContext.Rect({ctx: CTX});
    console.log(A);
//
//    //A.Translate(50,50);
//
    X = 30;
    Y = 30;
//
    setInterval(function() {

//        var points = A._primitivePoints.elements;
//        var dX = X - points[0][0];
//        var dY = Y - points[0][1];
//
//        dist = Math.sqrt( dX * dX + dY * dY );

//        console.log( "dist", dist );
//        console.log( "angle", 180 / Math.PI * Math.atan( dY / dX ) );

        CTX.clearRect(0,0,500,500);

        A.Rotate({gradAngle: 1, point: {x: X, y: Y}});

        A.Draw();
        A._interalRepresentation.Show(A._2dContextRepresentation._ctx);

        CTX.rect(X,Y,1,1);
        CTX.stroke();


//        var points = A._interalRepresentation._points.elements;
//        var dX = X-points[0][0];
//        var dY = Y-points[0][1];
//
//        newDist = Math.sqrt(dX*dX+dY*dY);
//
//        newAngle = 180 / Math.PI * Math.atan(dY/dX);
//
//        console.log("newDist",newDist);
//        console.log("newAngle",newAngle);

    }, 5);

};