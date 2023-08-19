function calExpence() {
    // main input salary 
    const inputSalary = document.getElementById("salary").value;
    const userSalary = parseFloat(inputSalary);

    // calculate total cost 
    const food = document.getElementById("food").value;
    const foodCost = parseFloat(food);

    const rent = document.getElementById("rent").value;
    const rentCost = parseFloat(rent);

    const cloths = document.getElementById("cloths").value;
    const clothsCost = parseFloat(cloths);

    const totalCost = foodCost + rentCost + clothsCost;

    const totalBalace = inputSalary - totalCost;

    // print final value 
    const finalCost = document.getElementById("totalExpenses");
    finalCost.innerHTML = totalCost;

    const finalBalance = document.getElementById("totalBlance");
    finalBalance.innerHTML = totalBalace;
    return totalBalace;
}

// print total cost 
let calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", function() {
    calExpence()
})




// saving area 
function calculateSave(totalBalance) {
    const saveInt = document.getElementById('saveingInt').value;
    const finalSave = parseInt(saveInt);

    const saving = (totalBalance / 100) * finalSave;
    console.log(saving);

    const saveing = document.getElementById("saveResult");
    saveing.innerHTML = saving;


    const result = document.getElementById("gantFinal");
    const resultFinal = totalBalance - saving;
    result.innerHTML = resultFinal;

}

const saveBtn = document.getElementById('saveingBtn');
saveBtn.addEventListener('click', function() {
    calculateSave(calExpence());
})