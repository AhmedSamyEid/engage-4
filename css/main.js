window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
    } else {
    navbar.classList.remove("scrolled");
    }
});

window.addEventListener("scroll", handleScroll);

    function saveToStorage(title, desc) {
    if (localStorage.getItem("data") === null) {
    localStorage.setItem(
    "data",
    JSON.stringify([{ title: title, Description: desc }])
    );
    } else {
    let storedData = JSON.parse(localStorage.getItem("data"));
    storedData.push({ title: title, description: desc });
    localStorage.setItem("data", JSON.stringify(storedData));
    }
    }

    function clearTxt() {
    document.getElementById("id-title").value = "";
    document.getElementById("id-desc").value = "";
    }
function getContent() {
    let title = document.getElementById("id-title");
    let desc = document.getElementById("id-desc");
    localStorage.setItem("title", title.value);
    localStorage.setItem("description", desc.value);
//    clear content;
clearTxt(title, desc);
}

function createTask() {
    getContent();
}

function LocalStorage() {
    localStorage.clear();
    alert("All items have been cleared from localStorage.");
}
document.getElementById("LocalStorage").addEventListener("click", function () {
    if (confirm("Are you sure you want to clear all items?")) {
    clearAll();
    }
});

function clearTxt(title, desc) {
    title.value = "";
    desc.value = "";
}

function clearLocalStorage() {
    localStorage.clear();
}

function viewTask() {
    let taskTitle = localStorage.getItem("title");
    let taskDescription = localStorage.getItem("description");

    let prevTitle = document.getElementById("prev-title");
    let prevDesc = document.getElementById("prev-desc");

    sppiner - loader

    // show content
    prevTitle.innerHTML = taskTitle;
    prevDesc.innerHTML = taskDescription;
}
