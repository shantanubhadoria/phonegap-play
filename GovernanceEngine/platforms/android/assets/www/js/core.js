var baseURL = "http://74.53.25.75:5002/";

var showLoader = function(text) {
  $.mobile.loading( "show", {
    textVisible: false,
    theme: "a",
    textonly: false,
    html: "<span style='margin:0 auto;' ><img src='img/chakragray_animated.gif'><h2>" + text + "</h2></span>"
  });
}
