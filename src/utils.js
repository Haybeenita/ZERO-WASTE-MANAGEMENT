export const getPrice = (formFilled)=>{
    return (
        formFilled.waste_type =='Organic'? 1000 :
        formFilled.waste_type =='Plastic'? 2000: 
        formFilled.waste_type =='Medical'? 5000:
        formFilled.waste_type =='Industrial'? 10000: ''
    )
},
classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
},sizes = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop: 2560,
};