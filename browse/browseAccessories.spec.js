var Application = require('../application/application.po.js');
var HomePage = require('../homepage/homepage.po.js');
var BrowsePage = require('./browse.po.js')

describe('Browse page - Accessories', function () {

	var app = new Application();
	var browsePage = new BrowsePage();
	app.getBrowse();
	
	// var Eyes = require('eyes.protractor').Eyes;
	// var eyes = new Eyes();
	// eyes.setApiKey("bLUS2hN2l66Qv4Bq3LGMDj4IUcBvAfFHLoy7JYd7nr8110");

//Accessories Checks
	it('should have a category, Accessories', function () {
		// eyes.open("JavaScript SDK", "Simple Protractor Test");
		app.halt();
		// eyes.checkWindow("Browse Page");
		app.halt();
		app.halt();
		browsePage.accessories.click();
		// eyes.checkWindow("Accessories Dropdown");
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Accessories/');
	});
	
	it('should have Accessories sub-category Socks', function () {
		browsePage.row0.click();
		browsePage.showMore.click();
		app.halt();
		// eyes.checkWindow("Sunglasses highlight");
		expect(browser.getCurrentUrl()).toContain('/browse/#/Accessories/Socks');
		// expect(browsePage.selectedFacets.getText()).toContain('/ Sunglasses');
		expect(browsePage.renfinedBy.getText()).toContain('Socks');
	});

		it('should have Accessories sub-category Watches', function () {
		browsePage.row1.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Accessories/Watches');
		expect(browsePage.selectedFacets.getText()).toContain('/ Watches');
		expect(browsePage.renfinedBy.getText()).toContain('Watches');
	});

	it('should have Accessories sub-category Pocket Squares', function () {
		browsePage.row2.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Accessories/Pocket%20squares');
		// expect(browsePage.selectedFacets.getText()).toContain('/ Pocket Squares');
		expect(browsePage.renfinedBy.getText()).toContain('Pocket squares');
	});

	it('should have Accessories sub-category Sunglasses', function () {
		browsePage.row3.click();
		app.halt();
		// eyes.checkWindow("Sunglasses highlight");
		expect(browser.getCurrentUrl()).toContain('/browse/#/Accessories/Sunglasses');
		// expect(browsePage.selectedFacets.getText()).toContain('/ Sunglasses');
		expect(browsePage.renfinedBy.getText()).toContain('Sunglasses');
	});

	it('should have Accessories sub-category Cufflinks', function () {
		browsePage.row4.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Accessories/Cufflinks');
		expect(browsePage.selectedFacets.getText()).toContain('/ Cufflinks');
		expect(browsePage.renfinedBy.getText()).toContain('Cufflinks');
	});

	it('should have Accessories sub-category Laptop Covers', function () {
		browsePage.row5.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Accessories/Laptop%20Covers');
		expect(browsePage.selectedFacets.getText()).toContain('/ Laptop Covers');
		expect(browsePage.renfinedBy.getText()).toContain('Laptop Covers');
	});

	it('should have Accessories sub-category Wallets & Key Rings', function () {
		browsePage.row6.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Accessories/Wallets%20&%20Key%20Rings');
		expect(browsePage.selectedFacets.getText()).toContain('/ Wallets & Key Rings');
		expect(browsePage.renfinedBy.getText()).toContain('Wallets & Key Rings');
	});

	it('should have Accessories sub-category Phone Covers', function () {
		browsePage.row7.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Accessories/Phone%20Covers');
		expect(browsePage.selectedFacets.getText()).toContain('/ Phone Covers');
		expect(browsePage.renfinedBy.getText()).toContain('Phone Covers');
	});

	it('should have Accessories sub-category Other Accessories', function () {
		browsePage.row8.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Accessories/Other%20Accessories');
		expect(browsePage.selectedFacets.getText()).toContain('/ Other Accessories');
		expect(browsePage.renfinedBy.getText()).toContain('Other Accessories');
	});

	it('should have Accessories sub-category iPad Covers', function () {
		browsePage.row9.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Accessories/iPad%20Covers');
		expect(browsePage.selectedFacets.getText()).toContain('/ iPad Covers');
		expect(browsePage.renfinedBy.getText()).toContain('iPad Covers');
	});

	it('should have Accessories sub-category Ties', function () {
		browsePage.row10.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Accessories/Ties');
		expect(browsePage.selectedFacets.getText()).toContain('/ Ties');
		expect(browsePage.renfinedBy.getText()).toContain('Ties');
	});

	it('should have Accessories sub-category Collars', function () {
		browsePage.row11.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Accessories/Collars');
		expect(browsePage.selectedFacets.getText()).toContain('/ Collars');
		expect(browsePage.renfinedBy.getText()).toContain('Collars');
	});
	
	it('should have Accessories sub-category Bow ties', function () {
		browsePage.row12.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Accessories/Bow%20Ties');
		expect(browsePage.selectedFacets.getText()).toContain('/ Bow Ties');
		expect(browsePage.renfinedBy.getText()).toContain('Bow Ties');
	});

	it('should have Accessories sub-category Belts', function () {
		browsePage.row13.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Accessories/Belts');
		expect(browsePage.selectedFacets.getText()).toContain('/ Belts');
		expect(browsePage.renfinedBy.getText()).toContain('Belts');
	});

	it('should have Accessories sub-category Brooches', function () {
		browsePage.row14.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#/Accessories/Brooches');
		expect(browsePage.selectedFacets.getText()).toContain('/ Brooches');
		expect(browsePage.renfinedBy.getText()).toContain('Brooches');
	});
 
  // eyes.close();
});	