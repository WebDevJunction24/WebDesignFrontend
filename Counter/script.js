const plus = document.querySelector(".add");
const sub = document.querySelector(".sub");
const para = document.querySelector(".para");
const reset = document.querySelector(".reset");

let count = 0;
plus.addEventListener("click", function () {
    if (count < 0) {
        count = 0;
    }
    count += 1
    para.textContent = count;
});

sub.addEventListener("click", function () {
    count -= 1
    para.textContent = count;
    if (count < 0) {
        para.textContent = "count must be >= 0";
    }
});
reset.addEventListener("click", function () {
    count = 0
    para.textContent = count;
});

