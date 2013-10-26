(function(window){var ArmContext=function(){var me={};me._lastUnicalNumber=0;me.GetNewUnicalNumber=function(){this._lastUnicalNumber+=1;return this._lastUnicalNumber};return me};window.ArmContext=ArmContext()})(window);(function(window){var InternalRepresentation=function(primitive){var me={};me._primitive=primitive;me._points=new $M([[0,0,1]]);me.GetPoints=function(){return this._points.elements};me.ShowPoints=function(ctx){var radiusOfpoints=3;var points=this.GetPoints();ctx.save();ctx.beginPath();for(var i in points){ctx.moveTo(points[i][0],points[i][1]);ctx.arc(points[i][0],points[i][1],radiusOfpoints,0,Math.PI*2,false)}ctx.closePath();CTX.fillStyle="#ff0000";ctx.stroke();ctx.fill();ctx.restore();return this};
me.ShowDebugInfo=function(ctx){var points=this.GetPoints();console.log("Points of internal representation");for(var i in points)console.log(points[i])};me.SetLisener=function(name,func){gizmo.Filter(name,"String");gizmo.Filter(func,"Function");if(name&&func)this["_"+name]=func;return this};me.GetLisener=function(name){gizmo.Filter(name,"String");if(this["_"+name])return this["_"+name];else return false};return me};ArmContext.InternalRepresentation=InternalRepresentation})();(function(window){var GlobalRepresentation=function(primitive){var me={};me._primitive=primitive;me._points=new $M([[0,0,1]]);me._polygone=new gizmo.Math.Polygone(me._points.elements);me.GetPoints=function(){return this._points.elements};me.SetPoints=function(O){gizmo.Filter(O,"Array");this._points.elements=O};me.GetMatrixOfPoints=function(){return this._points};me.SetMatrixOfPoints=function(O){gizmo.Filter(O,"Object");return this._points=O};me.Update=function(internalRepresentation,C2dContextRepresentation,
mvMatrix){gizmo.Filter(internalRepresentation,"Object");gizmo.Filter(C2dContextRepresentation,"Object");gizmo.Filter(mvMatrix,"Object");this.SetPoints(internalRepresentation.GetPoints());this.SetMatrixOfPoints(this.GetMatrixOfPoints().x(mvMatrix.GetMatrix()));this.UpdatePolygone();return this};me.UpdatePolygone=function(){arrVectors=[];var transformedPoints=this.GetPoints();for(var i in transformedPoints)arrVectors.push(new gizmo.Math.Vector2D(transformedPoints[i][0],transformedPoints[i][1]));this._polygone=
new gizmo.Math.Polygone(arrVectors);return this};me.HasPoint=function(x,y){gizmo.Filter(x,"Number");gizmo.Filter(y,"Number");return this._polygone.HasPoint({x:x,y:y})};me.ShowDebugInfo=function(ctx){var points=this.GetPoints();console.log("Points of global representation");for(var i in points)console.log(points[i])};me.ShowPoints=function(ctx){var points=this.GetPoints();for(var i in points){CTX.save();CTX.beginPath();CTX.fillStyle="#00ff00";CTX.rect(points[i][0]-2,points[i][1]-2,4,4);CTX.stroke();
CTX.fill();CTX.closePath();CTX.restore()}};return me};ArmContext.GlobalRepresentation=GlobalRepresentation})();(function(window){var C2dContextRepresentation=function(primitive){var me={};me._primitive=primitive;me._ctx=null;me._layer=null;me._globalAlpha="default";me._shadowColor="default";me._shadowBlur="default";me._shadowOffsetX="default";me._shadowOffsetY="default";me._zindex=0;me._boundingBox={};me._pictureUnderPrimitive={};me.Set=function(O){for(var name in O)switch(name){case "ctx":this.SetCtx(O[name]);break;case "layer":this.SetLayer(O[name]);this.SetCtx(this.GetLayer().GetCtx());break;case "globalAlpha":this.SetGlobalAlpha(O[name]);
break;case "shadowColor":this.SetShadowColor(O[name]);break;case "shadowBlur":this.SetBlur(O[name]);break;case "shadowOffsetX":this.SetShadowOffsetX(O[name]);break;case "shadowOffsetY":this.SetShadowOffsetY(O[name]);break;case "zindex":this.SetZindex(O[name]);break}};me.SetCtx=function(ctx){gizmo.Filter(ctx,"CanvasRenderingContext2D");this._ctx=ctx};me.SetLayer=function(layer){gizmo.Filter(layer,"Object");this._layer=layer;this._layer.AddPrimitive(this._primitive)};me.SetGlobalAlpha=function(O){gizmo.Filter(O,
"Number");this._globalAlpha=O};me.SetShadowColor=function(O){gizmo.Filter(O,"String");this._shadowColor=O};me.SetShadowBlur=function(O){gizmo.Filter(O,"Number");this._shadowBlur=O};me.SetShadowOffsetX=function(O){gizmo.Filter(O,"Number");this._shadowOffsetX=O};me.SetShadowOffsetY=function(O){gizmo.Filter(O,"Number");this._shadowOffsetY=O};me.SetZindex=function(zindex){gizmo.Filter(zindex,"Number");this._zindex=zindex;this.GetLayer().SortByZindex()};me.GetCtx=function(){return this._ctx};me.GetLayer=
function(){return this._layer};me.GetGlobalAlpha=function(){return this._globalAlpha};me.GetShadowColor=function(){return this._shadowColor};me.GetShadowBlur=function(){return this._shadowBlur};me.GetShadowOffsetX=function(){return this._shadowOffsetX};me.GetShadowOffsetY=function(){return this._shadowOffsetY};me.GetZindex=function(){return this._zindex};me.SetLisener=function(name,func){gizmo.Filter(name,"String");gizmo.Filter(func,"Function");if(name&&func)this["_"+name]=func;return this};me.GetLisener=
function(name){gizmo.Filter(name,"String");if(this["_"+name])return this["_"+name];else return false};me.ShowDebugInfo=function(ctx){console.log("VisualProperties:");console.log("Method have not realisation")};return me};ArmContext.C2dContextRepresentation=C2dContextRepresentation})();(function(window){var MvMatrix=function(primitive){var me={};me._primitive=primitive;me._matrix=new $M([[1,0,0],[0,1,0],[0,0,1]]);me.Rotate=function(angle){var a=Math.cos(angle);var b=Math.sin(angle);var rotateMatrix=new $M([[a,b,0],[-b,a,0],[0,0,1]]);this._matrix=this._matrix.x(rotateMatrix);if(this._onChanged)this._onChanged.call(primitive);if(this._onChanged)this._onChanged.call(primitive);return this};me.Scale=function(x,y){gizmo.Filter(x,"Number");gizmo.Filter(y,"Number");var transformMatrix=
new $M([[x,0,0],[0,y,0],[0,0,1]]);this._matrix=this._matrix.x(transformMatrix);if(this._onChanged)this._onChanged.call(primitive);return this};me.Translate=function(x,y){gizmo.Filter(x,"Number");gizmo.Filter(y,"Number");var transformMatrix=new $M([[1,0,0],[0,1,0],[x,y,1]]);this._matrix=this._matrix.x(transformMatrix);if(this._onChanged)this._onChanged.call(primitive);return this};me.Scos=function(x,y){gizmo.Filter(x,"Number");gizmo.Filter(y,"Number");var transformMatrix=new $M([[1,y,0],[x,1,0],[0,
0,1]]);this._matrix=this._matrix.x(transformMatrix);if(this._onChanged)this._onChanged.call(primitive);return this};me.GetMatrix=function(){return this._matrix};me.GetTransformParams=function(){var matrix=this.GetMatrix();var a=matrix.elements[0][0];var b=matrix.elements[0][1];var c=matrix.elements[1][0];var d=matrix.elements[1][1];var e=matrix.elements[2][0];var f=matrix.elements[2][1];return{a:a,b:b,c:c,d:d,e:e,f:f}};me.SetLisener=function(name,func){gizmo.Filter(name,"String");gizmo.Filter(func,
"Function");if(name&&func)this["_"+name]=func;return this};me.GetLisener=function(name){gizmo.Filter(name,"String");if(this["_"+name])return this["_"+name];else return false};me.ShowDebugInfo=function(ctx){var matrix=this.GetMatrix();console.log("mvMatrix:");console.log(matrix.elements[0]);console.log(matrix.elements[1]);console.log(matrix.elements[2])};return me};ArmContext.MvMatrix=MvMatrix})();(function(window){var Debug=function(O){gizmo.Filter(O,"Object");var me={};me.object=O;me.ShowDebugInfo=function(){console.log("<<Primitive>> DebugInfo");this.object._2dContextRepresentation.ShowDebugInfo();this.object._interalRepresentation.ShowDebugInfo();this.object._globalRepresentation.ShowDebugInfo();this.object._mvMatrix.ShowDebugInfo()};return me};ArmContext.Debug=Debug})();(function(window){var BoundingBox=function(O){var me={};me._rect=[{point0:new gizmo.Math.Point2D(0,0),point1:new gizmo.Math.Point2D(0,0),point2:new gizmo.Math.Point2D(0,0),point3:new gizmo.Math.Point2D(0,0),width:0,height:0},{point0:new gizmo.Math.Point2D(0,0),point1:new gizmo.Math.Point2D(0,0),point2:new gizmo.Math.Point2D(0,0),point3:new gizmo.Math.Point2D(0,0),width:0,height:0}];me.GetNewPoints=function(){return this._rect[0]};me.GetOldPoints=function(){return this._rect[1]};me.IntersectWith=function(BoundingBox){var firstPoints=
this.GetOldPoints();var secondPoints=BoundingBox.GetOldPoints();if(secondPoints.point0.x>firstPoints.point1.x)return false;if(secondPoints.point1.x<firstPoints.point0.x)return false;if(secondPoints.point0.y>firstPoints.point3.y)return false;if(secondPoints.point3.y<firstPoints.point0.x)return false;return true};me.SumWith=function(BoundingBox){var fP=this.GetOldPoints();var sP=BoundingBox.GetOldPoints();var minX=fP.point0.x;var minY=fP.point0.y;var maxX=fP.point2.x;var maxY=fP.point2.y;minX=Math.min(fP.point0.x,
fP.point1.x,fP.point2.x,fP.point3.x,sP.point0.x,sP.point1.x,sP.point2.x,sP.point3.x);minY=Math.min(fP.point0.y,fP.point1.y,fP.point2.y,fP.point3.y,sP.point0.y,sP.point1.y,sP.point2.y,sP.point3.y);maxX=Math.max(fP.point0.x,fP.point1.x,fP.point2.x,fP.point3.x,sP.point0.x,sP.point1.x,sP.point2.x,sP.point3.x);maxY=Math.max(fP.point0.y,fP.point1.y,fP.point2.y,fP.point3.y,sP.point0.y,sP.point1.y,sP.point2.y,sP.point3.y);return new ArmContext.BoundingBox({points:{point0:{x:minX,y:minY},point1:{x:maxX,y:maxY}}})};
me.Update=function(globalRepresentation){var points=globalRepresentation.GetPoints();var minX=points[0][0];var minY=points[0][1];var maxX=points[0][0];var maxY=points[0][1];for(var pointName in points){var point=points[pointName];minX=Math.min(point[0],minX);minY=Math.min(point[1],minY);maxX=Math.max(point[0],maxX);maxY=Math.max(point[1],maxY)}var rect={point0:{x:minX,y:minY},point1:{x:maxX,y:minY},point2:{x:maxX,y:maxY},point3:{x:minX,y:maxY},width:maxX-minX,height:maxY-minY};this._rect.reverse();
this._rect[0]=rect};me.Set=function(O){for(var name in O)switch(name){case "points":var points=O[name];gizmo.Filter(points,"Object");gizmo.Filter(points.point0,"Object");gizmo.Filter(points.point1,"Object");var rect={point0:points.point0,point1:points.point1,point2:{x:points.point1.x,y:points.point0.y},point3:{x:points.point0.x,y:points.point1.y},width:points.point1.x-points.point0.x,height:points.point1.y-points.point0.y};this._rect[0]=rect;this._rect[1]=rect;break}};me.Set(O||{});return me};window.ArmContext.BoundingBox=
BoundingBox})(window);(function(window){var TransformQuene=function(){var me={};me.Push=function(reg){try{this._stack.push(reg);return true}catch(e){return false}};me.Pop=function(){var event=this._stack.shift();if(event!=undefined)return event;else return false};me.ProcessEvents=function(primitive){var event;while(event=this.Pop())switch(event.name){case "Translate":primitive._translate(event.e);break;case "Rotate":primitive._rotate(event.e);break;case "Scale":primitive._scale(event.e);break;case "Scos":primitive._scos(event);
break}};me._stack=[];return me};window.ArmContext.TransformQuene=TransformQuene})(window);(function(window){var Primitive=function(){var me={};me._internalRepresentation=null;me._2dContextRepresentation=null;me._globalRepresentation=null;me._mvMatrix=ArmContext.MvMatrix(me);me._debug=ArmContext.Debug(me);me._boundingBox=ArmContext.BoundingBox();me._transformQuene=ArmContext.TransformQuene();me._isLisened=true;me._isChanged=true;me.TranslateTo=function(O){gizmo.Filter(O,"Object");gizmo.Filter(O.x,"Number");gizmo.Filter(O.y,"Number");var gX=this._globalRepresentation.GetX();var gY=this._globalRepresentation.GetY();
var dX=O.x-gX;var dY=O.y-gY;this._transformQuene.Push({name:"Translate",e:{x:dX,y:dY}});return this};me.Translate=function(O){gizmo.Filter(O,"Object");gizmo.Filter(O.x,"Number");gizmo.Filter(O.y,"Number");this._transformQuene.Push({name:"Translate",e:O});return this};me._translate=function(O){gizmo.Filter(O,"Object");gizmo.Filter(O.x,"Number");gizmo.Filter(O.y,"Number");this._mvMatrix.Translate(O.x,O.y);return this};me.Rotate=function(O){gizmo.Filter(O.gradAngle||O.radAngle,"Number");gizmo.Filter(O.x,
"Number");gizmo.Filter(O.y,"Number");var radAngle=O.radAngle||(O.gradAngle>360?O.gradAngle%360:O.gradAngle)/180*Math.PI;this._transformQuene.Push({name:"Translate",e:{x:-O.x,y:-O.y}});this._transformQuene.Push({name:"Rotate",e:{radAngle:radAngle}});this._transformQuene.Push({name:"Translate",e:{x:O.x,y:O.y}});return this};me._rotate=function(O){gizmo.Filter(O.radAngle,"Number");this._mvMatrix.Rotate(O.radAngle);return this};me.Scale=function(O){gizmo.Filter(O,"Object");gizmo.Filter(O.x,"Number");
gizmo.Filter(O.y,"Number");var gX=this._globalRepresentation.GetX();var gY=this._globalRepresentation.GetY();var dX=gX-gX*O.x;var dY=gY-gY*O.y;this._transformQuene.Push({name:"Scale",e:{x:O.x,y:O.y}});this._transformQuene.Push({name:"Translate",e:{x:dX,y:dY}});return this};me._scale=function(O){gizmo.Filter(O,"Object");gizmo.Filter(O.x,"Number");gizmo.Filter(O.y,"Number");this._mvMatrix.Scale(O.x,O.y)};me.Scos=function(O){gizmo.Filter(O,"Object");gizmo.Filter(O.x,"Number");gizmo.Filter(O.y,"Number");
this._transformQuene.Push({name:"Scos",e:{x:O.x,y:O.y}});return this};me._scos=function(O){gizmo.Filter(O,"Object");gizmo.Filter(O.x,"Number");gizmo.Filter(O.y,"Number");this._mvMatrix.Scos(O.x,O.y)};me.Draw=function(){console.log("Virtual method Draw");return this};me.Clear=function(){console.log("Virtual method Clear");return this};me.HasPoint=function(O){gizmo.Filter(O,"Object");gizmo.Filter(O.x,"Number");gizmo.Filter(O.y,"Number");return this._globalRepresentation.HasPoint(O.x,O.y)};me.GetBoundingBox=
function(){return this._boundingBox};me.BoundingBoxHaveIntersectionWith=function(primitive){return this._boundingBox.IntersectWith(primitive.GetBoundingBox())};me.Update=function(O){this.SetUnchanged();this._transformQuene.ProcessEvents(this);this._globalRepresentation.Update(this._internalRepresentation,this._2dContextRepresentation,this._mvMatrix);this._boundingBox.Update(this._globalRepresentation)};me.Set=function(O){this._internalRepresentation.Set(O);this._2dContextRepresentation.Set(O)};me.SetLisened=
function(O){gizmo.Filter(O,"Boolean");this._isLisened=O};me.IsLisened=function(){return this._isLisened};me.SetChanged=function(){this._isChanged=true};me.SetUnchanged=function(){this._isChanged=false};me.IsChanged=function(){return this._isChanged};return me};window.ArmContext.Primitive=Primitive})(window);(function(window){var Image2dContextRepresentation=function(primitive){var me=ArmContext.C2dContextRepresentation(primitive);me.parentSet=me.Set?me.Set:null;me._image=null;me.GetImage=function(){return this._image};me.Set=function(O){if(this.parentSet)this.parentSet(O);this._image=O.image||this._image};return me};ArmContext.Image2dContextRepresentation=Image2dContextRepresentation})();(function(window){var ImageGlobalRepresentation=function(){var me=ArmContext.GlobalRepresentation();me.GetX=function(){return this.GetPoints()[0][0]};me.GetY=function(){return this.GetPoints()[0][1]};me.GetWidth=function(){var ponts=this.GetPoints();return points[2][0]-points[0][0]};me.GetHeight=function(){var ponts=this.GetPoints();return points[2][1]-points[0][1]};me.ShowPoints=function(ctx){var points=this.GetPoints();CTX.save();CTX.beginPath();CTX.fillStyle="#ff0000";CTX.rect(points[0][0]-2,points[0][1]-
2,4,4);CTX.stroke();CTX.fill();CTX.closePath();CTX.restore();CTX.save();CTX.beginPath();CTX.fillStyle="#00ff00";CTX.rect(points[1][0]-2,points[1][1]-2,4,4);CTX.stroke();CTX.fill();CTX.closePath();CTX.restore();CTX.save();CTX.beginPath();CTX.fillStyle="#0000ff";CTX.rect(points[2][0]-2,points[2][1]-2,4,4);CTX.stroke();CTX.fill();CTX.closePath();CTX.restore();CTX.save();CTX.beginPath();CTX.fillStyle="#aaffbb";CTX.rect(points[3][0]-2,points[3][1]-2,4,4);CTX.stroke();CTX.fill();CTX.closePath();CTX.restore()};
return me};ArmContext.ImageGlobalRepresentation=ImageGlobalRepresentation})();(function(window){var ImageInternalRepresentation=function(primitive){var me=new ArmContext.InternalRepresentation(primitive);this._width=10;this._height=10;me.GetWidth=function(){return this._width};me.SetWidth=function(O){gizmo.Filter(O,"Number");this.Update({width:O,height:this.GetHeight()})};me.GetHeight=function(){return this._height};me.SetHeight=function(O){gizmo.Filter(O,"Number");this.UpdatePoints({x:this.GetX(),y:this.GetY(),width:this.GetWidth(),height:O})};me.GetPointsOfMatrix=function(){return this._points};
me.SetPointsOfMatrix=function(O){gizmo.Filter(O,"Array");return this._points};me.Set=function(O){this._width=O.width||this._width;this._height=O.height||this._height;this._points=new $M([[0,0,1],[this._width,0,1],[this._width,this._height,1],[0,this._height,1]])};return me};ArmContext.ImageInternalRepresentation=ImageInternalRepresentation})();(function(window){var Image=function(O){gizmo.Filter(O,"Object");var me=ArmContext.Primitive();me._internalRepresentation=ArmContext.ImageInternalRepresentation();me._2dContextRepresentation=ArmContext.Image2dContextRepresentation(me);me._globalRepresentation=ArmContext.ImageGlobalRepresentation();me.Draw=function(){var ctxRep=this._2dContextRepresentation;var intRep=this._internalRepresentation;var ctx=ctxRep._ctx;ctx.save();params=this._mvMatrix.GetTransformParams();ctx.setTransform(params.a,params.b,
params.c,params.d,params.e,params.f);ctx.drawImage(ctxRep.GetImage(),0,0,intRep.GetWidth(),intRep.GetHeight());ctx.restore()};me.Clear=function(){var ctxRep=this._2dContextRepresentation;var intRep=this._internalRepresentation;var boundingBox=this._boundingBox.GetOldPoints();var ctx=ctxRep.GetCtx();ctx.clearRect(boundingBox.point0.x,boundingBox.point0.y,boundingBox.width,boundingBox.height)};me._internalRepresentation.SetLisener("onChanged",function(){this.SetChanged()});me._2dContextRepresentation.SetLisener("onChanged",
function(){this.SetChanged()});me._mvMatrix.SetLisener("onChanged",function(){this.SetChanged()});me.Set(O);me.Update();return me};window.ArmContext.Image=Image})(window);(function(window){var Rect2dContextRepresentation=function(primitive){var me=ArmContext.C2dContextRepresentation(primitive);me.parentSet=me.Set?me.Set:null;me._fillObject="default";me._strokeObject="default";me._lineWidth="default";me._lineDash="default";me._miterLimit="default";me._lineCap="default";me._lineJoin="default";me.GetFillObject=function(){return this._fillObject};me.GetStrokeObject=function(){return this._strokeObject};me.GetLineWidth=function(){return this._lineWidth};me.GetLineDash=
function(){return this._lineDash};me.GetMiterLimit=function(){return this._miterLimit};me.GetLineCap=function(){return this._lineCap};me.GetLineJoin=function(){return this._lineJoin};me.Set=function(O){if(this.parentSet)this.parentSet(O);for(var name in O)switch(name){case "fillObject":this._fillObject=O[name];if(this._onChanged)this._onChanged.call(primitive);break;case "strokeObject":this._strokeObject=O[name];if(this._onChanged)this._onChanged.call(primitive);break;case "lineWidth":this._lineWidth=
O[name];if(this._onChanged)this._onChanged.call(primitive);break;case "lineDash":this._lineDash=O[name];if(this._onChanged)this._onChanged.call(primitive);break;case "miterLimit":this._miterLimit=O[name];if(this._onChanged)this._onChanged.call(primitive);break;case "lineCap":switch(O[name]){case "butt":this._lineCap=O[name];if(this._onChanged)this._onChanged.call(primitive);break;case "round":this._lineCap=O[name];if(this._onChanged)this._onChanged.call(primitive);break;case "square":this._lineCap=
O[name];if(this._onChanged)this._onChanged.call(primitive);break}if(this._onChanged)this._onChanged.call(primitive);break;case "lineJoin":switch(O[name]){case "miter":this._lineJoin=O[name];if(this._onChanged)this._onChanged.call(primitive);break;case "round":this._lineJoin=O[name];if(this._onChanged)this._onChanged.call(primitive);break;case "bevel":this._lineJoin=O[name];if(this._onChanged)this._onChanged.call(primitive);break}if(this._onChanged)this._onChanged.call(primitive);break}};return me};
ArmContext.Rect2dContextRepresentation=Rect2dContextRepresentation})();(function(window){var RectGlobalRepresentation=function(){var me=ArmContext.GlobalRepresentation();me.GetX=function(){return Math.round(this.GetPoints()[0][0])};me.GetY=function(){return Math.round(this.GetPoints()[0][1])};me.GetWidth=function(){var ponts=this.GetPoints();return Math.round(points[2][0]-points[0][0])};me.GetHeight=function(){var ponts=this.GetPoints();return Math.round(points[2][1]-points[0][1])};me.Update=function(internalRepresentation,C2dContextRepresentation,mvMatrix){gizmo.Filter(internalRepresentation,
"Object");gizmo.Filter(C2dContextRepresentation,"Object");gizmo.Filter(mvMatrix,"Object");var lineWidth=C2dContextRepresentation.GetLineWidth()!="default"?C2dContextRepresentation.GetLineWidth():2;var lineWidthAbout=lineWidth/2+0.5;var internalPoints=internalRepresentation.GetPoints();var newInternalPoints=[[internalPoints[0][0]-lineWidthAbout,internalPoints[0][1]-lineWidthAbout,internalPoints[0][2]],[internalPoints[1][0]+lineWidthAbout,internalPoints[1][1]-lineWidthAbout,internalPoints[1][2]],[internalPoints[2][0]+
lineWidthAbout,internalPoints[2][1]+lineWidthAbout,internalPoints[2][2]],[internalPoints[3][0]-lineWidthAbout,internalPoints[3][1]+lineWidthAbout,internalPoints[3][2]]];this.SetPoints(newInternalPoints);this.SetMatrixOfPoints(this.GetMatrixOfPoints().x(mvMatrix.GetMatrix()));this.UpdatePolygone();return this};me.ShowPoints=function(ctx){var points=this.GetPoints();CTX.save();CTX.beginPath();CTX.fillStyle="#ff0000";CTX.rect(points[0][0]-2,points[0][1]-2,4,4);CTX.stroke();CTX.fill();CTX.closePath();
CTX.restore();CTX.save();CTX.beginPath();CTX.fillStyle="#00ff00";CTX.rect(points[1][0]-2,points[1][1]-2,4,4);CTX.stroke();CTX.fill();CTX.closePath();CTX.restore();CTX.save();CTX.beginPath();CTX.fillStyle="#0000ff";CTX.rect(points[2][0]-2,points[2][1]-2,4,4);CTX.stroke();CTX.fill();CTX.closePath();CTX.restore();CTX.save();CTX.beginPath();CTX.fillStyle="#aaffbb";CTX.rect(points[3][0]-2,points[3][1]-2,4,4);CTX.stroke();CTX.fill();CTX.closePath();CTX.restore()};return me};ArmContext.RectGlobalRepresentation=
RectGlobalRepresentation})();(function(window){var RectInternalRepresentation=function(primitive){var me=new ArmContext.InternalRepresentation(primitive);this._width=10;this._height=10;me.GetWidth=function(){return this._width};me.SetWidth=function(O){gizmo.Filter(O,"Number");this.Update({width:O,height:this.GetHeight()})};me.GetHeight=function(){return this._height};me.SetHeight=function(O){gizmo.Filter(O,"Number");this.UpdatePoints({x:this.GetX(),y:this.GetY(),width:this.GetWidth(),height:O})};me.GetPointsOfMatrix=function(){return this._points};
me.SetPointsOfMatrix=function(O){gizmo.Filter(O,"Array");return this._points};me.Set=function(O){for(var name in O)switch(name){case "width":this._width=O[name];if(this._onChanged)this._onChanged.call(primitive);break;case "height":this._height=O[name];if(this._onChanged)this._onChanged.call(primitive);break}this._points=new $M([[0,0,1],[this._width,0,1],[this._width,this._height,1],[0,this._height,1]])};return me};ArmContext.RectInternalRepresentation=RectInternalRepresentation})();(function(window){var Rect=function(O){gizmo.Filter(O,"Object");var me=ArmContext.Primitive();me._internalRepresentation=ArmContext.RectInternalRepresentation(me);me._2dContextRepresentation=ArmContext.Rect2dContextRepresentation(me);me._globalRepresentation=ArmContext.RectGlobalRepresentation(me);me.Draw=function(){var ctxRep=this._2dContextRepresentation;var intRep=this._internalRepresentation;var ctx=ctxRep.GetCtx();ctx.save();ctx.beginPath();params=this._mvMatrix.GetTransformParams();ctx.setTransform(params.a,
params.b,params.c,params.d,params.e,params.f);ctx.rect(0,0,intRep.GetWidth(),intRep.GetHeight());ctx.closePath();if(ctxRep.GetFillObject()!="default")ctx.setFillColor(ctxRep.GetFillObject());if(ctxRep.GetStrokeObject()!="default")ctx.setStrokeColor(ctxRep.GetStrokeObject());if(ctxRep.GetLineWidth()!="default")ctx.setLineWidth(ctxRep.GetLineWidth());if(ctxRep.GetGlobalAlpha()!="default")ctx.setAlpha(ctxRep.GetGlobalAlpha());if(ctxRep.GetShadowColor()!="default")ctx.shadowColor=ctxRep.GetShadowColor();
if(ctxRep.GetShadowBlur()!="default")ctx.shadowBlur=ctxRep.GetShadowBlur();if(ctxRep.GetShadowOffsetX()!="default")ctx.shadowOffsetX=ctxRep.GetShadowOffsetX();if(ctxRep.GetShadowOffsetY()!="default")ctx.shadowOffsetY=ctxRep.GetShadowOffsetY();if(ctxRep.GetLineCap()!="default")ctx.setLineCap(ctxRep.GetLineCap());if(ctxRep.GetLineDash()!="default")ctx.setLineDash(ctxRep.GetLineDash());if(ctxRep.GetLineJoin()!="default")ctx.setLineJoin(ctxRep.GetLineJoin());ctx.stroke();ctx.fill();ctx.restore()};me.Clear=
function(){var ctxRep=this._2dContextRepresentation;var intRep=this._internalRepresentation;var ctx=ctxRep.GetCtx();var boundingBox=this._boundingBox.GetOldPoints();var ctx=ctxRep.GetCtx();ctx.clearRect(boundingBox.point0.x,boundingBox.point0.y,boundingBox.width,boundingBox.height)};me._internalRepresentation.SetLisener("onChanged",function(){this.SetChanged()});me._2dContextRepresentation.SetLisener("onChanged",function(){this.SetChanged()});me._mvMatrix.SetLisener("onChanged",function(){this.SetChanged()});
me.Set(O);me.Update();return me};window.ArmContext.Rect=Rect})(window);(function(window){var Primitives=function(O){var me={};me.Add=function(O){gizmo.Filter(O,"Object");this._primitives.push(O);this.SortByZindex();return this};me.Remove=function(O){gizmo.Filter(O,"Object");var index=0;if((index=this._primitives.indexOf(O))!=-1){delete this._primitives[index];return true}else return false};me.GetArray=function(){return this._primitives};me.SortByZindex=function(){this._primitives=gizmo.nativeSort({mas:this._primitives,target:"<",field:"_2dContextRepresentation._zindex"})};
me.SetLisener=function(name,func){gizmo.Filter(name,"String");gizmo.Filter(func,"Function");if(name&&func)if(this["_"+name]){gizmo.Filter(this["_"+name],"Array");var index=0;if((index=this["_"+name].indexOf(func))==-1)this["_"+name].push(func);else console.log("This Function allredy added for event "+name+" of layer "+this.GetName())}else{this["_"+name]=[];this.SetLisener(name,func)}return this};me.GetLisener=function(name){gizmo.Filter(name,"String");if(this["_"+name])return this["_"+name];return false};
me.GetTopestPrimitiveUnderPoint=function(O){gizmo.Filter(O,"Object");gizmo.Filter(O.x,"Number");gizmo.Filter(O.y,"Number");for(var i=this._primitives.length-1;i>=0;i--)if(this._primitives[i].IsLisened())if(this._primitives[i].HasPoint(O))return this._primitives[i];return null};me.GetChanged=function(){var changedPrimitives=[];var primitive;for(var name in this._primitives){primitive=this._primitives[name];if(primitive.IsChanged)changedPrimitives.push(primitive)}return new ArmContext.Primitives({"primitives":changedPrimitives})};
me.GetIntersectionGroups=function(){var firstPrimitive,secondPrimitive;for(var firstPrimitiveName in this._primitives){firstPrimitive=this._primitives[firstPrimitiveName];for(var secondPrimitiveName in this._primitives){secondPrimitive=this._primitives[secondPrimitiveName];if(firstPrimitive.BoundingBoxHaveIntersectionWith(secondPrimitive));}}};me.GetOneBoundingBox=function(){var primitive;var boundingBox;var OneBoundingBox=new ArmContext.BoundingBox;for(var name in this._primitives){primitive=this._primitives[name];
boundingBox=primitive.GetBoundingBox();OneBoundingBox=OneBoundingBox.SumWith(boundingBox)}return OneBoundingBox};me.Set=function(O){for(var name in O)switch(name){case "primitives":var primitives=O[name];gizmo.Filter(primitives,"Array");for(var primitive in primitives)this.Add(primitives[primitive]);break}};me._primitives=[];me.Set(O||{});return me};window.ArmContext.Primitives=Primitives})(window);(function(window){var Layer=function(O){gizmo.Filter(O,"Object");var me={};me.AddPrimitive=function(O){gizmo.Filter(O,"Object");this._primitives.Add(O)};me.RemovePrimitive=function(O){gizmo.Filter(O,"Object");return this._primitives.Remove(O)};me.SetLisener=function(name,func){gizmo.Filter(name,"String");gizmo.Filter(func,"Function");if(name&&func)if(this["_"+name]){gizmo.Filter(this["_"+name],"Array");var index=0;if((index=this["_"+name].indexOf(func))==-1)this["_"+name].push(func);else console.log("This Function allredy added for event "+
name+" of layer "+this.GetName())}else{this["_"+name]=[];this.SetLisener(name,func)}return this};me.GetLisener=function(name){gizmo.Filter(name,"String");if(this["_"+name])return this["_"+name];else return false};me.GetTopestPrimitiveUnderPoint=function(O){gizmo.Filter(O,"Object");gizmo.Filter(O.x,"Number");gizmo.Filter(O.y,"Number");return this._primitives.GetTopestPrimitiveUnderPoint(O)};me.SortByZindex=function(){this._primitives.SortByZindex()};me.SetCtx=function(O){gizmo.Filter(O,"CanvasRenderingContext2D");
this._ctx=O};me.SetName=function(O){gizmo.Filter(O,"String");this._name=O};me.GetCtx=function(){return this._ctx};me.GetName=function(){return this._name};me.GetDefaultName=function(){return this._defaultName};me.GetCanvasElement=function(){return this._canvasElement};me.SetContainerElement=function(O){this._containerElement=O};me.SetCanvasElement=function(O){gizmo.Filter(O,"HTMLCanvasElement");this._canvasElement=O};me.ListenMouseEvents=function(){var self=this;this.GetCanvasElement().onmousedown=
function(e){self.__onMouseDown(e)};this.GetCanvasElement().onmouseup=function(e){self.__onMouseUp(e)};this.GetCanvasElement().onmousemove=function(e){self.__onMouseMove(e)}};me.NotListenMouseEvents=function(){this.GetCanvasElement().onmousedown=null;this.GetCanvasElement().onmouseup=null;this.GetCanvasElement().onmousemove=null};me.Init=function(){var container;if(this._containerElementName==null)container=document.getElementsByTagName("body")[0];else container=document.getElementById(this._containerElementName);
var canvas=document.createElement("canvas");canvas.width=this._width;canvas.height=this._height;canvas.id=this._canvasElemetName;canvas.style.position="relative";container.appendChild(canvas);var ctx=canvas.getContext("2d");this.SetName(this._canvasElementName);this.SetContainerElement(container);this.SetCanvasElement(canvas);this.SetCtx(ctx);stats=new Stats;stats.setMode(0);document.body.appendChild(stats.domElement)};me.__draw=function(){var primitives=this._primitives.GetArray();for(var primitive in primitives)primitives[primitive].Draw()};
me.__clear=function(){stats.begin();var primitives=this._primitives.GetArray();for(var primitive in primitives)primitives[primitive].Clear()};me.__update=function(){var primitives=this._primitives.GetArray();for(var primitive in primitives)primitives[primitive].Update();stats.end()};me.ReDraw=function(){this.__clear();this.__draw();this.__update()};me.__onMouseDown=function(e){if(this._onMouseDown){gizmo.Filter(this._onMouseDown,"Array");for(var i in this._onMouseDown)this._onMouseDown[i](e)}};me.__onMouseUp=
function(e){if(this._onMouseUp){gizmo.Filter(this._onMouseUp,"Array");for(var i in this._onMouseUp)this._onMouseUp[i](e)}};me.__onMouseMove=function(e){if(this._onMouseMove){gizmo.Filter(this._onMouseMove,"Array");for(var i in this._onMouseMove)this._onMouseMove[i](e)}};me.Set=function(O){this.SetName(O.name||this.GetName());if(document.getElementById(this.GetName())==null)me._canvasElementName=this.GetName();else me._canvasElementName=this.GetName()+"."+ArmContext.GetNewUnicalNumber();this._containerElementName=
O.container||this._containerElementName;this._width=O.width||this._width;this._height=O.height||this._height;this._left=O.left||this._left;this._top=O.top||this._top;this._zindex=O.zindex||this._zindex;this.Init()};me._defaultName="Layer";me._name=me.GetDefaultName()+ArmContext.GetNewUnicalNumber();me._containerElement=null;me._canvasElement=null;me._ctx=null;me._width=500;me._height=500;me._left=0;me._top=0;me._onMouseDown=[];me._onMouseUp=[];me._onMouseMove=[];me._primitives=new ArmContext.Primitives;
me.Set(O);return me};window.ArmContext.Layer=Layer})(window);(function(window){var Loader=function(O){gizmo.Filter(O,"Object");var me={};me._loadList=[];me._countLoadedObjects=0;me._isLoadedAllObjects=false;me._typies=["image","song"];me.AddObject=function(name,path,type){gizmo.Filter(name,"String");gizmo.Filter(path,"String");gizmo.Filter(type,"String");this._loadList.push({name:name,path:path,type:type,object:null,isLoaded:false})};me._onLoadObject=function(object){gizmo.Filter(object,"Object");this._countLoadedObjects++;if(this.__onLoadObject){var progress=
this._countLoadedObjects/this._loadList.length*100;this.__onLoadObject(object,progress)}if(this._countLoadedObjects>=this._loadList.length)this._onLoadObjects()};me._onLoadObjects=function(){if(this.__onLoad)this.__onLoad();this._isLoadedAllObjects=true};me.Start=function(){var Hadlers=[];var self=this;Hadlers[0]=function(object){var image=new Image;var hadler=function(){object.object=image;object.isLoaded=true;self._onLoadObject(object)};image.onload=hadler;image.src=object.path};Hadlers[1]=function(name,
path){console.log("Has not realisaton")};for(var object in this._loadList){var typies=this._typies;switch(this._loadList[object].type){case typies[0]:Hadlers[0](this._loadList[object]);break;case typies[1]:Hadlers[1](this._loadList[object]);break}}return this};me.GetObject=function(name){gizmo.Filter(name,"String");var haveObjectWithName=false;var objectIndex=-1;var haveObject=function(element,index,array){if(element.name==name){haveObjectWithName=true;objectIndex=index}};this._loadList.forEach(haveObject);
if(haveObjectWithName&&objectIndex!=-1)if(this._loadList[objectIndex].isLoaded)return this._loadList[objectIndex].object;else throw Error("Object "+name+" is not loaded yet!");else throw Error("Object "+name+" is not defined!");};me.SetLisener=function(name,func){gizmo.Filter(name,"String");gizmo.Filter(func,"Function");if(name&&func)this["__"+name]=func;return this};me.Set=function(O){gizmo.Filter(O,"Object");var typies=this._typies;for(var type in O)switch(type){case typies[0]:for(var name in O[typies[0]])this.AddObject(name,
O[typies[0]][name],typies[0]);break;case typies[1]:for(var name in O[typies[1]])this.AddObject(name,O[typies[1]][name],typies[1]);break}};me.Set(O);return me};window.ArmContext.Loader=Loader})(window);
