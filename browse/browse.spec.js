var Application = require('../application/application.po.js');
var HomePage = require('../homepage/homepage.po.js');
var BrowsePage = require('./browse.po.js')

describe('Browse page', function () {

	var app = new Application();
	var browsePage = new BrowsePage();
	app.getBrowse();

	it('should display a search bar', function () {
		expect(browsePage.searchBar.isPresent()).toBe(true);
	});


	it('should display a Most popular and az sort option', function () {
		expect(browsePage.azSort.isPresent()).toBe(true);
	});

	// No of products shown support
	it('should have a sort option for no of products shown', function () {
		expect(browsePage.sortResultsNo.isPresent()).toBe(true);
	});

	it('should display 72 products as default', function () {
		expect(browsePage.products.count()).toEqual(72);
	});

	it('should display 12 products when 12 sort is selected', function () {
		browsePage.twelveItems.click();
		app.halt();
		expect(browsePage.products.count()).toEqual(12);
	});

	it('should display 24 products when 24 sort is selected', function () {
		browsePage.twentyFourItems.click();
		app.halt();
		expect(browsePage.products.count()).toEqual(24);
	});

	it('should display 36 products when 36 sort is selected', function () {
		browsePage.thirtySixItems.click();
		app.halt();
		expect(browsePage.products.count()).toEqual(36);
	});

	it('should display 48 products when 48 sort is selected', function () {
		browsePage.fourtyEightItems.click();
		app.halt();
		expect(browsePage.products.count()).toEqual(48);
	});

	it('should display 60 products when 60 sort is selected', function () {
		browsePage.sixtyItems.click();
		app.halt();
		expect(browsePage.products.count()).toEqual(60);
	});

	it('should display double the current results, when more products is clicked', function () {
		browsePage.loadMoreButton.click();
		app.halt();
		expect(browsePage.products.count()).toEqual(120);
	});

	it('should display eight categories', function () {
		expect(browsePage.categories.count()).toEqual(8);
	});

	it('should have green highlight on sub-category selection', function () {
		browsePage.necklaces.click();
		app.halt();
		browsePage.row1.click();
		expect(browsePage.highlightGreen.isPresent()).toBe(true);
	});

	it('should not have green highlight on sub-category selection when it is clicked again', function () {
		browsePage.row1.click();
		app.halt();
		expect(browsePage.highlightGreen.isPresent()).toBe(false);
		browsePage.allItems.click();
	});

});