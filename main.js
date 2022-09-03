var textInput = document.querySelector("#todo-input");
var addButton = document.querySelector("#add-button");
var todoList = document.querySelector("#todo-list");

addButton.addEventListener('click', () => {
    var liElemnt = document.createElement("li");
    var heading = document.createElement("h2");
    var cancelButton = document.createElement("button");

    todoList.prepend(liElemnt);
    liElemnt.appendChild(heading);
    liElemnt.appendChild(cancelButton);
    cancelButton.classList.add('delete-button')
    cancelButton.innerText = "X"
    heading.innerText = textInput.value;
    textInput.value = "";
    cancelButton.addEventListener('click', () => {
        cancelButton.parentNode.remove();
    })
})


