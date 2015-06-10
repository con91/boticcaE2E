/* global Results */
var BrowsePage = function () {
	//Most popular - a-z sort
	this.azSort = element(by.id('browse+sort-date'));
	
	//No of results sort
	this.sortResultsNo = element(by.id('browse+show-results'));
	this.twelveItems = element(by.id('browse+show-results')).$('[value="0"]');
	this.twentyFourItems = element(by.id('browse+show-results')).$('[value="1"]');
	this.thirtySixItems = element(by.id('browse+show-results')).$('[value="2"]');
	this.fourtyEightItems = element(by.id('browse+show-results')).$('[value="3"]');
	this.sixtyItems = element(by.id('browse+show-results')).$('[value="4"]');
	//general UI locators
	this.categories = element.all(by.repeater('category in categories'));
	this.selectedFacets = element(by.binding('currentlySelectedFacets.subcategory'));
	this.products = element.all(by.repeater('product in products'));
	this.searchBar = element(by.css('input.browse-searchbar'));
	this.renfinedBy = element(by.css('.refined-tags-container'));
	this.designerFlagIcon = element(by.css('.flag-icon-ch'));
	this.chevronHighlight = element(by.css('.chevron-highlight'));
	this.productImage = element(by.id('product-sku+product-image'));
	this.loadMoreButton = element(by.id('browse+more-products'));

	
	
	//Category locators
	this.necklaces = element.all(by.repeater('category in categories').row(0));
	this.earrings = element.all(by.repeater('category in categories').row(1));
	this.bracelets = element.all(by.repeater('category in categories').row(2));
	this.rings = element.all(by.repeater('category in categories').row(3));
	this.bags = element.all(by.repeater('category in categories').row(4));
	this.scarves = element.all(by.repeater('category in categories').row(5));
	this.hats = element.all(by.repeater('category in categories').row(6));
	this.accessories = element.all(by.repeater('category in categories').row(7));
	this.allItems = element(by.css('.all-items-title'));
	this.showMore = element(by.css('.subcategory.show-more'));
	this.highlightGreen = element(by.css('.highlight-green'));
	
	

	
	//sub-category in sub-categories locators
	this.row0 = element.all(by.repeater('subCategory in subCategories').row(0));
	this.row1 = element.all(by.repeater('subCategory in subCategories').row(1));
	this.row2 = element.all(by.repeater('subCategory in subCategories').row(2));
	this.row3 = element.all(by.repeater('subCategory in subCategories').row(3));
	this.row4 = element.all(by.repeater('subCategory in subCategories').row(4));
	this.row5 = element.all(by.repeater('subCategory in subCategories').row(5));
	this.row6 = element.all(by.repeater('subCategory in subCategories').row(6));
	this.row7 = element.all(by.repeater('subCategory in subCategories').row(7));
	this.row8 = element.all(by.repeater('subCategory in subCategories').row(8));
	this.row9 = element.all(by.repeater('subCategory in subCategories').row(9));


	
};



BrowsePage.prototype.get = function () {

	browser.get('https://boticca-04.dev-com/browse/');
};

BrowsePage.prototype.results12 = function () {

};

BrowsePage.prototype.halt = function () {
	browser.driver.sleep(2000);
};

BrowsePage.prototype.earringsCheck = function () {
	this.allItems.click();
	this.earrings.click();
	this.halt();
};

BrowsePage.prototype.braceletsCheck = function () {
	this.allItems.click();
	this.bracelets.click();
	this.halt();
};

BrowsePage.prototype.ringsCheck = function () {
	this.allItems.click();
	this.rings.click();
	this.halt();
};

BrowsePage.prototype.bagsCheck = function () {
	this.allItems.click();
	this.bags.click();
	this.halt();
};

BrowsePage.prototype.scarvesCheck = function () {
	this.allItems.click();
	this.scarves.click();
	this.halt();
};

BrowsePage.prototype.hatsCheck = function () {
	this.allItems.click();
	this.hats.click();
	this.halt();
};

BrowsePage.prototype.accessoriesCheck = function () {
	this.allItems.click();
	this.accessories.click();
	this.halt();
};

function selectDropdownByNumber(element, index, milliseconds) {
    element.findElements(by.tagName('option'))
		.then(function (options) {
        options[index].click();
	});
    if (typeof milliseconds !== 'undefined') {
		browser.sleep(milliseconds);
	}
}




module.exports = BrowsePage;