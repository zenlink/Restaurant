import React, {useContext} from 'react'; 
import { MenuContext } from "../MenuContext";
import { makeStyles } from '@material-ui/core/styles';
import imgHotDish from "../../img/hotDish/imgHotDish.jpg";
import imgHotDish1 from "../../img/hotDish/imgHotDish1.jpg";
import imgHotDish2 from "../../img/hotDish/imgHotDish2.jpg";
import imgHotDish3 from "../../img/hotDish/imgHotDish3.jpg";
import imgHotDish4 from "../../img/hotDish/imgHotDish4.jpg";
import imgHotDish5 from "../../img/hotDish/imgHotDish5.jpg";
import imgHotDish6 from "../../img/hotDish/imgHotDish6.jpg";
import imgHotDish7 from "../../img/hotDish/imgHotDish7.jpg";
import imgHotDish8 from "../../img/hotDish/imgHotDish8.jpg";
import imgHotDish9 from "../../img/hotDish/imgHotDish9.jpg";
import imgHotDish10 from "../../img/hotDish/imgHotDish10.jpg";
import imgHotDish11 from "../../img/hotDish/imgHotDish11.jpg";
import imgHotDish12 from "../../img/hotDish/imgHotDish12.jpg";
import imgHotDish13 from "../../img/hotDish/imgHotDish13.jpg";
import imgHotDish14 from "../../img/hotDish/imgHotDish14.jpg";

const useStyles = makeStyles(theme => ({
    background: {
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        width: '100%',
        height: "100vh",
        opacity: "0.7",
        zIndex: "-1",
    },
    image: {
        width: '80%',
    },
    main: {
        width: "80%",
        margin: "0 auto",
    },
    menuTitleContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        color: "#376037",
        textAlign: "center",
        textTransform: "upperCase",
        fontWeight: "bold",
    },
    menuTitle: {
        // textAlign: "center",
        // textTransform: "upperCase",
        // margin: "2rem",
        color: "#683476",
        padding: "1rem",
    },
    navImageContainer: {
        display: 'grid',
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        gridGap: "1rem",
    },
    menuNavImage: {
        width: "100%",
        height: "80%",
    },

    "@media screen and (max-width: 1500px)": {

        image: {
            width: '100%',
            objectFit: "cover",
            objectPosition: "right",
        },
        main: {
            width: "90%",
        },
    }

}));


const hotDishSummary =[
    [imgHotDish1, "Shredded tofu in chicked broth", "$11.99"],
    [imgHotDish2, "Jiangnan Style Minced Pork Ball in Soup", "$15.99"],
    [imgHotDish3, "Beef w. Scallions", "$16.99"],
    [imgHotDish4, "Fried Lamb w. Cumin", "$17.99"],
    [imgHotDish5, "Fried Small Yellow Croaker", "$14.99"],
    [imgHotDish6, "West Lake Sour Fish", "$19.99"],
    [imgHotDish7, "FCrucian w. Scallion", "$18.99"],
    [imgHotDish8, "Steamed Egg w. Shirmp", "$18.99"], 
    [imgHotDish9, "Salt & Pepper Shrimp", "$16.99"],
    [imgHotDish10, "Shrimp w. Broccoli", "$12.99"],
    [imgHotDish11, "Szechuan Double Cooked Pork Slices", "$12.99"],
    [imgHotDish12, "Mapo Tofu", "$10.99"], 
    [imgHotDish13, "Hunan Style Chili Chicken", "$13.99"],
    [imgHotDish14, "Orange Flavored Beef", "$16.99"],
    ];
const HotDishes = () => {
    const [menu, setMenu] = useContext(MenuContext);
    const classes = useStyles();
    return (
        <div>

            <div className={classes.background}>
                <img src={imgHotDish} className={classes.image}></img>
            </div>
            <main className={classes.main}>
                <div className={classes.menuTitleContainer}>
                    <h1 className={classes.menuTitle}>JianNan's menu</h1>
                    <p className={classes.subTitle}>Delious Food you can find with combination of 'color, aroma and taste'</p>
                </div>
                <div onClick={() => { setMenu({ ...menu, currentMenuComponentIndex: 0 }) }}>menu</div>
                <div className={classes.navImageContainer}>

                    {hotDishSummary.map((item, index) => {
                        return (
                            <>

                                <div className={classes.singleMenu} key={index}
                                   
                                >
                                    <img className={classes.menuNavImage} src={item[0]}></img>
                                    <div className={classes.menuName}>{item[1]}</div>
                                    <div className={classes.menuName}>{item[2]}</div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </main>

        </div>
    )
                }

export default HotDishes
