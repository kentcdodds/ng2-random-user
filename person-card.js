System.register("person-card", ["angular2/angular2", "angular2/di"], function($__export) {
  "use strict";
  var __moduleName = "person-card";
  var Component,
      Template,
      For,
      If,
      bind,
      PersonCard;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      Template = $__m.Template;
      For = $__m.For;
      If = $__m.If;
    }, function($__m) {
      bind = $__m.bind;
    }],
    execute: function() {
      PersonCard = $__export("PersonCard", (function() {
        var PersonCard = function PersonCard(moment) {
          this.properties = [{
            title: 'Name',
            getVal: (function(user) {
              return upperWords((user.name.first + " " + user.name.last));
            })
          }, {
            title: 'Username',
            getVal: (function(user) {
              return user.username;
            })
          }, {
            title: 'Email',
            getVal: (function(user) {
              return user.email;
            })
          }, {
            title: 'Address',
            getVal: (function(user) {
              return (upperWords((user.location.street + ", " + user.location.city + ", " + user.location.state + " " + user.location.zip)));
            })
          }, {
            title: 'Birthday',
            getVal: (function(user) {
              return moment(user.dob * 1000).format('MMMM Do, YYYY');
            })
          }, {
            title: 'Cell Phone Number',
            getVal: (function(user) {
              return user.cell;
            })
          }];
          function upperWords(string) {
            return string.split(' ').map((function(word) {
              return word.substr(0, 1).toUpperCase() + word.substr(1);
            })).join(' ');
          }
        };
        return ($traceurRuntime.createClass)(PersonCard, {}, {});
      }()));
      Object.defineProperty(PersonCard, "annotations", {get: function() {
          return [new Component({
            selector: 'person-card',
            bind: {
              user: 'user',
              loading: 'loading'
            },
            services: [bind(moment).toValue(moment)]
          }), new Template({
            inline: "\n    <div class=\"person-card\">\n      <div *if=\"loading\" class=\"spinner-container\">\n        <i class=\"fa fa-refresh fa-2x fa-spin\"></i>\n      </div>\n      <div *if=\"!loading\">\n        <div *if=\"!user\" class=\"no-person\">\n          <small>please select a user</small>\n        </div>\n        <div *if=\"user\">\n          <div class=\"person-avatar-container\">\n            <img [src]=\"user.picture.medium\" alt=\"User Avatar\" />\n          </div>\n\n          <div class=\"person-properties\">\n            <div *for=\"var prop of properties\">\n              <strong>{{prop.title}}:</strong> {{prop.getVal(user)}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
            directives: [If, For]
          })];
        }});
      Object.defineProperty(PersonCard, "parameters", {get: function() {
          return [[moment]];
        }});
    }
  };
});
