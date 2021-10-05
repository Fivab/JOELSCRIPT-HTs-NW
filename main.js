function enter() {
    inputtext = document.getElementById("inputtext").value;
    if (inputtext == "made") {
        document.getElementById("result").innerHTML = "made by JOEL; Original in Python; Remade by SWASTIK";
    }
    else if (inputtext == "FUNcontrolpoint") {
        document.getElementById("result").innerHTML = "+20 points";
    }
    else if (inputtext == "Install usb virus") {
        document.getElementById("result").innerHTML = "USB Virus successfully Installed. working of USB virus coming soon";
    }
    else if (inputtext == "remove usb") {
        document.getElementById("result").innerHTML = "successfully removed usb";
    }
    else if (inputtext == "restart") {
        location.reload();
    }
    else if (inputtext == "version") {
        document.getElementById("result").innerHTML = "Version: 1.0 Neural Web";
    }
    else if (inputtext == "install hacker") {
        document.getElementById("result").innerHTML = "Alert! Hacker Allowed. Type 62_091 to remove hacker";
    }
    else if (inputtext == "62_091") {
        document.getElementById("result").innerHTML = "hakcer successfully removed";
    }
    else if (inputtext == "install memz") {
        document.getElementById("result").innerHTML = "Memz installed. Type remove memz to remove it";
    }
    else if (inputtext == "remove memz") {
        document.getElementById("result").innerHTML = "successfully removed memz";
    }
}