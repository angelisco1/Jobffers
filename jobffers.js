Offers = new Mongo.Collection("offers");

if (Meteor.isClient) {

  Template.body.helpers({
    offers: function(){
      return Offers.find({});
    }
  });

  Template.body.events({
    "submit form": function(event){
      event.preventDefault();
      var companyName = $(event.target).find('[name=companyName]').val();
      var companyUrl = $(event.target).find('[name=companyUrl]').val();
      var stack = $(event.target).find('[name=stack]').val();
      Meteor.call("addOffer", companyName, companyUrl, stack);
    },
    "click .add-new-offer": function(event){
      document.getElementById("form-new-offer").reset();
    }
  });

  Template.offer.events({
    "click .delete": function(event){
      Meteor.call("deleteOffer", this._id);
    }
  });

}

Meteor.methods({
  addOffer: function(companyName, companyUrl, stack){
    Offers.insert({
      company: {
        name: companyName,
        url: companyUrl
      },
      stack: stack,
      declined: {
        isDeclined: false,
        reason: ""
      },
      followup: {
        done: false,
        date: null
      },
      status: []
    });
  },
  deleteOffer: function(offerId){
    Offers.remove(offerId);
  }
});


if (Meteor.isServer) {
  Meteor.startup(function () {
    
  });
}
