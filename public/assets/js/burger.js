$(document).on("click", ".submitBtn", burgerItUp)
$(document).on("click", ".devourBtn", devourIt)
$(document).on("click", ".unDevourBtn", unDevour)
$(document).on("click", ".deleteBtn", deleteIt)

//function to add a burger using submit button
function burgerItUp() {
  var name = $("#burger-name").val().trim()
  var burger = {
    burger_name: name,
    devoured: 0
  }
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
//when burger is pushed up, this button will devour it sending it to the devoured side
function devourIt() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).attr("data-id");
    var newDevour = $(this).attr("data-newdevour");

    var newDevourState = {
      devoured: "true"
    };
console.log(id);
console.log(newDevourState);
    // Send the PUT request using ajax.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
}

function unDevour()  {

}

function deleteBtn() {
  $(".delete-burger").on("click", function(event) {
    var id = $(this).attr("data-id");

    // Send the DELETE request using ajax.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

}
