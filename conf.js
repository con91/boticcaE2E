exports.config = {

    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'chrome',

        // If this is set to be true, specs will be sharded by file (i.e. all
        // files to be run by this set of capabilities will run in parallel).
        // Default is false.
        shardTestFiles: true,

        // Maximum number of browser instances that can run in parallel for this
        // set of capabilities. This is only needed if shardTestFiles is true.
        // Default is 1.
        maxInstances: 1
    },

    suites: {
        application: './application/application.spec.js',
        
    },

    framework: 'jasmine',

    baseUrl: 'http://boticca.com',

      // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    onPrepare: function () {

        browser.driver.manage().window().setSize(1280, 900);

        // ignore angularjs
        //browser.ignoreSynchronization = true;

        // Just be aware that implicitWait changes the amount of time it gives findElement to
        // find an element GLOBALLY (ie for everything thereafter). It's defaulted to 0 so I would
        // recommend setting a value for whatever you are having issues with and reset it to 0 afterwards.
        // https://github.com/angular/protractor/issues/365
        browser.manage().timeouts().implicitlyWait(5000);
    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true
    }
}
