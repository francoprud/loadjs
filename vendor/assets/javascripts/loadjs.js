function load(options, fn) {
  $(function(){
    var body = $("body");
    var currentController = body.data("controller");
    var currentAction = body.data("action");

    if (typeof options.controllers !== "undefined") {
      for (var controller in options.controllers) {
        var actions = options.controllers[controller];
        if (controller == currentController && actions.length == 0) {
          fn();
        } else {
          for (var i = 0, length = actions.length; i < length; ++i) {
            if (actions[i] == currentAction) {
              fn();
              break;
            }
          }
        }
      }
    } else {
      if (options.controller != currentController) {
        return;
      }
      if (typeof options.action === "undefined" || options.action == currentAction) {
        fn();
      }
    }
  });
}