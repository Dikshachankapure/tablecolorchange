sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"poc/tablecolorchange/model/Formatter"
], function (Controller,Formatter) {
	"use strict";

	return Controller.extend("poc.tablecolorchange.controller.View1", {
		formatter: Formatter,
		onInit: function () {

			var oModelTrip = this.getOwnerComponent().getModel("TripSet");
			this.getView().setModel(oModelTrip);
			var tblTrips = this.getView().byId("tblTrips");
			if (tblTrips.getItems().length > 0) {
				for (var i = 0; i < tblTrips.getItems().length; i++)
				for (var j = 0; j < tblTrips.getItems()[i].getCells().length; j++) {
					var aItems = tblTrips.getItems()[i].getCells();
					if (aItems[j] === aItems[0]) {
						continue;
					} else {
						aItems[j].addStyleClass("tblcolorred");
					}
				}
			}

		}
	});
});