window.onload = (event) => {
    formSubmission();
}
function formSubmission(){  
    let inputValue = document.getElementById("num_in").value;
    let textMessage;
    if(inputValue === ""){
        document.getElementById("num_in").innerHTML = "";
    }
    else if(inputValue <= 10){
        textMessage = "❌" + " Invalid input! Must be greater than 10!";
        showPopupWindow(textMessage);
        document.getElementById("num_in").value = null;
    }
    else{
        textMessage = "✅" + " Input accepted!";
        showPopupWindow(textMessage);
        document.getElementById("num_in").value = null;
    }
}

function showPopupWindow(message) {
    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById("result").innerHTML = message;
}

function closePopupWindow() {
    document.getElementById("popupOverlay").style.display = "none";
}