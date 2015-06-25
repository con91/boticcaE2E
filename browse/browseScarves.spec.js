var Application = require('../application/application.po.js');
var HomePage = require('../homepage/homepage.po.js');
var BrowsePage = require('./browse.po.js')

describe('Browse page - Scarves', function () {

	var app = new Application();
	var browsePage = new BrowsePage();
	app.getBrowse();
	
	
	
	
	//Scarves category check
	it('should have a category, Scarves', function () {
		browsePage.scarvesCheck();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Scarves/');
	});

	it('should have Scarves sub-category Silk Scarves', function () {
		browsePage.showMore.click();
		browsePage.row0.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Scarves/Silk%20Scarves');
		expect(browsePage.selectedFacets.getText()).toContain('/ Silk Scarves');
		expect(browsePage.renfinedBy.getText()).toContain('Silk Scarves');
	});

	it('should have Scarves sub-category Printed Scarves', function () {
		browsePage.row1.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Scarves/Printed%20Scarves');
		expect(browsePage.selectedFacets.getText()).toContain('/ Printed Scarves');
		expect(browsePage.renfinedBy.getText()).toContain('Printed Scarves');
	});

	it('should have Scarves sub-category Wool Scarves', function () {
		browsePage.row2.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Scarves/Wool%20Scarves');
		expect(browsePage.selectedFacets.getText()).toContain('/ Wool Scarves');
		expect(browsePage.renfinedBy.getText()).toContain('Wool Scarves');
	});

	it('should have Scarves sub-category Pleated Scarves', function () {
		browsePage.row3.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Scarves/Pleated%20Scarves');
		expect(browsePage.selectedFacets.getText()).toContain('/ Pleated Scarves');
		expect(browsePage.renfinedBy.getText()).toContain('Pleated Scarves');
	});

	it('should have Scarves sub-category Other Scarves', function () {
		browsePage.row4.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Scarves/Other%20Scarves');
		expect(browsePage.selectedFacets.getText()).toContain('/ Other Scarves');
		expect(browsePage.renfinedBy.getText()).toContain('Other Scarves');
	});

	it('should have Scarves sub-category Knitted Scarves', function () {
		browsePage.row5.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Scarves/Knitted%20Scarves');
		expect(browsePage.selectedFacets.getText()).toContain('/ Knitted Scarves');
		expect(browsePage.renfinedBy.getText()).toContain('Knitted Scarves');
	});

	it('should have Scarves sub-category Cotton Scarves', function () {
		browsePage.row6.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Scarves/Cotton%20Scarves');
		expect(browsePage.selectedFacets.getText()).toContain('/ Cotton Scarves');
		expect(browsePage.renfinedBy.getText()).toContain('Cotton Scarves');
	});


	it('should have Scarves sub-category Embellished Scarves', function () {
		browsePage.row7.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Scarves/Embellished%20Scarves');
		// expect(browsePage.selectedFacets.getText()).toContain('/ Embellished Scarves');
		expect(browsePage.renfinedBy.getText()).toContain('Embellished Scarves');

	});

	it('should have Scarves sub-category Woven Scarves', function () {
		browsePage.row8.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Scarves/Woven%20Scarves');
		expect(browsePage.selectedFacets.getText()).toContain('/ Woven Scarves');
		expect(browsePage.renfinedBy.getText()).toContain('Woven Scarves');
	});

});