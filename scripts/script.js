console.log("Script loaded!");


function moveTheThing(){
    var theThing = document.getElementById("theThing");
    var rightBlock = document.getElementById("rightBlock");
    var leftBlock = document.getElementById("leftBlock");

    if (leftBlock.contains(theThing)) {
        rightBlock.appendChild(theThing);
    }else{
        leftBlock.appendChild(theThing);
    }
}

function styleTheText(){
    var fancyText = document.getElementById("fancyText");
    fancyText.style.fontSize = "24px";
    fancyText.style.fontFamily = "Arial, sans-serif";
    fancyText.style.color = "blue";
    fancyText.style.fontWeight = "bold";
    fancyText.style.textDecoration = "underline";
    fancyText.style.backgroundColor = "yellow";
    fancyText.style.padding = "10px";
    fancyText.style.border = "2px solid red";
    fancyText.style.borderRadius = "5px";
    fancyText.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.5)";
    fancyText.style.textAlign = "center";
    fancyText.style.lineHeight = "1.5";
    fancyText.style.letterSpacing = "2px";
    fancyText.style.textTransform = "uppercase";
    fancyText.style.wordSpacing = "5px";
    fancyText.style.whiteSpace = "pre-wrap";
}

function getFormValues(){
    var firstField = document.getElementById("firstField").value;
    var secondField = document.getElementById("secondField").value;
    var thirdField = document.getElementById("thirdField").value;

    document.getElementById("firstResult").innerText = firstField;
    document.getElementById("secondResult").innerText = secondField;
    document.getElementById("thirdResult").innerText = thirdField;
}

function countTheStuff(){
    var countOfP = document.getElementById("countOfP");
    var countOfH2 = document.getElementById("countOfH2");
    var countOfTD = document.getElementById("countOfTD");

    countOfP.innerText = document.querySelectorAll("p").length;
    countOfH2.innerText = document.querySelectorAll("h2").length;
    countOfTD.innerText = document.querySelectorAll("td").length;
}

function addNewRow(){
    var table = document.getElementById("addRowsTable");
    var newRow = table.insertRow();
    var newCell = newRow.insertCell();

    newCell.innerText = table.rows.length - 1;
}

function yourBonusChallenge(){
    var guessResult = document.getElementById("guessResult");
    var randomNumber = Math.floor(Math.random() * 10) + 1;

    guessResult.innerText = randomNumber;
}