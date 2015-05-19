var Application = require('./application.po.js');

describe('Application', function() {

	var app = new Application();
	app.get();

	it('should display a Boticca logo', function() {
		expect(app.applicationLogo.isPresent()).toBe(true);
	});

	it('should display the Nav bar', function() {
		expect(app.navBar.isPresent()).toBe(true);
	});

	it('should display a navbar right', function() {
		expect(app.navBarRight.isPresent()).toBe(true);
	});

	it('should display a search icon', function() {
		expect(app.searchIcon.isPresent()).toBe(true);
	});

	it('should display a currency icon', function() {
		expect(app.currenciesIcon.isPresent()).toBe(true);
	});

	it('should display four currencies', function() {
		expect(app.currencies.count()).toEqual(4);
	});

	it('should display a cart icon', function() {
		expect(app.cartIcon.isPresent()).toBe(true);
	});

	it('should display a footer', function() {
		expect(app.footer.isPresent()).toBe(true);
	});

});