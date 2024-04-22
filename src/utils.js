export const getPrice = (formFilled)=>{
    return (
        formFilled.waste_type =='Organic'? 1000 :
        formFilled.waste_type =='Plastic'? 2000: 
        formFilled.waste_type =='Medical'? 5000:
        formFilled.waste_type =='Industrial'? 10000: ''
    )
}