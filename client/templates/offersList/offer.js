Template.offer.events({
    "click .delete": function(event){
      Meteor.call("deleteOffer", this._id);
    },
    "click .show": function(event){
      // Meteor.call("showOffer", this._id);
      params = {offerId: this._id};
	  queryParams = {};
	  return FlowRouter.go("/offer/:offerId", params, queryParams);
    }
});
