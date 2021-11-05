import React, {useContext} from 'react';
import { MenuContext } from "../MenuContext";
import { makeStyles } from '@material-ui/core/styles';

import traditionalClassics from "../../img/traditionalClassics/imgtraditionalClassics.jpg";
import traditionalClassics1 from "../../img/traditionalClassics/imgtraditionalClassics1.jpg";
import traditionalClassics2 from "../../img/traditionalClassics/imgtraditionalClassics2.jpg"; 
import traditionalClassics3 from "../../img/traditionalClassics/imgtraditionalClassics3.jpg";
import traditionalClassics4 from "../../img/traditionalClassics/imgtraditionalClassics4.jpg"; 
import traditionalClassics5 from "../../img/traditionalClassics/imgtraditionalClassics5.jpg";
import traditionalClassics6 from "../../img/traditionalClassics/imgtraditionalClassics6.jpg"; 
import traditionalClassics7 from "../../img/traditionalClassics/imgtraditionalClassics7.jpg";
import traditionalClassics8 from "../../img/traditionalClassics/imgtraditionalClassics8.jpg"; 
import traditionalClassics9 from "../../img/traditionalClassics/imgtraditionalClassics9.jpg";
import traditionalClassics10 from "../../img/traditionalClassics/imgtraditionalClassics10.jpg"; 

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




const traditionalSummary =[
    [traditionalClassics1, "Squirrel fish", "$21.99"],
    [traditionalClassics2, "Steamed Fish Fillet in Black Bean Sauce", "$13.99"],
    [traditionalClassics3, "steamed pork bellies", "$14.99"],
    [traditionalClassics4, "salted chicken", "$12.99"],
    [traditionalClassics5, "Wuxi Style Braised Spare Ribs ", "$15.99"],
    [traditionalClassics6, "Pork Chop w. Sweet & Sour Sauce", "$15.99"],
    [traditionalClassics7, "Dongpo Pork", "$6.99"],
    [traditionalClassics8, "Minced Pork w. Glass Noodles", "$14.99"], 
    [traditionalClassics9, "Scrambled Eggs w. Whitebait", "$16.99"],
    [traditionalClassics10, "Wuxi Style Fried Gluten Puff w. Pork", "$15.99"],
    ];

const TraditionalClassical = () => {
    const [menu, setMenu] = useContext(MenuContext);
    const classes = useStyles();
    return (
        <div>

            <div className={classes.background}>
                <img src={traditionalClassics} className={classes.image}></img>
            </div>
            <main className={classes.main}>
                <div className={classes.menuTitleContainer}>
                    <h1 className={classes.menuTitle}>JianNan's menu</h1>
                    <p className={classes.subTitle}>Delious Food you can find with combination of 'color, aroma and taste'</p>
                </div>
                <div onClick={() => { setMenu({ ...menu, currentMenuComponentIndex: 0 }) }}>menu</div>
                <div className={classes.navImageContainer}>

                    {traditionalSummary.map((item, index) => {
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
export default TraditionalClassical; 
