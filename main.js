System.register("main", ["angular2/angular2", "person-card", "RandomUser"], function($__export) {
  "use strict";
  var __moduleName = "main";
  var Component,
      Template,
      bootstrap,
      If,
      PersonCard,
      RandomUser,
      App;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      Template = $__m.Template;
      bootstrap = $__m.bootstrap;
      If = $__m.If;
    }, function($__m) {
      PersonCard = $__m.PersonCard;
    }, function($__m) {
      RandomUser = $__m.RandomUser;
    }],
    execute: function() {
      App = $__export("App", (function() {
        var App = function App(randomUser) {
          this.getUser = randomUser.getUser;
          this.getRandomUser();
        };
        return ($traceurRuntime.createClass)(App, {
          getRandomUser: function() {
            var $__0 = this;
            this.toggleLoading(true);
            this.getUser().then((function(user) {
              $__0.user = user;
              $__0.toggleLoading(false);
            })).catch(this.toggleLoading.bind(this, false));
          },
          toggleLoading: function(state) {
            this.loading = typeof state === 'boolean' ? state : !this.loading;
          }
        }, {});
      }()));
      Object.defineProperty(App, "annotations", {get: function() {
          return [new Component({
            selector: 'main',
            services: [RandomUser]
          }), new Template({
            inline: "\n    <div class=\"new-user-button\">\n      <button class=\"ru-button --primary\" autofocus (click)=\"getRandomUser()\">\n        <i class=\"fa fa-user\"></i>\n        Get New User\n      </button>\n    </div>\n    <person-card [user]=\"user\" [loading]=\"loading\"></person-card>\n  ",
            directives: [PersonCard]
          })];
        }});
      Object.defineProperty(App, "parameters", {get: function() {
          return [[RandomUser]];
        }});
      bootstrap(App);
    }
  };
});
