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
      $('#add-offer-modal').modal('toggle');
      document.getElementById("form-new-offer").reset();
    },
    "click .add-new-offer": function(event){
    }
  });

  Template.offer.events({
    "click .delete": function(event){
      Meteor.call("deleteOffer", this._id);
    }
  });

}



if (Meteor.isServer) {
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
  Meteor.startup(function () {
    
  });
}
