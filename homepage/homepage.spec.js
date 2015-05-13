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
		expect(app.primaryLinks.get(0).getText()).toBe('New In');
	});

	it('should display the full screen image', function() {
		expect(homePage.fullScreenImage.isPresent()).toBe(true);
	});


	// it('should have a clickable full screen image', function() {
	// 	expect(homePage.fullScreenImage.elementToBeClickable()).toBe(true);
	// });

	it('should display a navbar right', function() {
		expect(app.navBarRight.isPresent()).toBe(true);
	});

	it('should display a search button', function() {
		expect(app.searchBtn.isPresent()).toBe(true);
	});


});