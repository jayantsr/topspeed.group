// Function to include HTML files
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  
  // Loop through all elements with w3-include-html attribute
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      // Make an HTTP request to fetch the file
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          // Remove the attribute and call this function again
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
          // Set active navigation link
          setActiveNav();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}

// Function to set active navigation link based on current page
function setActiveNav() {
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  var navLinks = document.querySelectorAll(".nav-link");
  
  navLinks.forEach(function(link) {
    var linkPage = link.getAttribute("href");
    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Call the function when page loads
window.addEventListener('DOMContentLoaded', includeHTML);

// Make navigation shrink when scrolling
window.addEventListener('scroll', function() {
  var nav = document.querySelector('.nav');
  var navContainer = document.querySelector('.nav-container');
  
  if (nav && navContainer) {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
});

