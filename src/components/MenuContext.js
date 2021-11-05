import React, {useState, createContext} from 'react';

import MenuDetail from "./menu/MenuDetail";
import MenuNav from "./menu/MenuNav";
import Appetizers from "./menu/Appetizers";
import Beverage from "./menu/Beverage";
import HotDishes from "./menu/HotDishes";
import LunchSpecial from "./menu/LunchSpecial";
import Noodle from "./menu/Noodle";
import Soup from "./menu/Soup";
import TraditionalClassical from "./menu/TraditionalClassical";
import Vegetables from "./menu/Vegetables";

import imgAppetizer from "../img/Appetizers/imgAppetizer.jpg";
import imgAppetizer1 from "../img/Appetizers/imgAppetizer1.jpg";
import imgAppetizer2 from "../img/Appetizers/imgAppetizer2.jpg";
import imgAppetizer3 from "../img/Appetizers/imgAppetizer3.jpg";
import imgAppetizer4 from "../img/Appetizers/imgAppetizer4.jpg";
import imgAppetizer5 from "../img/Appetizers/imgAppetizer5.jpg";
import imgAppetizer6 from "../img/Appetizers/imgAppetizer6.jpg";
import imgAppetizer7 from "../img/Appetizers/imgAppetizer7.jpg";
import imgAppetizer8 from "../img/Appetizers/imgAppetizer8.jpg";
import imgAppetizer9 from "../img/Appetizers/imgAppetizer9.jpg";
import imgAppetizer10 from "../img/Appetizers/imgAppetizer10.jpg";
import imgAppetizer11 from "../img/Appetizers/imgAppetizer11.jpg";
import imgAppetizer12 from "../img/Appetizers/imgAppetizer12.jpg";

import traditionalClassics from "../img/traditionalClassics/imgtraditionalClassics.jpg";
import traditionalClassics1 from "../img/traditionalClassics/imgtraditionalClassics1.jpg";
import traditionalClassics2 from "../img/traditionalClassics/imgtraditionalClassics2.jpg"; 
import traditionalClassics3 from "../img/traditionalClassics/imgtraditionalClassics3.jpg";
import traditionalClassics4 from "../img/traditionalClassics/imgtraditionalClassics4.jpg"; 
import traditionalClassics5 from "../img/traditionalClassics/imgtraditionalClassics5.jpg";
import traditionalClassics6 from "../img/traditionalClassics/imgtraditionalClassics6.jpg"; 
import traditionalClassics7 from "../img/traditionalClassics/imgtraditionalClassics7.jpg";
import traditionalClassics8 from "../img/traditionalClassics/imgtraditionalClassics8.jpg"; 
import traditionalClassics9 from "../img/traditionalClassics/imgtraditionalClassics9.jpg";
import traditionalClassics10 from "../img/traditionalClassics/imgtraditionalClassics10.jpg"; 

import imgHotDish from "../img/hotDish/imgHotDish.jpg";
import imgHotDish1 from "../img/hotDish/imgHotDish1.jpg";
import imgHotDish2 from "../img/hotDish/imgHotDish2.jpg";
import imgHotDish3 from "../img/hotDish/imgHotDish3.jpg";
import imgHotDish4 from "../img/hotDish/imgHotDish4.jpg";
import imgHotDish5 from "../img/hotDish/imgHotDish5.jpg";
import imgHotDish6 from "../img/hotDish/imgHotDish6.jpg";
import imgHotDish7 from "../img/hotDish/imgHotDish7.jpg";
import imgHotDish8 from "../img/hotDish/imgHotDish8.jpg";
import imgHotDish9 from "../img/hotDish/imgHotDish9.jpg";
import imgHotDish10 from "../img/hotDish/imgHotDish10.jpg";
import imgHotDish11 from "../img/hotDish/imgHotDish11.jpg";
import imgHotDish12 from "../img/hotDish/imgHotDish12.jpg";
import imgHotDish13 from "../img/hotDish/imgHotDish13.jpg";
import imgHotDish14 from "../img/hotDish/imgHotDish14.jpg";

