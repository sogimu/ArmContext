window.onload = function() {

    layer1 = ArmContext.Layer({width: 1300, height: 600, name: "layer1", container: "container"});
    
    loader = new ArmContext.Loader({
    image: {
        "gras": "img/gras.jpg", 
        "googlebot-kun-1b.png": "img/googlebot-kun-1b.png",
        "images (1).jpg": "img/images (1).jpg",
        "item.png": "img/item.png",
        "nosov_01.jpg": "img/nosov_01.jpg"
    }})
    .SetLisener("onLoadObject", function(object, progress) {
        console.log(object.name + " was loaded!");
        console.log("Progress: " + progress + "%");

        var img = new ArmContext.Image({layer: layer1, image: this.GetObject(object.name), width : 100, height: 100})
        .TranslateTo({x: Math.random() * layer1._width, y: 100})
        img.name = object.name;
    })
    .SetLisener("onLoad", function(object) {
        console.log("All objects where loaded!");

        A = new ArmContext.Rect({layer: layer1, width : 100, height: 100/*, lineDash: [1,2,3]*/, lineWidth: 12, globalAlpha: 1, strokeObject: "#ff0000", fillObject: "#00ff00", /*shadowOffsetX: 15, shadowOffsetY: 15,*/ shadowColor: "#0000ff", zindex: 23})
        .TranslateTo({x: 200, y: 100})
        A.name = "A";
        
        D = new ArmContext.Image({layer: layer1, image: this.GetObject("googlebot-kun-1b.png"), width : 100, height: 300})
        .TranslateTo({x: 50, y: 50})
        D.name = "D";
            
        setInterval(function() {
            A.Rotate({gradAngle: 1, x: 100, y: 100})
            D.Rotate({gradAngle: -1, x: 100, y: 100})
            // A._debug.ShowDebugInfo(CTX);
            // A._globalRepresentation.ShowPoints(CTX);
            // B._globalRepresentation.ShowPoints(CTX);

            // A._internalRepresentation.ShowPoints(CTX);
            // B._internalRepresentation.ShowPoints(CTX);

            layer1.ReDraw();                 
        }, 10 );
        
    })
    .Start();

};