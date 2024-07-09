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
        const nums = raw.map((num) => parseInt(num));
        let calc = 0;
        nums.forEach((item) => {
          calc += item;
        });
        display.textContent = calc;
      } else if (display.textContent.includes("-")) {
        const raw = display.textContent.slice(0, -1).split("-");
        const nums = raw.map((num) => parseInt(num));
        display.textContent = nums.reduce((total, minus) => {
          return total - minus;
        });
      } else if (display.textContent.includes("÷")) {
        const raw = display.textContent.slice(0, -1).split("÷");
        const nums = raw.map((num) => parseInt(num));
        display.textContent = nums.reduce((total, divide) => {
          return total / divide;
        });
      } else if (display.textContent.includes("×")) {
        const raw = display.textContent.slice(0, -1).split("×");
        const nums = raw.map((num) => parseInt(num));
        display.textContent = nums.reduce((total, times) => {
          return total * times;
        });
      }
      if (display.textContent.includes("%")) {
        const raw = display.textContent.slice(0, -1).split("%");
        const nums = raw.map((num) => parseInt(num));
        display.textContent = nums.reduce((total, parcentage) => {
          return total / 100;
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
        konfersi = -parseInt(num);
      }
      display.textContent = konfersi;
    }
  });
});
