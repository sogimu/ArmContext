window.onload = function() {

    var container = document.getElementById("container");

    var canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 500;
    canvas.id = "canvas";

    canvas.style.position = 'absolute';
    container.appendChild( canvas );
    CTX = canvas.getContext('2d');

    A = new ArmContext.Rect({ctx: CTX, width: 100, height: 100});
    console.log(A);

    A.Rotate({gradAngle: 15, point: {x: 100, y: 100}});

    setInterval(function() {

        CTX.clearRect(0,0,500,500);

        A.Draw();

    }, 15);

};