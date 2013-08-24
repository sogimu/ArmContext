window.onload = function() {

    var container = document.getElementById("container");

    var canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 500;
    canvas.id = "canvas";

    canvas.style.position = 'absolute';
    container.appendChild( canvas );
    CTX = canvas.getContext('2d');

    x=250;
    y=50;

    X=200;
    Y=100;

    Xf=200;
    Yf=100

    Xs=350;
    Ys=100;

    A = new ArmContext.Rect({ctx: CTX, width : 50, height: 50});
    console.log(A);

    A.TranslateTo({x:x, y:y});
    //A.Scale({x: 1, y:1});
    
    //A.Rotate({gradAngle: 15, point: {x:X, y:Y}});
    
    setInterval(function() {
        A.Rotate({gradAngle: 15, point: {x:X, y:Y}});
        //A.Scale({x: 0.99, y:1});
        
        //A.TranslateTo({x:x, y:y});
           
        //CTX.clearRect(0,0,500,500);
        A.Draw();
        
        CTX.save();
            CTX.beginPath();        
                CTX.arc(x,y, 3, 0, Math.PI*2, false);
                CTX.stroke();
                CTX.fill();
            CTX.closePath();
        CTX.restore();

        CTX.save();
            CTX.beginPath();        
                CTX.arc(X,Y, 3, 0, Math.PI*2, false);
                CTX.stroke();
                CTX.fill();
            CTX.closePath();
        CTX.restore();

        CTX.save();
            CTX.beginPath();        
                CTX.fillStyle = "#00ff00";
                CTX.arc(Xf,Yf, Math.sqrt((x-Xf)*(x-Xf)+(y-Yf)*(y-Yf)), 0, Math.PI*2, false);
                CTX.stroke();
                //CTX.fill();
            CTX.closePath();
        CTX.restore();

        CTX.save();
            CTX.beginPath();        
                CTX.fillStyle = "#0000ff";
                CTX.arc(Xs,Ys, Math.sqrt((x-Xs)*(x-Xs)+(y-Ys)*(y-Ys)), 0, Math.PI*2, false);
                CTX.stroke();
                //CTX.fill();
            CTX.closePath();
        CTX.restore();

        //A._debug.ShowDebugInfo(CTX);
         A._globalRepresentation.ShowPoints(CTX);
         A._internalRepresentation.ShowPoints(CTX);
                        
    }, 128);

};