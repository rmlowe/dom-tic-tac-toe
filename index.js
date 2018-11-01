function nextValue(s) {
  switch (s) {
    case "X":
      return "O";
    case "O":
      return "";
    default:
      return "X";
  }
}

document.querySelectorAll("td").forEach(function(elem) {
  elem.addEventListener("click", function() {
    elem.textContent = nextValue(elem.textContent);
  });
});
