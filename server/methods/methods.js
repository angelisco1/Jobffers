Meteor.methods({
    addOffer: function(companyName, companyUrl, stack){
      if(! Meteor.userId()){
        throw new Meteor.Error('not authorized!!!');
      }
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
        status: [],
        owner: Meteor.userId(),
        username: Meteor.user().username,
        createdAt: new Date()
      });
    },
    deleteOffer: function(offerId){
      var offer = Offers.findOne(offerId);
      if(offer.owner !== Meteor.userId()){
        throw new Meteor.Error("not-authorized");
      }
      Offers.remove(offerId);
    },
    showOffer: function(offerId){
      var pathDef = "/offer/:offerId";
      var params = {offerId: offerId};
      var queryParams = {};
      FlowRouter.go(pathDef, params, queryParams);
    },
    addStatus: function(offerId, date, description, pcName, pcEmail, pcRol){
      Offers.update({"_id": offerId}, {
        $push: { 
          status: 
          {
            date: date,
            description: description,
            personContacted: {
              name: pcName,
              email: pcEmail,
              rol: pcRol
            },
            answered: false
          }
        }
      });
    }
  });