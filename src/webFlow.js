let cont = 0;

function createNavMenu() {
    //Header
    const navMenu = document.createElement("div");
    navMenu.classList.add("nav-menu");

    //Menu access 
    const barsImg = document.createElement("img");
    barsImg.src = "images/outline_menu_black_24dp.png";
    barsImg.alt = "app-menu";
    const bars = document.createElement("div");
    bars.classList.add("bars")
    bars.appendChild(barsImg)

    //Logo
    const logoImg = document.createElement("img");
    logoImg.src = "images/rappi.png";
    logoImg.alt = "logo";
    const logo = document.createElement("div");
    logo.classList.add("logo")
    logo.appendChild(logoImg)

    //Shopping cart
    const shoppingCart = document.createElement("div");
    shoppingCart.classList.add("shopping-cart");
    //Cart logo
    const cartImg = document.createElement("img");
    cartImg.src = "images/outline_shopping_cart_black_24dp.png";
    cartImg.alt = "cart";
    const cartLogo = document.createElement("div");
    cartLogo.classList.add("cart-logo")
    cartLogo.appendChild(cartImg)
    //Cart elements
    const cartElements = document.createElement("div");
    cartElements.classList.add("cart-elements");
    cartElements.textContent = "0";
    //Adding elements inside shopping
    shoppingCart.appendChild(cartLogo);
    shoppingCart.appendChild(cartElements);

    //Adding menu, logo, shopping cart inside nav-menu
    navMenu.appendChild(bars);
    navMenu.appendChild(logo);
    navMenu.appendChild(shoppingCart);

    //retorna nav-menu
    return navMenu;
}

function createNavAddress() {
    const navAddress = document.createElement("div");
    navAddress.classList.add("nav-address");
    navAddress.textContent = "Address to deliver: ";
    const currentAddress = document.createElement("a");
    currentAddress.textContent = "2011 University Av...";
    currentAddress.href = "#";
    const arrowDown = document.createElement("img");
    arrowDown.src = "images/outline_expand_more_black_24dp.png";
    navAddress.appendChild(currentAddress);
    navAddress.appendChild(arrowDown);
    return navAddress;
}

function createRestaurantInfo() {
    //1.Create Nav
    const navRestaurant = document.createElement("div");
    navRestaurant.classList.add("nav-restaurant");

    //1.1 Create restaurant logo
    const restaurantLogo = document.createElement("div");
    restaurantLogo.classList.add("restaurant-logo");
    const logo = document.createElement("img");
    logo.src = "images/pollos-hermanos.png";
    restaurantLogo.appendChild(logo);

    //1.2 Create restaurant info
    const restaurantInfo = document.createElement("div");
    restaurantInfo.classList.add("restaurant-info");
    //1.2.1 Create restaurant title
    const restaurantTitle = document.createElement("div");
    restaurantTitle.classList.add("restaurant-title");
    //1.2.1.1 Create restaurant name
    const restaurantName = document.createElement("div");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Pollos Hermanos";
    //1.2.1.2 Create restaurant stars
    const restaurantStars = document.createElement("div");
    restaurantStars.classList.add("restaurant-stars");
    //1.2.1.2.1 Create restaurant stars
    const restaurantStarsLogo = document.createElement("span");
    restaurantStarsLogo.classList.add("material-icons");
    restaurantStarsLogo.classList.add("md-18");
    restaurantStarsLogo.classList.add("yellow");
    restaurantStarsLogo.textContent = "star";
    //Adding to restaurant stars
    restaurantStars.appendChild(restaurantStarsLogo);
    //Adding text star value
    const textStar = document.createTextNode("4.5");
    restaurantStars.appendChild(textStar);
    //Adding to restaurant title
    restaurantTitle.appendChild(restaurantName);
    restaurantTitle.appendChild(restaurantStars);
    //1.2.2 Create restaurant info 1
    const restaurantInfo1 = document.createElement("div");
    restaurantInfo1.classList.add("restaurant-info1");
    const logoHome = document.createElement("span");
    logoHome.classList.add("material-icons");
    logoHome.classList.add("md-14");
    logoHome.textContent = "home";
    const textInfo1 = document.createTextNode(" Home - Restaurants - Pollos Hermanos");
    restaurantInfo1.appendChild(logoHome);
    restaurantInfo1.appendChild(textInfo1);
    //1.2.3 Create restaurant info 2
    const restaurantInfo2 = document.createElement("div");
    restaurantInfo2.classList.add("restaurant-info2");
    const logoPlace = document.createElement("span");
    logoPlace.classList.add("material-icons");
    logoPlace.classList.add("md-14");
    logoPlace.textContent = "place";
    const textInfo2 = document.createTextNode(" 4556W Mockingbird Ln, Alburqueque, New Mexico");
    const restaurantAddress = document.createElement("div");
    restaurantAddress.classList.add("restaurant-address");
    restaurantAddress.appendChild(logoPlace);
    restaurantAddress.appendChild(textInfo2);


    const discount = document.createElement("div");
    discount.classList.add("restaurant-discount");
    discount.textContent = "UP TO 20% OFF";
    restaurantInfo2.appendChild(restaurantAddress);
    restaurantInfo2.appendChild(discount);


    //Adding to restaurant info
    restaurantInfo.appendChild(restaurantTitle);
    restaurantInfo.appendChild(restaurantInfo1);
    restaurantInfo.appendChild(restaurantInfo2);

    //Adding to navRestaurant
    navRestaurant.appendChild(restaurantLogo);
    navRestaurant.appendChild(restaurantInfo);

    //Return navRestaurant
    return navRestaurant;
}


