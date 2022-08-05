$(document).ready(function (e) {
  e.preventDefault();
  $.ajax({
    url: "https://api.npoint.io/9c93a0239579731f580a",
    type: "GET",
    dataType: "json", // added data type
    success: function (res) {
      console.log(res);
      var form = document.getElementById("myForm");
      form[0].fname = res.fname;
      form[1].lname = res.lname;
    },
  });
  
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

