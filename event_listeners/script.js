// Event listeners are functions that Apply some event on the given element by id or by classname

btn.addEventListener("click", () => {
  console.log("im clicked");
});
btn.addEventListener("mouseover", () => {
  console.log("im hovered");
});

btn.addEventListener("mousemove", () => {
    alert("im moved in");
  });
  btn.addEventListener("mouseout", () => {
    alert("im moved out");
  });
  