function createMenu() {
    //Create menu
    const menu = document.createElement("div");
    menu.classList.add("menu");

    //create shipment
    const shipment = document.createElement("div");
    shipment.classList.add("shipment");
    const shipmentCost = document.createElement("div");
    shipmentCost.classList.add("shipment-cost");
    shipmentCost.textContent = "Shipment cost: $1.5";
    const shipmentTime = document.createElement("div");
    shipmentTime.classList.add("shipment-time");
    shipmentTime.textContent = "Arrives in: 35-40 min";
    shipment.appendChild(shipmentCost);
    shipment.appendChild(shipmentTime);

    //create navMenu
    const navMenu = document.createElement("div");
    navMenu.classList.add("navmenu");
    //
    const baseMenuLogo = document.createElement("div");
    baseMenuLogo.classList.add("base-menu-logo");
    const storeFront = document.createElement("div");
    const spanStore = document.createElement("span");
    spanStore.classList.add("material-icons");
    spanStore.classList.add("md-18");
    spanStore.textContent = "storefront";
    storeFront.appendChild(spanStore);
    const menuDiv = document.createElement("div");
    menuDiv.textContent = "Menu";
    baseMenuLogo.appendChild(storeFront);
    baseMenuLogo.appendChild(menuDiv);
    //
    navMenu.appendChild(baseMenuLogo);

    //create menu options
    const menuOptions = document.createElement("div");
    menuOptions.classList.add("menu-options");
    const forYouBtn = document.createElement("div");
    forYouBtn.classList.add("option");
    forYouBtn.classList.add("selected");
    forYouBtn.textContent = "For you!";
    const comboBtn = document.createElement("div");
    comboBtn.classList.add("option");
    comboBtn.textContent = "Combos";
    const beverageBtn = document.createElement("div");
    beverageBtn.classList.add("option");
    beverageBtn.textContent = "Beverage";
    menuOptions.appendChild(forYouBtn);
    menuOptions.appendChild(comboBtn);
    menuOptions.appendChild(beverageBtn);

    navMenu.appendChild(menuOptions);

    const navOptions = document.createElement("div");
    navOptions.classList.add("nav-options");

    //Adding elements to menu
    menu.appendChild(shipment);
    menu.appendChild(navMenu);
    menu.appendChild(navOptions);

    return menu;
}


function addFunction() {
    const buttons = document.querySelectorAll(".option");

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            if (e.target.classList.contains("active")) return;
            buttons.forEach((button2) => {
                if (button2.classList.contains("selected")) {
                    button2.classList.remove("selected");
                }
            });
            button.classList.add("selected");

            if (e.target.textContent == "For you!") {
                functionForYou();
            } else if (e.target.textContent == "Combos") {
                functionCombos();
            } else if (e.target.textContent == "Beverage") {
                functionBeverage();
            }

        });
    });
}

