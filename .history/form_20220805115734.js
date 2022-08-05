$(document).ready(function () {
  $("form").submit(function (event) {
    var formData = {
      fname: $("#fname").val(),
      lname: $("#lname").val(),
      //   superheroAlias: $("#superheroAlias").val(),
    };
    console.log(formData);

    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:5500/index.html",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(data);
    });

    event.preventDefault();
  });
});

$.ajax({
  url: "https://app.asana.com/-/api/0.1/workspaces/",
  type: "GET",
  dataType: "json", // added data type
  success: function (res) {
    console.log(res);
    alert(res);
  },
});
