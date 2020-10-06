sap.ui.define(
	function() {
	"use strict";

	var Formatter = {

		status :  function (sStatus) {
				if (sStatus === "Ahmedabad") {
					return "Success";
				} else if (sStatus === "Mahesana") {
					return "Information";
				}else {
					return "None";
				}
		},
		
	};

	return Formatter;

},  /* bExport= */ true);
