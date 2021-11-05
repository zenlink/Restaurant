import React, {useContext} from 'react';
import { MenuContext } from "../MenuContext";
import { makeStyles } from '@material-ui/core/styles'; 
import imgBeverage from "../../img/beverage/imgBeverage.jpg";
import imgBeverage1 from "../../img/beverage/imgBeverage1.jpg";
import imgBeverage2 from "../../img/beverage/imgBeverage2.jpg";
import imgBeverage3 from "../../img/beverage/imgBeverage3.jpg";
import imgBeverage4 from "../../img/beverage/imgBeverage4.jpg";
import imgBeverage5 from "../../img/beverage/imgBeverage5.jpg";
import imgBeverage6 from "../../img/beverage/imgBeverage6.jpg";

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


const beverageSummary =[
    [imgBeverage1, "Orange Juice", "$2.99"],
    [imgBeverage2, "Apple Juice", "$2.99"],
    [imgBeverage3, "Coke/Diet Coke", "$2.50"],
    [imgBeverage4, "Sprite", "$2.50"],
    [imgBeverage5, "Bottled Water", "$2.00"],
    [imgBeverage6, "Herbal Tea", "$2.99"],
   
    ];

export const Beverage = () => {
    const [menu, setMenu] = useContext(MenuContext);
    const classes = useStyles();
    return (
        <div>

            <div className={classes.background}>
                <img src={imgBeverage} className={classes.image}></img>
            </div>
            <main className={classes.main}>
                <div className={classes.menuTitleContainer}>
                    <h1 className={classes.menuTitle}>JianNan's menu</h1>
                    <p className={classes.subTitle}>Delious Food you can find with combination of 'color, aroma and taste'</p>
                </div>
                <div onClick={() => { setMenu({ ...menu, currentMenuComponentIndex: 0 }) }}>menu</div>
                <div className={classes.navImageContainer}>

                    {beverageSummary.map((item, index) => {
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
export default Beverage;
