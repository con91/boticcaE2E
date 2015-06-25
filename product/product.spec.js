var Application = require('../application/application.po.js');
var HomePage = require('../homepage/homepage.po.js');
var BrowsePage = require('../browse/browse.po.js');
var ProductPage = require('./product.po.js');

describe('Product page', function () {

	var app = new Application();
	var productPage = new ProductPage();
	var browsePage = new BrowsePage();
	app.getBrowse();

	// it('should display a product breadcrumb', function () {
	// 	browsePage.product.click();
	// 	app.halt();
	// 	expect(productPage.productBreadcrumb.isPresent()).toBe(true);
	// });

	// it('should display a product image', function () {
	// 	expect(productPage.productImage.isPresent()).toBe(true);
	// });
	
	it('should display a product thumbnail images', function () {
		browsePage.product.click();
		expect(productPage.productThumbnails.isPresent()).toBe(true);
	});

	it('should display a product details block', function () {
		expect(productPage.productDetails.isPresent()).toBe(true);
	});

	it('should display a product title', function () {
		expect(productPage.productTitle.isPresent()).toBe(true);
	});

	it('should display a product price', function () {
		expect(productPage.priceContainer.isPresent()).toBe(true);
	});

	it('should display Materials & Size info', function () {
		expect(productPage.sizeMaterial.isPresent()).toBe(true);
	});

	it('should display Story of the piece info', function () {
		expect(productPage.storyOfPiece.isPresent()).toBe(true);
	});

	it('should display a Description', function () {
		expect(productPage.description.isPresent()).toBe(true);
	});

	it('should display a DHL logo', function () {
		expect(productPage.dhlLogo.isPresent()).toBe(true);
	});

	it('should display a DHL text', function () {
		expect(productPage.dhlText.isPresent()).toBe(true);
	});

	it('should display feedback', function () {
		expect(productPage.feedback.isPresent()).toBe(true);
	});

	it('should display Designer section', function () {
		expect(productPage.feedback.isPresent()).toBe(true);
	});

	it('should display Designer section', function () {
		expect(productPage.designerSection.isPresent()).toBe(true);
	});
	
	it('should display Designer section', function () {
		expect(productPage.designerSection.isPresent()).toBe(true);
	});

});