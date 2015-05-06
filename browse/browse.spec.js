var Application = require('../application/application.po.js');
var HomePage = require('./homepage/homepage.po.js');
var BrowsePage = require('./browse.po.js')

describe('Browse page', function () {

    var app = new Application();
    app.get();

    var browsePage = new BrowsePage();

  
});