import imgVegetable from "../img/vegetables/imgVegetable.jpg";
import imgVegetable1 from "../img/vegetables/imgVegetable1.jpg";
import imgVegetable2 from "../img/vegetables/imgVegetable2.jpg";
import imgVegetable3 from "../img/vegetables/imgVegetable3.jpg";
import imgVegetable4 from "../img/vegetables/imgVegetable4.jpg";
import imgVegetable5 from "../img/vegetables/imgVegetable5.jpg";
import imgVegetable6 from "../img/vegetables/imgVegetable6.jpg";
import imgVegetable7 from "../img/vegetables/imgVegetable7.jpg";
import imgVegetable8 from "../img/vegetables/imgVegetable8.jpg";
import imgVegetable9 from "../img/vegetables/imgVegetable9.jpg";
import imgVegetable10 from "../img/vegetables/imgVegetable10.jpg";

import imageSoup from "../img/soup/imageSoup.jpg";
import imageSoup1 from "../img/soup/imageSoup1.jpg";
import imageSoup2 from "../img/soup/imageSoup2.jpg";
import imageSoup3 from "../img/soup/imageSoup3.jpg";
import imageSoup4 from "../img/soup/imageSoup4.jpg";
import imageSoup5 from "../img/soup/imageSoup5.jpg";
import imageSoup6 from "../img/soup/imageSoup6.jpg";
import imageSoup7 from "../img/soup/imageSoup7.jpg";
import imageSoup8 from "../img/soup/imageSoup8.jpg";

import imgNoodle from "../img/noodles/imgNoodle.jpg";
import imgNoodle1 from "../img/noodles/imgNoodle1.jpg";
import imgNoodle2 from "../img/noodles/imgNoodle2.jpg";
import imgNoodle3 from "../img/noodles/imgNoodle3.jpg";
import imgNoodle4 from "../img/noodles/imgNoodle4.jpg";
import imgNoodle5 from "../img/noodles/imgNoodle5.jpg";
import imgNoodle6 from "../img/noodles/imgNoodle6.jpg";
import imgNoodle7 from "../img/noodles/imgNoodle7.jpg";
import imgNoodle8 from "../img/noodles/imgNoodle8.jpg";
import imgNoodle9 from "../img/noodles/imgNoodle9.jpg";
import imgNoodle10 from "../img/noodles/imgNoodle10.jpg";
import imgNoodle11 from "../img/noodles/imgNoodle11.jpg";

import imgLunchSpecial from "../img/lunchSpecial/imgLunchSpecial.jpg";
import imgLunchSpecial1 from "../img/lunchSpecial/imgLunchSpecial1.jpg";
import imgLunchSpecial2 from "../img/lunchSpecial/imgLunchSpecial2.jpg";
import imgLunchSpecial3 from "../img/lunchSpecial/imgLunchSpecial3.jpg";
import imgLunchSpecial4 from "../img/lunchSpecial/imgLunchSpecial4.jpg";
import imgLunchSpecial5 from "../img/lunchSpecial/imgLunchSpecial5.jpg";
import imgLunchSpecial6 from "../img/lunchSpecial/imgLunchSpecial6.jpg";
import imgLunchSpecial7 from "../img/lunchSpecial/imgLunchSpecial7.jpg";
import imgLunchSpecial8 from "../img/lunchSpecial/imgLunchSpecial8.jpg";
import imgLunchSpecial9 from "../img/lunchSpecial/imgLunchSpecial9.jpg";
import imgLunchSpecial10 from "../img/lunchSpecial/imgLunchSpecial10.jpg";

import imgBeverage from "../img/beverage/imgBeverage.jpg";
import imgBeverage1 from "../img/beverage/imgBeverage1.jpg";
import imgBeverage2 from "../img/beverage/imgBeverage2.jpg";
import imgBeverage3 from "../img/beverage/imgBeverage3.jpg";
import imgBeverage4 from "../img/beverage/imgBeverage4.jpg";
import imgBeverage5 from "../img/beverage/imgBeverage5.jpg";
import imgBeverage6 from "../img/beverage/imgBeverage6.jpg";

import imgHome2 from "../img/imgHome/imgHome2.jpg"; 

