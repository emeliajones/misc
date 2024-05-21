function calculation(){
    var compNum = parseFloat(document.getElementById('compNum').value);
    console.log("Competition Team Members: " + compNum);
    var classNum = parseFloat(document.getElementById('classNum').value);
    console.log("Class Team Members: " + classNum);
    var compAmount = parseFloat(document.getElementById('compAmount').value);
    console.log("Competition Team Dues Amount: " + compAmount);
    var classAmount = parseFloat(document.getElementById('classAmount').value);
    console.log("Class Team Dues Amount: " + classAmount);

    var compTotal = compNum * compAmount; 
    var classTotal = classNum * classAmount;
    var grandTotal = compTotal + classTotal;

    document.getElementById('answer').innerHTML += `
    
    <h3>Grand Total: $${grandTotal}</h3>
    <ul>
    <li>Competition Team Dues: $${compAmount}</li>
    <li>Competition Team Members: ${compNum}</li>
    <li>Competition Team Total: $${compTotal}</li>
    <li>Class Team Dues: $${classAmount}</li>
    <li>Class Team Members: ${classNum}</li>
    <li>Class Team Total: $${classTotal}</li>
    </ul>
    </br>`;
}

document.getElementById('calculate').addEventListener('click', calculation);