let pic1 = document.getElementById("pic1");
let pic2 = document.getElementById("pic2");
let pic3 = document.getElementById("pic3");

// window.addEventListener("load", () => {
//   var body = this.document.body;
//   if (window.innerWidth < 500) {
//     body.style = "background-repeat:round ";
//     pic1.style = "width:20vw";
//     pic2.style = "width:20vw";
//     pic3.style = "width:20vw";
//   } else {
//     body.style = "background-repeat:no-repeat";
//   }
//   console.log(window.innerWidth);
// });

var arr = ["交到對象", "明年發大財", "有貴人運", "明年水逆"];
function fortune(pic) {
  pic.addEventListener("click", () => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    randVal = getRandomInt(arr.length);
    for (let i = randVal; i < randVal + 1; i++) {
      alert(arr[i]);
    }
    pic.style = "display:none";
  });
}
fortune(pic1);
fortune(pic2);
fortune(pic3);
