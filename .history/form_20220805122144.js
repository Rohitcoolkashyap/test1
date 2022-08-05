$(document).ready(function (e) {
  //   e.preventDefault();
  $("form").submit(function (event) {
    var formData = {
      fname: $("#fname").val(),
      lname: $("#lname").val(),
      //   superheroAlias: $("#superheroAlias").val(),
    };

    $.ajax({
      type: "POST",
      url: "https://api.npoint.io/9c93a0239579731f580a",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(data);
    });
    handleGet(formData);
    event.preventDefault();
  });
});
function handleGet(res) {
  console.log(res);
  var form = document.getElementById("myForm");
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  fname.i

//   if (res && res.fname !== "" && res.lname !== "") {
//     form[0].value = res.fname;
//     form[1].value = res.lname;
//   }
}
// $.ajax({
//   url: "https://api.npoint.io/9c93a0239579731f580a",
//   type: "GET",
//   dataType: "json", // added data type
//   success: function (res) {
//     console.log(res);

//   },
// });
