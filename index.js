document.querySelector(".btn").addEventListener("click", change);

function change() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += ((Math.random() * 16) | 0).toString(16).toUpperCase();
  }
  //   document.getElementById("body").style.backgroundColor = color;
  //   document.getElementById("hex").innerHTML = color;
  document.querySelector("body").style.backgroundColor = color;
  document.querySelector("#hex").textContent = color;
}

// '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
// var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
