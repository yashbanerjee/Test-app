$(window).ready(function () {
  $(document).on("mouseenter", ".intro-cards", gradient);
  $(document).on("mouseleave", ".intro-cards", gradientOff);

  // The data/time we want to countdown to
  var countDownDate = new Date("March 25, 2021 16:37:52").getTime();

  // Run myfunc every second
  var myfunc = setInterval(function () {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // Result is output to the specific element
    $("#days").html(`${days}`);
    $("#hours").html(`${hours}`);
    $("#mins").html(`${minutes}`);
    $("#secs").html(`${seconds}`);

    // Display the message when countdown is over
    if (timeleft < 0) {
      clearInterval(myfunc);
      $("days").html("");
      $("hours").html("");
      $("mins").html("");
      $("secs").html("");
      $("end").html("TIME UP!!");
    }
  }, 1000);

  // gradient generator
  function gradient() {
    var a = randomColor();
    var b = randomColor();
    var c = randomColor();

    $(this).css("background-image", `linear-gradient(to right,${a},${b}`);
  }

  function gradientOff() {
    $(this).css("background-image", `none`);
  }
});
var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});
