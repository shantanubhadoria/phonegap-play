var issue = {
  initialize: function(issue_id){
    $.post(baseURL + 'issue/' + issue_id + '/', {}, function(res) {
      $("#issue-subject").html(res.issue.subject);
      $("#issue-description").html(""
        + "<p class='ui-author'><strong>Issue Created By</strong> " + res.issue.author_user.first_name + " " + res.issue.author_user.last_name + "<strong> on </strong>" + res.issue.created_date + "</p>"
        + "<div class='ui-grid-a'>"
        + "<div class='ui-block-a'><span style='align:left;'><strong>Status:</strong></span> <span style='align:right;'>" + res.issue.issue_status.name + "</span></div>"
        + "<div class='ui-block-b'><strong>Start Date:</strong> " + res.issue.created_time + "</div>"
        + "<div class='ui-block-a'><strong>Priority:</strong> " + res.issue.issue_status.name + "</div>"
        + "<div class='ui-block-b'><strong>Due Date:</strong> " + res.issue.created_time + "</div>"
        + "<div class='ui-block-a'><strong>Assignee:</strong> " + res.issue.issue_status.name + "</div>"
        + "<div class='ui-block-b'><strong>% Done:</strong> " + res.issue.created_time + "</div>"
        + "<div class='ui-block-a'><strong>Category:</strong> " + res.issue.issue_status.name + "</div>"
        + "<div class='ui-block-b'><strong>Spent Time:</strong> " + res.issue.created_time + "</div>"
        + "</div>"
        + "<hr/>"
        + res.issue.description
        );
    });
    $("#issue-ul").append(output).listview('refresh');
  },
};
