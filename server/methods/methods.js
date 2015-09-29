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
      FlowRouter.path(pathDef, params, queryParams);
    },
    addStatus: function(date, description, pcName, pcEmail, pcRol){
      console.log(date, description, pcName, pcEmail, pcRol);
      // Offers.findOne().status.insert({
      //   date: date, //new Date().now.toLocaleString(),
      //   description: description,
      //   personContacted: {
      //     name: pcName,
      //     email: pcEmail,
      //     rol: pcRol
      //   },
      //   answered: false
      // });
    }
  });