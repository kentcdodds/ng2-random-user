System.register("main", ["angular2/angular2", "user-card", "RandomUser"], function($__export) {
  "use strict";
  var __moduleName = "main";
  var Component,
      Template,
      bootstrap,
      If,
      UserCard,
      RandomUser,
      App;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      Template = $__m.Template;
      bootstrap = $__m.bootstrap;
      If = $__m.If;
    }, function($__m) {
      UserCard = $__m.UserCard;
    }, function($__m) {
      RandomUser = $__m.RandomUser;
    }],
    execute: function() {
      App = $__export("App", (function() {
        var App = function App(randomUser) {
          this.buttonText = 'Get New User';
          this.getUser = randomUser.getUser;
        };
        return ($traceurRuntime.createClass)(App, {getRandomUser: function() {
            var $__0 = this;
            this.loading = true;
            this.getUser().then((function(user) {
              $__0.user = user;
              $__0.loading = false;
            })).catch((function() {
              return $__0.loading = false;
            }));
          }}, {});
      }()));
      Object.defineProperty(App, "annotations", {get: function() {
          return [new Component({
            selector: 'main',
            services: [RandomUser]
          }), new Template({
            directives: [UserCard],
            inline: "\n    <div class=\"new-user-button\">\n      <button class=\"ru-button --primary\" autofocus (click)=\"getRandomUser()\">\n        <i class=\"fa fa-user\"></i>\n        {{buttonText}}\n      </button>\n    </div>\n    <user-card [user]=\"user\" [loading]=\"loading\">\n      <div loading>\n        <i class=\"fa fa-refresh fa-2x fa-spin\"></i>\n      </div>\n      <div no-user>\n        <small>please click on \"{{buttonText}}\"</small>\n      </div>\n    </user-card>\n  "
          })];
        }});
      Object.defineProperty(App, "parameters", {get: function() {
          return [[RandomUser]];
        }});
      bootstrap(App);
    }
  };
});
