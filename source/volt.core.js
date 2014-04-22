(function (win,doc,undefined) {
 
	var Volt = (function () {
 
		 var core = function ( args ) {
			return new core.fn.init( args );
		};
 
		core.fn = core.prototype = {
			init: function ( args ) {
				core._args = args;
				core._libs = {};
				return Volt;
			}
		};
 
		core.using = function (lib) {
			console.log(lib in core._libs);
		 	if(!(lib in core._libs)){
		 		var lb = doc.createElement('script');
		 		lb.setAttribute('type','text/javascript');
		 		lb.setAttribute('src','../source/volt.' + lib + '.js');
		 		doc.getElementsByTagName('head')[0].appendChild(lb);
		 		core._libs[lib] = true;
		 	}else{
		 		console.log('Lib ' + lib + ' has been loaded yet.')
		 	}
			return this;
		};
 
		// Return
		return core;
 
	})();
 
	window.Volt = window.$$ = Volt;
 
})(window,document);

// (function(win, doc, undefined){
// 	var Volt = function(){ return new Volt.fn.init(arguments);}
// 	Volt.fn = Volt.prototype;

// 	var init = Volt.fn.init = function(){
// 		Volt._libs = {};
// 		return this;
// 	};
// 	init.prototype = Volt.fn = {
// 		using : function(library){
// 			if(Volts._libs[library] === undefined){
// 				var script = doc.createElement('script');
// 				script.setAttribute('type','text/javascript');
// 				script.setAttribute('src',library+'.js');
// 				doc.getElementsByTagName('head')[0].appendChild(script);
// 				Volts._libs[library] = script;
// 			}else{
// 				return this;
// 			}
// 		}
// 	};
// 	window.Volt = Volt;
// })(window, document);

Volt().using('Tree');
Volt().using('Tree');
