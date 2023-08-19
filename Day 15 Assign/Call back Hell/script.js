const countdownElement = document.getElementById('countdown');

// Countdown function
const countdown = (num, callback) => {
  if (num > 0) {
    countdownElement.textContent = num;
    setTimeout(() => {
      countdown(num - 1, callback);
    }, 1000);
  } else {
    callback();
  }
};

// Start countdown
countdown(10, () => {
  countdownElement.textContent = 'Happy Independence Day';
});
