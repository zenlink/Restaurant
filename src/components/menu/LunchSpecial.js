import React, {useContext} from 'react';
import { MenuContext } from "../MenuContext";
import { makeStyles } from '@material-ui/core/styles';
import imgLunchSpecial from "../../img/lunchSpecial/imgLunchSpecial.jpg";
import imgLunchSpecial1 from "../../img/lunchSpecial/imgLunchSpecial1.jpg";
import imgLunchSpecial2 from "../../img/lunchSpecial/imgLunchSpecial2.jpg";
import imgLunchSpecial3 from "../../img/lunchSpecial/imgLunchSpecial3.jpg";
import imgLunchSpecial4 from "../../img/lunchSpecial/imgLunchSpecial4.jpg";
import imgLunchSpecial5 from "../../img/lunchSpecial/imgLunchSpecial5.jpg";
import imgLunchSpecial6 from "../../img/lunchSpecial/imgLunchSpecial6.jpg";
import imgLunchSpecial7 from "../../img/lunchSpecial/imgLunchSpecial7.jpg";
import imgLunchSpecial8 from "../../img/lunchSpecial/imgLunchSpecial8.jpg";
import imgLunchSpecial9 from "../../img/lunchSpecial/imgLunchSpecial9.jpg";
import imgLunchSpecial10 from "../../img/lunchSpecial/imgLunchSpecial10.jpg";

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


const lunchSpecialSummary = [
    [imgLunchSpecial1, "General Tso's Chicken", "$9.99"],
    [imgLunchSpecial2, "beef w. broccoli", "$11.99"],
    [imgLunchSpecial3, "Kung Pao Diced Chicken", "$9.99"],
    [imgLunchSpecial4, "Pork Chop w. Sweet & Sour Sauce", "$11.99"],
    [imgLunchSpecial5, "Shredded Pork w. Garlic Sauce", "$9.99"],
    [imgLunchSpecial6, "Sesame Chicken", "$10.99"],
    [imgLunchSpecial7, "Dried Sauteed String Bean", "$8.99"],
    [imgLunchSpecial8, "fish filet with tomato", "$11.99"],
    [imgLunchSpecial9, "pork with baby bamboo shoots", "$10.99"],
    [imgLunchSpecial10, "pork with tofu and chinese celery", "$10.99"],
];
const LunchSpecial = () => {
    
        const [menu, setMenu] = useContext(MenuContext);
        const classes = useStyles();
        return (
            <div>

                <div className={classes.background}>
                    <img src={imgLunchSpecial} className={classes.image}></img>
                </div>
                <main className={classes.main}>
                    <div className={classes.menuTitleContainer}>
                        <h1 className={classes.menuTitle}>JianNan's menu</h1>
                        <p className={classes.subTitle}>Delious Food you can find with combination of 'color, aroma and taste'</p>
                    </div>
                    <div onClick={() => { setMenu({ ...menu, currentMenuComponentIndex: 0 }) }}>menu</div>
                    <div className={classes.navImageContainer}>

                        {lunchSpecialSummary.map((item, index) => {
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
    export default LunchSpecial;
