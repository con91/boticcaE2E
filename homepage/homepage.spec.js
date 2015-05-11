var Application = require('../application/application.po.js');
var HomePage = require('../homepage/homepage.po.js');

describe('Homepage', function () {

    var app = new Application();
    var homePage = new HomePage();
    app.get();

    

    it('should display the full screen image', function () {
        expect(app.fullScreenImage.isPresent()).toBe(true);
    });

    it ('should have a clickable full screen image', function () {
    	expect(app.fullScreenImage.elementToBeClickable()).toBe(true);
    });

  
});
