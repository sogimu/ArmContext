module( "class Layer" );

var containerName = "container";
var body = document.getElementsByTagName("body")[0];
var div = document.createElement('div');
div.id=containerName;
body.appendChild( div );

var Layer = ArmContext.Layer();

test( "Canvas is exist", function() {
	ok($("#"+Layer.GetCanvasTagID())[0],  "Ok" );	
		
});

test( "canvas having CSS class", function() {
	ok(/ArmLayerClass\s+Layer\d*/.test($("#"+Layer.GetName())[0].className),  "Ok" );

});

test( "canvas having zIndex", function() {
	var canvas = $("#"+Layer.GetName())[0];
	ok(/\d\d*/.test(canvas.style.zIndex*1),  "Ok" );

});

test( "GetDefaultName_Layer.GetDefaultName() == string_Ok", function() {
	ok(gizmo.type(Layer.GetDefaultName()) == "String",  "Ok" );

});

test( "GetName_Layer.GetDefaultName() have number on end_Ok", function() {
	ok(new RegExp(Layer.GetDefaultName()+"\d*").test(Layer.GetName()),  "Ok" );		
});

test( "GetCtx()", function() {
	ok(gizmo.type(Layer.GetCtx()) == "CanvasRenderingContext2D",  "Ok" );
	ok(Layer.GetCtx() == Layer._ctx,  "Ok" );

});

test( "GetCanvasTag()", function() {
	ok(gizmo.type(Layer.GetCanvasTag()) == "HTMLCanvasElement", "Ok");
	ok(Layer.GetCanvasTag() == Layer._canvasTag,  "Ok" );
		
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
	ok(points[2][0] == 33, "points[2][0] == 33");
	ok(points[2][1] == 33, "points[2][1] == 33");

	ok( true,  "Ok" );
	
});

test( "Rotate() 10 grad with equals", function() {
	var mvMatrix = new ArmContext.MvMatrix();
	mvMatrix.Rotate(0.17453292519943295); // 10 grad //10 / 180 * Math.PI

	var points = mvMatrix.GetPoints();
	ok(points[0][0] == 0.984807753012208, "points[0][0] == 0.984807753012208");
	ok(points[0][1] == 0.17364817766693033 , "points[0][1] == 0.17364817766693033");
	ok(points[1][0] == -0.17364817766693033, "points[1][0] == -0.17364817766693033");
	ok(points[1][1] == 0.984807753012208 , "points[1][1] == 0.984807753012208"); 
});

test("Rotate() 10 grad with 'deepEqual' function", function() {
	//=== operator means a comparasion without cast
	var mvMatrix = new ArmContext.MvMatrix();
	mvMatrix.Rotate(0.17453292519943295); // 10 grad //10 / 180 * Math.PI

	var points = mvMatrix.GetPoints();
	ok(points[0][0] === 0.984807753012208, "points[0][0] === 0.984807753012208");
	ok(points[0][1] === 0.17364817766693033, "points[0][1] === 0.17364817766693033");
	ok(points[1][0] === -0.17364817766693033, "points[1][0] === -0.17364817766693033");
	ok(points[1][1] === 0.984807753012208, "points[1][1] === 0.984807753012208"); 
	
});

test( "Rotate() 370 grad", function() {

	var mvMatrix = new ArmContext.MvMatrix();
	mvMatrix.Rotate(6.45771823237901943); // 370 grad //370 % 360 / 180 * Math.PI

	var points = mvMatrix.GetPoints();
	ok(points[0][0] == 0.984807753012208, "points[0][0] == 0.984807753012208");
	ok(points[0][1] == 0.17364817766693078, "points[0][1] == 0.17364817766693078");
	ok(points[1][0] == -0.17364817766693078, "points[1][0] == -0.17364817766693078");
	ok(points[1][1] == 0.984807753012208, "points[1][1] == 0.984807753012208");


});

