const inp = document.getElementById("inp");
const para = document.querySelector(".para");

let text = "";
let len = 0;
inp.addEventListener("input", function () {

    text = inp.value;
    len = text.length;
    para.classList.remove("red");
    para.textContent = `total character is ${len}`;
    if (len > 12) {
        para.textContent = `Character limit exceeding ${len}`;
        para.classList.add("red");
    }
});

console.log(`Total character is ${len}`);