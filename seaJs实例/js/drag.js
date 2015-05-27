// JavaScript Document
define(function (require, exports, module) {
	function drag (obj) {
		obj.mousedown(function (ev) {
			var disX = ev.pageX - obj.offset().left;
			var disY = ev.pageY - obj.offset().top;
			
			$(document).mousemove(function (ev) {
				var L = require('./limit.js').limit(ev.pageX - disX, 0, $(window).width() - obj.width());
				var T = require('./limit.js').limit(ev.pageY - disY, 0, $(window).height() - obj.height());
				obj.css({
					'left': L,
					'top': T
				});
			});
			
			$(document).mouseup(function () {
				$(document).unbind('mousemove');
				$(document).unbind('mouseup');
			});
		});
	}
	exports.drag = drag;
});