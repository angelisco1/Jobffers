Template.singleOffer.helpers({
    getOffer: function(){
    	console.log("....");
    	var id = FlowRouter.getParam('offerId');
    	var of = Offers.findOne({"_id": id});
    	console.log(of);
    	return of;
    }
});

Template.singleOffer.events({
	"submit form": function(event){
		event.preventDefault();
		var id = FlowRouter.getParam('offerId');
		var date = $(event.target).find('[name=date]').val();
    	var description = $(event.target).find('[name=description]').val();
    	var pcName = $(event.target).find('[name=pcName]').val();
    	var pcEmail = $(event.target).find('[name=pcEmail]').val();
    	var pcRol = $(event.target).find('[name=pcRol]').val();
		Meteor.call("addStatus", id, date, description, pcName, pcEmail, pcRol);
		document.getElementById("form-new-status").reset();
	}
});