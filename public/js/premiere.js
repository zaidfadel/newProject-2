$(document).ready(function() {
  $('#search').on('keyup', function() {
    var value = $(this)
      .val()
      .toLowerCase();
    $('.myDIV  *').filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  });
});
////
$(document).ready(function() {
  $('.materialboxed').materialbox();
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
});

$('.head-link').click(function(e) {
  e.preventDefault();

  var goto = $(this).attr('href');

  $('html, body').animate(
    {
      scrollTop: $(goto).offset().top
    },
    800
  );
});
(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  (i[r] =
    i[r] ||
    function() {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(
  window,
  document,
  'script',
  'https://www.google-analytics.com/analytics.js',
  'ga'
);
ga('create', 'UA-60673008-2', 'auto');
ga('send', 'pageview');

///////
$(function() {
  $('.create-form').on('submit', function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newinfo = {
      name: $('#ca')
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax('/about/model', {
      type: 'POST',
      data: newinfo
    }).then(function() {
      console.log('created new ');
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $('.delete').on('click', function(event) {
    var id = $(this).data('id');

    // Send the DELETE request.
    $.ajax('/dealer/create/' + id, {
      type: 'DELETE'
    }).then(function() {
      console.log('deleted car', id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});

// Slideshow
// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}
//   x[myIndex-1].style.display = "block";
//   setTimeout(carousel, 3000); // Change image every 2 seconds
// }
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" w3-white", "");
//   }
//   x[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " w3-white";
//   setTimeout(carousel, 3000); // Change image every 2 seconds
// }

// Or with jQuery

$(document).ready(function() {
  $('.slider').slider({ full_width: true });
});

function isNumber(evt) {
  var iKeyCode = evt.which ? evt.which : evt.keyCode;
  if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
    return false;

  return true;
}
$(document).ready(function() {
  $('.button-collapse').sideNav();
});
$(document).ready(function() {
  $('.subnits').click(function(event) {
    event.preventDefault();
    var email = $('.email').val();
    var subject = $('.subject').val();
    var message = $('.message').val();
    var statusElm = $('.status').statusElm.empty();
    if (email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div> Email is valid </div>');
    } else {
      statusElm.append('<div>Email is not valid </div> ');
    }
    if (subject.length >= 2) {
      statusElm.append('<div> subject is valid </div>');
    } else {
      statusElm.append('<div>subject is not valid </div> ');
    }
    if (message.length >= 10) {
      statusElm.append('<div> message is valid </div>');
    } else {
      statusElm.append('<div>message is not valid </div> ');
    }
  });
});
