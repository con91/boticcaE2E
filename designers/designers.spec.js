var Application = require('../application/application.po.js');
var HomePage = require('./homepage/homepage.po.js');
var DesignersPage = require('./designers.po.js')

describe('Designers page', function () {

    var app = new Application();
    app.get();

    var designersPage = new DesignersPage();

  
});
