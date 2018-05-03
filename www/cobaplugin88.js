// Empty constructor
function CobaPlugin88() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
CobaPlugin88.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'CobaPlugin88', 'show', [options]);
}

// Installation constructor that binds ToastyPlugin to window
CobaPlugin88.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.CobaPlugin88 = new CobaPlugin88();
  return window.plugins.CobaPlugin88;
};
cordova.addConstructor(CobaPlugin88.install);
