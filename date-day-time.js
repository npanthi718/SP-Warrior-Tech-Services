function displayDateTime() {
  var now = new Date();
  var hours = now.getHours();
  var amPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var userDateTime = now.toLocaleDateString(undefined, options) + ' ' + now.toLocaleTimeString(undefined, {hour12: true});
  document.getElementById('currentDateTime').textContent = userDateTime;
}

// Call the function to display date, time, and clock when the page loads
window.onload = function() {
  displayDateTime();
  // Update date, time, and clock every second
  setInterval(displayDateTime, 1000);
};
