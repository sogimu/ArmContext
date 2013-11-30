module( "class Layer" );

var containerName = "container";
var body = document.getElementsByTagName("body")[0];
var div = document.createElement('div');
div.id=containerName;
body.appendChild( div );

var Layer = ArmContext.Layer({containerID: containerName});

test( "Constor_spawnWithoutParams_Exeption", function() {
	
	try {
		var layer = ArmContext.Layer();

	}
	catch(e) {
		ok( true,  "Ok" );
	}
		
});

test( "canvas is exist", function() {
	var canvas = $("#"+containerName+" canvas")[0];
	if(canvas) {
		ok( true,  "Ok" );

	}
		
});

test( "canvas having CSS class", function() {
	var canvas = $("#"+containerName+" canvas")[0];
	if(/ArmLayerClass\s+Layer\d*/.test(canvas.className)) {
		ok( true,  "Ok" );

	}
		
});

test( "canvas having zIndex", function() {
	var canvas = $("#"+containerName+" canvas")[0];
	if(/\d\d*/.test(canvas.style.zIndex)) {
		ok( true,  "Ok" );

	}
		
});

test( "GetDefaultName_Layer.GetDefaultName() == string_Ok", function() {
	try {
		if(gizmo.type(Layer.GetDefaultName()) == "String") {
			ok( true,  "Ok" );
		}
	}
	catch(e) {
		ok( false,  "Failed" );

	}
		
});

test( "GetName_Layer.GetDefaultName() have number on end_Ok", function() {
	try {
		if(new RegExp(Layer.GetDefaultName()+"\d*").test(Layer.GetName())) {
			ok( true,  "Ok" );
		}
	}
	catch(e) {
		ok( false,  "Failed" );

	}
		
});

test( "GetCtx()", function() {
	
	try {
		if(gizmo.type(Layer.GetCtx()) == "CanvasRenderingContext2D" && Layer.GetCtx() == Layer._ctx) {
			ok( true,  "Ok" );
		}
	}
	catch(e) {
		ok( false,  "Failed" );

	}
		
});

test( "GetCanvasTag()", function() {	
	try {
		if(gizmo.type(Layer.GetCanvasTag()) == "HTMLCanvasElement" && Layer.GetCanvasTag() == Layer._canvasTag) {
			ok( true,  "Ok" );
		}
	}
	catch(e) {
		ok( false,  "Failed" );

	}
		
});

module( "class MvMatrix" );
test( "Constructor GetPoints() == onesMatrix", function() {
	var mvMatrix = new ArmContext.MvMatrix();

	var points = mvMatrix.GetPoints();
	if(points[0][0] == 1)
	if(points[1][1] == 1)
	if(points[2][2] == 1)

	ok( true,  "Ok" );
	
});

test( "Translate()", function() {
	var mvMatrix = new ArmContext.MvMatrix();
	mvMatrix.Translate(33,33);

	var points = mvMatrix.GetPoints();
	if(points[2][0] == 33)
	if(points[2][1] == 33)

	ok( true,  "Ok" );
	
});

test( "Rotate() 10 grad", function() {
	var mvMatrix = new ArmContext.MvMatrix();
	mvMatrix.Rotate(0.17453292519943295); // 10 grad //10 / 180 * Math.PI

	var points = mvMatrix.GetPoints();
	if(points[0][0] == 0.984807753012208)
	if(points[0][1] == 0.17364817766693033)
	if(points[1][0] == -0.17364817766693033)
	if(points[1][1] == 0.984807753012208)

	ok( true,  "Ok" );
	
});

test( "Rotate() 370 grad", function() {
	var mvMatrix = new ArmContext.MvMatrix();
	mvMatrix.Rotate(0.17453292519943295); // 370 grad //370 % 360 / 180 * Math.PI

	var points = mvMatrix.GetPoints();
	if(points[0][0] == 0.984807753012208)
	if(points[0][1] == 0.17364817766693033)
	if(points[1][0] == -0.17364817766693033)
	if(points[1][1] == 0.984807753012208)

	ok( true,  "Ok" );
	
});

module( "Primitive" );
test( "Primitive", function() {
	ok( true,  "first test" );
	
});
test( "Rect.Draw", function() {
	ok( true,  "first test" );
	
});

module( "Primitives" );
test( "Primitives.Add()", function() {
	var primitives = new ArmContext.Primitives();
	var rect = ArmContext.Rect({width: 100, height: 50});

	primitives.Add(rect);

	if(primitives._primitives.indexOf(rect) != -1) {
		ok( true,  "Primitive added into primitives._primitives._primitives" );
	} else {
		of( false, "Primitive does not added into primitives._primitives._primitives" );
	}
	
});

test( "Primitives.Remove()", function() {
	var primitives = new ArmContext.Primitives();
	var rect = ArmContext.Rect({width: 100, height: 50});

	primitives.Add(rect);
	primitives.Remove(rect);

	if(primitives._primitives.indexOf(rect) == -1) {
		ok( true,  "Primitive deleted from primitives._primitives._primitives" );
	} else {
		of( false, "Primitive does not deleted from primitives._primitives._primitives" );
	}
});
