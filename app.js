let count = 0;

const operation = document.querySelectorAll(".opn");
const value = document.getElementById("value");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const icons = document.querySelectorAll(".icon");
const bodyElement = document.body;
const counterScreen = document.getElementById("counterScreen");
const infoScreen = document.getElementById("infoScreen");
const infoContent = document.querySelector(".info-content")
const settingContent = document.querySelector(".setting-content")
const refreshContent = document.querySelector(".refresh-content");
const closeInfo = document.getElementById("closeInfo");
const closeSetting = document.getElementById("closeSetting");
const closeRefresh = document.getElementById("closeRefresh");
const lightValue = document.getElementById("lightValue");
const darkValue = document.getElementById("darkValue");
const yesValue = document.getElementById("yesValue");
const noValue = document.getElementById("noValue");
const buy = document.getElementById("buy");
const paymentOverlay = document.querySelector(".payment-overlay");
const myName = document.getElementById("name");
const paymentBox = document.querySelector(".payment-box");
const closePayment = document.getElementById("closePayment");
const backBtn = document.getElementById("backBtn");
const upiMode = document.getElementById("upiMode");
const cardMode = document.getElementById("cardMode");
const netMode = document.getElementById("netMode");




operation.forEach((opn) =>{
    opn.addEventListener("click", () =>{
        const sign = opn.getAttribute("id")
        changeValue(sign);
    })
})

const changeValue = (sign) =>{
    if(sign === "plusBtn") {
        count++;
        value.innerText = count;
        if(count > 0){
            minusBtn.style.visibility = "visible";
        }else {
            minusBtn.style.visibility = "hidden";   
        }
    }else if(sign === "minusBtn"){
        count--;
        value.innerText = count;
        if(count > 0){
            minusBtn.style.visibility = "visible";
        }else {
            minusBtn.style.visibility = "hidden";   
        }
    }
}

icons.forEach((icon) => {
    icon.addEventListener("click" , () => {
        const iconId = icon.getAttribute("id");
        iconFun(iconId);
    })
})

const iconFun = (iconId) =>{
    if(iconId === "refresh"){
        bodyElement.style.visibility = "hidden";
        minusBtn.style.visibility = "hidden"
        refreshContent.style.visibility = "visible";

            yesValue.addEventListener("click" , () => {
                count = 0;
                refreshContent.style.visibility = "hidden";
                bodyElement.style.visibility = "visible";
                value.innerText = count;
                minusBtn.style.visibility = "hidden";
            })

            noValue.addEventListener("click" , () => {
                refreshContent.style.visibility = "hidden";
                bodyElement.style.visibility = "visible";
                if(count > 0) {
                    minusBtn.style.visibility = "visible";
                }
                else{
                     minusBtn.style.visibility = "hidden";
                }
               
            })

            closeRefresh.addEventListener("click" , () => {
                refreshContent.style.visibility = "hidden";
                bodyElement.style.visibility = "visible";
                if(count > 0) {
                    minusBtn.style.visibility = "visible";
                }
                else{
                    minusBtn.style.visibility = "hidden";
                }
            })
    }

    else if(iconId === "info"){
        bodyElement.style.visibility = "hidden";
        minusBtn.style.visibility = "hidden"
        infoContent.style.visibility = "visible";

            closeInfo.addEventListener("click" , () =>{
                infoContent.style.visibility = "hidden";
                bodyElement.style.visibility = "visible";
                if(count > 0) {
                    minusBtn.style.visibility = "visible";
                }
                else {
                    minusBtn.style.visibility = "hidden";
                }
            })

            buy.addEventListener("click" , () =>{
                infoContent.style.visibility = "hidden";
                 minusBtn.style.visibility = "hidden"
                paymentOverlay.style.visibility = "visible";

                if(bodyElement.style.backgroundColor === "white") {
                    paymentBox.style.border = "4px solid black";
                    paymentBox.style.color = "black";
                }
                else if(bodyElement.style.backgroundColor === "black") {
                    paymentBox.style.border = "4px solid white";
                    paymentBox.style.color = "white";
                }

                closePayment.addEventListener("click" , () => {
                paymentOverlay.style.visibility = "hidden";
                bodyElement.style.visibility = "visible";
                if(count > 0) {
                    minusBtn.style.visibility = "visible";
                }
                else{
                    minusBtn.style.visibility = "hidden";
                }
             })

             backBtn.addEventListener("click" , () => {
                paymentOverlay.style.visibility = "hidden";
                infoContent.style.visibility = "visible";
             })

             upiMode.addEventListener("click" , () => {
                alert("you have selected UPI mode.. presently this option is unavailable");
             })
               
              cardMode.addEventListener("click" , () => {
                alert("you have selected Card mode.. presently this option is unavailable");
             })

              netMode.addEventListener("click" , () => {
                alert("you have selected Net Banking mode.. presently this option is unavailable");
             })
            })
    }

    else if(iconId === "setting"){
        bodyElement.style.visibility = "hidden";
         minusBtn.style.visibility = "hidden"
        settingContent.style.visibility = "visible";

            lightValue.addEventListener("click" ,() =>{
                bodyElement.style.backgroundColor = "white";
                value.style.color = "black";
                settingContent.style.visibility = "hidden";
                bodyElement.style.visibility = "visible";
                 if(count > 0) {
                    minusBtn.style.visibility = "visible";
                }
                else{
                    minusBtn.style.visibility = "hidden";
                }
                infoScreen.style.color = "black";
                paymentBox.style.border = "4px solid black";
                paymentBox.style.color = "white";
            })

            darkValue.addEventListener("click" ,() =>{
                bodyElement.style.backgroundColor = "black";
                value.style.color = "white";
                settingContent.style.visibility = "hidden";
                bodyElement.style.visibility = "visible";
                if(count > 0) {
                    minusBtn.style.visibility = "visible";
                }
                else{
                    minusBtn.style.visibility = "hidden";
                }
                infoScreen.style.color = "white";
            })

             closeSetting.addEventListener("click" , () =>{
                settingContent.style.visibility = "hidden";
                bodyElement.style.visibility = "visible";
                if(count > 0) {
                    minusBtn.style.visibility = "visible";
                }
                else {
                    minusBtn.style.visibility = "hidden";
                }
            })
    }
}




