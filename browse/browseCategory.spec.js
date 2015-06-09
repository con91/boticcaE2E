//This spec contains tests for the browse page categories and sub-categories 
//The tests consist of mainly three expectations checking the url, the selected facet in the ui nav tree, and refined by tag text
//Tests must run in order , a way to improve this might be to add unique ids in the domm for both cats and sub-cats
var Application = require('../application/application.po.js');
var HomePage = require('../homepage/homepage.po.js');
var BrowsePage = require('./browse.po.js')

describe('Browse page - Categories', function () {

	var app = new Application();
	var browsePage = new BrowsePage();
	browsePage.get();


	//Necklaces Category Checks

	it('should have a category, Necklaces', function () {
		browsePage.necklaces.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Necklaces/');
	});

	it('should have Necklaces sub-category pendants', function () {
		browsePage.showMore.click();
		browsePage.row1.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Necklaces/Pendants');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Pendants');
		expect(browsePage.renfinedBy.getText()).toContain('Pendants');
	});

	it('should have Necklaces sub-category Long Necklaces', function () {
		browsePage.row2.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Necklaces/Long%20Necklaces');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Long Necklaces');
		expect(browsePage.renfinedBy.getText()).toContain('Long Necklaces');
	});

	it('should have Necklaces sub-category Collar Necklaces', function () {
		browsePage.row3.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Necklaces/Collar%20Necklaces');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Collar Necklaces');
		expect(browsePage.renfinedBy.getText()).toContain('Collar Necklaces');
	});

	it('should have Necklaces sub-category Name Necklaces', function () {
		browsePage.row4.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Necklaces/Name%20Necklaces');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Name Necklaces');
		expect(browsePage.renfinedBy.getText()).toContain('Name Necklaces');
	});

	it('should have Necklaces sub-category Other Necklaces', function () {
		browsePage.row5.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Necklaces/Other%20Necklaces');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Other Necklaces');
		expect(browsePage.renfinedBy.getText()).toContain('Other Necklaces');
	});

	it('should have Necklaces sub-category One of a Kind', function () {
		browsePage.row6.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Necklaces/One%20of%20a%20Kind');
		expect(browsePage.selectedFacets.getText()).toEqual('/ One of a Kind');
		expect(browsePage.renfinedBy.getText()).toContain('One of a Kind');
	});

	it('should have Necklaces sub-category Bib Necklaces', function () {
		browsePage.row7.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Necklaces/Bib%20Necklaces');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Bib Necklaces');
		expect(browsePage.renfinedBy.getText()).toContain('Bib Necklaces');
	});

	it('should have Necklaces sub-category Chokers', function () {
		browsePage.row8.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Necklaces/Chokers');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Chokers');
		expect(browsePage.renfinedBy.getText()).toContain('Chokers');
	});



	//Earrings category checks

	it('should have a category, Earrings', function () {
		browsePage.earringsCheck();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Earrings/');
	});

	it('should have Earrings sub-category Drop Earrings', function () {
		browsePage.showMore.click();
		browsePage.row0.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Earrings/Drop%20Earrings');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Drop Earrings');
		expect(browsePage.renfinedBy.getText()).toContain('Drop Earrings');
	});

	it('should have Earrings sub-category Stud Earrings', function () {
		browsePage.row1.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Earrings/Stud%20Earrings');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Stud Earrings');
		expect(browsePage.renfinedBy.getText()).toContain('Stud Earrings');
	});

	it('should have Earrings sub-category Statement Earrings', function () {
		browsePage.row2.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Earrings/Statement%20Earrings');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Statement Earrings');
		expect(browsePage.renfinedBy.getText()).toContain('Statement Earrings');
	});

	it('should have Earrings sub-category Ear Cuffs', function () {
		browsePage.row3.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Earrings/Ear%20Cuffs');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Ear Cuffs');
		expect(browsePage.renfinedBy.getText()).toContain('Ear Cuffs');
	});

	it('should have Earrings sub-category Other Earrings', function () {
		browsePage.row4.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Earrings/Other%20Earrings');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Other Earrings');
		expect(browsePage.renfinedBy.getText()).toContain('Other Earrings');
	});

	it('should have Earrings sub-category Gold Hoops', function () {
		browsePage.row5.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Earrings/Gold%20Hoops');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Gold Hoops');
		expect(browsePage.renfinedBy.getText()).toContain('Gold Hoops');
	});

	it('should have Earrings sub-category Silver Hoops', function () {
		browsePage.row6.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Earrings/Silver%20Hoops');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Silver Hoops');
		expect(browsePage.renfinedBy.getText()).toContain('Silver Hoops');
	});


	it('should have Earrings sub-category One of a Kind', function () {
		browsePage.row7.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Earrings/One%20of%20a%20Kind');
		expect(browsePage.selectedFacets.getText()).toEqual('/ One of a Kind');
		expect(browsePage.renfinedBy.getText()).toContain('One of a Kind');
	});

	it('should have Earrings sub-category Single/Mono Earrings', function () {
		browsePage.row8.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Earrings/Single/%20Mono%20Earrings');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Single/ Mono Earrings');
		expect(browsePage.renfinedBy.getText()).toContain('Single/ Mono Earrings');
	});

	it('should have Earrings sub-category Chandeliers Earrings', function () {
		browsePage.row9.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Earrings/Chandeliers%20Earrings');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Chandeliers Earrings');
		expect(browsePage.renfinedBy.getText()).toContain('Chandeliers Earrings');
	});


	//Bracelets Category checks

	it('should have a category, Bracelets', function () {
		browsePage.braceletsCheck();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bracelets/');
	});

	it('should have Bracelets sub-category bangles', function () {
		browsePage.showMore.click();
		browsePage.row0.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bracelets/Bangles');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Bangles');
		expect(browsePage.renfinedBy.getText()).toContain('Bangles');
	});

	it('should have Bracelets sub-category Friendship Bracelets', function () {
		browsePage.row1.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bracelets/Friendship%20Bracelets');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Friendship Bracelets');
		expect(browsePage.renfinedBy.getText()).toContain('Friendship Bracelets');
	});

	it('should have Bracelets sub-category Beaded Bracelets', function () {
		browsePage.row2.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bracelets/Beaded%20Bracelets');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Beaded Bracelets');
		expect(browsePage.renfinedBy.getText()).toContain('Beaded Bracelets');
	});

	it('should have Bracelets sub-category Gold Cuffs', function () {
		browsePage.row3.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bracelets/Gold%20Cuffs');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Gold Cuffs');
		expect(browsePage.renfinedBy.getText()).toContain('Gold Cuffs');
	});

	it('should have Bracelets sub-category Chain Bracelets', function () {
		browsePage.row4.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bracelets/Chain%20Bracelets');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Chain Bracelets');
		expect(browsePage.renfinedBy.getText()).toContain('Chain Bracelets');
	});

	it('should have Bracelets sub-category Other Bracelets', function () {
		browsePage.row5.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bracelets/Other%20Bracelets');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Other Bracelets');
		expect(browsePage.renfinedBy.getText()).toContain('Other Bracelets');
	});


	it('should have Bracelets sub-category Statement Bracelets', function () {
		browsePage.row6.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bracelets/Statement%20Bracelets');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Statement Bracelets');
		expect(browsePage.renfinedBy.getText()).toContain('Statement Bracelets');
	});

	it('should have Bracelets sub-category Leather Bracelets', function () {
		browsePage.row7.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bracelets/Leather%20Bracelets');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Leather Bracelets');
		expect(browsePage.renfinedBy.getText()).toContain('Leather Bracelets');
	});

	it('should have Bracelets sub-category Silver Cuffs', function () {
		browsePage.row8.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bracelets/Silver%20Cuffs');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Silver Cuffs');
		expect(browsePage.renfinedBy.getText()).toContain('Silver Cuffs');
	});

	it('should have Necklaces sub-category One of a Kind', function () {
		browsePage.row9.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bracelets/One%20of%20a%20Kind');
		expect(browsePage.selectedFacets.getText()).toEqual('/ One of a Kind');
		expect(browsePage.renfinedBy.getText()).toContain('One of a Kind');
	});

	//Rings Category checks

	it('should have a category, Rings', function () {
		browsePage.ringsCheck();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Rings/');
	});

	it('should have Rings sub-category Cocktail Rings', function () {
		browsePage.showMore.click();
		browsePage.row1.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Rings/Cocktail%20Rings');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Cocktail Rings');
		expect(browsePage.renfinedBy.getText()).toContain('Cocktail Rings');
	});

	it('should have Rings sub-category Stackable Rings', function () {
		browsePage.row2.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Rings/Stackable%20Rings');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Stackable Rings');
		expect(browsePage.renfinedBy.getText()).toContain('Stackable Rings');
	});

	it('should have Rings sub-category One of a Kind', function () {
		browsePage.row3.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Rings/One%20of%20a%20Kind');
		expect(browsePage.selectedFacets.getText()).toEqual('/ One of a Kind');
		expect(browsePage.renfinedBy.getText()).toContain('One of a Kind');
	});

	it('should have Rings sub-category Double Rings', function () {
		browsePage.row4.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Rings/Double%20Rings');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Double Rings');
		expect(browsePage.renfinedBy.getText()).toContain('Double Rings');
	});

	it('should have Rings sub-category Other Rings', function () {
		browsePage.row5.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Rings/Other%20Rings');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Other Rings');
		expect(browsePage.renfinedBy.getText()).toContain('Other Rings');
	});

	it('should have Rings sub-category Knuckle/Midi Rings', function () {
		browsePage.row6.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Rings/Knuckle/Midi%20Rings');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Knuckle/Midi Rings');
		expect(browsePage.renfinedBy.getText()).toContain('Knuckle/Midi Rings');
	});

	it('should have Rings sub-category Signet Rings', function () {
		browsePage.row7.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Rings/Signet%20Rings');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Signet Rings');
		expect(browsePage.renfinedBy.getText()).toContain('Signet Rings');
	});

	it('should have Rings sub-category Hand Jewelry', function () {
		browsePage.row8.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Rings/Hand%20Jewelry');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Hand Jewelry');
		expect(browsePage.renfinedBy.getText()).toContain('Hand Jewelry');
	});


	//Bags category checks
	it('should have a category, Bags', function () {
		browsePage.bagsCheck();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bags/');
	});

	it('should have Bags sub-category Shoulder Bags', function () {
		browsePage.showMore.click();
		browsePage.row0.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bags/Shoulder%20Bags');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Shoulder Bags');
		expect(browsePage.renfinedBy.getText()).toContain('Shoulder Bags');
	});

	it('should have Bags sub-category Clutch Bags', function () {
		browsePage.row1.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bags/Clutch%20Bags');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Clutch Bags');
		expect(browsePage.renfinedBy.getText()).toContain('Clutch Bags');
	});

	it('should have Bags sub-category Backpacks', function () {
		browsePage.row2.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bags/Backpacks');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Backpacks');
		expect(browsePage.renfinedBy.getText()).toContain('Backpacks');
	});

	it('should have Bags sub-category Totes', function () {
		browsePage.row3.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bags/Totes');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Totes');
		expect(browsePage.renfinedBy.getText()).toContain('Totes');
	});

	it('should have Bags sub-category Other Bags', function () {
		browsePage.row4.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bags/Other%20Bags');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Other Bags');
		expect(browsePage.renfinedBy.getText()).toContain('Other Bags');
	});

	it('should have Bags sub-category Cross Body Bags', function () {
		browsePage.row5.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bags/Cross%20Body%20Bags');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Cross Body Bags');
		expect(browsePage.renfinedBy.getText()).toContain('Cross Body Bags');
	});

	it('should have Bags sub-category Satchels', function () {
		browsePage.row6.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bags/Satchels');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Satchels');
		expect(browsePage.renfinedBy.getText()).toContain('Satchels');
	});

	it('should have Bags sub-category Weekenders / Travel bags', function () {
		browsePage.row7.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bags/Weekenders%20/%20Travel%20bags');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Weekenders / Travel bags');
		expect(browsePage.renfinedBy.getText()).toContain('Weekenders / Travel bags');
	});

	it('should have Bags sub-category Box Clutches', function () {
		browsePage.row8.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bags/Box%20Clutches');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Box Clutches');
		expect(browsePage.renfinedBy.getText()).toContain('Box Clutches');
	});

	it('should have Bags sub-category Pouches', function () {
		browsePage.row9.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Bags/Pouches');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Pouches');
		expect(browsePage.renfinedBy.getText()).toContain('Pouches');
	});


	//Scarves category check
	it('should have a category, Scarves', function () {
		browsePage.scarvesCheck();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Scarves/');
	});

	it('should have Scarves sub-category Silk Scarves', function () {
		browsePage.showMore.click();
		browsePage.row1.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Scarves/Silk%20Scarves');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Silk Scarves');
		expect(browsePage.renfinedBy.getText()).toContain('Silk Scarves');
	});

	it('should have Scarves sub-category Printed Scarves', function () {
		browsePage.row2.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Scarves/Printed%20Scarves');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Printed Scarves');
		expect(browsePage.renfinedBy.getText()).toContain('Printed Scarves');
	});

	it('should have Scarves sub-category Wool Scarves', function () {
		browsePage.row3.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Scarves/Wool%20Scarves');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Wool Scarves');
		expect(browsePage.renfinedBy.getText()).toContain('Wool Scarves');
	});

	it('should have Scarves sub-category Pleated Scarves', function () {
		browsePage.row4.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Scarves/Pleated%20Scarves');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Pleated Scarves');
		expect(browsePage.renfinedBy.getText()).toContain('Pleated Scarves');
	});

	it('should have Scarves sub-category Other Scarves', function () {
		browsePage.row5.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Scarves/Other%20Scarves');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Other Scarves');
		expect(browsePage.renfinedBy.getText()).toContain('Other Scarves');
	});

	it('should have Scarves sub-category Knitted Scarves', function () {
		browsePage.row6.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Scarves/Knitted%20Scarves');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Knitted Scarves');
		expect(browsePage.renfinedBy.getText()).toContain('Knitted Scarves');
	});

	it('should have Scarves sub-category Cotton Scarves', function () {
		browsePage.row7.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Scarves/Cotton%20Scarves');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Cotton Scarves');
		expect(browsePage.renfinedBy.getText()).toContain('Cotton Scarves');
	});


	it('should have Scarves sub-category Embellished Scarves', function () {
		browsePage.row8.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Scarves/Embellished%20Scarves');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Embellished Scarves');
		expect(browsePage.renfinedBy.getText()).toContain('Embellished Scarves');

	});

	it('should have Scarves sub-category Woven Scarves', function () {
		browsePage.row9.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Scarves/Woven%20Scarves');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Woven Scarves');
		expect(browsePage.renfinedBy.getText()).toContain('Woven Scarves');
	});

	//Hat category check
	it('should have a category, Hats', function () {
		browsePage.hatsCheck();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Hats/');
	});

	it('should have Hats sub-category Facinators', function () {
		browsePage.showMore.click();
		browsePage.row0.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Hats/Fascinators');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Fascinators');
		expect(browsePage.renfinedBy.getText()).toContain('Fascinators');
	});

	it('should have Hats sub-category Small Hair Accessories', function () {
		browsePage.row1.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Hats/Small%20Hair%20Accessories');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Small Hair Accessories');
		expect(browsePage.renfinedBy.getText()).toContain('Small Hair Accessories');
	});

	it('should have Hats sub-category Straw Hats', function () {
		browsePage.row2.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Hats/Straw%20Hats');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Straw Hats');
		expect(browsePage.renfinedBy.getText()).toContain('Straw Hats');
	});

	it('should have Hats sub-category Headbands', function () {
		browsePage.row3.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Hats/Headbands');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Headbands');
		expect(browsePage.renfinedBy.getText()).toContain('Headbands');
	});

	it('should have Hats sub-category Other Hats', function () {
		browsePage.row4.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Hats/Other%20Hats');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Other Hats');
		expect(browsePage.renfinedBy.getText()).toContain('Other Hats');
	});

	it('should have Hats sub-category Caps', function () {
		browsePage.row5.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Hats/Caps');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Caps');
		expect(browsePage.renfinedBy.getText()).toContain('Caps');
	});

	it('should have Hats sub-category Pillbox Hats', function () {
		browsePage.row6.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Hats/Pillbox%20Hats');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Pillbox Hats');
		expect(browsePage.renfinedBy.getText()).toContain('Pillbox Hats');
	});

	it('should have Hats sub-category Fedoras', function () {
		browsePage.row7.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Hats/Fedoras');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Fedoras');
		expect(browsePage.renfinedBy.getText()).toContain('Fedoras');
	});

	it('should have Hats sub-category Beanies', function () {
		browsePage.row8.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Hats/Beanies');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Beanies');
		expect(browsePage.renfinedBy.getText()).toContain('Beanies');
	});

	it('should have Hats sub-category Berets', function () {
		browsePage.row9.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Hats/Berets');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Berets');
		expect(browsePage.renfinedBy.getText()).toContain('Berets');
	});


	//Accessories Checks
	it('should have a category, Accessories', function () {
		browsePage.accessoriesCheck();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Accessories/');
	});

	it('should have Accessories sub-category Other Accessories', function () {
		browsePage.showMore.click();
		browsePage.row0.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Accessories/Other%20Accessories');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Other Accessories');
		expect(browsePage.renfinedBy.getText()).toContain('Other Accessories');
	});

	it('should have Accessories sub-category Cufflinks', function () {
		browsePage.row1.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Accessories/Cufflinks');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Cufflinks');
		expect(browsePage.renfinedBy.getText()).toContain('Cufflinks');
	});

	it('should have Accessories sub-category Laptop Covers', function () {
		browsePage.row2.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Accessories/Laptop%20Covers');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Laptop Covers');
		expect(browsePage.renfinedBy.getText()).toContain('Laptop Covers');
	});

	it('should have Accessories sub-category Wallets & Key Rings', function () {
		browsePage.row3.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Accessories/Wallets%20&%20Key%20Rings');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Wallets & Key Rings');
		expect(browsePage.renfinedBy.getText()).toContain('Wallets & Key Rings');
	});

	it('should have Accessories sub-category Phone Covers', function () {
		browsePage.row4.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Accessories/Phone%20Covers');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Phone Covers');
		expect(browsePage.renfinedBy.getText()).toContain('Phone Covers');
	});

	it('should have Accessories sub-category iPad Covers', function () {
		browsePage.row5.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Accessories/iPad%20Covers');
		expect(browsePage.selectedFacets.getText()).toEqual('/ iPad Covers');
		expect(browsePage.renfinedBy.getText()).toContain('iPad Covers');
	});

	it('should have Accessories sub-category Ties', function () {
		browsePage.row6.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Accessories/Ties');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Ties');
		expect(browsePage.renfinedBy.getText()).toContain('Ties');
	});

	it('should have Accessories sub-category Collars', function () {
		browsePage.row7.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Accessories/Collars');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Collars');
		expect(browsePage.renfinedBy.getText()).toContain('Collars');
	});

	it('should have Accessories sub-category Belts', function () {
		browsePage.row8.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Accessories/Belts');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Belts');
		expect(browsePage.renfinedBy.getText()).toContain('Belts');
	});

	it('should have Accessories sub-category Brooches', function () {
		browsePage.row9.click();
		app.halt();
		expect(browser.getCurrentUrl()).toContain('/browse/#!/Accessories/Brooches');
		expect(browsePage.selectedFacets.getText()).toEqual('/ Brooches');
		expect(browsePage.renfinedBy.getText()).toContain('Brooches');
	});

});	