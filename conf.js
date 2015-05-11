(function() {

    'use strict';

    exports.config = {

        // Using jasmine 2
        // https://github.com/angular/protractor/blob/master/docs/jasmine-upgrade.md
        framework: 'jasmine2',

        
  // ---- 3. To use remote browsers via Sauce Labs -----------------------------
  // If sauceUser and sauceKey are specified, seleniumServerJar will be ignored.
  // The tests will be run remotely using Sauce Labs.
  sauceUser: 'conorboticca',
  sauceKey: 'abd99428-2ec7-4519-a667-06cd76d88fc0',
  // Use sauceAgent if you need customize agent for https connection to
  // saucelabs.com (i.e. your computer behind corporate proxy)
  sauceAgent: null,
  // Use sauceSeleniumAddress if you need to customize the URL Protractor
  // uses to connect to sauce labs (for example, if you are tunneling selenium
  // traffic through a sauce connect tunnel). Default is
  // ondemand.saucelabs.com:80/wd/hub
  
  //sauceSeleniumAddress: 'ondemand.saucelabs.com:80/wd/hub',

        seleniumAddress: 'http://127.0.0.1:4444/wd/hub/',



        capabilities: {
            browserName: 'chrome',

         

            // Sharding the tests means splitting up the suites and running them in parallel.
            // To do this is quite simple in protractor. Adding the shardTestFiles and maxInstances
            // to your capabilities config should allow you to (in this case) run at most two test
            // in parallel. Increase the maxInstances to increase the number of tests run.
            // Note : be careful not to set the number too high. Browsers may require multiple
            // threads and there is also an initialisation cost in opening new windows.

            // If this is set to be true, specs will be sharded by file (i.e. all
            // files to be run by this set of capabilities will run in parallel).
            // Default is false.
            // Note: if this is false we get a single report totalling all specs.
            shardTestFiles: false,

            // Maximum number of browser instances that can run in parallel for this
            // set of capabilities. This is only needed if shardTestFiles is true.
            // Default is 1.
            maxInstances: 1
        },

        suites: {
            application: './application/application.spec.js',
            homepage: './homepage/homepage.spec.js',
            // new: 'new/new.spec.js' 
            // browse: 'browse/browse.spec.js',

            
        },

        onPrepare: function() {
            browser.driver.manage().window().setSize(1440, 940);

            //Jasmine spec reporter
            //https://www.npmjs.com/package/jasmine-spec-reporter
            var SpecReporter = require('jasmine-spec-reporter');
            // add jasmine spec reporter
            jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));
        },

        // Options to be passed to Jasmine-node.
        jasmineNodeOpts: {
            showColors: true,
            isVerbose: true,
            print: function() {}
        }
    };

})();
