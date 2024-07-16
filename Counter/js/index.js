let count = 0;

const number = document.querySelector(".number");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(button) {
    button.addEventListener("click", function(e) {
        const style = e.currentTarget.classList;

        if(style.contains("plus")) {
            count++;
        } else if(style.contains("minus")) {
            count--;
        } else {
            count = 0;
        }

        if(count > 0) {
            number.style.color = "#87d37c";
        } else if(count < 0) {
            number.style.color = "#e73635";
        }

        if(count === 0) {
            number.style.color = "#fff";
        }

        number.textContent = count;
    });
});

// increase color: #87d37c
// reset color : #fff
// decrease color: #e73635