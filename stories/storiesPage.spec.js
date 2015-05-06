var Application = require('../application/application.po.js');
var HomePage = require('./homepage/homepage.po.js');
var StoriesPage = require('./stories.po.js')

describe('Stories page', function () {

    var app = new Application();
    app.get();

    var storiesPage = new StoriesPage();

  
});
