var Application = require('../application/application.po.js');
var HomePage = require('./homepage/homepage.po.js');
var BrowsePage = require('./browse/browse.po.js');

describe('New page', function () {

    var app = new Application();
    app.get();

    var newPage = new NewPage();


});
