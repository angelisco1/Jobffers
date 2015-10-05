Meteor.publish("offers", function(){
	return Offers.find({}, {
		owner: this.userId	
	});
});