var Application = require('../application/application.po.js');
var HomePage = require('../homepage/homepage.po.js');
var BrowsePage = require('./browse.po.js')

describe('Browse page - Rings', function () {

	var app = new Application();
	var browsePage = new BrowsePage();
	app.getBrowse();
	
	
	//Rings Category checks

	it('should have a category, Rings', function () {
		browsePage.ringsCheck();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Rings/');
	});

	it('should have Rings sub-category Cocktail Rings', function () {
		browsePage.row0.click();
		browsePage.showMore.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Rings/Cocktail%20Rings');
		expect(browsePage.selectedFacets.getText()).toContain('/ Cocktail Rings');
		expect(browsePage.renfinedBy.getText()).toContain('Cocktail Rings');
	});

	it('should have Rings sub-category Stackable Rings', function () {
		browsePage.row1.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Rings/Stackable%20Rings');
		expect(browsePage.selectedFacets.getText()).toContain('/ Stackable Rings');
		expect(browsePage.renfinedBy.getText()).toContain('Stackable Rings');
	});

	it('should have Rings sub-category One of a Kind', function () {
		browsePage.row2.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Rings/One%20of%20a%20Kind');
		expect(browsePage.selectedFacets.getText()).toContain('/ One of a Kind');
		expect(browsePage.renfinedBy.getText()).toContain('One of a Kind');
	});

	it('should have Rings sub-category Double Rings', function () {
		browsePage.row3.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Rings/Double%20Rings');
		expect(browsePage.selectedFacets.getText()).toContain('/ Double Rings');
		expect(browsePage.renfinedBy.getText()).toContain('Double Rings');
	});

	it('should have Rings sub-category Other Rings', function () {
		browsePage.row4.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Rings/Other%20Rings');
		expect(browsePage.selectedFacets.getText()).toContain('/ Other Rings');
		expect(browsePage.renfinedBy.getText()).toContain('Other Rings');
	});

	it('should have Rings sub-category Knuckle/Midi Rings', function () {
		browsePage.row5.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Rings/Knuckle/Midi%20Rings');
		expect(browsePage.selectedFacets.getText()).toContain('/ Knuckle/Midi Rings');
		expect(browsePage.renfinedBy.getText()).toContain('Knuckle/Midi Rings');
	});

	it('should have Rings sub-category Signet Rings', function () {
		browsePage.row6.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Rings/Signet%20Rings');
		expect(browsePage.selectedFacets.getText()).toContain('/ Signet Rings');
		expect(browsePage.renfinedBy.getText()).toContain('Signet Rings');
	});

	it('should have Rings sub-category Hand Jewelry', function () {
		browsePage.row7.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Rings/Hand%20Jewelry');
		expect(browsePage.selectedFacets.getText()).toContain('/ Hand Jewelry');
		expect(browsePage.renfinedBy.getText()).toContain('Hand Jewelry');
	});
	
});