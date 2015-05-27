// JavaScript Document

define(function (require, exports, module) {
	function limit(iNum, iMin, iMax) {
		if(iNum > iMax) {
			return iMax
		} else if(iNum < iMin) {
			return iMin
		} else {
			return iNum
		}
	}
	
	exports.limit = limit;
});