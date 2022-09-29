let speed = 50; // the speed which the text writes itself
let txt = "Hello world!"; // the text
let i = 0; // an index for iteration

function typeWriter() {
  const demo = document.getElementById("demo");
  if (i < txt.length) {
    demo.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
