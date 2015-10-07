Template._header.helpers({
  pathHome: function(){
  	var params = {};
  	var queryParams = {};
  	var routeName = "/";
    var path = FlowRouter.path(routeName, params, queryParams);
    return path;
  }
});