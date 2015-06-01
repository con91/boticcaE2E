var Application = require('../application/application.po.js');
var HomePage = require('../homepage/homepage.po.js');
var BrowsePage = require('./browse.po.js')

describe('Browse page', function() {

	var app = new Application();
	var browsePage = new BrowsePage();
	browsePage.get();

	it('should display a search bar', function() {
		expect(browsePage.searchBar.isPresent()).toBe(true);
	});

	it('should display a sort option', function() {
		expect(browsePage.sortOption.isPresent()).toBe(true);
	});

	// it('should have 3 sort options', function() {
	// 	expect(browsePage.sortOption.getText()).toBe('Most Popular');
	// });


	it('should display eight categories', function() {
		expect(browsePage.categories.count()).toEqual(8);

	});

	it('should display eight sub-categories in necklaces', function() {
		expect(browsePage.categories.count()).toEqual(8);

	});



	it('should have a sub-category, Necklaces', function() {
		browsePage.necklaces.click();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Necklaces/');

	});

	it('categories should have Earrings', function() {
		browsePage.allItems.click();
		browsePage.earrings.click();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Earrings/');

	});

	it('categories should have Bracelets', function() {
		browsePage.allItems.click();
		browsePage.bracelets.click();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bracelets/');

	});

	it('categories should have Rings', function() {
		browsePage.allItems.click();
		browsePage.rings.click();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Rings/');

	});

	it('categories should have Bags', function() {
		browsePage.allItems.click();
		browsePage.bags.click();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bags/');

	});

	it('categories should have Scarves', function() {
		browsePage.allItems.click();
		browsePage.scarves.click();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Scarves/');

	});
	it('categories should have Hats', function() {
		browsePage.allItems.click();
		browsePage.hats.click();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Hats/');

	});
	it('categories should have Accessories', function() {
		browsePage.allItems.click();
		browsePage.accessories.click();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Accessories/');

	});

});