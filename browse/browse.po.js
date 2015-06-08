/* global Results */
var BrowsePage = function () {
	//Most popular - a-z sort
	this.azSort = element(by.id('browse+sort-date'));
	//No of results sort
	this.sortResultsNo = element(by.id('browse+show-results'));
	this.twentyFourItems = element(by.id('browse+show-results')).$('[value="0"]');
	this.thirtySixItems = element(by.id('browse+show-results')).$('[value="1"]');
	this.fourtyEightItems = element(by.id('browse+show-results')).$('[value="2"]');
	this.sixtyItems = element(by.id('browse+show-results')).$('[value="3"]');
	
	this.categories = element.all(by.repeater('category in categories'));
	this.selectedFacets = element(by.binding('currentlySelectedFacets.subcategory'));
	this.products = element.all(by.repeater('product in products'));
	this.searchBar = element(by.css('.search-bar'));

	
	
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

	//option values
	this.option0 = element(by.css('option[value="0"]'));
	this.option1 = element(by.css('option[value="1"]'));
	this.option2 = element(by.css('option[value="2"]'));
	this.option3 = element(by.css('option[value="3"]'));
	this.option4 = element(by.css('option[value="4"]'));
	this.option5 = element(by.css('option[value="5"]'));
	this.option6 = element(by.css('option[value="6"]'));
	this.option7 = element(by.css('option[value="7"]'));
	this.option8 = element(by.css('option[value="8"]'));
	this.option9 = element(by.css('option[value="9"]'));
	this.option10 = element(by.css('option[value="10"]'));
	this.option11 = element(by.css('option[value="11"]'));
	this.option12 = element(by.css('option[value="12"]'));
	this.option13 = element(by.css('option[value="13"]'));
	this.option14 = element(by.css('option[value="14"]'));
	this.option15 = element(by.css('option[value="15"]'));
	this.option16 = element(by.css('option[value="16"]'));
	this.option17 = element(by.css('option[value="17"]'));
	this.option18 = element(by.css('option[value="18"]'));
	this.option19 = element(by.css('option[value="19"]'));
	this.option20 = element(by.css('option[value="20"]'));
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
      .then(function(options) {
        options[index].click();
      });
    if (typeof milliseconds !== 'undefined') {
      browser.sleep(milliseconds);
   }
}




module.exports = BrowsePage;