const container = document.getElementById("container");

//Da 1 a 100 (inclusi)
// for (let i = 1; i <= 100; i++) {

//     const box = document.createElement("div");

//     if (i % 15 == 0) {
//         box.classList.add("box", "fizzbuzz");
//         box.innerHTML = "fizzbuzz";
//     } else if (i % 3 == 0) {
//         box.classList.add("box", "fizz");
//         box.innerHTML = "fizz";
//     } else if (i % 5 == 0) {
//         box.classList.add("box", "buzz");
//         box.innerHTML = "buzz";
//     } else {
//         box.classList.add("box");
//         box.innerHTML = i;
//     }

//     container.append(box);

// }

//Da 1 a 100 (inclusi)
for (let i = 1; i <= 100; i++) {

    if (i % 15 == 0) {
        container.innerHTML += `<div class="box fizzbuzz">fizzbuzz</div>`;
    } else if (i % 3 == 0) {
        container.innerHTML += `<div class="box fizz">fizz</div>`;
    } else if (i % 5 == 0) {
        container.innerHTML += `<div class="box buzz">buzz</div>`;
    } else {
        container.innerHTML += `<div class="box">${i}</div>`;
    }
}