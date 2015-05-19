var BrowsePage = function() {

	this.browseHeading = element(by.css('span[text="SHOP_LABEL"]'));
	this.browseSearchField = element(by.id('browse+search-field'));

};


BrowsePage.prototype.get = function() {

	browser.get('https://boticca.com/browse/');
};

module.exports = BrowsePage;