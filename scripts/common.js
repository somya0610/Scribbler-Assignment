/** Since header is common in all the html pages, we create header content in common.js, so that code can be reused */

/**Create header with title of the website as "ScriBBler", the subheading "Explore, Imagine, Create" on load of the screens*/
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