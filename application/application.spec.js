var Application = require('./application.po.js');

describe('Application', function() {

    var app = new Application();
    app.get();

    it('should display a Boticca logo', function () {
        expect(app.applicationLogo.isPresent()).toBe(true);
    });

    it('should display the Nav bar', function () {
        expect(app.navBar.isPresent()).toBe(true);
    });

    // it('should display a fullScreenImage', function () {
    //     expect(app.fullScreenImage.isPresent()).toBe(true);
    // });


    
    
});