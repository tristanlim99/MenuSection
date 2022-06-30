const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-center"); //The parent element variable
const container = document.querySelector(".btn-container");

//window onload event listener
//the DOMContentLoaded event means that the data will only fire when everything has completely loaded
window.addEventListener("DOMContentLoaded", function () {
  //Callback function of the displayMenuItems function with menu variable as its parameter
  displayMenuItems(menu);
  displayMenuButtons();
});

//filter items

const displayMenuItems = (menuItems) => {
  //built in array map method to iterate all objects/property in the menu variable
  let displayMenu = menuItems.map(function (item) {
    //returning the object property together by using a HTML template literal structure
    return ` <article class="menu-item">
        <img src="${item.img}" class="${item.title}" alt="menu-item" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="${item.price}">$15</h4>
          </header>
          <p class="item-text">
          ${item.desc}
          </p>
        </div>
      </article>`;
  });
  displayMenu = displayMenu.join(""); //this line of code merges the returned map function together
  sectionCenter.innerHTML = displayMenu; //this line of code appends the template literal block to the parent element/DOM sectionCenter variable
};

const displayMenuButtons = () => {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        //if value does not include the selected category
        values.push(item.category); //push it into the category
      }
      return values; //else just stay as it is
    },
    ["all"] //targeting the data-id all
  );
  const categoryBtns = categories //assigning the value of the object category to this variable
    .map(function (category) {
      //used map to iterate all of the object category
      //template literal for the button section with the injection of object category
      return `<button class="filter-btn" type="button" data-id=${category} 
    >${category}</button
  >`;
    })
    .join(""); //used join to merge the injection
  container.innerHTML = categoryBtns; //appending the category button to the parent element container variable

  //the code block below adss functionality to the buttons
  const filterBtns = document.querySelectorAll(".filter-btn");

  //for each of the button
  filterBtns.forEach(function (btn) {
    //targeted the selected button class when firing a click event
    btn.addEventListener("click", function (e) {
      let category = e.currentTarget.dataset.id; //used a dataset DOm property specifying it by using .id
      let menuCategory = menu.filter(function (menuItem) {
        return menuItem.category === category ? menuItem : false; //if menuItem.category is strictly equal to category, return the menuItem object
      });

      category === "all" //if category is strictly equal to the all object, return the function displayMenuItems(menu) else return displayMenuItems(menuCategory)
        ? displayMenuItems(menu)
        : displayMenuItems(menuCategory);
    });
  });
};
