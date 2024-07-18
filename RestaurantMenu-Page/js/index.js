// Itmes
const menu = [
    {
        id: 1,
        price: 15.99,
        title: "buttermilk pankaces",
        category: "breakfast",
        img: "./img/img1.jpeg",
        about: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, 
        hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 2,
        price: 13.99,
        title: "diner double",
        category: "lunch",
        img: "./img/img2.jpeg",
        about: `Vaporware iPhone mumblecore selvage raw denim slow-carb leggings 
        gochujang helvetica man braid jianbing. Marfa thundercats`,
    },
    {
        id: 3,
        price: 6.99,
        title: "godzilla milkshake",
        category: "shakes",
        img: "./img/img3.jpeg",
        about: `ombucha chillwave fanny pack 3 wolf moon street art photo booth 
        before they sold out organic viral.`,
    },
    {
        id: 4,
        price: 20.99,
        title: "country delight",
        category: "breakfast",
        img: "./img/img4.jpeg",
        about: `Shabby chic keffiyeh neutra snackwave pork belly 
        shoreditch. Prism austin mlkshk truffaut,`,
    },
    {
        id: 5,
        price: 22.99,
        title: "egg attack",
        category: "lunch",
        img: "./img/img5.jpeg",
        about: `Franzen vegan pabst bicycle rights kickstarter 
        pinterest meditation farm-to-table 90's pop-up`,
    },
    {
        id: 6,
        price: 18.99,
        title: "oreo dream",
        category: "shakes",
        img: "./img/img6.jpeg",
        about: `Portland chicharrones ethical edison bulb, palo 
        santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        price: 8.99,
        title: "bacon owerflow",
        category: "breakfast",
        img: "./img/img7.jpeg",
        about: `Carry jianbing normcore freegan. Viral single-origin coffee 
        live-edge, pork belly cloud bread iceland put a bird`,
    },
    {
        id: 8,
        price: 12.99,
        title: "american classic",
        category: "lunch",
        img: "./img/img8.jpeg",
        about: `On it tumblr kickstarter thundercats migas everyday 
        carry squid palo santo leggings. Food truck truffaut`,
    },
    {
        id: 9,
        price: 16.99,
        title: "quarantine buddy",
        category: "shakes",
        img: "./img/img9.jpeg",
        about: `Skateboard fam synth authentic semiotics. Live-edge lyft 
        af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        price: 39.99,
        title: "steak dinner",
        category: "dinner",
        img: "./img/img10.jpeg",
        about: `skateboard fam synth authentic semiotics. Live-edge lyft af, 
        edison bulb yuccie crucifix microdosing.`,
    },
];

const row = document.querySelector(".row");
const filterBtns = document.querySelectorAll(".btn");

// Load items
window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
});

// filter items
filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem) {
            if(menuItem.category === category) {
                return menuItem;
            }
        });
        if(category === "all") {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
    })
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        return ` 
        <div class="col">
            <div class="card p-2">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src=${item.img} class="img-fluid" alt=${item.title}>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center border-bottom border-secondary">
                                <h5 class="card-title">${item.title}</h5>
                                <p class="text-secondary">${item.price}</p>
                            </div>
                            <p class="card-text mt-3">${item.about}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    });
    displayMenu = displayMenu.join("");
    row.innerHTML = displayMenu;
};