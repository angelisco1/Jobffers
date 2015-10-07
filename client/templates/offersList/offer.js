Template.offer.events({
    "click .delete": function(event){
      Meteor.call("deleteOffer", this._id);
    },
    "click .show": function(event){
      // Meteor.call("showOffer", this._id);
      params = {offerId: this._id};
	  queryParams = {};
	  return FlowRouter.go("/offer/:offerId", params, queryParams);
    },
    "click .decline": function(event){
      var reason = prompt("Reason declined??");
      console.log(reason);
	  Meteor.call("declineOffer", this._id, reason);
	  // $(this).addClass('declined')
    }
});
