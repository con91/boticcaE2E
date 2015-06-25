var Application = require('../application/application.po.js');
var HomePage = require('../homepage/homepage.po.js');
var BrowsePage = require('./browse.po.js')

describe('Browse page - Necklaces', function () {

	var app = new Application();
	var browsePage = new BrowsePage();
	app.getBrowse();
	
	
	//Necklaces Category Checks

	it('should have a category, Necklaces', function () {
		app.halt();
		browsePage.necklaces.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Necklaces/');
	});

	it('should have Necklaces sub-category pendants', function () {
		browsePage.showMore.click();
		browsePage.row0.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Necklaces/Pendants');
		expect(browsePage.selectedFacets.getText()).toContain('/ Pendants');
		expect(browsePage.renfinedBy.getText()).toContain('Pendants');
	});

	it('should have Necklaces sub-category Long Necklaces', function () {
		browsePage.row1.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Necklaces/Long%20Necklaces');
		expect(browsePage.selectedFacets.getText()).toContain('/ Long Necklaces');
		expect(browsePage.renfinedBy.getText()).toContain('Long Necklaces');
	});

	it('should have Necklaces sub-category Collar Necklaces', function () {
		browsePage.row2.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Necklaces/Collar%20Necklaces');
		expect(browsePage.selectedFacets.getText()).toContain('/ Collar Necklaces');
		expect(browsePage.renfinedBy.getText()).toContain('Collar Necklaces');
	});

	it('should have Necklaces sub-category Name Necklaces', function () {
		browsePage.row3.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Necklaces/Name%20Necklaces');
		expect(browsePage.selectedFacets.getText()).toContain('/ Name Necklaces');
		expect(browsePage.renfinedBy.getText()).toContain('Name Necklaces');
	});

	it('should have Necklaces sub-category Other Necklaces', function () {
		browsePage.row4.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Necklaces/Other%20Necklaces');
		expect(browsePage.selectedFacets.getText()).toContain('/ Other Necklaces');
		expect(browsePage.renfinedBy.getText()).toContain('Other Necklaces');
	});

	it('should have Necklaces sub-category One of a Kind', function () {
		browsePage.row5.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Necklaces/One%20of%20a%20Kind');
		expect(browsePage.selectedFacets.getText()).toContain('/ One of a Kind');
		expect(browsePage.renfinedBy.getText()).toContain('One of a Kind');
	});

	it('should have Necklaces sub-category Bib Necklaces', function () {
		browsePage.row6.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Necklaces/Bib%20Necklaces');
		expect(browsePage.selectedFacets.getText()).toContain('/ Bib Necklaces');
		expect(browsePage.renfinedBy.getText()).toContain('Bib Necklaces');
	});

	it('should have Necklaces sub-category Chokers', function () {
		browsePage.row7.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Necklaces/Chokers');
		expect(browsePage.selectedFacets.getText()).toContain('/ Chokers');
		expect(browsePage.renfinedBy.getText()).toContain('Chokers');
	});

});