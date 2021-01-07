function calculation1(value) {
    const downPayment = document.querySelector('#down1').value;
    const amount = 120000000 - downPayment;
    console.log(amount);
    const repayMonths = document.querySelector('#year1').value * 12;
    console.log(repayMonths);
    const interest = (value / 100)
    const interestTotal = (interest * amount) / repayMonths;
    const repay = ((amount / repayMonths) + interestTotal).toFixed(2);
    console.log(repay);
    document.querySelector('#payment').innerHTML = repay + ' บาทต่อเดือน';

}

function calculation2(value) {
    const downPayment = document.querySelector('#down2').value;
    const amount = 40000000 - downPayment;
    console.log(amount);
    const repayMonths = document.querySelector('#year2').value * 12;
    console.log(repayMonths);
    const interest = (value / 100)
    const interestTotal = (interest * amount) / repayMonths;
    const repay = ((amount / repayMonths) + interestTotal).toFixed(2);
    console.log(repay);
    document.querySelector('#payment2').innerHTML = repay + ' บาทต่อเดือน';

}

function calculation3(value) {
    const downPayment = document.querySelector('#down3').value;
    const amount = 6700000 - downPayment;
    console.log(amount);
    const repayMonths = document.querySelector('#year3').value * 12;
    console.log(repayMonths);
    const interest = (value / 100)
    const interestTotal = (interest * amount) / repayMonths;
    const repay = ((amount / repayMonths) + interestTotal).toFixed(2);
    console.log(repay);
    document.querySelector('#payment3').innerHTML = repay + ' บาทต่อเดือน';

}

function calculation4(value) {
    const downPayment = document.querySelector('#down4').value;
    const amount = 4500000 - downPayment;
    console.log(amount);
    const repayMonths = document.querySelector('#year4').value * 12;
    console.log(repayMonths);
    const interest = (value / 100)
    const interestTotal = (interest * amount) / repayMonths;
    const repay = ((amount / repayMonths) + interestTotal).toFixed(2);
    console.log(repay);
    document.querySelector('#payment4').innerHTML = repay + ' บาทต่อเดือน';

}

function calculation5(value) {
    const downPayment = document.querySelector('#down5').value;
    const amount = 9400000 - downPayment;
    console.log(amount);
    const repayMonths = document.querySelector('#year5').value * 12;
    console.log(repayMonths);
    const interest = (value / 100)
    const interestTotal = (interest * amount) / repayMonths;
    const repay = ((amount / repayMonths) + interestTotal).toFixed(2);
    console.log(repay);
    document.querySelector('#payment5').innerHTML = repay + ' บาทต่อเดือน';

}
function calculation6(value) {
    const downPayment = document.querySelector('#down6').value;
    const amount = 4400000 - downPayment;
    console.log(amount);
    const repayMonths = document.querySelector('#year6').value * 12;
    console.log(repayMonths);
    const interest = (value / 100)
    const interestTotal = (interest * amount) / repayMonths;
    const repay = ((amount / repayMonths) + interestTotal).toFixed(2);
    console.log(repay);
    document.querySelector('#payment6').innerHTML = repay + ' บาทต่อเดือน';

}