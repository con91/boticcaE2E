var Application = require('../application/application.po.js');
var HomePage = require('../homepage/homepage.po.js');
var BrowsePage = require('./browse.po.js')

describe('Browse page - Earrings', function () {

	var app = new Application();
	var browsePage = new BrowsePage();
	app.getBrowse();
	
	
	//Earrings category checks

	it('should have a category, Earrings', function () {
		browsePage.earringsCheck();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Earrings/');
	});

	it('should have Earrings sub-category Ear Jackets', function () {
		browsePage.showMore.click();
		browsePage.row0.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Earrings/Ear%20Jackets');
		// expect(browsePage.selectedFacets.getText()).toContain('/ Ear Jackets'); //Ear jackets fails on this due to it being a designer page
		expect(browsePage.renfinedBy.getText()).toContain('Ear Jackets');

	});

	it('should have Earrings sub-category Drop Earrings', function () {
		browsePage.row1.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Earrings/Drop%20Earrings');
		expect(browsePage.selectedFacets.getText()).toContain('/ Drop Earrings');
		expect(browsePage.renfinedBy.getText()).toContain('Drop Earrings');
	});

	it('should have Earrings sub-category Stud Earrings', function () {
		browsePage.row2.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Earrings/Stud%20Earrings');
		expect(browsePage.selectedFacets.getText()).toContain('/ Stud Earrings');
		expect(browsePage.renfinedBy.getText()).toContain('Stud Earrings');
	});

	it('should have Earrings sub-category Statement Earrings', function () {
		browsePage.row3.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Earrings/Statement%20Earrings');
		expect(browsePage.selectedFacets.getText()).toContain('/ Statement Earrings');
		expect(browsePage.renfinedBy.getText()).toContain('Statement Earrings');
	});

	it('should have Earrings sub-category Ear Cuffs', function () {
		browsePage.row4.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Earrings/Ear%20Cuffs');
		expect(browsePage.selectedFacets.getText()).toContain('/ Ear Cuffs');
		expect(browsePage.renfinedBy.getText()).toContain('Ear Cuffs');
	});

	it('should have Earrings sub-category Other Earrings', function () {
		browsePage.row5.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Earrings/Other%20Earrings');
		expect(browsePage.selectedFacets.getText()).toContain('/ Other Earrings');
		expect(browsePage.renfinedBy.getText()).toContain('Other Earrings');
	});

	it('should have Earrings sub-category Gold Hoops', function () {
		browsePage.row6.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Earrings/Gold%20Hoops');
		expect(browsePage.selectedFacets.getText()).toContain('/ Gold Hoops');
		expect(browsePage.renfinedBy.getText()).toContain('Gold Hoops');
	});

	it('should have Earrings sub-category Silver Hoops', function () {
		browsePage.row7.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Earrings/Silver%20Hoops');
		expect(browsePage.selectedFacets.getText()).toContain('/ Silver Hoops');
		expect(browsePage.renfinedBy.getText()).toContain('Silver Hoops');
	});


	it('should have Earrings sub-category One of a Kind', function () {
		browsePage.row8.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Earrings/One%20of%20a%20Kind');
		expect(browsePage.selectedFacets.getText()).toContain('/ One of a Kind');
		expect(browsePage.renfinedBy.getText()).toContain('One of a Kind');
	});

	it('should have Earrings sub-category Single/Mono Earrings', function () {
		browsePage.row9.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Earrings/Single/%20Mono%20Earrings');
		expect(browsePage.selectedFacets.getText()).toContain('/ Single/ Mono Earrings');
		expect(browsePage.renfinedBy.getText()).toContain('Single/ Mono Earrings');
	});

	it('should have Earrings sub-category Chandeliers Earrings', function () {
		browsePage.row10.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Earrings/Chandeliers%20Earrings');
		expect(browsePage.selectedFacets.getText()).toContain('/ Chandeliers Earrings');
		expect(browsePage.renfinedBy.getText()).toContain('Chandeliers Earrings');
	});
	
	it('should have Earrings sub-category Feather Earrings', function () {
		browsePage.row11.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Earrings/Feather%20Earrings');
		expect(browsePage.selectedFacets.getText()).toContain('/ Feather Earrings');
		expect(browsePage.renfinedBy.getText()).toContain('Feather Earrings');
	});


});