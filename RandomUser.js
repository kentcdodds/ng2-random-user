System.register("RandomUser", [], function($__export) {
  "use strict";
  var __moduleName = "RandomUser";
  var RandomUser;
  return {
    setters: [],
    execute: function() {
      RandomUser = $__export("RandomUser", (function() {
        var RandomUser = function RandomUser() {
          ;
        };
        return ($traceurRuntime.createClass)(RandomUser, {getUser: function() {
            var url = 'http://api.randomuser.me';
            return axios.get(url).then((function(response) {
              return response.data.results[0].user;
            }));
          }}, {});
      }()));
    }
  };
});
