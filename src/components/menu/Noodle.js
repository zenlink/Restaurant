import React, { useContext } from 'react';
import { MenuContext } from "../MenuContext";
import { makeStyles } from '@material-ui/core/styles';
import imgNoodle from "../../img/noodles/imgNoodle.jpg";
import imgNoodle1 from "../../img/noodles/imgNoodle1.jpg";
import imgNoodle2 from "../../img/noodles/imgNoodle2.jpg";
import imgNoodle3 from "../../img/noodles/imgNoodle3.jpg";
import imgNoodle4 from "../../img/noodles/imgNoodle4.jpg";
import imgNoodle5 from "../../img/noodles/imgNoodle5.jpg";
import imgNoodle6 from "../../img/noodles/imgNoodle6.jpg";
import imgNoodle7 from "../../img/noodles/imgNoodle7.jpg";
import imgNoodle8 from "../../img/noodles/imgNoodle8.jpg";
import imgNoodle9 from "../../img/noodles/imgNoodle9.jpg";
import imgNoodle10 from "../../img/noodles/imgNoodle10.jpg";
import imgNoodle11 from "../../img/noodles/imgNoodle11.jpg";

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

const noodleSummary = [
    [imgNoodle1, "Noodles w Shredded Pork & Salted Cabbage", "$9.99"],
    [imgNoodle2, "Seafood Noodle Soup", "$11.99"],
    [imgNoodle3, "Spicy Braised Beef Noodle Soup", "$13.99"],
    [imgNoodle4, "Noodles w Eight Treasures in Spicy Sauce", "$10.99"],
    [imgNoodle5, "noodles in plain sauce", "$8.99"],
    [imgNoodle6, "Stir-Fried Rice Cake with Vegetables and meat", "$12.99"],
    [imgNoodle7, "Jiangnan Fried Rice Noodles", "$10.99"],
    [imgNoodle8, "Yang Zhou Fried Rice", "$11.99"],
    [imgNoodle9, "Vegetable Bacon Fried Rice", "$10.99"],
    [imgNoodle10, "Seafood Fried Rice", "$12.99"],
    [imgNoodle11, "white rice", "$1.00"]
];

const Noodle = () => {
    const [menu, setMenu] = useContext(MenuContext);
    const classes = useStyles();
    return (
        <div>

            <div className={classes.background}>
                <img src={imgNoodle} className={classes.image}></img>
            </div>
            <main className={classes.main}>
                <div className={classes.menuTitleContainer}>
                    <h1 className={classes.menuTitle}>JianNan's menu</h1>
                    <p className={classes.subTitle}>Delious Food you can find with combination of 'color, aroma and taste'</p>
                </div>
                <div onClick={() => { setMenu({ ...menu, currentMenuComponentIndex: 0 }) }}>menu</div>
                <div className={classes.navImageContainer}>

                    {noodleSummary.map((item, index) => {
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
};
export default Noodle;
