sap.ui.define(["sap/ui/test/opaQunit","./pages/App"],function(){"use strict";QUnit.module("Demo testing");opaTest("Should open the Sort dialog",function(e,o,t){e.iStartMyUIComponent({componentConfig:{name:"sap.scholar.demo"}});o.onTheAppPage.iPressTheSortButton();t.onTheAppPage.iShouldSeeTheSortDialog();o.onTheAppPage.iPressOnTheOkButtonOnSortDialog()});opaTest("Should be able to navigate on click of first item",function(e,o,t){o.onTheAppPage.iPressOnTheColumnListItem();t.iTeardownMyApp()})});