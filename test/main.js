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

    X=150;
    Y=150;

    A = new ArmContext.Rect({ctx: CTX, width : 50, height: 50});
    console.log(A);

    //A.Scale({x: 1.5, y:0.95});
    A.TranslateTo({x:x, y:y});
    
    setInterval(function() {

        A.Rotate({gradAngle: 3, point: {x:X, y:Y}});
        
        CTX.clearRect(0,0,500,500);
        A.Draw();
        
        CTX.save();
            CTX.beginPath();        
                CTX.rect(x,y,5,5);
                CTX.stroke();
                CTX.fill();
            CTX.closePath();
        CTX.restore();

        CTX.save();

            CTX.beginPath();        
                CTX.fillStyle = "#00ff00";
                CTX.rect(X,Y,5,5);
                CTX.stroke();
                CTX.fill();
            CTX.closePath();
        CTX.restore();
            
    }, 16);

};