import React, { useContext } from 'react';
import { AppContext } from "../AppContext";
import facebook from "../img/imgSocialIcon/facebook.png";
import youtube from "../img/imgSocialIcon/youtube.png";
import twitterimage from "../img/imgSocialIcon/twitterimage.png";
import instagram from "../img/imgSocialIcon/instagram.jpg";
import { makeStyles } from '@material-ui/core/styles';
import {FaWarehouse} from "react-icons/fa"

const useStyles = makeStyles(theme => ({
    footerContainer: {
        margin: "0 auto",
        width: "80%",
    },
    footerTitle: {
        background: "rgba(210, 215, 211, .4)",
        boxShadow: "0px 5px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        margin: "2rem 0",
        width: "100%",
        padding: "1rem",
    },
    footerBoard: {
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        color: "#376037",

    },
    contactTitle: {
        padding: "1rem 3rem",

    },
    title1: {
        textAlign: "center",
        textTransform: "upperCase",
        color: "#683476",
        // margin: "2rem",
        letterSpacing: "3px"
    },
    subtitle: {
        fontSize: "1.5rem",
    },
    openTime: {
        textAlign: "center",
        fontWeight: "bold",
    },

    footer: {
        margin: "0 auto",
        width: "70%",

    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        lineHeight: "1.7rem",
        marginBottom: "1rem", 
    },
    title: {
        cursor: "pointer",
        textAlign: "center",
    },
    brandContainer: {
        display: "flex",
        cursor: "pointer",
        justifyContent: "center",     
    },
    logo: {
        padding: ".4rem",
        color: "white",
        background: "#376037",
        borderRadius: "50%",
        alignSelf: "center",
    },
    jiangNan: {
        color: "#6D4D4D",
        fontSize: "1.8rem",
        fontWeight: "bold",
        fontFamily: "Volkhov, serif",
        fontFamily: "Charm, cursive",
        color: "#376037",
    },
    restaurant: {
        fontSize: "1rem",
        color: "#683476",
    },
    iconGroup: {
        textAlign: "center",
    },
    mediaLogo: {
        fontSize: "1.3rem",
        textTransform: "uppercase",
        padding: "5px 0",
        fontWeight: "bold",
    },
    icon: {
        width: "3rem",
        borderRadius: "50%",
        padding: "0 5px",
        cursor: "pointer",

    },
    "@media screen and (max-width: 768px)": {
        footerContainer: {
            width: "100%",
        },
        footerBoard: {
            flexDirection: "column",
        },

        title1: {
            fontSize: "1.2rem",
        },
        subtitle: {
            fontSize: "1rem",
            textAlign: "center",
        },
        container: {
            flexDirection: "column",
            lineHeight: "1.3rem",
        },
        title: {
            padding: "0 1.5rem",
        },
        jiangNan:{
            fontSize: "1.2rem",
        }, 
        english: {
            fontSize: "1rem",
        },
        mediaLogo: {
            fontSize: "1rem",
        },
        icon: {
            width: "2rem",
        },

    },
}));
const Footer = () => {
    const [state, setState] = useContext(AppContext);
    const classes = useStyles();

    return (
        <div className={classes.footerContainer}>
            <div className={classes.footerTitle}>
                <h1 className={classes.title1}>open time </h1>
                <div className={classes.footerBoard}>
                    <div className={classes.contactTitle}>
                        <h3 className={classes.subtitle}>MONDAY - FRIDAY</h3>
                        <p className={classes.openTime}>11AM – 9:30PM</p>
                        <p className={classes.openTime}>Lunch / Dinner</p>
                    </div>
                    <div className={classes.contactTitle}>
                        <h3 className={classes.subtitle}>SATURDAY - SUNDAY</h3>
                        <p className={classes.openTime}>12PM – 8:30PM</p>
                        <p className={classes.openTime}>Lunch / Dinner</p>
                    </div>
                </div>
            </div>
            <footer className={classes.footer}>
                <div className={classes.container}>
                    <div className={classes.title}
                        onClick={() => {
                            window.scrollTo(0, 0);
                            setState({
                                ...state, currentIndex: 0,
                            })
                        }}>
                        <div className={classes.brandContainer}>
                            <div className={classes.logo}><FaWarehouse></FaWarehouse></div>
                            <div>
                                <div className={classes.jiangNan}>{state.navArr[0]}</div>
                                <div className={classes.restaurant}>Restaurant</div>
                            </div>
                        </div>
                        <div className={classes.english}>7 LOREM RD., CITY, STATE 01234</div>
                        <div className={classes.english}>P: 123-456-789</div>
                    </div>
                    <div className={classes.title}>
                        {state.navArr.map((item, index) => {
                            if (index === 0 || index === 5) { return }
                            return (
                                <div
                                    key={index}
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                        setState({
                                            ...state, currentIndex: index,
                                        })
                                    }}
                                >{item}</div>
                            )
                        })}

                    </div>
                    <div className={classes.iconGroup}>
                        <div className={classes. mediaLogo}>Follow us:</div>
                        <div>
                            <img className={classes.icon} src={twitterimage}></img>
                            <img className={classes.icon} src={facebook}></img>
                            <img className={classes.icon} src={instagram}></img>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer;
