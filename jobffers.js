// Offers = new Mongo.Collection("offers");

if (Meteor.isClient) {
  Template.body.helpers({
    offers: [
      {
        company: {
          name: "BQ", 
          url: "www.bq.com"
        }, 
        stack: "back", 
        reasonDeclined: "", 
        status: [
            {
              date: new Date(),
              description: "Enviado curriculum",
              personContacted: {
                name: "alex",
                email: "alex@bq.com",
                rol: "PM"
              },
              answered: true
            },
            {
              date: new Date(),
              description: "Entrevista confirmada para el dia 22/04/15",
              personContacted: {
                name: "alex",
                email: "alex@bq.com",
                rol: "PM"
              },
              answered: false
            }
          ],
        followup: {
          done: false,
          date: null
        }
      },
      {
        company: {
          name: "Lextrend", 
          url: "www.lextrend.com"
        }, 
        stack: "back", 
        reasonDeclined: "", 
        status: [
            {
              date: new Date(),
              description: "Entrevista realizada, ya me llamaran",
              personContacted: {
                name: "carlos oca",
                email: "carlos@lextrend.com",
                rol: "CEO"
              },
              answered: false
            }
          ],
        followup: {
          done: false,
          date: null
        }
      },
      {
        company: {
          name: "Ideas4All", 
          url: "www.ideas4all.com"
        }, 
        stack: "back", 
        reasonDeclined: "", 
        status: [
            {
              date: new Date(),
              description: "Enviado curriculum",
              personContacted: {
                name: "alberto",
                email: "alberto@ideas4all.com",
                rol: "Recruiter"
              },
              answered: true
            },
            {
              date: new Date(),
              description: "Rechazado porque han cogido a alguien",
              personContacted: {
                name: "alberto",
                email: "alberto@ideas4all.com",
                rol: "Recruiter"
              },
              answered: true
            }
          ],
        followup: {
          done: true,
          date: new Date()
        }
      }
    ]
  });

  

}

if (Meteor.isServer) {

}
