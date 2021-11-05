import React, { useContext } from 'react';
import { MenuContext } from "../MenuContext";
import { makeStyles } from '@material-ui/core/styles';
import imgVegetable from "../../img/vegetables/imgVegetable.jpg";
import imgVegetable1 from "../../img/vegetables/imgVegetable1.jpg";
import imgVegetable2 from "../../img/vegetables/imgVegetable2.jpg";
import imgVegetable3 from "../../img/vegetables/imgVegetable3.jpg";
import imgVegetable4 from "../../img/vegetables/imgVegetable4.jpg";
import imgVegetable5 from "../../img/vegetables/imgVegetable5.jpg";
import imgVegetable6 from "../../img/vegetables/imgVegetable6.jpg";
import imgVegetable7 from "../../img/vegetables/imgVegetable7.jpg";
import imgVegetable8 from "../../img/vegetables/imgVegetable8.jpg";
import imgVegetable9 from "../../img/vegetables/imgVegetable9.jpg";
import imgVegetable10 from "../../img/vegetables/imgVegetable10.jpg";

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


const vegetablesSummary = [
    [imgVegetable1, "Bean Sprouts w. Minced Garlic", "$12.99"],
    [imgVegetable2, "tofu family style", "$11.99"],
    [imgVegetable3, "braised bamboo shoot", "$13.99"],
    [imgVegetable4, "stir fired snow pea with mushrooms", "$13.99"],
    [imgVegetable5, "Bean salad", "$13.99"],
    [imgVegetable6, "Braised Eggplant with. Bean Paste Sauce", "$12.99"],
    [imgVegetable7, "dried sauteed string beans", "$12.99"],
    [imgVegetable8, "Scrambled Eggs w. Tomato", "$10.99"],
    [imgVegetable9, "stired fried shredded potatoes", "$10.99"],
    [imgVegetable10, "Hand Ripped Cabbage", "$11.99"],
];

const Vegetables = () => {
    const [menu, setMenu] = useContext(MenuContext);
    const classes = useStyles();
    return (
        <div>

            <div className={classes.background}>
                <img src={imgVegetable} className={classes.image}></img>
            </div>
            <main className={classes.main}>
                <div className={classes.menuTitleContainer}>
                    <h1 className={classes.menuTitle}>JianNan's menu</h1>
                    <p className={classes.subTitle}>Delious Food you can find with combination of 'color, aroma and taste'</p>
                </div>
                <div onClick={() => { setMenu({ ...menu, currentMenuComponentIndex: 0 }) }}>menu</div>
                <div className={classes.navImageContainer}>

                    {vegetablesSummary.map((item, index) => {
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
export default Vegetables; 
