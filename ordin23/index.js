// Show loader on page load
window.onload = function() {
  document.querySelector('.loader').style.display = 'flex';
};

window.onload = function() {
  setTimeout(function() {
    var loader = document.getElementById("loader");
    if (loader) {
      loader.style.opacity = 0;
      setTimeout(function() {
        loader.parentNode.removeChild(loader);
      }, 1000); // 1 second delay
    }
  }, 1000); // 2 seconds delay
}

// disappearing navbar
jQuery("#wrapper").on("scroll", function () {
  if ($("#wrapper").scrollTop() > 200) {
      $(".navb").css("background-color","rgba(0,0,0,0.6)");
      $(".disappear").css("top","0");
  } else {
      $(".navb").css("background-color","none");
      $(".disappear").css("top","-200");
  }
});

$("#wrapper").on("scroll", function () {
  if ($("#wrapper").scrollTop() > 200) {
    $(".navb").addClass("navb-scroll");
  } else {
    $(".navb").removeClass("navb-scroll");
  }
});

// SIDENAV 
function openNav(){
    document.getElementById("sidenav").style.width="100%";
}
function closeNav () {
    document.getElementById("sidenav").style.width="0";
}

// utkarsh itna cool haina 

const observer = new IntersectionObserver((entries) => {
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  }
});

const hiddenElements = document.querySelectorAll('.hidden');
for (let i = 0; i < hiddenElements.length; i++) {
  observer.observe(hiddenElements[i]);
}

