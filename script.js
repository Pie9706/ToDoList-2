let c = 0;

function add() {
  if (document.getElementById("btn1").value == "") alert("Scrivi qualcosa!!!");
  else {
    li.appendChild(document.getElementById("btn1").value);
    c += 1;
  }
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
