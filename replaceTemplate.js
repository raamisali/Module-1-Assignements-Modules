
module.exports = (htmlStr, course)=>{ // fat arrow function or lambda
    let output = htmlStr.replace(/{%CUSTOMERNAME%}/g, course.customerName);
    output = output.replace(/{%PHONENUMBER%}/g, course.phoneNumber);
    output = output.replace(/{%ADDRESS%}/g, course.address);
    output = output.replace(/{%INSTRUCTOR%}/g, course.instructor);
    output = output.replace(/{%CREDITS%}/g, course.credits);
    output = output.replace(/{%DESCRIPTION%}/g, course.description);
    output = output.replace(/{%ID%}/g, course.id);
    output = output.replace(/{%LOANTEMRYEARS%}/g, course.loanTermYears);
    output = output.replace(/{%INTEREST%}/g, course.interest);
    output = output.replace(/{%LOANAMOUNT%}/g, course.loanAmount);
    output = output.replace(/{%MONTLYPAYMENT%}/g, course.monthlyPayment);
    output = output.replace(/{%TOTALAMOUNT%}/g, course.totalAmount);
    return output;
}