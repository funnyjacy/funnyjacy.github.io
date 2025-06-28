// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World";
// document.querySelector("html").addEventListener("click", function () {
//   alert("别戳我，我怕疼！");
// });
// document.querySelector('html').addEventListener("click", function(){
//     alert('别戳我，我怕疼！');
// })
// document.querySelector('html').addEventListener("click", ()=>{
//     alert('别戳我，我怕疼！');
// })

// const myImage = document.querySelector("img");

// myImage.onclick = () => {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/firefox-icon.png") {
//     myImage.setAttribute("src", "images/firefox2.png");
//   } else {
//     myImage.setAttribute("src", "images/firefox-icon.png");
//   }
// };

const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    // alert("文件的位置是:" + mySrc);
    if (mySrc == "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/lover.jpg");
    }
    else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1")

// function setUserName() {
//   const myName = prompt("Please enter your name.");
//   localStorage.setItem("name", myName);
//   myHeading.textContent = `Mozilla is cool, ${myName}`;
// }

function setUserName() {
    const myName = prompt("Please enter your name.")
    if (!myName) {
        setUserName()
    }
    else {
        localStorage.setItem("name", myName)
        myHeading.textContent = `Mozilla is cool, ${myName}`
    }

}

// if (!localStorage.getItem("name")) {
//   setUserName();
// } else {
//   const storedName = localStorage.getItem("name");
//   myHeading.textContent = `Mozilla is cool, ${storedName}`;
// }


if (!localStorage) {
    setUserName();
}
else {
    const storedName = localStorage.getItem(name);
    myHeading.textContent = `Mozilla is cool, ${storedName}`
}

myButton = document.querySelector("button")
myButton.onclick = () => {
    setUserName()
}