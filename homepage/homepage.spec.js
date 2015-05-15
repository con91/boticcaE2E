var Application = require('../application/application.po.js');
var HomePage = require('../homepage/homepage.po.js');

describe('Homepage', function() {

	var app = new Application();
	var homePage = new HomePage();
	app.get();


	it('should display a navbar', function() {
		expect(app.navBar.isPresent()).toBe(true);
	});

	it('should display the primary links on the navbar', function() {
		expect(app.primaryLinks.isPresent()).toBe(true);
	});

	it('should display the full screen image', function() {
		expect(homePage.fullScreenImage.isPresent()).toBe(true);
	});

	it('should display the introducing Container', function() {
		expect(homePage.introducingContainer.isPresent()).toBe(true);
	});

	it('should display a Search bar', function() {
		expect(homePage.searchBar.isPresent()).toBe(true);
	});

	it('should display justify box', function() {
		expect(homePage.justifyBox.isPresent()).toBe(true);
	});

	it('should display featured pieces', function() {
		expect(homePage.featuredPieces.isPresent()).toBe(true);
	});

	it('should display sign up block', function() {
		expect(homePage.signUpBlock.isPresent()).toBe(true);
	});

	it('should display three featured products', function() {
		expect(homePage.featuredProducts.count()).toEqual(3);
	});

	it('should display featured articles', function() {
		expect(homePage.featuredArticles.isPresent()).toBe(true);
	});

	it('should hava a clickable fullscreen image', function() {
		homePage.fullScreenImage.click();
		expect(browser.getCurrentUrl()).toContain('https://boticca.com/browse/');
	});

});