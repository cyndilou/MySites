import {
    GOOGLE_IDS
}
from './keys';

import {
    GoogleAPIWrapper
}
from '../../_common/js/google';

//----- Debug Variables -----//
var DEBUG = false;
var DELAY = 1000;

//----- Methods for Google Forms -----//

// Prevent forms from submitting.
//function preventFormSubmit() {
//    console.log("preventFormSubmit");
//
//    var forms = document.querySelectorAll('form');
//    for (var i = 0; i < forms.length; i++) {
//        forms[i].addEventListener('submit', function (event) {
//            console.log("submitEvent");
//
//            event.preventDefault();
//        });
//    }
//}
//window.addEventListener('load', preventFormSubmit);

//----- Themes -----//
var _themes = {
    girl: {
        key: "girl",
        name: "Isabelle",
        css: "css/girl/bootstrap.min.css",
        icon: "flaticon-baby-girl",
        background: "images/girl/background.png"
    },
    boy: {
        key: "boy",
        name: "Ethan",
        css: "css/boy/bootstrap.min.css",
        icon: "flaticon-baby",
        background: "images/boy/background.png"
    }
}

var _currentTheme = _themes.girl;

//----- Handlebars Templates -----//
var _Handlebars = {
    templates: {}
};

//----- OnLoad -----//
$(function () {
    console.log("Loading page");

    onGoogleApisLoad();

    $('#weight').mask("#0.00", {
        reverse: false,
        placeholder: "__.__"
    });

    var themeKey = Cookies.get('theme');
    setTheme(_themes[themeKey]);

    registerDayPartial();

    //----- Form Submit -----//
    $("#myForm").submit(function (event) {
        event.preventDefault();

        handleFormSubmit(this);
    });

    //----- Collapse navbar on click -----//
    $('.navbar-nav>.nav-close>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    $('.navbar-collapse>div>button').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    //----- Authentication Button Events -----//
    $(".signIn").on("click", function () {
        GoogleAPIWrapper.signIn();
    });

    $("#signOut").on("click", function () {
        GoogleAPIWrapper.signOut();
    });

    //----- Switch -----//
    $(".navbar-nav>.dropdown>div>a").on('click', function () {
        setTheme(_themes[$(this).attr("data-baby")]);
        $('.navbar-collapse').collapse('hide');

        loadData();
    });

    //----- Modal Events -----//
    $('#addNewModal').on('show.bs.modal', function (e) {
        resetForm();
    });

    $('#addNewModal').on('hidden.bs.modal', function (e) {
        resetForm();
    });
});

//-- Set Theme --//
function setTheme(theme) {
    theme = theme || _themes.boy;

    Cookies.set('theme', theme.key);
    _currentTheme = theme;

    $("#babyIcon").removeClass();
    $("#babyIcon").addClass(theme.icon);

    $("#babyName").text(theme.name);

    $("#themeLink").attr("href", theme.css);

    $("#backgroundImg").attr('src', theme.background);
}

//-- Google API Methods --//
function onGoogleApisLoad() {
    GoogleAPIWrapper.registerListeners(updateSigninStatus, updateCurrentUser);

    GoogleAPIWrapper.load(GOOGLE_IDS.SCRIPT_ID, GOOGLE_IDS.CLIENT_ID, GOOGLE_IDS.API_KEY, GOOGLE_IDS.DISCOVERY_DOCS, GOOGLE_IDS.SCOPES);
}

function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        $("#signInModal").modal("hide");
        $("#signInSection").hide();

        $("#currentUserSection").show();
        $("#signedInView").show();

        loadData();
    } else {
        $("#signInModal").modal("show");
        $("#signInSection").show();

        $("#currentUserSection").hide();
        $("#signedInView").hide();
    }
}

function updateCurrentUser(currentUser) {
    var email = currentUser.isSignedIn() ? currentUser.getBasicProfile().getEmail() : "";
    $("#currentUser").text(email);
}

//----- Load Data -----//
function loadData() {
    openOverlay("Loading...");
    if (DEBUG) {
        setTimeout(function () {
            loadHandlebars({
                dashboard: sampleDashboardContext,
                today: sampleTodayContext,
                yesterday: sampleYesterdayContext
            });
        }, DELAY);
    } else {
        GoogleAPIWrapper.runScript("loadData", [_currentTheme.name], loadHandlebars, onFailure);
    }
}

//----- Handlebars methods -----//
function loadHandlebars(data) {
    displayTemplate("#dashboard-template", "#dashboard", data.dashboard);
    displayTemplate("#today-template", "#today", data.today);
    displayTemplate("#yesterday-template", "#yesterday", data.yesterday);

    closeOverlay();
};

function registerDayPartial() {
    var script = $("#day-partial").html();
    var partial = Handlebars.compile(script);
    Handlebars.registerPartial("dayPartial", partial);
};

function displayTemplate(templateId, section, context) {
    if (_Handlebars.templates[templateId] === undefined) {
        _Handlebars.templates[templateId] = $(templateId).html();
    }

    var template = Handlebars.compile(_Handlebars.templates[templateId]);
    var html = template(context);

    // Add the compiled html to the page
    $(section).html(html);
}

//----- Overlay Methods -----//
function openOverlay(overlayText) {
    $("#overlay-text").text(overlayText);
    $("#wait").css("display", "block");
}

function closeOverlay() {
    $("#wait").css("display", "none");
}

//----- Add New Entry Form Methods -----//
function handleFormSubmit(formObject) {
    $('#addNewModal').modal('hide');

    openOverlay("Saving...");

    console.log("running script");

    var values = getFormValues(formObject);

    if (!DEBUG) {
        GoogleAPIWrapper.runScript("submitForm", values, onSubmitFormSuccess, onFailure);
    } else {
        setTimeout(function () {
            onSubmitFormSuccess();
        }, DELAY);
    }
}

function getFormValues(form) {
    var $inputs = $('#' + form.id + ' :input');

    var values = {};
    $inputs.each(function () {
        if ((this.type === "radio" && this.checked === true) || (this.type !== "radio")) {
            values[this.name] = $(this).val();
        }
    });

    values["baby"] = _currentTheme.name;

    if (values["feeding-type"] !== "Solids") {
        delete values["meal"];
    }

    if (values["feeding-type"] !== "Bottle") {
        delete values["amount"];
        delete values["type"];
    }

    if (values["feeding-type"] !== "Breast") {
        delete values["time"];
        delete values["side"];
    }

    console.log(values);

    return values;
}

function onFailure(message) {
    closeOverlay();
    alert(message);
    $("#submitBtn").val("Submit");
};

function onSubmitFormSuccess() {
    $("#submitBtn").val("Submit");
    closeOverlay();
    loadData();
};

function resetForm() {
    console.log("resetForm");

    // get the iso time string formatted for usage in an input['type="datetime-local"']
    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
    var localISOTimeWithoutSeconds = localISOTime.slice(0, 16);

    $("#date").val(localISOTime.slice(0, 16));

    // reset controls
    $("#amount").val('');
    $("#type").val('');
    $("#time").val('');
    $("#meal").val('');
    $("#vitamin-no").click();
    $("#wet-no").click();
    $("#dirty-no").click();
    $("#weight").val('');
    $("#notes").val('');
    $("#bath-no").click();
}
