var DesignersPage = function() {

	this.designersScreenImage = element(by.css('img[src="//images.boticca-media.com/allseller.jpg?q=75&o=yk6D$KGJaEQB@TvKNXYqDi7aDrUj&V=oj@y"]'));
	this.filterCountry = element(by.model('country'));
	this.sortOption = element(by.model('sortOrder'));
	this.designersSearch = element(by.id('search'));


};

module.exports = DesignersPage;