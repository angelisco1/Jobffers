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
    },
    showOffer: function(offerId){
      var pathDef = "/offer/:offerId";
      var params = {offerId: offerId};
      var queryParams = {};
      // FlowRouter.setParams({offerId: offerId});
      var path = FlowRouter.path(pathDef, params, queryParams);
      console.log(path);
      FlowRouter.go(pathDef, params, queryParams);
    },
    addStatus: function(offerId, date, description, pcName, pcEmail, pcRol){
      console.log(date, description, pcName, pcEmail, pcRol);
      // Menu2.update({id:'54'},{$push:{details:{item:'calamari',price:'4.99'}}});
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