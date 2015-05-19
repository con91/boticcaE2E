var HomePage = function() {

	this.fullScreenImage = element(by.css('.fullscreen-image.hidden-xs'));
	this.featuredPieces = element(by.css('.featured-products'));
	this.featuredArticles = element(by.css('.featured-articles'));
	this.justifyBox = element(by.css('.justify-box'));
	this.searchBar = element(by.css('home-search-bar'));
	this.introducingContainer = element(by.css('.introducing-container'));
	this.signUpBlock = element(by.css('.col-xs-24.col-sm-8.hidden-xs'));
	this.featuredProducts = element.all(by.repeater('product in products'));


};

module.exports = HomePage;