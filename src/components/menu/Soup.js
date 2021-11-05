import React, {useContext} from 'react';
import { MenuContext } from "../MenuContext";
import { makeStyles } from '@material-ui/core/styles';
import imageSoup from "../../img/soup/imageSoup.jpg";
import imageSoup1 from "../../img/soup/imageSoup1.jpg";
import imageSoup2 from "../../img/soup/imageSoup2.jpg";
import imageSoup3 from "../../img/soup/imageSoup3.jpg";
import imageSoup4 from "../../img/soup/imageSoup4.jpg";
import imageSoup5 from "../../img/soup/imageSoup5.jpg";
import imageSoup6 from "../../img/soup/imageSoup6.jpg";
import imageSoup7 from "../../img/soup/imageSoup7.jpg";
import imageSoup8 from "../../img/soup/imageSoup8.jpg";

const soupSummary =[
    [imageSoup1, "Simmered Chicken Soup", "$10.99/$20.99"],
    [imageSoup2, "Baby Cabbage in Chicken Soup", "$6.99/$11.99"],
    [imageSoup3, "Hot & Sour Soup", "$4.99/$8.99"],
    [imageSoup4, "Tai Lake Whitebait Soup", "$7.99/$13.99"],
    [imageSoup5, "seaweed wonton soup", "$6.99/$11.99"],
    [imageSoup6, "Fresh & Salted Pork w. Bamboo Shoots", "$9.99/$16.99"],
    [imageSoup7, "Pork Spare Rib Soup w. White Radish", "$6.99/$11.99"],
    [imageSoup8, "Pickled Cabbage w. Fish Fillets", "$7.99/$13.99"]
    ];

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
            gridTemplateRows: "repeat(2, 1fr)",
            gridGap: "1rem",
        },
        menuNavImage:{
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
const Soup = () => {
    const [menu, setMenu] = useContext(MenuContext);
        const classes = useStyles();
        return (
            <div>
                
                    <div className={classes.background}>
                        <img src={imageSoup} className={classes.image}></img>
                    </div>
                    <main className={classes.main}>
                <div className={classes.menuTitleContainer}>
                    <h1 className={classes.menuTitle}>JianNan's menu</h1>
                    <p className={classes.subTitle}>Delious Food you can find with combination of 'color, aroma and taste'</p>
                </div>
                <div  onClick = {()=>{setMenu({...menu, currentMenuComponentIndex:0})}}>menu</div>
                <div className={classes.navImageContainer}>
               
                    {soupSummary.map((item, index) => {
                        return (
                            <>
    
                            <div className={classes.singleMenu} key = {index}
                         
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

export default Soup;
