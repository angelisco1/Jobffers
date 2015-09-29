Template.singleOffer.helpers({
    getStatuses: function(){
    	console.log("....");
    	console.log(this);
    	return Offers.find({"_id": 2}).status;
    }
});

Template.singleOffer.events({
	"submit form": function(event){
		event.preventDefault();
		var date = $(event.target).find('[name=date]').val();
    	var description = $(event.target).find('[name=description]').val();
    	var pcName = $(event.target).find('[name=pcName]').val();
    	var pcEmail = $(event.target).find('[name=pcEmail]').val();
    	var pcRol = $(event.target).find('[name=pcRol]').val();
		Meteor.call("addStatus", date, description, pcName, pcEmail, pcRol);
		document.getElementById("form-new-status").reset();
	}
});