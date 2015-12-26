/* A Factory Implemented as a Custom Type */
var Widget = require('./lib/widget');

var WidgetFactory = module.exports = function WidgetFactory (options) {
  this.cogs = options.cogs;
  this.bool = options.bool;
};

WidgetFactory.prototype.getRedWidget = function getRedWidget () {
  var widget = new Widget(this.cogs, this.bool);
  widget.paintPartA('red');
  widget.paintPartB('red');
  widget.paintPartC('red');
  return widget;
};
WidgetFactory.prototype.getBlueWidget = function getBlueWidget () {
  // ...
};
/* Howto widget */
//var Widget = require('./widget');

//module.exports = { // ...

