let iteration11 = 0;
let maxIterations11 = 6;
let lineColor11 = "#000000";
let cantorSet11 = document.getElementById("cantorSet11");
let iterationCount11 = document.getElementById("iterationCount11");

function nextIteration11() {
  if (iteration11 >= maxIterations11) return;
  iteration11++;
  iterationCount11.innerText = iteration11;
  let lines = cantorSet11.children;
  let newLines = [];
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let lineWidth = line.offsetWidth;
    let thirdWidth = lineWidth / 3;
    let newLine1 = createLine11(thirdWidth);
    newLine1.style.top = line.offsetTop + 20 + "px";
    newLine1.style.left = line.offsetLeft + "px";
    newLines.push(newLine1);
    let newLine2 = createLine11(thirdWidth);
    newLine2.style.top = line.offsetTop + 20 + "px";
    newLine2.style.left = line.offsetLeft + thirdWidth * 2 + "px";
    newLines.push(newLine2);
  }
  for (let i = 0; i < newLines.length; i++) {
    cantorSet11.appendChild(newLines[i]);
  }
}

function reset11() {
  iteration11 = 0;
  iterationCount11.innerText = iteration11;
  cantorSet11.innerHTML = "";
  let firstLine = createLine11(700);
  firstLine.style.top = "0px";
  firstLine.style.left = "0px";
  cantorSet11.appendChild(firstLine);
}

function changeColor11(color) {
  lineColor11 = color;
  let lines = cantorSet11.children;
  for (let i = 0; i < lines.length; i++) {
    lines[i].style.backgroundColor = lineColor11;
  }
}

function createLine11(width) {
  let line = document.createElement("div");
  line.style.position = "absolute";
  line.style.width = width + "px";
  line.style.height = "10px";
  line.style.backgroundColor = lineColor11;
  return line;
}

reset11();

// Kod do obsługi trybu ciemnego
function updateCantorSetColor() {
  if (body.classList.contains('dark-mode')) {
      if (lineColor11 === "#000000") {
          changeColor11("#ffffff");
          document.getElementById("colorPicker11").value = "#ffffff";
      }
  } else {
      if (lineColor11 === "#ffffff") {
          changeColor11("#000000");
          document.getElementById("colorPicker11").value = "#000000";
      }
  }
}

updateCantorSetColor();

toggle.addEventListener('change', () => {
    updateCantorSetColor();
});

