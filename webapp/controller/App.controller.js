sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	
	return Controller.extend("logaligroup.SAPUI5.controller.App", {
	
		onShowHello: function () {
			/*eslint-disable no-alert*/
			alert("Hello World");
				/*eslint-enable no-alert*/
		}

	});
});