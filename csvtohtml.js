$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "players_21.csv",
    dataType: "text",
    success: function (data) {
      var rows = data.split("\n");
      var table = "<thead><tr>";
      var headers = rows[0].split(",");
      for (var i = 0; i < headers.length; i++) {
        table += "<th>" + headers[i] + "</th>";
      }
      table += "</tr></thead><tbody>";
      for (var i = 1; i < Math.min(6, rows.length); i++) {
        var cells = rows[i].split(",");
        table += "<tr>";
        for (var j = 0; j < cells.length; j++) {
          table += "<td>" + cells[j] + "</td>";
        }
        table += "</tr>";
      }
      table += "</tbody>";
      $("#csvTable").html(table);
    },
  });
});