const MenuCategoryData = [
    {
        title: "Appetizers",
        subTitle: "Start your meal with our tasty appetizers", 
        backgroundImage: imgAppetizer, 
        items: [
            [imgAppetizer1, "Spring Roll (6)", 7.99],
            [imgAppetizer2, "Steamed Pork Soup Dumpling (6)", 8.99],
            [imgAppetizer3, "Sweet Rice Cake w. lotus roots", 8.99],
            [imgAppetizer4, "Eight-treasure Rice Pudding", 7.99],
            [imgAppetizer5, "Glutinous Rice Ball w. Black Sesame Filling(6) ", 7.99],
            [imgAppetizer6, "Shanghai Fried Fish in Soy Sauce", 9.99],
            [imgAppetizer7, "Fried Gluten w. Black Fungus", 6.99],
            [imgAppetizer8, "Cucumber w. Minced Garlic", 5.99],
            [imgAppetizer9, "Braised Bean Curd", 6.99],
            [imgAppetizer10, "Chicken in Wine", 7.99],
            [imgAppetizer11, "Sliced Poached Beef Shank", 8.99],
            [imgAppetizer12, "peanuts with five seasonings", 5.99],
        ],
    },
    {
        title : "Traditional Classic", 
        subTitle: "Satisfy your desire for a meal with a well-flavored taste", 
        backgroundImage: traditionalClassics,
        items: [
            [traditionalClassics1, "Squirrel fish", 21.99],
            [traditionalClassics2, "Steamed Fish Fillet in Black Bean Sauce", 13.99],
            [traditionalClassics3, "steamed pork bellies", 14.99],
            [traditionalClassics4, "salted chicken", 12.99],
            [traditionalClassics5, "Wuxi Style Braised Spare Ribs ", 15.99],
            [traditionalClassics6, "Pork Chop w. Sweet & Sour Sauce", 15.99],
            [traditionalClassics7, "Dongpo Pork", 6.99],
            [traditionalClassics8, "Minced Pork w. Glass Noodles", 14.99], 
            [traditionalClassics9, "Scrambled Eggs w. Whitebait", 16.99],
            [traditionalClassics10, "Wuxi Style Fried Gluten Puff w. Pork", 15.99],
            ], 
    }, 
    {
        title : "popular taste", 
        subTitle: "Prepare with great care and attention to detail", 
        backgroundImage: imgHotDish,
        items: [
            [imgHotDish1, "Shredded tofu in chicked broth", 11.99],
            [imgHotDish2, "Jiangnan Style Minced Pork Ball in Soup", 15.99],
            [imgHotDish3, "Beef w. Scallions", 16.99],
            [imgHotDish4, "Fried Lamb w. Cumin", 17.99],
            [imgHotDish5, "Fried Small Yellow Croaker", 14.99],
            [imgHotDish6, "West Lake Sour Fish", 19.99],
            [imgHotDish7, "FCrucian w. Scallion", 18.99],
            [imgHotDish8, "Steamed Egg w. Shirmp", 18.99], 
            [imgHotDish9, "Salt & Pepper Shrimp", 16.99],
            [imgHotDish10, "Shrimp w. Broccoli", 12.99],
            [imgHotDish11, "Szechuan Double Cooked Pork Slices", 12.99],
            [imgHotDish12, "Mapo Tofu", 10.99], 
            [imgHotDish13, "Hunan Style Chili Chicken", 13.99],
            [imgHotDish14, "Orange Flavored Beef", 16.99],
            ], 
    }, 
    {
        title: "Vegetables",
        subTitle: "Basic ingredients that delivers a unique taste and flavor.", 
        backgroundImage: imgVegetable,
        items: [
            [imgVegetable1, "Bean Sprouts w. Minced Garlic", 12.99],
            [imgVegetable2, "tofu family style", 11.99],
            [imgVegetable3, "braised bamboo shoot", 13.99],
            [imgVegetable4, "stir fired snow pea with mushrooms", 13.99],
            [imgVegetable5, "Bean salad", 13.99],
            [imgVegetable6, "Braised Eggplant with. Bean Paste Sauce", 12.99],
            [imgVegetable7, "dried sauteed string beans", 12.99],
            [imgVegetable8, "Scrambled Eggs w. Tomato", 10.99],
            [imgVegetable9, "stired fried shredded potatoes", 10.99],
            [imgVegetable10, "Hand Ripped Cabbage", 11.99],
        ], 
    },
    {
        title: "Soup",
        subTitle: "Meet and surpasse your expectations.”", 
        backgroundImage: imageSoup,
        items: [
            [imageSoup1, "Simmered Chicken Soup", 20.99],
            [imageSoup2, "Baby Cabbage in Chicken Soup", 11.99],
            [imageSoup3, "Hot & Sour Soup", 8.99],
            [imageSoup4, "Tai Lake Whitebait Soup", 13.99],
            [imageSoup5, "seaweed wonton soup", 11.99],
            [imageSoup6, "Fresh & Salted Pork w. Bamboo Shoots", 16.99],
            [imageSoup7, "Pork Spare Rib Soup w. White Radish", 11.99],
            [imageSoup8, "Pickled Cabbage w. Fish Fillets", 13.99]
            ], 
    }, 
    {
        title: "Noodle & Rice",
        subTitle: "A divine combination of different meat and vegetable elements", 
        backgroundImage: imgNoodle,
        items: [
            [imgNoodle1, "Noodles w Shredded Pork & Salted Cabbage", 9.99],
            [imgNoodle2, "Seafood Noodle Soup", 11.99],
            [imgNoodle3, "Spicy Braised Beef Noodle Soup", 13.99],
            [imgNoodle4, "Noodles w Eight Treasures in Spicy Sauce", 10.99],
            [imgNoodle5, "noodles in plain sauce", 8.99],
            [imgNoodle6, "Stir-Fried Rice Cake with Vegetables and meat", 12.99],
            [imgNoodle7, "Jiangnan Fried Rice Noodles", 10.99],
            [imgNoodle8, "Yang Zhou Fried Rice", 11.99],
            [imgNoodle9, "Vegetable Bacon Fried Rice", 10.99],
            [imgNoodle10, "Seafood Fried Rice", 12.99],
            [imgNoodle11, "white rice", 1.00]
        ], 
    }, 
    {
        title: "LunchSpecial", 
        subTitle: "An appealing choice", 
        backgroundImage: imgLunchSpecial,
        items: [
            [imgLunchSpecial1, "General Tso's Chicken", 9.99],
            [imgLunchSpecial2, "beef w. broccoli", 11.99],
            [imgLunchSpecial3, "Kung Pao Diced Chicken", 9.99],
            [imgLunchSpecial4, "Pork Chop w. Sweet & Sour Sauce", 11.99],
            [imgLunchSpecial5, "Shredded Pork w. Garlic Sauce", 9.99],
            [imgLunchSpecial6, "Sesame Chicken", 10.99],
            [imgLunchSpecial7, "Dried Sauteed String Bean", 8.99],
            [imgLunchSpecial8, "fish filet with tomato", 11.99],
            [imgLunchSpecial9, "pork with baby bamboo shoots", 10.99],
            [imgLunchSpecial10, "pork with tofu and chinese celery", 10.99],
        ], 
    },
    {
        title: "Beverage", 
        subTitle: "You will like it", 
        backgroundImage: imgBeverage,
        items: [
            [imgBeverage1, "Orange Juice", 2.99],
            [imgBeverage2, "Apple Juice", 2.99],
            [imgBeverage3, "Coke/Diet Coke", 2.50],
            [imgBeverage4, "Sprite", 2.50],
            [imgBeverage5, "Bottled Water", 2.00],
            [imgBeverage6, "Herbal Tea", 2.99],          
            ], 
    }, 
    {
        title: "Gift Cards", 
        subTitle: " your meal with our tasty appetizers", 
        backgroundImage: imgNoodle,
        items: [
            [imgHome2, "Gift Cards", 10],
            [imgHome2, "Gift Cards", 20],
            [imgHome2, "Gift Cards", 50],
            [imgHome2, "Gift Cards", 100],
            [imgHome2, "Gift Cards", 200],
            [imgHome2, "Gift Cards", 500],          
            ], 
    }, 
]

const MenuContext = createContext([{}, ()=>{ }]);

 const MenuProvider = (props) => {
     const [menu, setMenu] = useState({
         titleArr: ["Appetizers", "Traditional Classic", "popular taste", "Vegetables", "Soup", "Noodle & Rice", "LunchSpecial", "Beverage"], 
         currentMenuComponentIndex: 0,
         currentCategoryIndex: 0, 
         menuComponentArr: [<MenuNav />, <MenuDetail/>
        //  <TraditionalClassical />, <HotDishes />, <Vegetables />, <Soup />, <Noodle />, <LunchSpecial />, <Beverage /> 
        ]
     })
    return (
        <MenuContext.Provider value = {[menu, setMenu]}>
            {props.children}
        </MenuContext.Provider>
    )
}
export { MenuContext, MenuProvider,MenuCategoryData };