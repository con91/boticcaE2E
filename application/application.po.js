'use strict';

/**
 * Application Page Object
 */
var Application = function() {

	this.body = element(by.tagName('body'));
	//Navbar Locators left & Centre
	this.applicationLogo = element(by.css('.icon-logo'));
	this.navBar = element(by.css('.navbar'));
	//Navbar right locators
	this.navBarRight = element(by.css('.navbar-right'));
	this.searchIcon = element(by.id('topnav+search'));
	this.loggedOut = element(by.css('.icon.icon-2x.icon-loggedout'));
	this.loggedIn = element(by.css('.icon.icon-2x.icon-loggedin'));
	this.currenciesIcon = element(by.id('topnav+currencies'));
	this.currencies = element.all(by.repeater('currency in currencies'));
	this.cartIcon = element(by.css('.icon.icon-cart'));
	//Footer locators
	this.footer = element(by.css('.footer'));


};

//E2E application wide functions
Application.prototype.get = function() {

	//gets the boticca homepage called by app.get();
	browser.get('https://boticca.com');
};

//get the browse page directly calling it in your spec
Application.prototype.getBrowse = function() {

	browser.get('https://boticca.com/browse/');
};

//get the designers page directly calling it in your spec
Application.prototype.getDesigners = function() {

	browser.get('https://boticca.com/designers/');
};

//get the stories page directly calling it in your spec
Application.prototype.getStories = function() {

	browser.get('https://boticca.com/stories/');
};

//get the private sales page directly calling it in your spec
Application.prototype.getPrivateSales = function() {

	browser.get('https://boticca.com/private-sales/');
};


Application.prototype.halt = function() {
	browser.driver.sleep(2000);
};

Application.prototype.selectDropdownbyNum = function(element, optionNum) {
	if (optionNum) {
		var options = element.findElements(by.tagName('option'))
			.then(function(options) {
				options[optionNum].click();
			});
	}
};



module.exports = Application;