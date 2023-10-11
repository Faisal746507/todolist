const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("Go fuck yourself!");
    } else {
        const liElement = document.createElement('li'); // create a new <li> element
        liElement.innerHTML = inputBox.value;
        listContainer.appendChild(liElement); // append the newly created <li> to container
        let spanElement = document.createElement('span');
        spanElement.innerHTML = "\u00d7";
        liElement.appendChild(spanElement);
    }
    inputBox.value = ""; // clear text from input box after adding task
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
}, false)