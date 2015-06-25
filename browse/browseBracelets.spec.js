var Application = require('../application/application.po.js');
var HomePage = require('../homepage/homepage.po.js');
var BrowsePage = require('./browse.po.js')

describe('Browse page - Bracelets', function () {

	var app = new Application();
	var browsePage = new BrowsePage();
	app.getBrowse();
	
	//Bracelets Category checks

	it('should have a category, Bracelets', function () {
		browsePage.braceletsCheck();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bracelets/');
	});

	it('should have Bracelets sub-category bangles', function () {
		browsePage.row0.click();
		browsePage.showMore.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bracelets/Bangles');
		expect(browsePage.selectedFacets.getText()).toContain('/ Bangles');
		expect(browsePage.renfinedBy.getText()).toContain('Bangles');
	});

	it('should have Bracelets sub-category Friendship Bracelets', function () {
		browsePage.row1.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bracelets/Friendship%20Bracelets');
		expect(browsePage.selectedFacets.getText()).toContain('/ Friendship Bracelets');
		expect(browsePage.renfinedBy.getText()).toContain('Friendship Bracelets');
	});

	it('should have Bracelets sub-category Beaded Bracelets', function () {
		browsePage.row2.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bracelets/Beaded%20Bracelets');
		expect(browsePage.selectedFacets.getText()).toContain('/ Beaded Bracelets');
		expect(browsePage.renfinedBy.getText()).toContain('Beaded Bracelets');
	});

	it('should have Bracelets sub-category Gold Cuffs', function () {
		browsePage.row3.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bracelets/Gold%20Cuffs');
		expect(browsePage.selectedFacets.getText()).toContain('/ Gold Cuffs');
		expect(browsePage.renfinedBy.getText()).toContain('Gold Cuffs');
	});

	it('should have Bracelets sub-category Chain Bracelets', function () {
		browsePage.row4.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bracelets/Chain%20Bracelets');
		expect(browsePage.selectedFacets.getText()).toContain('/ Chain Bracelets');
		expect(browsePage.renfinedBy.getText()).toContain('Chain Bracelets');
	});

	it('should have Bracelets sub-category Other Bracelets', function () {
		browsePage.row5.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bracelets/Other%20Bracelets');
		expect(browsePage.selectedFacets.getText()).toContain('/ Other Bracelets');
		expect(browsePage.renfinedBy.getText()).toContain('Other Bracelets');
	});


	it('should have Bracelets sub-category Statement Bracelets', function () {
		browsePage.row6.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bracelets/Statement%20Bracelets');
		expect(browsePage.selectedFacets.getText()).toContain('/ Statement Bracelets');
		expect(browsePage.renfinedBy.getText()).toContain('Statement Bracelets');
	});

	it('should have Bracelets sub-category Leather Bracelets', function () {
		browsePage.row7.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bracelets/Leather%20Bracelets');
		expect(browsePage.selectedFacets.getText()).toContain('/ Leather Bracelets');
		expect(browsePage.renfinedBy.getText()).toContain('Leather Bracelets');
	});

	it('should have Bracelets sub-category Silver Cuffs', function () {
		browsePage.row8.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bracelets/Silver%20Cuffs');
		expect(browsePage.selectedFacets.getText()).toContain('/ Silver Cuffs');
		expect(browsePage.renfinedBy.getText()).toContain('Silver Cuffs');
	});

	it('should have Necklaces sub-category One of a Kind', function () {
		browsePage.row9.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Bracelets/One%20of%20a%20Kind');
		expect(browsePage.selectedFacets.getText()).toContain('/ One of a Kind');
		expect(browsePage.renfinedBy.getText()).toContain('One of a Kind');
	});


});