module( "BoundingBox" );
test( "Constructor with out params", function() {
	var boundingBox = new ArmContext.BoundingBox();
	ok(boundingBox._rect[0].point0.x == 0, "boundingBox._rect[0].point0.x == 0");
	ok(boundingBox._rect[0].point0.y == 0, "boundingBox._rect[0].point0.x == 0");
	ok(boundingBox._rect[0].point1.x == 0, "boundingBox._rect[0].point1.x == 0");
	ok(boundingBox._rect[0].point1.y == 0, "boundingBox._rect[0].point1.x == 0");
	ok(boundingBox._rect[0].point2.x == 0, "boundingBox._rect[0].point2.x == 0");
	ok(boundingBox._rect[0].point2.y == 0, "boundingBox._rect[0].point2.x == 0");
	ok(boundingBox._rect[0].point3.x == 0, "boundingBox._rect[0].point3.x == 0");
	ok(boundingBox._rect[0].point3.y == 0, "boundingBox._rect[0].point3.x == 0");
	
	ok(boundingBox._rect[1].point0.x == 0, "boundingBox._rect[1].point0.x == 0");
	ok(boundingBox._rect[1].point0.y == 0, "boundingBox._rect[1].point0.x == 0");
	ok(boundingBox._rect[1].point1.x == 0, "boundingBox._rect[1].point1.x == 0");
	ok(boundingBox._rect[1].point1.y == 0, "boundingBox._rect[1].point1.x == 0");
	ok(boundingBox._rect[1].point2.x == 0, "boundingBox._rect[1].point2.x == 0");
	ok(boundingBox._rect[1].point2.y == 0, "boundingBox._rect[1].point2.x == 0");
	ok(boundingBox._rect[1].point3.x == 0, "boundingBox._rect[1].point3.x == 0");
	ok(boundingBox._rect[1].point3.y == 0, "boundingBox._rect[1].point3.x == 0");
	
	ok(boundingBox._rect[0].width == 0, "boundingBox._rect[0].width == 0");
	ok(boundingBox._rect[0].height == 0, "boundingBox._rect[0].height == 0");
	
	ok(boundingBox._rect[1].width == 0, "boundingBox._rect[1].width == 0");
	ok(boundingBox._rect[1].height == 0, "boundingBox._rect[1].height == 0");

});

test( "Constructor({points: {point0: {x: 100, y: 100}, point2: {x: 200, y: 200}}})", function() {
	var boundingBox = new ArmContext.BoundingBox({points: {point0: {x: 100, y: 100}, point2: {x: 200, y: 200}}});
	ok(boundingBox._rect[0].point0.x == 100, "boundingBox._rect[0].point0.x == 100");
	ok(boundingBox._rect[0].point0.y == 100, "boundingBox._rect[0].point0.x == 100");
	ok(boundingBox._rect[0].point1.x == 200, "boundingBox._rect[0].point1.x == 200");
	ok(boundingBox._rect[0].point1.y == 100, "boundingBox._rect[0].point1.x == 100");
	ok(boundingBox._rect[0].point2.x == 200, "boundingBox._rect[0].point2.x == 200");
	ok(boundingBox._rect[0].point2.y == 200, "boundingBox._rect[0].point2.x == 200");
	ok(boundingBox._rect[0].point3.x == 100, "boundingBox._rect[0].point3.x == 100");
	ok(boundingBox._rect[0].point3.y == 200, "boundingBox._rect[0].point3.x == 200");
	
	ok(boundingBox._rect[1].point0.x == 100, "boundingBox._rect[1].point0.x == 100");
	ok(boundingBox._rect[1].point0.y == 100, "boundingBox._rect[1].point0.x == 100");
	ok(boundingBox._rect[1].point1.x == 200, "boundingBox._rect[1].point1.x == 200");
	ok(boundingBox._rect[1].point1.y == 100, "boundingBox._rect[1].point1.x == 100");
	ok(boundingBox._rect[1].point2.x == 200, "boundingBox._rect[1].point2.x == 200");
	ok(boundingBox._rect[1].point2.y == 200, "boundingBox._rect[1].point2.x == 200");
	ok(boundingBox._rect[1].point3.x == 100, "boundingBox._rect[1].point3.x == 100");
	ok(boundingBox._rect[1].point3.y == 200, "boundingBox._rect[1].point3.x == 200");
	
	ok(boundingBox._rect[0].width == 100, "boundingBox._rect[0].width == 100");
	ok(boundingBox._rect[0].height == 100, "boundingBox._rect[0].height == 100");
	
	ok(boundingBox._rect[1].height == 100, "boundingBox._rect[1].height == 100");
	ok(boundingBox._rect[1].width == 100, "boundingBox._rect[1].width == 100");
	
});

