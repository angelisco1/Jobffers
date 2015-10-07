FlowRouter.route('/', {
	subscriptions: function(params){

	},
	action: function(params, queryParams){
		FlowLayout.render("layout", {main: "offersList"});
	},
	name: 'home'
});


FlowRouter.route('/offer/:offerId', {
    subscriptions: function(params){

	},
	action: function(params, queryParams){
		FlowLayout.render('layout', {main: 'singleOffer'});
    },
    name: 'show offer'
});
