System.register("spinner", ["angular2/angular2"], function($__export) {
  "use strict";
  var __moduleName = "spinner";
  var Component,
      Template,
      Spinner;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      Template = $__m.Template;
    }],
    execute: function() {
      Spinner = $__export("Spinner", (function() {
        var Spinner = function Spinner() {
          ;
        };
        return ($traceurRuntime.createClass)(Spinner, {}, {});
      }()));
      Object.defineProperty(Spinner, "annotations", {get: function() {
          return [new Component({selector: 'spinner'}), new Template({inline: "<i class=\"fa fa-refresh fa-2x fa-spin\"></i>"})];
        }});
    }
  };
});
