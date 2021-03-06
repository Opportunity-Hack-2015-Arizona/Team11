// Stories = new Mongo.Collection("stories");
Alerts = new Mongo.Collection("alerts");
Articles = new Mongo.Collection("articles");

if (Meteor.isClient) {
  // counter starts at 0
  // Session.setDefault('counter', 0);

  // Template.hello.helpers({
  //   counter: function () {
  //     return Session.get('counter');
  //   }
  // });
  //
  // Template.hello.events({
  //   'click button': function () {
  //     // increment the counter when button is clicked
  //     Session.set('counter', Session.get('counter') + 1);
  //   }
  // });
  Template.home.helpers({
    alerts: function(){
      return Alerts.find({});
    }
  });

  Template.news.helpers({
    articles: function(){
        return Articles.find({});
    }
  });

  Template.home.events({
    "submit .new-alert": function(event){
      event.preventDefault();
      var text = event.target.text.value;

      Alerts.insert({
        text: text,
        createdAt: new Date()
      });

  Template.news.events({
    "submit .new-article": function(event){
      event.preventDefault();
      var title = "New Article";
      var text = event.target.text.value;

      Articles.insert({
        title: title,
        text: text,
        createdAt: new Date()
      });
    }
  });

      // TODO: Send push notification

      Push.enabled(true);

      Push.send({
        from: 'Test',
        title: 'Hello',
        text: text,
        badge: 1,
        query: {}
      });

      event.target.text.value = "";
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // // code to run on server at startup

    // var Twit = Meteor.npmRequire('twit');
    //
    // var T = new Twit({
    //     consumer_key:         '0945keBeV5DFclV7n2zn85QSK', // API key
    //     consumer_secret:      '4ABkQUHp8eszNi0RrKrfi8iuo2WOBlBD1tHH2cA0fGTfJtKIlt', // API secret
    //     access_token:         '3852406454-rQjl55wyLubOQnRbNZauZWc2tkEXqK1FmyS5juL',
    //     access_token_secret:  'yPnKaX3UpSzfoBfduI6ZJvzkvr58FLUC8kYQhiqCiwKem'
    // });
    //
    // //  search twitter for all tweets containing the word 'banana'
    // //  since Nov. 11, 2011
    // T.get('statuses/user_timeline',
    //     {
    //         screen_name: "ICANChandler"
    //     },
    //     function(err, data, response) {
    //         // console.log(data);
    //     }
    // );
  });
}

Router.configure({
    layoutTemplate: 'main'
});

Router.route('/', function(){
  this.render('home');
});

Router.route('/news', function(){
  this.render('news');
});

Router.route('/calendar', function(){
  this.render('calendar');
});

Router.route('/contact', function(){
  this.render('contact');
});

Router.route('/spanish', function(){
  this.render('spanish');
});
