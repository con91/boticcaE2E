var Application = require('../application/application.po.js');
var HomePage = require('../homepage/homepage.po.js');
var BrowsePage = require('./browse.po.js')

describe('Browse page - Search', function () {

	var app = new Application();
	var browsePage = new BrowsePage();
	app.getBrowse();


	it('should be able to search for a designer', function () {
		app.halt();
		browsePage.searchBar.sendKeys("Vivien", protractor.Key.ENTER);
		app.halt();
		expect(browsePage.renfinedBy.getText()).toContain('Vivien Frank Designs');
		expect(browsePage.designerFlagIcon.isPresent()).toBe(true);
		expect(browser.getCurrentUrl()).toContain('seller=Vivien%20Frank%20Designs');
	});

	it('should be able to search for a material', function () {
		app.halt();
		browsePage.searchBar.sendKeys("Gold", protractor.Key.ENTER);
		app.halt();
		expect(browsePage.renfinedBy.getText()).toContain('Gold');
		expect(browsePage.chevronHighlight.isPresent()).toBe(true);
	});

	it('should be able to search for a sub-category', function () {
		app.halt();
		browsePage.searchBar.sendKeys("Backpacks", protractor.Key.ENTER);
		app.halt();
		expect(browsePage.renfinedBy.getText()).toContain('Backpacks');
		expect(browsePage.highlightGreen.isPresent()).toBe(true);
	});
	
	
});