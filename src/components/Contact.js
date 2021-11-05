import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from "../AppContext";
import imgContact from "../img/imgContact/imgContact.jpg";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const button = {
    border: 0,
    outline: 0,
    background: "#683476",
    color: "white",
    textTransform: "upperCase",
    cursor: "pointer",
};
const useStyles = makeStyles(theme => ({
    background: {
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        width: '100%',
        minHeight: "100vh",
        opacity: "0.4",
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
        textAlign: "center",
        textTransform: "upperCase",
        fontWeight: "bold",
    },
    menuTitle: {
        paddingTop: "8rem", 
        color: "#683476",
        padding: "1rem",
        letterSpacing: "3px",
    },
    subTitle: {
        fontSize: "1rem", 
        textTransform: "initial",
        color: "#376037",
    }, 

    title: {
        textTransform: "upperCase",
        fontWeight: "bold",
        color: "#376037",
        fontSize: "1.5rem",
        padding: "10px",
        marginLeft: "1rem",
    },
    contactContainer: {
        display: "flex",
        justifyContent: "space-between",
        margin: "10px",
        background: "rgba(243,241,239, .4)",
        boxShadow: "10px 5px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        borderRadius: "10px",
        padding: "1rem",
    },
    addressContainer: {
        alignSelf: "center",
    },
    addressTitle: {
        textTransform: "capitalize",
        fontSize: "1.2rem",
        padding: "10px ",
        textDecoration: "underline",
        color: "#683476",
    },
    address: {
        padding: "10px 30px",
        color: "#376037",
    },
    commentsContainer:{
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
        background: "rgba(243,241,239, .4)",
        boxShadow: "10px 5px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    }, 

    textField: {
        width: '50%',
        padding: "10px", 
    },
    comments: {
        width: '100%',
        padding: "10px", 
    },
    submitBtn:{
        // margin: "1rem", 
        ...button,
        padding: "1rem 2rem",
        fontSize: "1.5rem",
        display: "block",
        margin: "10px auto"
    }, 
    "@media screen and (max-width: 768px)": {

        image: {
            width: '100%',
            objectFit: "cover",
            objectPosition: "right",
        },
        main: {
            width: "100%",
        },
         menuTitleContainer: {
    textAlign: "center",
    textTransform: "upperCase",
    fontWeight: "bold",
},
        menuTitle: {
            fontSize: "1.2rem",
            paddingTop: "6rem", 
        },
        subTitle: {
            fontSize: "0.8rem",
        },
        contactContainer:{
            flexDirection: "column", 
            alignItems: "center",
        }, 
        title:{
            fontSize: "1rem", 
        }, 
        addressTitle:{
            fontSize: ".9rem", 
        }, 
        textField: {
            width: '100%',
            padding: 0, 
        },
        comments:{
            padding: 0, 
        }, 
        submitBtn:{
            padding: "1rem 2rem",
            fontSize: "1rem",
        }
        }

}));

const Contact = () => {
    const [state, setState] = useContext(AppContext);
    const [mapWidth, setMapWidth] = useState("");
    const classes = useStyles();
    const [value, setValue] = React.useState('');



    useEffect(() => {
        if (state.windowWidth > "768") {
            setMapWidth("800")
        } else {
            setMapWidth("300")
        }
    }, [state.windowWidth]);

    const handleChange = event => {
        setValue(event.target.value);
    };
    return (
        <div>
            <div className={classes.background}>
                <img src={imgContact} className={classes.image}></img>
            </div>
            <main className={classes.main}>
                <div className={classes.menuTitleContainer}>
                    <h1 className={classes.menuTitle}>Contact</h1>
                    <p className={classes.subTitle}>call us now</p>
                </div>
                <div className={classes.title}>location</div>
                <div className={classes.contactContainer}>
                    <div className={classes.addressContainer}>
                        <div className={classes.addressTitle}>Address</div>
                        <div className={classes.address}>7 Lorem Rd., city, state 01234</div>
                        <div className={classes.addressTitle}>Phone</div>
                        <div className={classes.address}>P: 123-456-789</div>
                    </div>
                    <div className={classes.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.557344554653!2d-73.03021248415791!3d41.470515179256665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7c30e6ce89eb7%3A0xc2b191e882064f15!2sWalmart%20Supercenter!5e0!3m2!1sen!2sus!4v1577244219980!5m2!1sen!2sus"
                            width={mapWidth} height="300" frameborder="0" style={{ border: 0 }} allowfullscreen=""></iframe>
                    </div>
                </div>
                <div className={classes.title}>Questions and Comments</div>
                <div className={classes.commentsContainer}>                  

                        <TextField
                            label="Name"
                            type = "text"
                            defaultValue="Name"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined" />

                        <TextField
                            defaultValue="Email"
                            label="Normal"
                            type = "email"
                            defaultValue="Email"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined" />
                            <div>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Questions & Comments"
                            className={classes.comments}
                            multiline
                            rows="8"
                            value={value}
                            onChange={handleChange}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                              }}                        />
                        </div>
                        <button className = {classes.submitBtn}>Submit</button>
                </div>



            </main>


        </div >
    )
}

export default Contact;
