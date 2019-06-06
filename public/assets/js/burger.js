$(document).on("click", ".submitBtn", burgerItUp)
//function to add a burger using submit button
function burgerItUp() {
    event.preventDefault();
  var name = $("#burger-name").val().trim()
  var burger = {
    burger_name: name,
    devoured: 0
  }
  console.log(burger)
  //start ajax to send a request
  $.ajax("/api/burgers", {
    type: "POST",
    data: burger
  }).then(
    function() {
        console.log("added anotha one");
        location.reload();
    });
  }
//when burger is pushed up, this button will devour it sending it to the devoured side
$(document).on("click", ".devourBtn", devour)
$(document).on("click", ".unDevourBtn", unDevour)



function devour() {
  event.preventDefault();
  console.log(this)
    var id = $(this).data("id");
    var devouredBurgers = {
      devoured: 1
    };
    console.log(id);
    console.log(devouredBurgers);
    // Send the PUT request using ajax.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredBurgers
    }).then(
      function() {

        // Reload the page to get the updated list
        location.reload();
      }
    );
}


function unDevour() {
  event.preventDefault();
  console.log(this)
    var id = $(this).data("id");
    var devouredBurgers = {
      devoured: 0
    };
    console.log(id);
    console.log(devouredBurgers);
    // Send the PUT request using ajax.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredBurgers
    }).then(
      function() {

        // Reload the page to get the updated list
        location.reload();
      }
    );
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
