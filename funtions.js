
const number = Math.floor((Math.random() * 20) + 1);

document.getElementById("submit-guess").onclick = function() {
  var guess = document.getElementById("guess").value;
  var li = document.createElement('li');
  if(guess > number) {
    li.textContent = "You guess is too high."
    document.getElementById("results").prepend(li);
  } else if (guess < number) {
    li.textContent = "You guess is too low."
    document.getElementById("results").prepend(li);
  } else if (guess == number) {
    li.textContent = "Congrats! Correct guess."
    document.getElementById("results").prepend(li);
  } else {
    li.textContent = "You guess is invalid."
    document.getElementById("results").prepend(li);
  }
};
