var Application = require('../application/application.po.js');
var HomePage = require('./homepage/homepage.po.js');
var PrivateSalesPage = require('./privateSales.po.js')

describe('Private Sales page', function () {

    var app = new Application();
    app.get();

    var privateSalesPage = new PrivateSalesPage();

  
});
