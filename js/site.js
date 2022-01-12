function doSearch(e) {
  const searchBox = document.getElementById("search");
  const searchText = searchBox.value.trim();

  if (searchText !== "") {
    // find is a built in window function
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/find
    find(searchText);
  }
}

function doJoinGym() {
  // get the register form
  const registerForm = document.getElementById("register-form");
    
  // check form for validity / use html validation
  if (registerForm.checkValidity()) {
    // submit form to server...code would go here
    // display success message
    $("#register").animate({
      top: "200px",
      height: "280px"
    }, 500, function() {
      const modalBody = document.getElementById("registser-modal-body");
      modalBody.innerHTML = '<h3 class="boom">Awesome - Let\'s Get Started!</h3>';
    });
  }
}

// when page loads...
document.addEventListener("DOMContentLoaded", function() {
  // get the search form
  const searchForm = document.getElementById("search-form");
  // when user submits the form (presses enter, in this case)
  searchForm.addEventListener("submit", function(e) {
    // intercept / stop default behavior  
    e.preventDefault();
    // do the search
    doSearch();
  });

  // get the register form
  const registerForm = document.getElementById("register-form");
  // when user submits the form (via click or pressing enter, in this case)
  registerForm.addEventListener("submit", function(e) {
    // intercept / stop default behavior  
    e.preventDefault();
    // do the search
    doJoinGym();
  });
});