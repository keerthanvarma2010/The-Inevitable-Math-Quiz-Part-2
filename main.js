//localStorage.setItem("PlayerUsername1", "");
//localStorage.setItem("PlayerUsername2", "");

function AddUsers() {
    var PlayerUsername1ID = document.getElementById("Username1Input");
    var PlayerUsername2ID = document.getElementById("Username2Input");
    var value1 = "";
    value1 = PlayerUsername1ID.value;
    var value2 = "";
    value2 = PlayerUsername2ID.value;
    localStorage.setItem("PlayerUsername1", "");
    localStorage.setItem("PlayerUsername2", "");
    if(value1 == "")
    {
        document.getElementById("WarningLabel").innerHTML = "Please fill Player1 Username"
    }
    else if(value2 == "")
    {
        document.getElementById("WarningLabel").innerHTML = "Please fill Player2 Username"
    } 
    else if(value1 == value2)
    {
        document.getElementById("WarningLabel").innerHTML = "You Should Fill Username Inputs With Different Usernames"
    } 
    else 
    {
    console.log(value1, value2);
    localStorage.setItem("PlayerUsername1", value1);
    localStorage.setItem("PlayerUsername2", value2);
    window.location = "GamePage.html";
    }
}