var Application = require('../application/application.po.js');
var HomePage = require('../homepage/homepage.po.js');
var BrowsePage = require('./browse.po.js')

describe('Browse page - Filters', function () {

	var app = new Application();
	var browsePage = new BrowsePage();
	browsePage.get();



	it('should have Materials filter', function () {
		expect(browsePage.materialFilter.isPresent()).toBe(true);
	});
	
	it('should have Gemstone filter', function () {
		expect(browsePage.gemstoneFilter.isPresent()).toBe(true);
	});
		
	it('should have Colors filter', function () {
		expect(browsePage.colorFilter.isPresent()).toBe(true);
	});
	
	it('should have Designer filter', function () {
		expect(browsePage.designerFilter.isPresent()).toBe(true);
	});
	
	it('should have Country of Origin filter', function () {
		expect(browsePage.countryFilter.isPresent()).toBe(true);
	});	
});