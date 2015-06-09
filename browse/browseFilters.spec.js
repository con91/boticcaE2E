var Application = require('../application/application.po.js');
var HomePage = require('../homepage/homepage.po.js');
var BrowsePage = require('./browse.po.js')

describe('Browse page - Filters', function () {

	var app = new Application();
	var browsePage = new BrowsePage();
	browsePage.get();



	it('should have Price filter', function () {
		browsePage.price.click();
		expect(browsePage.price.isPresent()).toBe(true);
			app.halt();
	});
		
});