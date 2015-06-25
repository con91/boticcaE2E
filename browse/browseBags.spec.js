var Application = require('../application/application.po.js');
var HomePage = require('../homepage/homepage.po.js');
var BrowsePage = require('./browse.po.js')

describe('Browse page - Bags', function () {

	var app = new Application();
	var browsePage = new BrowsePage();
	app.getBrowse();
	
	//Bags category checks
	it('should have a category, Bags', function () {
		browsePage.bagsCheck();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bags/');
	});

	it('should have Bags sub-category Shoulder Bags', function () {
		browsePage.showMore.click();
		browsePage.row0.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bags/Shoulder%20Bags');
		expect(browsePage.selectedFacets.getText()).toContain('/ Shoulder Bags');
		expect(browsePage.renfinedBy.getText()).toContain('Shoulder Bags');
	});

	it('should have Bags sub-category Clutch Bags', function () {
		browsePage.row1.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bags/Clutch%20Bags');
		expect(browsePage.selectedFacets.getText()).toContain('/ Clutch Bags');
		expect(browsePage.renfinedBy.getText()).toContain('Clutch Bags');
	});

	it('should have Bags sub-category Backpacks', function () {
		browsePage.row2.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bags/Backpacks');
		expect(browsePage.selectedFacets.getText()).toContain('/ Backpacks');
		expect(browsePage.renfinedBy.getText()).toContain('Backpacks');
	});

	it('should have Bags sub-category Totes', function () {
		browsePage.row3.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bags/Totes');
		expect(browsePage.selectedFacets.getText()).toContain('/ Totes');
		expect(browsePage.renfinedBy.getText()).toContain('Totes');
	});

	it('should have Bags sub-category Other Bags', function () {
		browsePage.row4.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bags/Other%20Bags');
		expect(browsePage.selectedFacets.getText()).toContain('/ Other Bags');
		expect(browsePage.renfinedBy.getText()).toContain('Other Bags');
	});

	it('should have Bags sub-category Cross Body Bags', function () {
		browsePage.row5.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bags/Cross%20Body%20Bags');
		expect(browsePage.selectedFacets.getText()).toContain('/ Cross Body Bags');
		expect(browsePage.renfinedBy.getText()).toContain('Cross Body Bags');
	});

	it('should have Bags sub-category Satchels', function () {
		browsePage.row6.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bags/Satchels');
		expect(browsePage.selectedFacets.getText()).toContain('/ Satchels');
		expect(browsePage.renfinedBy.getText()).toContain('Satchels');
	});

	it('should have Bags sub-category Weekenders / Travel bags', function () {
		browsePage.row7.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bags/Weekenders%20/%20Travel%20bags');
		expect(browsePage.selectedFacets.getText()).toContain('/ Weekenders / Travel bags');
		expect(browsePage.renfinedBy.getText()).toContain('Weekenders / Travel bags');
	});

	it('should have Bags sub-category Box Clutches', function () {
		browsePage.row8.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bags/Box%20Clutches');
		expect(browsePage.selectedFacets.getText()).toContain('/ Box Clutches');
		expect(browsePage.renfinedBy.getText()).toContain('Box Clutches');
	});

	it('should have Bags sub-category One of a Kind', function () {
		browsePage.row9.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bags/One%20of%20a%20Kind');
		expect(browsePage.selectedFacets.getText()).toContain('/ One of a Kind');
		expect(browsePage.renfinedBy.getText()).toContain('One of a Kind');
	});

	it('should have Bags sub-category Pouches', function () {
		browsePage.row10.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bags/Pouches');
		expect(browsePage.selectedFacets.getText()).toContain('/ Pouches');
		expect(browsePage.renfinedBy.getText()).toContain('Pouches');
	});










});