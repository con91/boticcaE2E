var Application = require('../application/application.po.js');
var HomePage = require('../homepage/homepage.po.js');
var DesignersPage = require('./designers.po.js')

describe('Designers page', function() {

	var app = new Application();
	var designersPage = new DesignersPage();
	app.getDesigners();

	it('should display a full screen image', function() {
		expect(designersPage.designersScreenImage.isPresent()).toBe(true);
	});

	it('should display a sort country sort', function() {
		expect(designersPage.filterCountry.isPresent()).toBe(true);
	});

	it('should display a A-Z sort option', function() {
		expect(designersPage.sortOption.isPresent()).toBe(true);
	});

	it('should display a search bar', function() {
		expect(designersPage.designersSearch.isPresent()).toBe(true);
	});

	

});