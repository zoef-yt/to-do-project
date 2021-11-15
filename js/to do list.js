async function removeAll() {
  var list = document.getElementById("myUL");
  while (list.hasChildNodes()) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    list.removeChild(list.firstChild);
  }
}

var list = document.getElementById("myUL");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  li.className = "item todo-items";
}
