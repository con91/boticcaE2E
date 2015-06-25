var ProductPage = function() {

this.productBreadcrumb = element(by.css('.breadcumb'));
//this.productImage = element();
this.productThumbnails = element(by.repeater('thumb in images'));
this.productDetails = element(by.css('.row.white-bg.detail-wrapper'));
this.productTitle = element(by.css('h1.body-font-xlg.product-name'));
this.priceContainer = element(by.css('.col-xs-24.price-container'));
this.sizeMaterial = element(by.linkText('Size & Material'));
this.storyOfPiece = element(by.linkText('Story of the Piece'));
this.description = element(by.linkText('Description'));
this.dhlLogo = element(by.css('.dhl-logo'));
this.dhlText = element(by.css('.dhl-text'));
this.feedback = element(by.css('.product-feedback'));
this.designerSection = element(by.css('.designer-section'));
this.favouriteBlock = element(by.css('.favourite-block'));
this.findOutMore = element(by.linkText('Find out more'));
};

module.exports = ProductPage;