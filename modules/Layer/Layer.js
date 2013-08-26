
(function(window) {
	var Layer = function(O) {

		gizmo.Filter(O,"Object");

		var me = {};

		me.GetDefaultName = function() {
			return this._defaultName;
		};

		me.SetCtx = function( O ) {
			gizmo.Filter(O,"CanvasRenderingContext2D");
			this._ctx = O;
		};

		me.GetCtx = function() {
			return this._ctx;
		};

		me.SetContainerElement = function( O ) {
			// gizmo.Filter(O,"HTMLBodyElement");
			this._containerElement = O;
		};

		me.SetCanvasElement = function( O ) {
			gizmo.Filter(O,"HTMLCanvasElement");
			this._canvasElement = O;
		};

		me.SetName = function() {
			gizmo.Filter(O,"Object");
			this._canvasElemetName = O;			
		}

		me.Set = function( O ) {
			var canvasElemetName = O.name || this._canvasElemetName;
			var containerElementName = O.container || this._containerElementName;
			var width = O.width || this._width;
			var height = O.height || this._height;
			var left = O.left || this._left;
			var top = O.top || this._top;

			this.Init( containerElementName, canvasElemetName, width, height, left, top );
		};

		me.Init = function( containerElementName, canvasElemetName, width, height, left, top) {
			// try {
				var container;
				if(containerElementName == null) {
					container = document.getElementsByTagName("body")[0];
				} else {
					container = document.getElementById(containerElementName);
				}
				
				var canvas = document.createElement('canvas');
				canvas.width = width;
				canvas.height = height;
				canvas.id = canvasElemetName;
				canvas.style.position = 'absolute';
				container.appendChild( canvas );
				var ctx = canvas.getContext('2d');

				this.SetName( canvasElemetName );
				this.SetContainerElement( container );
				this.SetCanvasElement( canvas );
				this.SetCtx( ctx );
			// };

			// catch(e) {
			// 	console.log("Same error into Method Init of class Layer!");
			// };
		};


		me._defaultName = "Layer";
		me._ctx = null;

	        	var layerName = me.GetDefaultName() + ArmContext.GetNewUnicalNumber();
		if(document.getElementById(layerName) == null) {
			me._canvasElemetName = layerName;
		};
	 		
		me._canvasElement = null;
		me._containerElement = null;
		me._width = 500;
		me._height = 500;
		me._left = 0;
		me._top = 0;


		me.Set( O );

		return me;

	};

	window.ArmContext.Layer = Layer;

})(window);