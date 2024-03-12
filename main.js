const createCategory = () => {
  let main = document.getElementById("categories");
  let div = document.createElement("div");
  let input = document.createElement("input");
  let data = document.createElement("input");
  data.type = "date";
  let textArea = document.createElement("textArea");

  div.className = "newCategory";
  input.className = "categoryTitle";
  input.placeholder = "Stuff Title";
  data.className = "categoryFinish";
  textArea.className = "categoryContent";

  div.appendChild(input);
  div.appendChild(data);
  div.appendChild(textArea);
  main.appendChild(div);
};

const saveStuff = () => {
  let myStuff = [];
  let tasks = document.getElementsByClassName("newCategory");
  let titles = document.getElementsByClassName("categoryTitle");
  let datas = document.getElementsByClassName("categoryFinish");
  let textA = document.getElementsByClassName("categoryContent");

  for (let i = 0; i < tasks.length; i++) {
    let stuff = {
      title: titles[i].value,
      data: datas[i].value,
      content: textA[i].value,
      finish: false,
    };
    myStuff.push(stuff);
  }
  localStorage.setItem("stuff", JSON.stringify(myStuff));
  console.log(myStuff);
};

const loadStuff = () => {
  let myStuff = JSON.parse(localStorage.getItem("stuff"));
  let main = document.getElementById("categories");
  main.innerHTML = "";
  for (let i = 0; i < myStuff.length; i++) {
    let main = document.getElementById("categories");
    let div = document.createElement("div");
    let input = document.createElement("input");
    let data = document.createElement("input");
    data.type = "date";
    let textArea = document.createElement("textArea");

    div.className = "newCategory";
    input.className = "categoryTitle";
    input.value = myStuff[i].title;
    input.placeholder = "Stuff Title";
    data.className = "categoryFinish";
    data.value = myStuff[i].data;
    textArea.className = "categoryContent";
    textArea.value = myStuff[i].content;

    div.appendChild(input);
    div.appendChild(data);
    div.appendChild(textArea);
    main.appendChild(div);
  }
};

const clearStuff = () => {
  let main = document.getElementById("categories");
  main.innerHTML = "";
};

const deleteStuff = () => {
  let myStuff = JSON.parse(localStorage.getItem("stuff"));
  let name = prompt("What's the name of the stuff?");

  let indexToDelete = myStuff.findIndex((item) => item.title === name);

  if (indexToDelete !== -1) {
    myStuff.splice(indexToDelete, 1); 
    localStorage.setItem("stuff", JSON.stringify(myStuff)); 
    console.log("Item deleted successfully!");
    clearStuff();
    loadStuff();
  } else {
    console.log("Item not found.");
  }
};
