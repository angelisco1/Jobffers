Template.offer.events({
    "click .delete": function(event){
      Meteor.call("deleteOffer", this._id);
    },
    "click .show": function(event){
      Meteor.call("showOffer", this._id);
    }
  });