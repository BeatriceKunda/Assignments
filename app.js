// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");

for (var i = 0; i < myNodelist.length; i++) {
    var closeSpan = document.createElement("SPAN");
    var checkSpan = document.createElement("SPAN");
    var closeTxt = document.createTextNode("\u274c"); // cross mark emoji
    var checkTxt = document.createTextNode("\u2705"); // check mark emoji
    closeSpan.className = "cross-mark";
    checkSpan.className = "check-mark";
    closeSpan.appendChild(closeTxt);
    checkSpan.appendChild(checkTxt);
    myNodelist[i].appendChild(closeSpan);
    myNodelist[i].appendChild(checkSpan);
}

// Click on a close button to hide the current list item
var elementsToClose = document.getElementsByClassName("cross-mark");

for (var i = 0; i < elementsToClose.length; i++) {
    elementsToClose[i].onclick = function () {
        var list = this.parentElement; // 'this' here refers to the current span within the for-loop
        list.style.display = "none"; // hide the list to which spansWithClassClose[i] belongs
    };
}

// check items off the list
var checkMarks = document.getElementsByClassName("check-mark");

for (var i = 0; i < checkMarks.length; ++i) {
    checkMarks[i].addEventListener("click", function () {
        // Using an if statement to check the parent element (LIST) has a class called checked
        if (this.parentElement.classList.contains("checked")) {
            // remove it (toggle it)
            this.parentElement.classList.remove("checked");
        } else {
            // if it doesn't have it, add it (toggle)
            this.parentElement.classList.add("checked");
        }
    });
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");

    // Give it a bootstrap 'list-group-item' class so that is appears nice like the rest
    li.className = "list-group-item";

    var inputValue = document.getElementById("inputtext").value;
    // capture the text sent in the input text-box

    var t = document.createTextNode(inputValue);
    // create a text node to later append

    li.appendChild(t);
    // append the text node to the list element <li> "input value" </li>

    // BASIC ERROR HANDLING
    if (inputValue === "") {
        // If you simply submit nothing, Alert the user to prompt them to type something before submission
        alert("You must write something!");
    } else {
        // Otherwise if you have typed something in the input box (valid input)
        document.getElementById("myUL").appendChild(li);
    }

    // clearing the text-field and reset it
    document.getElementById("inputtext").value = "";

    // add check-mark and cross-mark
    for (var i = 0; i < myNodelist.length; i++) {
        var closeSpan = document.createElement("SPAN");
        var checkSpan = document.createElement("SPAN");
        var closeTxt = document.createTextNode("\u274c"); // cross mark emoji
        var checkTxt = document.createTextNode("\u2705"); // check mark emoji
        closeSpan.className = "cross-mark";
        checkSpan.className = "check-mark";
        closeSpan.appendChild(closeTxt);
        checkSpan.appendChild(checkTxt);
        myNodelist[i].appendChild(closeSpan);
        myNodelist[i].appendChild(checkSpan);
    }

    // Delete items off the list
    for (var i = 0; i < elementsToClose.length; i++) {
        elementsToClose[i].onclick = function () {
            var list = this.parentElement;
            list.style.display = "none"; // hide the list to which spansWithClassClose[i] belongs
        };
    }

    // checking items off the list
    for (var i = 0; i < checkMarks.length; ++i) {
        checkMarks[i].addEventListener("click", function () {
            // Using an if statement to check the parent element (LIST) has a class called checked
            if (this.parentElement.classList.contains("checked")) {
                // remove it (toggle it)
                this.parentElement.classList.remove("checked");
            } else {
                // if it doesn't have it, add it (toggle)
                this.parentElement.classList.add("checked");
            }
        });
    }
}