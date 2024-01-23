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