var BrowsePage = function() {

	this.searchBar = element(by.css('.search-bar'));
	this.sortOption = element(by.model('sortOption'));
	// this.sortOptionFirst = element(by.model('sortOption')).first();
	this.categories = element.all(by.repeater('category in categories'));
	this.necklaces = element.all(by.repeater('category in categories').row(0));
	this.earrings = element.all(by.repeater('category in categories').row(1));
	this.bracelets = element.all(by.repeater('category in categories').row(2));
	this.rings = element.all(by.repeater('category in categories').row(3));
	this.bags = element.all(by.repeater('category in categories').row(4));
	this.scarves = element.all(by.repeater('category in categories').row(5));
	this.hats = element.all(by.repeater('category in categories').row(6));
	this.accessories = element.all(by.repeater('category in categories').row(7));
	this.allItems = element(by.css('.all-items-title'));
};


BrowsePage.prototype.get = function() {

	browser.get('https://boticca-04.dev-com/browse/');
};

BrowsePage.prototype.results12 = function() {

}

module.exports = BrowsePage;