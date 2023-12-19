let c = 0;

function aggiungi() {
  /*if (aggiungi.value !== "") { 
    const newLi = document.createElement("li");
    newLi.textContent = aggiungi.value;
    list.appendChild(newLi);
  }*/ document
    .getElementById("list")
    .appendChild(document.getElementById("aggiungi"));
}

/*function cut(string) {
  function onFilter(value, index) {
    if ( document.getElementById("cancella") == 0) return true;
    else return false;
  }
  const filterNumber = numbers.filter(onFilter);
  return filterNumber;
}

function remove() {
  let t = document.getElementById("list");

  for (let i = 1; i < t.childNodes.length; i += 2) {
    cut(t.childNodes[i].innerHTML);
  }
}
*/