function addFunctionCount() {
    const buttons = document.querySelectorAll(".element-add");

    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            cont++;
            const counter = document.querySelector(".cart-elements");
            counter.textContent = cont;
        });
    });
}

function functionForYou() {  

    const navOptions = document.querySelector(".nav-options");
    navOptions.textContent = "";
    
    const navOptionsTitle = document.createElement("div");
    navOptionsTitle.classList.add("nav-options-title");
    navOptionsTitle.textContent = "For you!";

    const breakDiv = document.createElement("div");
    breakDiv.classList.add("break");

    navOptions.appendChild(navOptionsTitle);
    navOptions.appendChild(breakDiv);
    for (let index = 0; index < 6; index++) {
        navOptions.appendChild(createElement("menu1","Walter White Chicken","8 fried chicken pieces + 2 boxes of french fries + 1 fried rice + 4 sodas (18 oz)","17.90"));     
    }   
    addFunctionCount(); 
}

function functionCombos() {  

    const navOptions = document.querySelector(".nav-options");
    navOptions.textContent = "";
    
    const navOptionsTitle = document.createElement("div");
    navOptionsTitle.classList.add("nav-options-title");
    navOptionsTitle.textContent = "Combos";

    const breakDiv = document.createElement("div");
    breakDiv.classList.add("break");

    navOptions.appendChild(navOptionsTitle);
    navOptions.appendChild(breakDiv);
    for (let index = 0; index < 7; index++) {
        navOptions.appendChild(createElement("menu2","Jesse Pinkman Combo","4 fried chicken pieces + 1 boxes of french fries","12.90"));     
    }    
    addFunctionCount();
}

function functionBeverage() {  

    const navOptions = document.querySelector(".nav-options");
    navOptions.textContent = "";
    
    const navOptionsTitle = document.createElement("div");
    navOptionsTitle.classList.add("nav-options-title");
    navOptionsTitle.textContent = "Beverage";

    const breakDiv = document.createElement("div");
    breakDiv.classList.add("break");

    navOptions.appendChild(navOptionsTitle);
    navOptions.appendChild(breakDiv);
    for (let index = 0; index < 8; index++) {
        navOptions.appendChild(createElement("menu3","Gus Fring Drink","Tequila, Blue Curacao, Sweet & Sour y Cointreau","8.90"));     
    }    
    addFunctionCount();
}

function createElement(img,title,descrip,price) {
    const element = document.createElement("div");
    element.classList.add("element");
    //
    const elementImg = document.createElement("div");
    elementImg.classList.add("element-img");
    //
    const elementImgPng = document.createElement("img");
    elementImgPng.src = `images/${img}.png`
    //
    elementImg.appendChild(elementImgPng);
    //
    const elementContent = document.createElement("div");
    elementContent.classList.add("element-content");
    //
    const elementTitle = document.createElement("div");
    elementTitle.classList.add("element-title");
    elementTitle.textContent = title;
    //
    const elementDescrip = document.createElement("div");
    elementDescrip.classList.add("element-description");
    elementDescrip.textContent = descrip;
    //
    const elementPrice = document.createElement("div");
    elementPrice.classList.add("element-price");
    elementPrice.textContent = `$${price}`;
    //
    elementContent.appendChild(elementTitle);
    elementContent.appendChild(elementDescrip);
    elementContent.appendChild(elementPrice);
    //
    const elementAdd = document.createElement("div");
    elementAdd.classList.add("element-add");
    const elementAddSpan = document.createElement("span");
    elementAddSpan.classList.add("material-icons");
    elementAddSpan.classList.add("green");
    elementAddSpan.textContent = "add_circle";
    elementAdd.appendChild(elementAddSpan);
    //
    element.appendChild(elementImg);
    element.appendChild(elementContent);
    element.appendChild(elementAdd);
    //
    return element;
}


function webInit() {
    const content = document.getElementById("content");
    content.appendChild(createNavMenu());
    content.appendChild(createNavAddress());
    content.appendChild(createRestaurantInfo());
    content.appendChild(createMenu());
    addFunction();
    functionForYou();
}

export default webInit;