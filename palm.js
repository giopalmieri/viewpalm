function hideDadosCadDig() {
  var x = document.getElementById("dadosCad")
  style = window.getComputedStyle(x);
  height = style.getPropertyValue('height');
  var y = document.getElementById("dadosDig")
  if (height === '500px') {
    x.style.height = '30px';
    x.style.transition = "0.5s";
    x.style.borderRadius="5%/90%";
    y.style.height = '30px';
    y.style.transition = "0.5s";
    y.style.borderRadius="5%/90%";
  } else {
    x.style.height = '500px';
    x.style.borderRadius="2.5%/3%";
    y.style.height = '500px';
    y.style.borderRadius="2.5%/3%";
  }

}

  
function hideDadosLoc() {
    var x = document.getElementById("dadosLoc");
    style = window.getComputedStyle(x);
    height = style.getPropertyValue('height');
    if (height === '500px') {
      x.style.height = '30px';
      x.style.transition = "0.5s";
      x.style.borderRadius="2.5%/90%";
    } else {
      x.style.height = '500px';
      x.style.borderRadius="2.5%/6.2%";
    }
  }
  