//Function to calculate and display tip, Total bill, and amount per person
function calculateAndDisplay(){
    //Get the values from the html form
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPpl = parseInt(document.getElementById('numOfPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value

    //Calculate the tip, total bill, and amt per person
    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPers = calcAmtPerPers(totalBill, numOfPpl)

    //Disply the results in the html
    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
    document.getElementById('totalBillResult').innerText = 'Total Bill: $' + totalBill.toFixed(2)
    document.getElementById('amtPerPersonResult').innerText = 'Amount Per Person: $' + amtPerPers.toFixed(2)
}

//Helper funtion to calculate the tip based on bill amount ans service quality
function calculateTip(bill, quality){
    if (quality === 'Great'){
        return bill * .2
    } else if (qualify === 'Good'){
        return bill * .15
    } else {
        return bill * .10
    }
}

//helper function to calculate the total tip by adding the bill and tip
function calculateTotalBill(bill, tip){
    return bill + tip
}

//helper function to calculate the amount each person should pay by dividing the total bill by the number of people
function calcAmtPerPers(totalBill, numOfPpl){
    return totalBill/numOfPpl
}