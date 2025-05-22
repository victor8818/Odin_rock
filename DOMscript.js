// the JavaScript file
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   alert("Hello World");
// });

// function alertFunction() {
//   alert("YAY! YOU DID IT!");
// }
// btn.addEventListener("click", alertFunction);

function alertFunction() {
  alert("hello world");
}

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content";

container.appendChild(content);
content.setAttribute("style", "color:red");

const firstPara = document.createElement("p");
firstPara.textContent = "Hey I'm Red";
firstPara.setAttribute("style", "color:red");
container.appendChild(firstPara);

const blueH = document.createElement("h3");
blueH.textContent = "I'm a blue H3";
blueH.setAttribute("style", "color:blue");
firstPara.appendChild(blueH);

const helloContent = document.createElement("div");
helloContent.setAttribute("id", "hellocontent");
helloContent.setAttribute(
  "style",
  "background-color:pink;border-color:black;border:5px"
);
container.appendChild(helloContent);

const newh1 = document.createElement("h1");
const newp = document.createElement("p");
newh1.textContent = "I'm in a div";
newp.textContent = "me too";
newp.setAttribute("style", "text-transform:Capitalize");
helloContent.appendChild(newp);
helloContent.appendChild(newh1);

const btn = document.querySelector("#btn");
btn.addEventListener("click", alertFunction);
