var cel = true;

document.getElementById("burbank").addEventListener("click", cityClick);
document.getElementById("chicago").addEventListener("click", cityClick);
document.getElementById("dallas").addEventListener("click", cityClick);

document.querySelector(".cookie-button").addEventListener("click", acceptClick);

document.querySelector("#temp-select").addEventListener("change", tempChange);

function cityClick() {
    alert("The city " + this.id + " was clicked.");
}

function acceptClick() {
    this.parentNode.remove();
}

function tempChange() {
    //alert("changed" + this.value);
    //var astring = "";
    //astring += this.value;

    if (this.value == "far") {
        //convert to celsius
        document.querySelectorAll(".degree").forEach(item => {
            //astring += item.innerText + " ";
            let c = parseInt(item.innerText, 10);
            let f = ((9 * c) + (32 * 5)) / 5;
            f = Math.round(f);
            item.innerText = f;
        })
    } else {
        //convert to fahrenheit
        document.querySelectorAll(".degree").forEach(item => {
            //astring += item.innerText + " ";
            let f = parseInt(item.innerHTML, 10);
            let c = (5 / 9) * (f - 32);
            c = Math.round(c);
            item.innerText = c;
        })
    }
    //alert(astring);
}
// if (this.value == far) {
//     //convert to celsius
//     document.querySelectorAll(".degree").forEach(item => {
//         astring += item.innerText + " ";
//         item.innerText = (item.innerText - 32) * 5 / 9;
//     })
// } else {
//     //convert to fahrenheit
//     document.querySelectorAll(".degree").forEach(item => {
//         item.innerText = (item.innerText * 9 / 5) + 32;
//     })
// }