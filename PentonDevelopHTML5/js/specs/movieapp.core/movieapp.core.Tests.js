
module("Movie App Unit Tests", {
    setup: function () {

        

    },
    teardown: function () {

    }
});


test("Verify We Have movieApp with expected members", function () {

    //basic sainty assertions to know members are present
    isFunction(movieapp, "movieapp object should exist");
    isFunction(movieapp.fn.init, "init function should exist");
    ok(movieapp.fn.version, "version should exist");
    ok(movieapp.fn.mainTitle, "mainTitle should exist");
    isFunction(movieapp.fn.hideBurgerMenu, "hideBurgerMenu should exist");
    isObject(movieapp.fn.movieTypes, "movieTypes function should exist");
    isFunction(movieapp.fn.setMainTitle, "setMainTitle function should exist");
    isFunction(movieapp.fn.bindBackButton, "bindBackButton function should exist");
    isObject(movieapp.fn.templates, "templates should exist");
    isFunction(movieapp.fn.compileTemplates, "compileTemplates function should exist");
    isFunction(movieapp.fn.showLoading, "showLoading function should exist");
    isFunction(movieapp.fn.mergeData, "mergeData function should exist");
    isObject(movieapp.fn.resizeEvents, "resizeEvents should exist");
    equal(movieapp.fn.viewWidth, 0, "viewWidth should exist");
    isFunction(movieapp.fn.setMoviePanelWidth, "setMoviePanelWidth function should exist");
    isFunction(movieapp.fn.setupPanorama, "setupPanorama function should exist");
    isFunction(movieapp.fn.setPanoramaWings, "setPanoramaWings function should exist");
    isObject(movieapp.fn.settings, "settings function should exist");
});

test("Verify can a new movieapp instance", function () {

    var m = movieApp();

    equal(typeof m, "object", "movieapp object should exist");

});

test("Verify can a new movieapp with a overriding setting adds the overide value", function () {

    var appTitle = "This is the test app title",
        customSetting = { "appTitle": appTitle },
        m = movieApp(customSetting);

    equal(m.settings.appTitle, appTitle, "m.settings.appTitle should be " + appTitle);

});

test("Verify can a new movieapp with a custom setting adds the custom setting", function () {

    var customSetting = {"test": "value"},
        m = movieApp(customSetting);

    equal(m.settings.test, "value", "m.settings.test should be 'value'");

});


