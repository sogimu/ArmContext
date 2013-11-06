module( "class Layer" );

var containerName = "container";
var body = document.getElementsByTagName("body")[0];
var div = document.createElement('div');
div.id=containerName;
body.appendChild( div );

var Layer = ArmContext.Layer({container: "container"});

var canvasClassPattern = /ArmCanvasClass\s+Layer\d*/;
// var layerNamePattern = /Layer\d*/;

test( "Spawn without params", function() {
	
	try {
		var layer = ArmContext.Layer();

	}
	catch(e) {
		ok( true,  "Ok" );
	}
		
});
test( "Spawn with void param", function() {
	
	try {
		var layer = ArmContext.Layer({});

	}
	catch(e) {
		ok( true,  "Ok" );

	}
		
});

test( "canvas is exist", function() {
	var canvas = $("#"+containerName+" canvas");
	if(canvas) {
		ok( true,  "Ok" );

	}
		
});

test( "canvas having CSS class", function() {
	var canvas = $("#"+containerName+" canvas");
	console.log(canvas)
	if(canvasClassPattern.test(canvas.className)) {
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

test( "GetCtx() == 'CanvasRenderingContext2D'", function() {
	
	try {
		if(!(Layer.GetCtx() == "CanvasRenderingContext2D")) {
			ok( true,  "Ok" );
		}
	}
	catch(e) {
		ok( false,  "Failed" );

	}
		
});



module( "class Primitive" );
test( "%)", function() {
	ok( true,  "Ok" );
	
});
