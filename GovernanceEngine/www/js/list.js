var page = 0;
var lastDateDivider = '';
var list = {
  // Application Constructor
  initialize: function() {
    page = 0;
    lastDateDivider = '';

    this.bindEvents();
    // Pull the first list of issues
    this.getIssues();
  },
  bindEvents: function() {
  },
  getIssues: function() {
    var ul = $("#list-ul");
    showLoader();
    $.post(baseURL + 'issue/list/', {}, function(res) {
      var output = '';
      $.each( res.issues, function(key,issue){
        if( issue.created_date != lastDateDivider ) {
          output += '<li data-role="list-divider">' + issue.created_date + '<span class="ui-li-count">2</span></li>';
          lastDateDivider = issue.created_date;
        }
        output += "<li><a href='issue.html?" + issue.id + "' data-transition='slide' class='ui-btn ui-corner-all ui-shadow ui-btn-inline'>"
        + "<h2 class='ui-li-heading'>" + issue.author_user.first_name + " " + issue.author_user.last_name + "</h2>"
        + "<p class='ui-li-desc'><strong>" + issue.subject + "</strong></p>"
        + "<p class='ui-li-desc'>" + issue.description + "</p>"
        + "<p class='ui-li-aside'><strong>" + issue.created_h_m + "</strong>" + issue.created_am_pm + "</p>"
        + "</a></li>";
      });
      $("#list-ul").append(output).listview('refresh');
    }, "json");
    $.mobile.loading( "hide" );
  },
};
