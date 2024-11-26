function getrandomcolor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}




function colorchange() {
  const master = document.querySelector(".master");
  master.style.backgroundColor = getrandomcolor();
  const val = document.getElementById('val');
  const valText = val.textContent; // grabs "0" from the val span
  let valNum = Number(valText); // converts "0" to numeric 0
  valNum += 1; // adds 1 to valNum changing it from 0 to 1
  val.textContent = valNum; // puts it back in the HTML
}
