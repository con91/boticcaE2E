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



/**
 * Specify the url of the application you want to test.
 * Maybe retrieve this from a user config file at a later date so we don't have to edit this?
 */
Application.prototype.get = function() {

	//propose a change to make browser.get more generic to run across all our environments e.g. httpster runs a folder on localhost:3333
	browser.get('https://boticca.com');

	// Always sleep on application load to allow for bootstrapping and data loading.
	// This may need to be increased with larger data sets/slow networks?
	browser.driver.sleep(2000);
};

Application.prototype.halt = function() {
	browser.driver.sleep(8000);
};



module.exports = Application;