Offers = new Mongo.Collection("offers");

if (Meteor.isClient) {
  Template.body.helpers({
    offers: function(){
      return Offers.find({});
    }
  });
  
  Template.offer.events({
    "click .delete": function(event){
      Meteor.call("deleteOffer", this._id);
    }
  });

  Meteor.methods({
    deleteOffer: function(offerId){
      Tasks.remove(offerId);
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    
  });
}
