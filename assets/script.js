const display = document.getElementById("hasil");

const buttons = document.getElementsByTagName("button");
Array.from(buttons).forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (event.currentTarget.textContent === ",") {
      if (display.textContent.includes(",") === false) {
        display.textContent += ",";
      }
    } else if (display.textContent === "0") {
      display.textContent = event.currentTarget.textContent;
    } else {
      display.textContent += event.currentTarget.textContent;
    }
    if (event.currentTarget.textContent === "=") {
      if (display.textContent.includes("+")) {
        const raw = display.textContent.slice(0, -1).split("+");
        const nums = raw.map((num) => Number(num));
        let calc = 0;
        nums.forEach((item) => {
          calc += item;
        });
        display.textContent = calc;
      } else if (display.textContent.includes("÷")) {
        const raw = display.textContent.slice(0, -1).split("÷");
        const nums = raw.map((num) => Number(num));
        display.textContent = nums.reduce((total, divide) => {
          return total / divide;
        });
      } else if (display.textContent.includes("×")) {
        const raw = display.textContent.slice(0, -1).split("×");
        const nums = raw.map((num) => Number(num));
        display.textContent = nums.reduce((total, times) => {
          return total, times;
        });
      }
      if (display.textContent.includes("%")) {
        const raw = display.textContent.slice(0, -1).split("%");
        const nums = raw.map((num) => Number(num));
        display.textContent = nums.reduce((total, parcentage) => {
          return total / 100;
        });
      } else if (display.textContent.includes("-")) {
        const raw = display.textContent.slice(0, -1).split("-");
        const nums = raw.map((num) => Number(num));
        display.textContent = nums.reduce((total, minus) => {
          return total - minus;
        });
      }
    }
    if (event.currentTarget.textContent == "AC") {
      display.textContent = "0";
    }
    if (display.textContent.includes("+/-")) {
      const num = display.textContent;
      let konfersi = 0;
      if (display.textContent.includes("-")) {
        konfersi = -parseFloat(num);
      }
      display.textContent = konfersi;
    }
  });
});
// if (display.textContent.includes("-")) {
//   konfersi = parseFloat(display.textContent);
//   if (!isNaN(num)) {
//     konfersi = -konfersi;
//     display.textContent = konfersi.toString();
//   }
// }
