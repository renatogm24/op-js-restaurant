/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/webFlow.js":
/*!************************!*\
  !*** ./src/webFlow.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
    for (let index = 0; index < 4; index++) {
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
    for (let index = 0; index < 3; index++) {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (webInit);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webFlow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webFlow */ "./src/webFlow.js");


(0,_webFlow__WEBPACK_IMPORTED_MODULE_0__["default"])();






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFdBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsV0FBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxJQUFJO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE1BQU07QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPOzs7Ozs7VUNqWHRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZ0M7QUFDaEM7QUFDQSxvREFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcC1qcy1yZXN0YXVyYW50Ly4vc3JjL3dlYkZsb3cuanMiLCJ3ZWJwYWNrOi8vb3AtanMtcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vcC1qcy1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vcC1qcy1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb3AtanMtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29wLWpzLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGNvbnQgPSAwO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2TWVudSgpIHtcclxuICAgIC8vSGVhZGVyXHJcbiAgICBjb25zdCBuYXZNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdk1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdi1tZW51XCIpO1xyXG5cclxuICAgIC8vTWVudSBhY2Nlc3MgXHJcbiAgICBjb25zdCBiYXJzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGJhcnNJbWcuc3JjID0gXCJpbWFnZXMvb3V0bGluZV9tZW51X2JsYWNrXzI0ZHAucG5nXCI7XHJcbiAgICBiYXJzSW1nLmFsdCA9IFwiYXBwLW1lbnVcIjtcclxuICAgIGNvbnN0IGJhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYmFycy5jbGFzc0xpc3QuYWRkKFwiYmFyc1wiKVxyXG4gICAgYmFycy5hcHBlbmRDaGlsZChiYXJzSW1nKVxyXG5cclxuICAgIC8vTG9nb1xyXG4gICAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBsb2dvSW1nLnNyYyA9IFwiaW1hZ2VzL3JhcHBpLnBuZ1wiO1xyXG4gICAgbG9nb0ltZy5hbHQgPSBcImxvZ29cIjtcclxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKVxyXG4gICAgbG9nby5hcHBlbmRDaGlsZChsb2dvSW1nKVxyXG5cclxuICAgIC8vU2hvcHBpbmcgY2FydFxyXG4gICAgY29uc3Qgc2hvcHBpbmdDYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNob3BwaW5nQ2FydC5jbGFzc0xpc3QuYWRkKFwic2hvcHBpbmctY2FydFwiKTtcclxuICAgIC8vQ2FydCBsb2dvXHJcbiAgICBjb25zdCBjYXJ0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGNhcnRJbWcuc3JjID0gXCJpbWFnZXMvb3V0bGluZV9zaG9wcGluZ19jYXJ0X2JsYWNrXzI0ZHAucG5nXCI7XHJcbiAgICBjYXJ0SW1nLmFsdCA9IFwiY2FydFwiO1xyXG4gICAgY29uc3QgY2FydExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FydExvZ28uY2xhc3NMaXN0LmFkZChcImNhcnQtbG9nb1wiKVxyXG4gICAgY2FydExvZ28uYXBwZW5kQ2hpbGQoY2FydEltZylcclxuICAgIC8vQ2FydCBlbGVtZW50c1xyXG4gICAgY29uc3QgY2FydEVsZW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcnRFbGVtZW50cy5jbGFzc0xpc3QuYWRkKFwiY2FydC1lbGVtZW50c1wiKTtcclxuICAgIGNhcnRFbGVtZW50cy50ZXh0Q29udGVudCA9IFwiMFwiO1xyXG4gICAgLy9BZGRpbmcgZWxlbWVudHMgaW5zaWRlIHNob3BwaW5nXHJcbiAgICBzaG9wcGluZ0NhcnQuYXBwZW5kQ2hpbGQoY2FydExvZ28pO1xyXG4gICAgc2hvcHBpbmdDYXJ0LmFwcGVuZENoaWxkKGNhcnRFbGVtZW50cyk7XHJcblxyXG4gICAgLy9BZGRpbmcgbWVudSwgbG9nbywgc2hvcHBpbmcgY2FydCBpbnNpZGUgbmF2LW1lbnVcclxuICAgIG5hdk1lbnUuYXBwZW5kQ2hpbGQoYmFycyk7XHJcbiAgICBuYXZNZW51LmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gICAgbmF2TWVudS5hcHBlbmRDaGlsZChzaG9wcGluZ0NhcnQpO1xyXG5cclxuICAgIC8vcmV0b3JuYSBuYXYtbWVudVxyXG4gICAgcmV0dXJuIG5hdk1lbnU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdkFkZHJlc3MoKSB7XHJcbiAgICBjb25zdCBuYXZBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdkFkZHJlc3MuY2xhc3NMaXN0LmFkZChcIm5hdi1hZGRyZXNzXCIpO1xyXG4gICAgbmF2QWRkcmVzcy50ZXh0Q29udGVudCA9IFwiQWRkcmVzcyB0byBkZWxpdmVyOiBcIjtcclxuICAgIGNvbnN0IGN1cnJlbnRBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBjdXJyZW50QWRkcmVzcy50ZXh0Q29udGVudCA9IFwiMjAxMSBVbml2ZXJzaXR5IEF2Li4uXCI7XHJcbiAgICBjdXJyZW50QWRkcmVzcy5ocmVmID0gXCIjXCI7XHJcbiAgICBjb25zdCBhcnJvd0Rvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgYXJyb3dEb3duLnNyYyA9IFwiaW1hZ2VzL291dGxpbmVfZXhwYW5kX21vcmVfYmxhY2tfMjRkcC5wbmdcIjtcclxuICAgIG5hdkFkZHJlc3MuYXBwZW5kQ2hpbGQoY3VycmVudEFkZHJlc3MpO1xyXG4gICAgbmF2QWRkcmVzcy5hcHBlbmRDaGlsZChhcnJvd0Rvd24pO1xyXG4gICAgcmV0dXJuIG5hdkFkZHJlc3M7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlc3RhdXJhbnRJbmZvKCkge1xyXG4gICAgLy8xLkNyZWF0ZSBOYXZcclxuICAgIGNvbnN0IG5hdlJlc3RhdXJhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2UmVzdGF1cmFudC5jbGFzc0xpc3QuYWRkKFwibmF2LXJlc3RhdXJhbnRcIik7XHJcblxyXG4gICAgLy8xLjEgQ3JlYXRlIHJlc3RhdXJhbnQgbG9nb1xyXG4gICAgY29uc3QgcmVzdGF1cmFudExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmVzdGF1cmFudExvZ28uY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnQtbG9nb1wiKTtcclxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgbG9nby5zcmMgPSBcImltYWdlcy9wb2xsb3MtaGVybWFub3MucG5nXCI7XHJcbiAgICByZXN0YXVyYW50TG9nby5hcHBlbmRDaGlsZChsb2dvKTtcclxuXHJcbiAgICAvLzEuMiBDcmVhdGUgcmVzdGF1cmFudCBpbmZvXHJcbiAgICBjb25zdCByZXN0YXVyYW50SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByZXN0YXVyYW50SW5mby5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudC1pbmZvXCIpO1xyXG4gICAgLy8xLjIuMSBDcmVhdGUgcmVzdGF1cmFudCB0aXRsZVxyXG4gICAgY29uc3QgcmVzdGF1cmFudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJlc3RhdXJhbnRUaXRsZS5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudC10aXRsZVwiKTtcclxuICAgIC8vMS4yLjEuMSBDcmVhdGUgcmVzdGF1cmFudCBuYW1lXHJcbiAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudC1uYW1lXCIpO1xyXG4gICAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIlBvbGxvcyBIZXJtYW5vc1wiO1xyXG4gICAgLy8xLjIuMS4yIENyZWF0ZSByZXN0YXVyYW50IHN0YXJzXHJcbiAgICBjb25zdCByZXN0YXVyYW50U3RhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmVzdGF1cmFudFN0YXJzLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50LXN0YXJzXCIpO1xyXG4gICAgLy8xLjIuMS4yLjEgQ3JlYXRlIHJlc3RhdXJhbnQgc3RhcnNcclxuICAgIGNvbnN0IHJlc3RhdXJhbnRTdGFyc0xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIHJlc3RhdXJhbnRTdGFyc0xvZ28uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zXCIpO1xyXG4gICAgcmVzdGF1cmFudFN0YXJzTG9nby5jbGFzc0xpc3QuYWRkKFwibWQtMThcIik7XHJcbiAgICByZXN0YXVyYW50U3RhcnNMb2dvLmNsYXNzTGlzdC5hZGQoXCJ5ZWxsb3dcIik7XHJcbiAgICByZXN0YXVyYW50U3RhcnNMb2dvLnRleHRDb250ZW50ID0gXCJzdGFyXCI7XHJcbiAgICAvL0FkZGluZyB0byByZXN0YXVyYW50IHN0YXJzXHJcbiAgICByZXN0YXVyYW50U3RhcnMuYXBwZW5kQ2hpbGQocmVzdGF1cmFudFN0YXJzTG9nbyk7XHJcbiAgICAvL0FkZGluZyB0ZXh0IHN0YXIgdmFsdWVcclxuICAgIGNvbnN0IHRleHRTdGFyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCI0LjVcIik7XHJcbiAgICByZXN0YXVyYW50U3RhcnMuYXBwZW5kQ2hpbGQodGV4dFN0YXIpO1xyXG4gICAgLy9BZGRpbmcgdG8gcmVzdGF1cmFudCB0aXRsZVxyXG4gICAgcmVzdGF1cmFudFRpdGxlLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcclxuICAgIHJlc3RhdXJhbnRUaXRsZS5hcHBlbmRDaGlsZChyZXN0YXVyYW50U3RhcnMpO1xyXG4gICAgLy8xLjIuMiBDcmVhdGUgcmVzdGF1cmFudCBpbmZvIDFcclxuICAgIGNvbnN0IHJlc3RhdXJhbnRJbmZvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByZXN0YXVyYW50SW5mbzEuY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnQtaW5mbzFcIik7XHJcbiAgICBjb25zdCBsb2dvSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgbG9nb0hvbWUuY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zXCIpO1xyXG4gICAgbG9nb0hvbWUuY2xhc3NMaXN0LmFkZChcIm1kLTE0XCIpO1xyXG4gICAgbG9nb0hvbWUudGV4dENvbnRlbnQgPSBcImhvbWVcIjtcclxuICAgIGNvbnN0IHRleHRJbmZvMSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIEhvbWUgLSBSZXN0YXVyYW50cyAtIFBvbGxvcyBIZXJtYW5vc1wiKTtcclxuICAgIHJlc3RhdXJhbnRJbmZvMS5hcHBlbmRDaGlsZChsb2dvSG9tZSk7XHJcbiAgICByZXN0YXVyYW50SW5mbzEuYXBwZW5kQ2hpbGQodGV4dEluZm8xKTtcclxuICAgIC8vMS4yLjMgQ3JlYXRlIHJlc3RhdXJhbnQgaW5mbyAyXHJcbiAgICBjb25zdCByZXN0YXVyYW50SW5mbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmVzdGF1cmFudEluZm8yLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50LWluZm8yXCIpO1xyXG4gICAgY29uc3QgbG9nb1BsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBsb2dvUGxhY2UuY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zXCIpO1xyXG4gICAgbG9nb1BsYWNlLmNsYXNzTGlzdC5hZGQoXCJtZC0xNFwiKTtcclxuICAgIGxvZ29QbGFjZS50ZXh0Q29udGVudCA9IFwicGxhY2VcIjtcclxuICAgIGNvbnN0IHRleHRJbmZvMiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIDQ1NTZXIE1vY2tpbmdiaXJkIExuLCBBbGJ1cnF1ZXF1ZSwgTmV3IE1leGljb1wiKTtcclxuICAgIGNvbnN0IHJlc3RhdXJhbnRBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJlc3RhdXJhbnRBZGRyZXNzLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50LWFkZHJlc3NcIik7XHJcbiAgICByZXN0YXVyYW50QWRkcmVzcy5hcHBlbmRDaGlsZChsb2dvUGxhY2UpO1xyXG4gICAgcmVzdGF1cmFudEFkZHJlc3MuYXBwZW5kQ2hpbGQodGV4dEluZm8yKTtcclxuXHJcblxyXG4gICAgY29uc3QgZGlzY291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGlzY291bnQuY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnQtZGlzY291bnRcIik7XHJcbiAgICBkaXNjb3VudC50ZXh0Q29udGVudCA9IFwiVVAgVE8gMjAlIE9GRlwiO1xyXG4gICAgcmVzdGF1cmFudEluZm8yLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRBZGRyZXNzKTtcclxuICAgIHJlc3RhdXJhbnRJbmZvMi5hcHBlbmRDaGlsZChkaXNjb3VudCk7XHJcblxyXG5cclxuICAgIC8vQWRkaW5nIHRvIHJlc3RhdXJhbnQgaW5mb1xyXG4gICAgcmVzdGF1cmFudEluZm8uYXBwZW5kQ2hpbGQocmVzdGF1cmFudFRpdGxlKTtcclxuICAgIHJlc3RhdXJhbnRJbmZvLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJbmZvMSk7XHJcbiAgICByZXN0YXVyYW50SW5mby5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW5mbzIpO1xyXG5cclxuICAgIC8vQWRkaW5nIHRvIG5hdlJlc3RhdXJhbnRcclxuICAgIG5hdlJlc3RhdXJhbnQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudExvZ28pO1xyXG4gICAgbmF2UmVzdGF1cmFudC5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW5mbyk7XHJcblxyXG4gICAgLy9SZXR1cm4gbmF2UmVzdGF1cmFudFxyXG4gICAgcmV0dXJuIG5hdlJlc3RhdXJhbnQ7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xyXG4gICAgLy9DcmVhdGUgbWVudVxyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG5cclxuICAgIC8vY3JlYXRlIHNoaXBtZW50XHJcbiAgICBjb25zdCBzaGlwbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzaGlwbWVudC5jbGFzc0xpc3QuYWRkKFwic2hpcG1lbnRcIik7XHJcbiAgICBjb25zdCBzaGlwbWVudENvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2hpcG1lbnRDb3N0LmNsYXNzTGlzdC5hZGQoXCJzaGlwbWVudC1jb3N0XCIpO1xyXG4gICAgc2hpcG1lbnRDb3N0LnRleHRDb250ZW50ID0gXCJTaGlwbWVudCBjb3N0OiAkMS41XCI7XHJcbiAgICBjb25zdCBzaGlwbWVudFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2hpcG1lbnRUaW1lLmNsYXNzTGlzdC5hZGQoXCJzaGlwbWVudC10aW1lXCIpO1xyXG4gICAgc2hpcG1lbnRUaW1lLnRleHRDb250ZW50ID0gXCJBcnJpdmVzIGluOiAzNS00MCBtaW5cIjtcclxuICAgIHNoaXBtZW50LmFwcGVuZENoaWxkKHNoaXBtZW50Q29zdCk7XHJcbiAgICBzaGlwbWVudC5hcHBlbmRDaGlsZChzaGlwbWVudFRpbWUpO1xyXG5cclxuICAgIC8vY3JlYXRlIG5hdk1lbnVcclxuICAgIGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2TWVudS5jbGFzc0xpc3QuYWRkKFwibmF2bWVudVwiKTtcclxuICAgIC8vXHJcbiAgICBjb25zdCBiYXNlTWVudUxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYmFzZU1lbnVMb2dvLmNsYXNzTGlzdC5hZGQoXCJiYXNlLW1lbnUtbG9nb1wiKTtcclxuICAgIGNvbnN0IHN0b3JlRnJvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3Qgc3BhblN0b3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBzcGFuU3RvcmUuY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWljb25zXCIpO1xyXG4gICAgc3BhblN0b3JlLmNsYXNzTGlzdC5hZGQoXCJtZC0xOFwiKTtcclxuICAgIHNwYW5TdG9yZS50ZXh0Q29udGVudCA9IFwic3RvcmVmcm9udFwiO1xyXG4gICAgc3RvcmVGcm9udC5hcHBlbmRDaGlsZChzcGFuU3RvcmUpO1xyXG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZW51RGl2LnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgICBiYXNlTWVudUxvZ28uYXBwZW5kQ2hpbGQoc3RvcmVGcm9udCk7XHJcbiAgICBiYXNlTWVudUxvZ28uYXBwZW5kQ2hpbGQobWVudURpdik7XHJcbiAgICAvL1xyXG4gICAgbmF2TWVudS5hcHBlbmRDaGlsZChiYXNlTWVudUxvZ28pO1xyXG5cclxuICAgIC8vY3JlYXRlIG1lbnUgb3B0aW9uc1xyXG4gICAgY29uc3QgbWVudU9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWVudU9wdGlvbnMuY2xhc3NMaXN0LmFkZChcIm1lbnUtb3B0aW9uc1wiKTtcclxuICAgIGNvbnN0IGZvcllvdUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmb3JZb3VCdG4uY2xhc3NMaXN0LmFkZChcIm9wdGlvblwiKTtcclxuICAgIGZvcllvdUJ0bi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcbiAgICBmb3JZb3VCdG4udGV4dENvbnRlbnQgPSBcIkZvciB5b3UhXCI7XHJcbiAgICBjb25zdCBjb21ib0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb21ib0J0bi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uXCIpO1xyXG4gICAgY29tYm9CdG4udGV4dENvbnRlbnQgPSBcIkNvbWJvc1wiO1xyXG4gICAgY29uc3QgYmV2ZXJhZ2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYmV2ZXJhZ2VCdG4uY2xhc3NMaXN0LmFkZChcIm9wdGlvblwiKTtcclxuICAgIGJldmVyYWdlQnRuLnRleHRDb250ZW50ID0gXCJCZXZlcmFnZVwiO1xyXG4gICAgbWVudU9wdGlvbnMuYXBwZW5kQ2hpbGQoZm9yWW91QnRuKTtcclxuICAgIG1lbnVPcHRpb25zLmFwcGVuZENoaWxkKGNvbWJvQnRuKTtcclxuICAgIG1lbnVPcHRpb25zLmFwcGVuZENoaWxkKGJldmVyYWdlQnRuKTtcclxuXHJcbiAgICBuYXZNZW51LmFwcGVuZENoaWxkKG1lbnVPcHRpb25zKTtcclxuXHJcbiAgICBjb25zdCBuYXZPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hdk9wdGlvbnMuY2xhc3NMaXN0LmFkZChcIm5hdi1vcHRpb25zXCIpO1xyXG5cclxuICAgIC8vQWRkaW5nIGVsZW1lbnRzIHRvIG1lbnVcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoc2hpcG1lbnQpO1xyXG4gICAgbWVudS5hcHBlbmRDaGlsZChuYXZNZW51KTtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQobmF2T3B0aW9ucyk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnU7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBhZGRGdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm9wdGlvblwiKTtcclxuXHJcbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbjIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChidXR0b24yLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uMi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09IFwiRm9yIHlvdSFcIikge1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25Gb3JZb3UoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PSBcIkNvbWJvc1wiKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbkNvbWJvcygpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09IFwiQmV2ZXJhZ2VcIikge1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25CZXZlcmFnZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEZ1bmN0aW9uQ291bnQoKSB7XHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lbGVtZW50LWFkZFwiKTtcclxuXHJcbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgY29udCsrO1xyXG4gICAgICAgICAgICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJ0LWVsZW1lbnRzXCIpO1xyXG4gICAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gY29udDtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmdW5jdGlvbkZvcllvdSgpIHsgIFxyXG5cclxuICAgIGNvbnN0IG5hdk9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1vcHRpb25zXCIpO1xyXG4gICAgbmF2T3B0aW9ucy50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBcclxuICAgIGNvbnN0IG5hdk9wdGlvbnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYXZPcHRpb25zVGl0bGUuY2xhc3NMaXN0LmFkZChcIm5hdi1vcHRpb25zLXRpdGxlXCIpO1xyXG4gICAgbmF2T3B0aW9uc1RpdGxlLnRleHRDb250ZW50ID0gXCJGb3IgeW91IVwiO1xyXG5cclxuICAgIGNvbnN0IGJyZWFrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJyZWFrRGl2LmNsYXNzTGlzdC5hZGQoXCJicmVha1wiKTtcclxuXHJcbiAgICBuYXZPcHRpb25zLmFwcGVuZENoaWxkKG5hdk9wdGlvbnNUaXRsZSk7XHJcbiAgICBuYXZPcHRpb25zLmFwcGVuZENoaWxkKGJyZWFrRGl2KTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA2OyBpbmRleCsrKSB7XHJcbiAgICAgICAgbmF2T3B0aW9ucy5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwibWVudTFcIixcIldhbHRlciBXaGl0ZSBDaGlja2VuXCIsXCI4IGZyaWVkIGNoaWNrZW4gcGllY2VzICsgMiBib3hlcyBvZiBmcmVuY2ggZnJpZXMgKyAxIGZyaWVkIHJpY2UgKyA0IHNvZGFzICgxOCBveilcIixcIjE3LjkwXCIpKTsgICAgIFxyXG4gICAgfSAgIFxyXG4gICAgYWRkRnVuY3Rpb25Db3VudCgpOyBcclxufVxyXG5cclxuZnVuY3Rpb24gZnVuY3Rpb25Db21ib3MoKSB7ICBcclxuXHJcbiAgICBjb25zdCBuYXZPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtb3B0aW9uc1wiKTtcclxuICAgIG5hdk9wdGlvbnMudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgXHJcbiAgICBjb25zdCBuYXZPcHRpb25zVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2T3B0aW9uc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJuYXYtb3B0aW9ucy10aXRsZVwiKTtcclxuICAgIG5hdk9wdGlvbnNUaXRsZS50ZXh0Q29udGVudCA9IFwiQ29tYm9zXCI7XHJcblxyXG4gICAgY29uc3QgYnJlYWtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYnJlYWtEaXYuY2xhc3NMaXN0LmFkZChcImJyZWFrXCIpO1xyXG5cclxuICAgIG5hdk9wdGlvbnMuYXBwZW5kQ2hpbGQobmF2T3B0aW9uc1RpdGxlKTtcclxuICAgIG5hdk9wdGlvbnMuYXBwZW5kQ2hpbGQoYnJlYWtEaXYpO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDQ7IGluZGV4KyspIHtcclxuICAgICAgICBuYXZPcHRpb25zLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJtZW51MlwiLFwiSmVzc2UgUGlua21hbiBDb21ib1wiLFwiNCBmcmllZCBjaGlja2VuIHBpZWNlcyArIDEgYm94ZXMgb2YgZnJlbmNoIGZyaWVzXCIsXCIxMi45MFwiKSk7ICAgICBcclxuICAgIH0gICAgXHJcbiAgICBhZGRGdW5jdGlvbkNvdW50KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZ1bmN0aW9uQmV2ZXJhZ2UoKSB7ICBcclxuXHJcbiAgICBjb25zdCBuYXZPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtb3B0aW9uc1wiKTtcclxuICAgIG5hdk9wdGlvbnMudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgXHJcbiAgICBjb25zdCBuYXZPcHRpb25zVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2T3B0aW9uc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJuYXYtb3B0aW9ucy10aXRsZVwiKTtcclxuICAgIG5hdk9wdGlvbnNUaXRsZS50ZXh0Q29udGVudCA9IFwiQmV2ZXJhZ2VcIjtcclxuXHJcbiAgICBjb25zdCBicmVha0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBicmVha0Rpdi5jbGFzc0xpc3QuYWRkKFwiYnJlYWtcIik7XHJcblxyXG4gICAgbmF2T3B0aW9ucy5hcHBlbmRDaGlsZChuYXZPcHRpb25zVGl0bGUpO1xyXG4gICAgbmF2T3B0aW9ucy5hcHBlbmRDaGlsZChicmVha0Rpdik7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMzsgaW5kZXgrKykge1xyXG4gICAgICAgIG5hdk9wdGlvbnMuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcIm1lbnUzXCIsXCJHdXMgRnJpbmcgRHJpbmtcIixcIlRlcXVpbGEsIEJsdWUgQ3VyYWNhbywgU3dlZXQgJiBTb3VyIHkgQ29pbnRyZWF1XCIsXCI4LjkwXCIpKTsgICAgIFxyXG4gICAgfSAgICBcclxuICAgIGFkZEZ1bmN0aW9uQ291bnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChpbWcsdGl0bGUsZGVzY3JpcCxwcmljZSkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlbGVtZW50XCIpO1xyXG4gICAgLy9cclxuICAgIGNvbnN0IGVsZW1lbnRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWxlbWVudEltZy5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudC1pbWdcIik7XHJcbiAgICAvL1xyXG4gICAgY29uc3QgZWxlbWVudEltZ1BuZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBlbGVtZW50SW1nUG5nLnNyYyA9IGBpbWFnZXMvJHtpbWd9LnBuZ2BcclxuICAgIC8vXHJcbiAgICBlbGVtZW50SW1nLmFwcGVuZENoaWxkKGVsZW1lbnRJbWdQbmcpO1xyXG4gICAgLy9cclxuICAgIGNvbnN0IGVsZW1lbnRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVsZW1lbnRDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJlbGVtZW50LWNvbnRlbnRcIik7XHJcbiAgICAvL1xyXG4gICAgY29uc3QgZWxlbWVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVsZW1lbnRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudC10aXRsZVwiKTtcclxuICAgIGVsZW1lbnRUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgLy9cclxuICAgIGNvbnN0IGVsZW1lbnREZXNjcmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVsZW1lbnREZXNjcmlwLmNsYXNzTGlzdC5hZGQoXCJlbGVtZW50LWRlc2NyaXB0aW9uXCIpO1xyXG4gICAgZWxlbWVudERlc2NyaXAudGV4dENvbnRlbnQgPSBkZXNjcmlwO1xyXG4gICAgLy9cclxuICAgIGNvbnN0IGVsZW1lbnRQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbGVtZW50UHJpY2UuY2xhc3NMaXN0LmFkZChcImVsZW1lbnQtcHJpY2VcIik7XHJcbiAgICBlbGVtZW50UHJpY2UudGV4dENvbnRlbnQgPSBgJCR7cHJpY2V9YDtcclxuICAgIC8vXHJcbiAgICBlbGVtZW50Q29udGVudC5hcHBlbmRDaGlsZChlbGVtZW50VGl0bGUpO1xyXG4gICAgZWxlbWVudENvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudERlc2NyaXApO1xyXG4gICAgZWxlbWVudENvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudFByaWNlKTtcclxuICAgIC8vXHJcbiAgICBjb25zdCBlbGVtZW50QWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVsZW1lbnRBZGQuY2xhc3NMaXN0LmFkZChcImVsZW1lbnQtYWRkXCIpO1xyXG4gICAgY29uc3QgZWxlbWVudEFkZFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgIGVsZW1lbnRBZGRTcGFuLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29uc1wiKTtcclxuICAgIGVsZW1lbnRBZGRTcGFuLmNsYXNzTGlzdC5hZGQoXCJncmVlblwiKTtcclxuICAgIGVsZW1lbnRBZGRTcGFuLnRleHRDb250ZW50ID0gXCJhZGRfY2lyY2xlXCI7XHJcbiAgICBlbGVtZW50QWRkLmFwcGVuZENoaWxkKGVsZW1lbnRBZGRTcGFuKTtcclxuICAgIC8vXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnRJbWcpO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50Q29udGVudCk7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnRBZGQpO1xyXG4gICAgLy9cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gd2ViSW5pdCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdk1lbnUoKSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdkFkZHJlc3MoKSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVJlc3RhdXJhbnRJbmZvKCkpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xyXG4gICAgYWRkRnVuY3Rpb24oKTtcclxuICAgIGZ1bmN0aW9uRm9yWW91KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdlYkluaXQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgd2ViSW5pdCBmcm9tIFwiLi93ZWJGbG93XCI7XHJcblxyXG53ZWJJbml0KCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9