/**
 * Описывает класс Loader.
 *
 * @constructor
 * @param {object} O
 * @param {string} O.images Содержит объект с именами и путями к некоторым изображениям   
 * @param {number} O.songs  Содержит объект с именами и путями к некоторой музыке
 * @this {ArmContext.Loader}
 * @author <a href="mailto:sogimu@nxt.ru">Alexander Lizin aka Sogimu</a>
 * @version 0.1
 *
 * @requires ArmContext/ArmContext.js
 */

(function(window) {
    var Loader = function( O ) {

        gizmo.Filter(O, "Object");

        var me = {};

        me._loadList = [];
        me._countLoadedObjects = 0;
        me._isLoadedAllObjects = false;
        me._typies = ["image","song"];

        me.AddObject = function(name, path, type) {
            gizmo.Filter(name, "String");
            gizmo.Filter(path, "String");
            gizmo.Filter(type, "String");

            this._loadList.push({name: name, path: path, type: type, object: null, isLoaded: false});

        };

        me._onLoadObject = function(object) {
            gizmo.Filter(object, "Object");
            
            this._countLoadedObjects++;
            if(this.__onLoadObject) {
                var progress = (this._countLoadedObjects / this._loadList.length) * 100;
                this.__onLoadObject( object, progress);
            };
            if(this._countLoadedObjects >= this._loadList.length) {
                this._onLoadObjects();
            }
        };

        me._onLoadObjects = function() {
            if(this.__onLoad) {
                this.__onLoad();
            };
            this._isLoadedAllObjects = true;

        };

        me.Start = function() {
            var Hadlers = [];

            var self = this;
            
            Hadlers[0] = function(object) {
                var image = new Image();
                var hadler = function() {
                    object.object = image;
                    object.isLoaded = true;
                    self._onLoadObject(object);
                };

                image.onload = hadler;
            
                image.src = object.path;
            };

            Hadlers[1] = function(name, path) {
                // Has not realisaton
                console.log("Has not realisaton");

            };

            for(var object in this._loadList) {

                var typies = this._typies;
                
                switch( this._loadList[object].type ) {
                    case typies[0] : {
                        Hadlers[0]( this._loadList[object] );
                        
                    }; break;
                    
                    case typies[1] : {
                        Hadlers[1]( this._loadList[object] );
                    };
                    break;
                };
            
            };

            return this;

        };

        me.GetObject = function(name) {
            gizmo.Filter(name, "String");

            var haveObjectWithName = false;
            var objectIndex = -1;

            var haveObject = function(element, index, array) {
                if(element.name == name) {
                    haveObjectWithName = true;
                    objectIndex = index;
                };
            };
            this._loadList.forEach(haveObject);

            if(haveObjectWithName && objectIndex != -1) {
                if(this._loadList[objectIndex].isLoaded) {
                    return this._loadList[objectIndex].object;

                } else {
                    throw Error("Object " + name + " is not loaded yet!");

                };

            } else {
                throw Error("Object " + name + " is not defined!");

            };
        };

        me.SetLisener = function(name, func) {
            gizmo.Filter(name, "String");
            gizmo.Filter(func, "Function");
            if(name && func) {
                this['__' + name] = func;
            }

            return this;

        };

        me.Set = function(O) {
            gizmo.Filter(O, "Object");
            
            var typies = this._typies;
            
            for(var type in O) {
                switch( type ) {
                    case typies[0] : {
                        for (var name in O[ typies[0] ]) {
                            this.AddObject( name, O[ typies[0] ][name], typies[0] );
                        };
                    }; break;
                    
                    case typies[1] : {
                        for (var name in O[ typies[1] ]) {
                            this.AddObject( name, O[ typies[1] ][name], typies[1] );
                        };
                    };
                    break;
                }
            }

        };

        me.Set( O );

        return me;

    };

    window.ArmContext.Loader = Loader;

})(window);     