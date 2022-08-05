$(document).ready(function (e) {
  //   e.preventDefault();
  $("form").submit(function (event) {
    var formData = {
      fname: $("#fname").val(),
      lname: $("#lname").val(),
      //   superheroAlias: $("#superheroAlias").val(),
    };
    console.log(fname);

    $.ajax({
      type: "POST",
      url: "https://api.npoint.io/9c93a0239579731f580a",
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
  url: "https://api.npoint.io/9c93a0239579731f580a",
  type: "GET",
  dataType: "json", // added data type
  success: function (res) {
    console.log(res);
    var form = document.getElementById("myForm");
    if (res && res.fname !== "" && res.lname !== "") {
      form[0].value = res.fname;
      form[1].value = res.lname;

      console.log(form[0]);
    }
    
  },
});
