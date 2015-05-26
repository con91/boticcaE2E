var Application = require('../application/application.po.js');
var HomePage = require('../homepage/homepage.po.js');
var BrowsePage = require('./browse.po.js')

describe('Browse page', function() {

	var app = new Application();
	var browsePage = new BrowsePage();
	browsePage.get();

	it('should display a Browse heading', function() {
		expect(browsePage.browseHeading.isPresent()).toBe(true);
	});

	it('should display a Browse search', function() {
		expect(browsePage.browseSearchField.isPresent()).toBe(true);
	});

	it('should display eight categories', function() {
		expect(app.categories.count()).toEqual(8);

});