// JavaScript Document

define(function (require, exports, module) {
	function zoom (obj1, obj2) {
		var disX, disY, disW, disH;
		obj2.mousedown(function (ev) {
			disW = obj1.width();
			disH = obj1.height();
			disX = ev.pageX;
			disY = ev.pageY;
			
			$(document).mousemove(function (ev) {
				var W = disW - (disX - ev.pageX);
				var H = disH - (disY - ev.pageY);
				W = require('./limit.js').limit(W, 100, 700);
				H = require('./limit.js').limit(H, 70, 500);
				obj1.css( {
					'width': W,
					'height': H
				});
			});
			
			$(document).mouseup(function () {
				$(document).unbind('mousemove');
				$(document).unbind('mousemoup');
			});
			
		});
	}
	
	exports.zoom = zoom;
});
