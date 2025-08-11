import "./styles.css";
import pizzaImage from "./icons/pizza-svgrepo-com.svg";
import plateImage from "./icons/basic-restaurant-sign-svgrepo-com.svg";
const content = document.querySelector(".content");
let currentPage = ""; //home, menu, about or blank

function createHome() {
  const makeTitleCard = () => {
    let company = document.createElement("div");
    company.id = "company";
    company.classList.add("card");
    const img = document.createElement("img");
    img.src = pizzaImage;
    img.id = "pizza-logo";

    const h1 = document.createElement("h1");
    h1.textContent = "Allan's ";

    const span = document.createElement("span");
    span.className = "red";
    span.textContent = " Pizzeria";

    h1.appendChild(span);
    company.appendChild(img);
    company.appendChild(h1);
    return company;
  };
  const makeAboutCard = () => {
    const about = document.createElement("div");
    about.className = "card";
    about.id = "about-us";

    const h2 = document.createElement("h2");
    h2.textContent = "Our Mission";

    const p = document.createElement("p");
    p.appendChild(
      document.createTextNode(
        "Here at Allan's Pizzeria, we want to bring top service, quality ingredients and competitive prices to our customers."
      )
    );
    p.appendChild(document.createElement("br"));
    p.appendChild(
      document.createTextNode(
        "We are consistently striving to improve our customer experience. Come by and try out a pizza today!"
      )
    );

    about.append(h2);
    about.append(p);
    return about;
  };
  const makeHoursCard = () => {
    const hours = document.createElement("div");
    hours.className = "card";
    hours.id = "hours";

    const h2 = document.createElement("h2");
    h2.textContent = "Open Hours";

    const ul = document.createElement("ul");

    const time = [
      "Mon - Thu: 11am - 10pm",
      "Fri: 11am - 11:30pm",
      "Sat: 9am - 11:30pm",
      "Sun: 9am - 9pm",
    ];

    time.forEach((text) => {
      const li = document.createElement("li");
      li.textContent = text;
      ul.appendChild(li);
    });

    hours.append(h2, ul);
    return hours;
  };
  const makeLocationCard = () => {
    const location = document.createElement("div");
    location.classList.add("card");
    location.id = "location";

    const heading = document.createElement("h2");
    heading.textContent = "Find us at:";

    const paragraph = document.createElement("p");
    paragraph.textContent = "123 Fourth Street Dreamland, CA 123456";

    location.append(heading, paragraph);
    return location;
  };
  return { makeTitleCard, makeAboutCard, makeHoursCard, makeLocationCard };
}

function createMenu() {
  const makeMenu = () => {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    return menu;
  };
  const makeMenuIcon = () => {
    const img = document.createElement("img");
    img.src = plateImage;
    img.classList.add("icon");
    return img;
  };
  const makeMenuItem = (cost, item) => {
    const container = document.createElement("div");
    container.classList.add("menu-item");

    const name = document.createElement("span");
    name.classList.add("item-name");
    name.textContent = item;

    const dots = document.createElement("span");
    dots.classList.add("dots");

    const price = document.createElement("span");
    price.classList.add("item-price");
    price.textContent = cost;

    container.append(name, dots, price);
    return container;
  };

  const makeDrinkHeader = () => {
    const drinks = document.createElement("h2");
    drinks.classList.add("drinks");
    drinks.textContent = "Drinks";
    return drinks;
  };
  return { makeMenu, makeMenuIcon, makeMenuItem, makeDrinkHeader };
}
function createAbout() {}
function setButtons() {
  const home = createHome();
  const homeBtn = document.querySelector("#home-btn");
  homeBtn.addEventListener("click", () => {
    if (currentPage != "home") {
      removeContent();
      currentPage = "home";
      content.append(home.makeTitleCard());
      content.append(home.makeAboutCard());
      content.append(home.makeHoursCard());
      content.append(home.makeLocationCard());
    }
  });
  const menuManager = createMenu();
  const menuBtn = document.querySelector("#menu-btn");
  menuBtn.addEventListener("click", () => {
    if (currentPage != "menu") {
      removeContent();
      currentPage = "menu";
      const menu = menuManager.makeMenu();
      menu.append(menuManager.makeMenuIcon());
      menu.append(menuManager.makeMenuItem("$18", "Pepperoni Pizza"));
      menu.append(menuManager.makeMenuItem("$18", "Cheese Pizza"));
      menu.append(menuManager.makeMenuItem("$18", "Chicken Garlic Pizza"));
      menu.append(menuManager.makeMenuItem("$18", "Combo Pizza"));
      menu.append(menuManager.makeMenuItem("$18", "Vegetarian Pizza"));
      menu.append(menuManager.makeDrinkHeader());
      menu.append(menuManager.makeMenuItem("$2", "Coke"));
      menu.append(menuManager.makeMenuItem("$2", "Pepsi"));
      menu.append(menuManager.makeMenuItem("$2", "Sprite"));
      menu.append(menuManager.makeMenuItem("$2", "Fanta"));
      content.append(menu);
    }
  });
  const clearBtn = document.querySelector("#clear-btn");
  const removeContent = () => {
    content.innerHTML = "";
    currentPage = "";
  };
  clearBtn.addEventListener("click", () => {
    removeContent();
  });
}

setButtons();
