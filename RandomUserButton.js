System.register("RandomUserButton", ["angular2/angular2"], function($__export) {
  "use strict";
  var __moduleName = "RandomUserButton";
  var Component,
      Template,
      RandomUserButton;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      Template = $__m.Template;
    }],
    execute: function() {
      RandomUserButton = $__export("RandomUserButton", (function() {
        var RandomUserButton = function RandomUserButton() {
          ;
        };
        return ($traceurRuntime.createClass)(RandomUserButton, {}, {});
      }()));
      Object.defineProperty(RandomUserButton, "annotations", {get: function() {
          return [new Component({selector: 'ru-button'}), new Template({inline: "\n    <button class=\"ru-button --primary\">\n      <content select=\"icon\"></content>\n      <content select=\"text\"></content>\n    </button>\n  "})];
        }});
    }
  };
});
