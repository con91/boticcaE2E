var Application = require('../application/application.po.js');
var HomePage = require('./homepage.po.js');

describe('Home page', function () {

    var app = new Application();
    var homePage = new HomePage();
    app.get();

    

    it('should display the full screen image', function () {
    	this.halt;
        expect(app.fullScreenImage.isPresent()).toBe(true);
    });

    // it ('should have a clickable full screen image', function () {
    // 	expect(app)
    // });

  
});
