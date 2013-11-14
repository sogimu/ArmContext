module( "class Layer" );

var containerName = "container";
var body = document.getElementsByTagName("body")[0];
var div = document.createElement('div');
div.id=containerName;
body.appendChild( div );

var Layer = ArmContext.Layer({containerID: containerName});

test( "Spawn without params", function() {
	
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

test( "GetDefaultName()", function() {
	try {
		if(gizmo.type(Layer.GetDefaultName()) == "String") {
			ok( true,  "Ok" );
		}
	}
	catch(e) {
		ok( false,  "Failed" );

	}
		
});

test( "GetName()", function() {
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

test( "GetCanvasElement()", function() {
	
	try {
		if(gizmo.type(Layer.GetCanvasElement()) == "HTMLCanvasElement" && Layer.GetCanvasElement() == Layer._canvasElement) {
			ok( true,  "Ok" );
		}
	}
	catch(e) {
		ok( false,  "Failed" );

	}
		
});

module( "class Primitive" );
test( "Draw", function() {
	ok( true,  "Ok" );
	
});
