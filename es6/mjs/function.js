function drawShape() {
  var mContent = document.getElementById('mContent');
  mContent.innerHTML = '';

  for (var i = 0; i <= 10; i++) {
    var p = document.createElement('p');
    p.innerHTML = i;
    console.log(i);
    mContent.appendChild(p);
  }
}

function clearShape() {
  var mContent = document.getElementById('mContent');
  mContent.innerHTML = '';
}
