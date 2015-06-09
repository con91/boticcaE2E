var Application = require('../application/application.po.js');
var HomePage = require('../homepage/homepage.po.js');
var BrowsePage = require('./browse.po.js')

describe('Browse page - Search', function () {

	var app = new Application();
	var browsePage = new BrowsePage();
	browsePage.get();
 


	it('should be able to search for a designer', function () {
		app.halt();
		browsePage.searchBar.sendKeys("Vivien", protractor.Key.ENTER);
		app.halt();
		expect(browsePage.renfinedBy.getText()).toEqual(' Vivien Frank Designs');
	});
	
	
});