test( "SetRect({points: {point0: {x: 100, y: 100}, point2: {x: 200, y: 200}}})", function() {
	var boundingBox = new ArmContext.BoundingBox({points: {point0: {x: 100, y: 100}, point2: {x: 200, y: 200}}});
	ok(boundingBox._rect[0].point0.x == 100, "boundingBox._rect[0].point0.x == 100");
	ok(boundingBox._rect[0].point0.y == 100, "boundingBox._rect[0].point0.x == 100");
	ok(boundingBox._rect[0].point1.x == 200, "boundingBox._rect[0].point1.x == 200");
	ok(boundingBox._rect[0].point1.y == 100, "boundingBox._rect[0].point1.x == 100");
	ok(boundingBox._rect[0].point2.x == 200, "boundingBox._rect[0].point2.x == 200");
	ok(boundingBox._rect[0].point2.y == 200, "boundingBox._rect[0].point2.x == 200");
	ok(boundingBox._rect[0].point3.x == 100, "boundingBox._rect[0].point3.x == 100");
	ok(boundingBox._rect[0].point3.y == 200, "boundingBox._rect[0].point3.x == 200");
	
	ok(boundingBox._rect[1].point0.x == 100, "boundingBox._rect[1].point0.x == 100");
	ok(boundingBox._rect[1].point0.y == 100, "boundingBox._rect[1].point0.x == 100");
	ok(boundingBox._rect[1].point1.x == 200, "boundingBox._rect[1].point1.x == 200");
	ok(boundingBox._rect[1].point1.y == 100, "boundingBox._rect[1].point1.x == 100");
	ok(boundingBox._rect[1].point2.x == 200, "boundingBox._rect[1].point2.x == 200");
	ok(boundingBox._rect[1].point2.y == 200, "boundingBox._rect[1].point2.x == 200");
	ok(boundingBox._rect[1].point3.x == 100, "boundingBox._rect[1].point3.x == 100");
	ok(boundingBox._rect[1].point3.y == 200, "boundingBox._rect[1].point3.x == 200");
	
	ok(boundingBox._rect[0].width == 100, "boundingBox._rect[0].width == 100");
	ok(boundingBox._rect[0].height == 100, "boundingBox._rect[0].height == 100");
	
	ok(boundingBox._rect[1].height == 100, "boundingBox._rect[1].height == 100");
	ok(boundingBox._rect[1].width == 100, "boundingBox._rect[1].width == 100");
	
});

test( "IntersectWithPoint()", function() {
	var boundingBox = new ArmContext.BoundingBox({points: {point0: {x: 100, y: 100}, point2: {x: 200, y: 200}}});
	ok(boundingBox.IntersectWithPoint({point: {x:150, y: 150}}) == true, "boundingBox.IntersectWithPoint({point: {x:150, y: 150}}) == true");
	ok(boundingBox.IntersectWithPoint({point: {x:101, y: 101}}) == true, "boundingBox.IntersectWithPoint({point: {x:101, y: 101}}) == true");
	ok(boundingBox.IntersectWithPoint({point: {x:100, y: 100}}) == true, "boundingBox.IntersectWithPoint({point: {x:100, y: 100}}) == true");
	ok(boundingBox.IntersectWithPoint({point: {x:200, y: 200}}) == true, "boundingBox.IntersectWithPoint({point: {x:200, y: 200}}) == true");
	ok(boundingBox.IntersectWithPoint({point: {x:100, y: 175}}) == true, "boundingBox.IntersectWithPoint({point: {x:100, y: 175}}) == true");
	ok(boundingBox.IntersectWithPoint({point: {x:175, y: 100}}) == true, "boundingBox.IntersectWithPoint({point: {x:175, y: 100}}) == true");
	
	ok(boundingBox.IntersectWithPoint({point: {x:10, y: 10}}) == false, "boundingBox.IntersectWithPoint({point: {x:10, y: 10}}) == false");
	ok(boundingBox.IntersectWithPoint({point: {x:250, y: 250}}) == false, "boundingBox.IntersectWithPoint({point: {x:250, y: 250}}) == false");
	ok(boundingBox.IntersectWithPoint({point: {x:10, y: 150}}) == false, "boundingBox.IntersectWithPoint({point: {x:10, y: 150}}) == false");
	ok(boundingBox.IntersectWithPoint({point: {x:250, y: 150}}) == false, "boundingBox.IntersectWithPoint({point: {x:250, y: 150}}) == false");
	ok(boundingBox.IntersectWithPoint({point: {x:150, y: 50}}) == false, "boundingBox.IntersectWithPoint({point: {x:150, y: 50}}) == false");
	ok(boundingBox.IntersectWithPoint({point: {x:150, y: 250}}) == false, "boundingBox.IntersectWithPoint({point: {x:150, y: 250}}) == false");

});

