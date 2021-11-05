import React, { useContext, useState } from 'react';
import { AppContext } from "../AppContext";
import { MenuCategoryData } from "./MenuContext";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import imgLunchSpecial from "../img/lunchSpecial/imgLunchSpecial.jpg";
import imageAmx from "../img/creditCard/imageAmx.jpg";
import imgDiscoverCard from "../img/creditCard/imgDiscoverCard.jpg";
import imageMasterCard from "../img/creditCard/imageMasterCard.jpg";
import imageVisa from "../img/creditCard/imageVisa.jpg";


const orderContainerGeneral = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    textAlign: "center",
    color: "black",
    fontSize: "0.8rem",
    padding: "10px 20px",
};
const button = {
    border: 0,
    outline: 0,
    background: "#683476",
    color: "white",
    textTransform: "upperCase",
    cursor: "pointer",
    display: 'block',
    margin: '20px auto',
    "&:hover": {
        background: "#86408a",
        boxShadow: "5px 5px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    },
};
const useStyles = makeStyles(theme => ({
    background: {
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        width: '100%',
        minHeight: "100vh",
        opacity: "0.3",
        zIndex: "-1",
        top: 0,
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
    titleContainer: {
        background: "rgba(243,241,239, .6)",
        boxShadow: "0 5px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        margin: "10px",
        borderRadius: "10px",
    },
    title: {
        textTransform: "upperCase",
        fontWeight: "bold",
        color: "#376037",
        fontSize: "1.5rem",
        padding: "10px",
    },
    subTitle: {
        padding: "0 12px",
        paddingBottom: "10px",
    },
    summaryContainer: {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
    },
    leftSummary: {
        flex: "60%",
    },
    personalInformationForm: {
        margin: "10px",
    },
    phoneNumber: {
        marginBottom: "10px",
    },
    balanceDue: {
        fontSize: "1.1rem",
        fontWeight: "bold",
        color: "#683476",
        padding: "0 12px",
        textTransform: "upperCase",
    },
    payAtStore: {
        display: "none",
    },
    showPayAtStore: {
        display: "block",
        padding: "10px 20px",
    },
    payCreditContainer: {
        display: "none",
    },
    showPayCreditContainer: {
        display: "block",
    },
    creditImage: {
        margin: "0 30px",
    },
    icon: {
        width: "5rem",
        padding: "10px 5px",
    },
    payPalBtn: {
        display: "none",

    },
    showPayPalBtn: {
        display: "block",
        border: "1px solid grey",
        background: "transparent",
        textTransform: "upperCase",
        cursor: "pointer",
        margin: "0 30px",
        padding: "1rem 1rem",
        fontSize: ".8rem",
        marginTop: "10px",
        marginBottom: "10px",
        "&:hover": {
            border: "1px solid black",
        }
    },
    btnContainer: {
        margin: "0 auto",
    },
    btn: {
        ...button,
        padding: "1rem 2rem",
        fontSize: "1.5rem",
    },
    rightSummary: {
        flex: "40%",
        position: "-webkit-sticky",
        position: "sticky",
        top: "105px",
        right: "0px",
        alignSelf: "flex-start",
        background: "rgba(243,241,239, .9)",
        boxShadow: "0 5px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        margin: "10px",
        borderRadius: "10px",
    },
    bagDialogueContainer: {
        background: "rgba(243,241,239, .8)",
        boxShadow: "0 5px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        borderRadius: "10px",
    },

    dialogueTitle: {
        color: "#683476",
        padding: "1rem",
        letterSpacing: "3px",
        textAlign: "center",
        textTransform: "capitalize",
    },

    dialogueButton: {
        ...button,
        padding: "0.5rem 1rem",
        fontSize: ".8rem",
    },
    tableTitle: {
        ...orderContainerGeneral,
        textTransform: "upperCase",
    },
    divider: {
        margin: "0 20px",
        color: "grey",
    },
    orderContainer: {
        ...orderContainerGeneral,
        color: "#376037",
    },
    tax: {
        ...orderContainerGeneral,
        textTransform: "capitalize",
    },
    tableBottom: {
        ...orderContainerGeneral,
        textTransform: "upperCase",
        fontWeight: "bold",
        fontSize: "1rem",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
   
    "@media screen and (max-width: 768px)": {
        image: {
            width: '100%',
            objectFit: "cover",
            objectPosition: "left",
        },
        main: {
            width: "100%",
        },
        menuTitle: {
            fontSize: "1.2rem",
            paddingTop: "6rem",
        },
        title: {
            fontSize: "1.0rem",
        }, 
        subTitle: {
            fontSize: ".8rem",
        }, 
        icon: {
            width: "3rem",
            padding: "10px 5px",
        },
        summaryContainer: {
            flexDirection: "column-reverse",
        },
        rightSummary: {
            position: "static",
            alignSelf: "stretch",
        },
        btn: {
            padding: "1rem 2rem",
            fontSize: "1rem",
        }
    }
}));
const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
const yearArr = [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035];
const Checkout = () => {
    const [state, setState] = useContext(AppContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [email, setEmail] = useState("");
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const top = document.body.getBoundingClientRect().top

    const handleChange = event => {

        setValue(event.target.value);
    };
  

    const [month, setMonth] = React.useState('');
    const [year, setYear] = React.useState('');

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        if (inputLabel.current)
            setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChangeMonth = event => {
        setMonth(event.target.value);
    }

    const handleChangeYear = event => {
        setYear(event.target.value);
    };
    return (
        <div>
            <div className={classes.background}>
                <img src={imgLunchSpecial} className={classes.image}></img>
            </div>
            <main className={classes.main}>
                <div className={classes.menuTitleContainer}>
                    <h1 className={classes.menuTitle}>Checkout</h1>
                </div>

                <div className={classes.summaryContainer}>

                    <div className={classes.leftSummary}>
                        <div className={classes.titleContainer}>
                            <div className={classes.title}>order review</div>
                            <p className={classes.subTitle}>Please review your order and complete the fields below, then choose a payment type and click "Place Your Order".</p>
                        </div>
                        <div className={classes.titleContainer}>
                            <div className={classes.title} >order timing-now</div>
                            <p className={classes.subTitle}>Your order will be ready 15-30 MINUTES after it is placed.</p>
                        </div>
                        <div className={classes.titleContainer}>
                            <div className={classes.title} >Personal Information</div>
                            {/* <FormControl component="fieldset" className={classes.formControl}
                            onSubmit={handleSubmit} 
                             > */}
                            <div className={classes.personalInformationForm}>
                                <TextField required
                                    label="*First Name"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                            </div>
                            <div className={classes.personalInformationForm}>
                                <TextField required
                                    label="*Last Name"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                            </div>
                            <div className={classes.personalInformationForm}>
                                <TextField
                                    label="*Email Address"
                                    type="email"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                            </div>
                            <div className={classes.personalInformationForm}>
                                <TextField
                                    className={classes.phoneNumber}
                                    label="*Phone Number"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                            </div>

                        </div>
                        <div className={classes.titleContainer}>
                            <div className={classes.title} >payment information</div>
                            <div className={classes.balanceDue}>balance due: ${(state.subTotal * 1.0635).toFixed(2)}</div>

                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">payment type</FormLabel>
                                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                    <FormControlLabel value="1" control={<Radio color="primary" />} label="Pay at Store" />
                                    <div className={value === "1" ? classes.showPayAtStore : classes.payAtStore}>
                                        Note: At the store you can pay with cash, credit card, debit card or gift card.
                                    </div>
                                    <FormControlLabel value="2" control={<Radio color="primary" />} label="Pay Now with Debit or Credit Card" />
                                    <div className={value === "2" ? classes.showPayCreditContainer : classes.payCreditContainer}>
                                        <div className={classes.payAtStore}>
                                            This store accepts Visa, Mastercard, AMEX, Discover.
                                        </div>
                                        <div className={classes.creditImage}>
                                            <img className={classes.icon} src={imageVisa}></img>
                                            <img className={classes.icon} src={imageMasterCard}></img>
                                            <img className={classes.icon} src={imageAmx}></img>
                                            <img className={classes.icon} src={imgDiscoverCard}></img>
                                        </div>
                                        {/* <FormControl variant="outlined" className={classes.formControl}> */}
                                        <TextField
                                            className={classes.creditImage}
                                            label=" Card Number"
                                            type="number"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        {/* </FormControl> */}
                                        <div className={classes.creditImage}>
                                            <FormControl variant="outlined" className={classes.formControl}>
                                                <InputLabel ref={inputLabel} >
                                                    Month
                                                </InputLabel>
                                                <Select
                                                    value={month}
                                                    onChange={handleChangeMonth}
                                                    labelWidth={labelWidth}>
                                                    {monthArr.map((x, index) => {
                                                        return (
                                                            <MenuItem value={x} key ={index}
                                                            >{x}</MenuItem>)
                                                    })}
                                                </Select>
                                            </FormControl>
                                            <FormControl variant="outlined" className={classes.formControl}>
                                                <InputLabel ref={inputLabel} >
                                                    Year
                                         </InputLabel>
                                                <Select
                                                    value={year}
                                                    onChange={handleChangeYear}
                                                                    labelWidth={labelWidth}
                                                >
                                                    {yearArr.map((x, index) => {
                                                        return (
                                                            <MenuItem key={index} value={x}>{x}</MenuItem>
                                                        )
                                                    })}
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <TextField
                                                className={classes.creditImage}
                                                label="Security Code"
                                                type="number"
                                                variant="outlined"
                                            />
                                        </FormControl>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <TextField
                                                label="Billing Zip Code"
                                                type="number"
                                                variant="outlined"
                                            />
                                        </FormControl>
                                    </div>
                                    <FormControlLabel value="3" control={<Radio color="primary" />} label="Pay with PayPal" />
                                    <button className={value === "3" ? classes.showPayPalBtn : classes.payPalBtn}>pay with paypal</button>
                                </RadioGroup>
                            </FormControl>

                        </div>
                        <button onClick={(e) => {
                            window.scrollTo(0, 0);
                            setState({
                                ...state, currentIndex: 7, dialogueBoxOpen: false,
                                item: 0, orderItem: [], 
                            })
                        }} className={classes.btn}>Place Order</button>
                    </div>

                    <div className={classes.rightSummary}>
                        <div className={classes.title}>order summary</div>
                        <div className={classes.tableTitle}>
                            <div>Item</div>
                            <div>QTY</div>
                            <div>price</div>
                        </div>
                        <hr className={classes.divider}></hr>
                        {Object.entries(state.orderItem).map((x, index) => {
                            return (
                                <div key ={index} className={classes.orderContainer}>
                                    <div>{MenuCategoryData[x[1].category].items[x[1].subCategory][1]}</div>
                                    <div>{x[1].quantity}</div>
                                    <div>${MenuCategoryData[x[1].category].items[x[1].subCategory][2]}</div>
                                </div>
                            )
                        })}
                        <div className={classes.tax}>
                            <div>taxes:</div>
                            <div></div>
                            <div>${(state.subTotal * 0.0635).toFixed(2)}</div>
                        </div>
                        <hr className={classes.divider}></hr>
                        <div className={classes.tableBottom}>
                            <div>subtotal: </div>
                            <div></div>
                            <div>${(state.subTotal * 1.0635).toFixed(2)}</div>
                        </div>
                        <button onClick={(e) => {
                            window.scrollTo(0, 0);

                            setState({
                                ...state, currentIndex: 5, dialogueBoxOpen: false,
                            })
                        }} className={classes.dialogueButton}>edit order</button>
                    </div>


                </div>
            </main>
        </div >
    )
}
export default Checkout; 