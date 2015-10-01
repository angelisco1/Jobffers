FlowRouter.route('/', {
	action: function(params, queryParams){
		console.log("Params: ", params);
		console.log("QueryParams: ", queryParams);
		FlowLayout.render("layout", {main: "offersList"});
		// BlazeLayout.render('layout', { top: "header", main: "offersList" });
	},
	name: 'home'
});


FlowRouter.route('/offer/:offerId', {
    action: function(params, queryParams){
    	console.log("Params: ", params);
    	console.log("QueryParams: ", queryParams);
    	// console.log(Offers.find({"_id": params.offerId});
		FlowLayout.render('layout', {main: 'singleOffer'});
		// BlazeLayout.render("layout", {top: "header", main: "singleOffer"});
    },
    name: 'show offer'
});