test( "IntersectWithArea()", function() {
	var boundingBox = new ArmContext.BoundingBox({points: {point0: {x: 100, y: 100}, point2: {x: 200, y: 200}}});
	// идентичная область
	ok(boundingBox.IntersectWithArea({point0: {x: 100, y: 100}, point2: {x: 200, y: 200}}) == true, "Пересечения с областью идентичной области boundingBox, есть");
	// область из центра boundingBox до его правого нижнего края
	ok(boundingBox.IntersectWithArea({point0: {x: 150, y: 150}, point2: {x: 200, y: 200}}) == true, "Пересечения с областью от центра boundingBox до его центра, есть");
	// область от точки выше левой верхней точки boundingBox до его центра
	ok(boundingBox.IntersectWithArea({point0: {x: 75, y: 75}, point2: {x: 150, y: 150}}) == true, "Пересечения с областью от точки выше левой верхней точки boundingBox до его центра, есть");
	// область из центра и за правую нижнюю точку boundingBox
	ok(boundingBox.IntersectWithArea({point0: {x: 150, y: 150}, point2: {x: 300, y: 200}}) == true, "Пересечения с областью из центра и за правую нижнюю точку boundingBox, есть");
	
	// область левее и выше boundingBox
	ok(boundingBox.IntersectWithArea({point0: {x: 10, y: 10}, point2: {x: 20, y: 20}}) == false, "Пересечения с областью левее и выше boundingBox, нет");
	// область правее и ниже boundingBox
	ok(boundingBox.IntersectWithArea({point0: {x: 250, y: 250}, point2: {x: 300, y: 300}}) == false, "Пересечения с областью ниже и правее от boundingBox, нет");
	// область слева от boundingBox
	ok(boundingBox.IntersectWithArea({point0: {x: 10, y: 150}, point2: {x: 20, y: 270}}) == false, "Пересечения с областью слева от boundingBox, нет");
	// область справа от boundingBox
	ok(boundingBox.IntersectWithArea({point0: {x: 250, y: 150}, point2: {x: 260, y: 270}}) == false, "Пересечения с областью справа от boundingBox, нет");
	// область над boundingBox
	ok(boundingBox.IntersectWithArea({point0: {x: 150, y: 50}, point2: {x: 170, y: 60}}) == false, "Пересечения с областью над boundingBox, нет");
	// область под boundingBox
	ok(boundingBox.IntersectWithArea({point0: {x: 150, y: 250}, point2: {x: 170, y: 270}}) == false, "Пересечения c областью под boundingBox, нет");
	
});

test( "GetNewPoints()", function() {
	var boundingBox = new ArmContext.BoundingBox({points: {point0: {x: 100, y: 100}, point2: {x: 200, y: 200}}});
	ok(boundingBox.GetNewPoints() == boundingBox._rect[0]);
});

test( "GetOldPoints()", function() {
	var boundingBox = new ArmContext.BoundingBox({points: {point0: {x: 100, y: 100}, point2: {x: 200, y: 200}}});
	ok(boundingBox.GetOldPoints() == boundingBox._rect[1]);
});

module( "Primitives" );
test( "Add()", function() {
	var primitives = new ArmContext.Primitives();
	var rect = ArmContext.Rect({width: 100, height: 50});

	primitives.Add(rect);

	ok( primitives._primitives.indexOf(rect) != -1,  "Примитив добавлен" );
	
});

test( "Remove()", function() {
	var primitives = new ArmContext.Primitives();
	var rect = ArmContext.Rect({width: 100, height: 50});

	primitives.Add(rect);
	primitives.Remove(rect);

	ok( primitives._primitives.indexOf(rect) == -1,  "Примитив удален" );
	
});

test( "GetPrimitivesFromArea()", function() {
	var primitives = new ArmContext.Primitives();
	// красный
	var rect0 = ArmContext.Rect({width: 100, height: 50, fillObject: "#ff0000"}).Translate({x: 50, y:0});
	// зеленый
	var rect1 = ArmContext.Rect({width: 100, height: 50, fillObject: "#00ff00"}).Translate({x: 10, y:10});
	// синий, находится не в пределах области 0,0; 100,100
	var rect2 = ArmContext.Rect({width: 100, height: 50, fillObject: "#0000ff"}).Translate({x: 250, y:250});

	primitives.Add(rect0);
	primitives.Add(rect1);
	primitives.Add(rect2);

	primitivesIntoArea = primitives.GetPrimitivesFromArea({point0: {x: 0, y: 0}, point2: {x: 100, y: 100}});

	ok( primitivesIntoArea._primitives.indexOf(rect0) != -1,  "Красный в пределах области" );
	ok( primitivesIntoArea._primitives.indexOf(rect1) != -1,  "Зеленый в пределах области" );
	ok( primitivesIntoArea._primitives.indexOf(rect2) == -1,  "Синий не в пределах области" );
	
});
