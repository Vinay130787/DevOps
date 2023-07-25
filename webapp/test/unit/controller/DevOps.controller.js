/*global QUnit*/

sap.ui.define([
	"devops/controller/DevOps.controller"
], function (Controller) {
	"use strict";

	QUnit.module("DevOps Controller");

	QUnit.test("I should test the DevOps controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
