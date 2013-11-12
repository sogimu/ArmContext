module( "class Layer" );

var containerName = "container";
var body = document.getElementsByTagName("body")[0];
var div = document.createElement('div');
div.id=containerName;
body.appendChild( div );

var Layer = ArmContext.Layer({container: "container"});

var canvasClassPattern = /ArmCanvasClass\s+Layer\d*/;
// var layerNamePattern = /Layer\d*/;

test( "Constor_spawnWithoutParams_Exeption", function() {
	
	try {
		var layer = ArmContext.Layer();

	}
	catch(e) {
		ok( true,  "Ok" );
	}
		
});
test( "Constor_spawnWithVoidParam_Exeption", function() {
	
	try {
		var layer = ArmContext.Layer({});

	}
	catch(e) {
		ok( true,  "Ok" );

	}
		
});

test( "Constructor_Have tag canvas into container_Ok", function() {
	var canvas = $("#"+containerName+" canvas");
	if(canvas) {
		ok( true,  "Ok" );

	}
		
});

test( "Constructor_Canvas having CSS class_Ok", function() {
	var canvas = $("#"+containerName+" canvas");
	console.log(canvas)
	if(canvasClassPattern.test(canvas.className)) {
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

test( "GetName_Layer.GetDefaultName()+\"\d*\").test(Layer.GetName())_Ok", function() {
	try {
		if(new RegExp(Layer.GetDefaultName()+"\d*").test(Layer.GetName())) {
			ok( true,  "Ok" );
		}
	}
	catch(e) {
		ok( false,  "Failed" );

	}
		
});

test( "GetCtx()_GetCtx() == 'CanvasRenderingContext2D'_Ok", function() {
	
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
