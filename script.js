(function () {
  "use strict";
  document
    .getElementById("convert")
    .addEventListener("submit", function (event) {
      //prevent page from defaulting to post action.
      event.preventDefault();

      const distance = parseFloat(document.getElementById("distance").value);
      //run distance through parseFloat and assign back to distance. Must be a number.
      // distance = parseFloat(distance);
      //add parseFloat to line 52 and keep code in one line
      const answer = document.getElementById("answer");

      if (distance) {
        // alert(distance);
        const conversion = (distance * 1.609344).toFixed(3);
        // var roundedConversion = (Math.round(conversion * 1000))/1000;
        // var roundedConversion = conversion.toFixed(3);
        //toFixed will round to 3 decimals
        // alert(roundedConversion);
        // alert(conversion);
        // var answer = document.getElementById('answer');
        //moved variable from line 66 outside of the function
        answer.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`;
      } else {
        // alert(NaN);
        answer.innerHTML = "<h2>Please provide a number</h2>";
      }
      // alert(distance);
    });
})();
