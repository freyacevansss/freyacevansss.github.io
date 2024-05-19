const myHeading = document.querySelector("p");
console.log(myHeading);
// console.log(myHeading.textContent);
// myHeading.textContent = "new paragraph";
// myHeading.style.backgroundColor = "limegreen";

// myHeading[0].style.backgroundColor = "limegreen";
// myHeading[1].style.backgroundColor = "limegreen";
// myHeading[2].style.backgroundColor = "limegreen";

// for (let i = 0; i < 3; i++)
// {
//     myHeading[i].textContent = "new" = i;
//     myHeading[i].style.backgroundColor = "limegreen";

// }
// myHeading.forEach(changeMe);

// function changeMe(item) {
//     // item.style.backgroundColor = "coral";
//     item.classList.add("purple-box");
// }

const myImage = document.querySelector("#my-image");
console.log(myImage);
myImage.classList.add("round");

const myButton = document.querySelector("#my-button");
console.log(myButton);

myButton.addEventListener("click", toggleMe);
function toggleMe()
{
    const myImage = document.querySelector("#my-image");
    // console.log(myImage);
    console.log(myImage.dataset.catname);
    myImage.classList.toggle("round");
    myButton.textContent = myImage.dataset.catname;
}

function chooseTopic()
{
    const myPara = document.querySelectorAll("p");
    myPara.forEach(displayTopic);
    function displayTopic(item);
    {
        if (item.dataset.topic === "game")
        {
            (item.dataset.topic === "game")            }     }
    }
}