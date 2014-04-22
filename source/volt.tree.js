var Tree = new (function(){
	var root = this;

	this.Node = function(Name, Attr){
		var 
			self = this,
			Name = Name,
			Attr = Attr,
			Collection = null
		;
		function init(){
			Collection = Attr && Attr.Collection && Attr.Collection instanceof root.Collection ? Attr.Collection : new root.Collection();
			return self;
		}
		function dispose(){}

		self.Collection = Collection;

		return init();
	};
	this.Collection = function(){
		var
			self = this, 
			nodes = {}
		;
		function init(){
			return self;
		}
		function appendNode(node){
			if(node && node instanceof root.Node){
				console.log("Ok. Its a Node");
			}else{
				console.log("Sorry but isnt a Node");
			}
			return self;
		}
		function Node(index){}
		// self.appendNode = appendNode;

		return init();
	};
	return this;
})();