Meteor.subscribe("offers");

Template.offersList.helpers({
    getOffers: function(){
    	return Offers.find({owner: Meteor.userId()}, {sort: {createdAt: -1}});
    }
});

Template.offersList.events({
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