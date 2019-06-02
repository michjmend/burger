//function to add a burger using submit button
$(function() {
  $(".form-control").on("submit", function(event) {
    event.preventDefault();
  var name = $("#burger-name").val().trim()
  var burger = {
    burger_name: name,
    devoured: 0
  }
  //start ajax to send a request
  $.ajax({
    URL: "/api/burgers",
    type: "POST",
    data: burger
  }).then(
    function() {
        console.log("added anotha one");
        location.reload();
    });
  };
});
//when burger is pushed up, this button will devour it sending it to the devoured side
$(".devourBtn").on("click", function(event) {
  event.preventDefault();

    var id = $(this).attr("data-id");
    var devourBurger = $(this).attr("data-devourBurger");

    var devouredBurgers = {
      devoured: devourBurger
    };
    console.log(id);
    console.log(devouredBurgers);
    // Send the PUT request using ajax.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredBurgers
    }).then(
      function() {
        console.log("changed devour to", devourBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
}

//not enough time to figure out additional buttons

// function deleteBtn() {
//   $(".deleteBtn").on("click", function(event) {
//     var id = $(this).attr("data-id");

//     // Send the DELETE request using ajax.
//     $.ajax("/api/burgers/" + id, {
//       type: "DELETE",
//     }).then(
//       function() {
//         console.log("deleted burger", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

// }
