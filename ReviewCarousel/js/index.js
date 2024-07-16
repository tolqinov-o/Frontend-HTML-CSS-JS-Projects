// set object review
const review = [
    {
        id: 1,
        author: "john smith",
        img: "https://png.pngtree.com/png-clipart/20231104/original/pngtree-happy-corporate-business-professional-one-man-clipart-white-background-png-image_13504468.png",
        job: "web developer",
        text: "Crafting innovative websites and coding dreams into reality. #WebDeveloper extraordinaire building the digital world, one line of code at a time. 🌐💻 #CodeIsAlive"
    },
    {
        id: 2,
        author: "peter johnson",
        img: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg",
        job: "web design",
        text: "Crafting digital experiences through innovative web design 🌐✨ | Embracing creativity and functionality to bring your vision to life #WebDesign #UXDesign #DigitalStrategy"
    },
    {
        id: 3,
        author: "bill anderson",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9B3nT5xiiLpNVIcOnLOG-gtHWhFgQIrnvpQ&s",
        job: "the boss",
        text: "Empowering leaders to conquer challenges and achieve success 💼✨ | Leading with passion, vision, and purpose #BossLife #LeadershipJourney"
    },
    {
        id: 4,
        author: "peter jones",
        img: "https://t4.ftcdn.net/jpg/06/28/04/87/360_F_628048704_BIm31smMFDYYFCGItT45pS2agYStYZmm.jpg",
        job: "intern",
        text: "Passionate about gaining real-world experience and expanding horizons through internships. Embracing challenges, learning new skills, and shaping future success. 🌟 #InternLife #CareerDevelopment"
    }
];

// get items
const img = document.getElementById("img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const random = document.querySelector(".random");

// set strating item
let currentItem = 0;

window.addEventListener("click", function() {
    showPerson();
});

function showPerson() {
    const item = review[currentItem];

    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    text.textContent = item.text; 
}

nextBtn.addEventListener("click", function() {
    currentItem++;

    if(currentItem > review.length - 1){
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener("click", function() {
    currentItem--;

    if(currentItem < 0) {
        currentItem = review.length - 1;
    }
    showPerson();
});

random.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * review.length);
    showPerson();
});