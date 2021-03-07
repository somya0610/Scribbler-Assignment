/** Since header is common in all the html pages, we create header content in common.js, so that code can be reused */

/**Function to create header with title of the website as "ScriBBler",
 *  the subheading "Explore, Imagine, Create" on load of the screen*/
onLoadCreateHeader();
function onLoadCreateHeader() {
    var template = "<div>" +
        "<a class=\"logo-title\">ScriBBler</a>" +
        "<p class=\"subheading\">Explore, Imagine, Create</p>" +
        "</div>" +
        "<div>" +
        "<button class=\"top-buttons\" id=\"sign-in\">Sign In</button>" +
        "<button class=\"top-buttons\" id=\"sign-up\">Sign Up</button>" +
        "</div>";

    document.getElementsByTagName('header')[0].innerHTML += template;
}

/** Function to create Sign Up Modal on load of the screen */
onLoadCreateSignUpModal();
function onLoadCreateSignUpModal() {
    var template = "<div id=\"sign-up-modal\" class=\"modal\">" +
        "<div class=\"modal-content\">" +
        "<div class=\"modal-header\">" +
        "<p>Get Started</p>" +
        "<span class=\"modal-close\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span>" +
        "</div>" +
        "<hr>" +
        "<form>" +
        "<label for=\"name\">Name</label>" +
        "<input type=\"text\" id=\"name\" placeholder=\"Enter your name\" required autofocus>" +
        "<label for=\"username\">Username</label>" +
        "<input type=\"text\" id=\"username\" placeholder=\"Enter your username\" required autofocus>" +
        "<label for=\"password\">Password</label>" +
        "<input type=\"password\" id=\"password\" placeholder=\"Enter your password\" required autofocus>" +
        "<label for=\"confirm-password\">Confirm Password</label>" +
        "<input type=\"password\" id=\"confirm-password\" placeholder=\"Re-enter your password\" required autofocus>" +
        "<button class=\"modal-button\">Sign Up</button>" +
        "</form>" +
        "</div>" +
        "</div>";

    document.getElementsByTagName('header')[0].innerHTML += template;
}

/** Function to create Sign Up Modal on load of the screen */
onLoadCreateSignInModel();
function onLoadCreateSignInModel() {
    var template = "<div id=\"sign-in-modal\" class=\"modal\">" +
        "<div class=\"modal-content\">" +
        "<div class=\"modal-header\">" +
        "<p>Welcome Back!</p>" +
        "<span class=\"modal-close\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span>" +
        "</div>" +
        "<hr>" +
        "<form>" +
        "<label for=\"username\">Username</label>" +
        "<input type=\"text\" id=\"username\" placeholder=\"Enter your username\" required autofocus>" +
        "<label for=\"password\">Password</label>" +
        "<input type=\"password\" id=\"password\" placeholder=\"Enter your password\" required autofocus>" +
        "<button class=\"modal-button\">Sign In</button>" +
        "<h5>Not a member? <a href=\"#sign-up-modal\" id=\"sign-up-anchor\">Sign Up</a></h5>" +
        "</form>" +
        "</div>" +
        "</div>";
    document.getElementsByTagName('header')[0].innerHTML += template;
}

/** Below code opens the Sign Up/ Sign In modal, based on button clicked */

var signUpModal = document.getElementById("sign-up-modal"); // Get the div element for Sign Up Modal
var signUpButton = document.getElementById("sign-up"); // Get the button that opens the Sign Up modal
var signUpSpan = document.getElementsByClassName("modal-close")[0]; // Get the <span> element that closes the Sign Up Modal

var signInModal = document.getElementById("sign-in-modal"); // Get the div element for Sign In Modal
var signInButton = document.getElementById("sign-in"); // Get the button that opens the Sign In modal
var signInSpan = document.getElementsByClassName("modal-close")[1]; //Get the <span> element that closes the Sign In Modal

var signUpAnchor = document.getElementById('sign-up-anchor'); // Get the anchor element for sign-up-anchor

// On clicking Sign Up button, Sign Up modal appears on the screen
signUpButton.onclick = function () {
    signUpModal.style.display = "block";
}

// On clicking Sign In button, Sign In modal appears on the screen
signInButton.onclick = function () {
    signInModal.style.display = "block";
}

// On clicking the hyperlink in the anchor element, Sign In model is closed and Sign Up model opens up
signUpAnchor.onclick = function () {
    setModalToDefault(signInModal);
    signUpModal.style.display = "block";
}

// When the user clicks on Sign Up <span> (x), close the Sign Up Modal
signUpSpan.onclick = function () {
    setModalToDefault(signUpModal);
}

// When the user clicks on Sign In <span> (x), close the Sign In Modal
signInSpan.onclick = function () {
    setModalToDefault(signInModal);
}

/** Funtion to set the style display as 'none' and all input fields to default placeholder values for modal */
function setModalToDefault(modalElement) {
    modalElement.style.display = "none";
    var inputTagArray = modalElement.getElementsByTagName('input');
    for (var index = 0; index < inputTagArray.length; index++) {
        inputTagArray[index].value = '';
    }
}

// When the user clicks anywhere outside of the Sign Up / Sign In Modal, the respective modal is closed
window.addEventListener('click', function (event) {
    if (event.target == signUpModal) {
        setModalToDefault(signUpModal);
    } else if (event.target == signInModal) {
        setModalToDefault(signInModal);
    }
})