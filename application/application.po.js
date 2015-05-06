'use strict';

/**
 * Application Page Object
 */
var Application = function () {

    this.body = element(by.tagName('body'));
    this.applicationLogo = element(by.css('.icon-logo'));
    
};

/**
 * Specify the url of the application you want to test.
 * Maybe retrieve this from a user config file at a later date so we don't have to edit this?
 */
Application.prototype.get = function () {

    //propose a change to make browser.get more generic to run across all our environments e.g. httpster runs a folder on localhost:3333
    browser.get('https://boticca-02.qa-com');

    // Always sleep on application load to allow for bootstrapping and data loading.
    // This may need to be increased with larger data sets/slow networks?
    browser.driver.sleep(2000);
};

Application.prototype.halt = function ()  {
    browser.driver.sleep(8000);
};

Application.prototype.wait = function (ms) {
    return browser.wait(function () {
        return true;
    }, ms);
};


module.exports = Application;


