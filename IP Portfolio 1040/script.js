// ==========================
// GREETING BASED ON TIME
// ==========================

function showGreeting() {

    let currentTime = new Date();

    let hour = currentTime.getHours();

    let greetingText = "";

    if (hour >= 5 && hour < 12) {

        greetingText = "🌞 Good Morning!";

    }

    else if (hour >= 12 && hour < 17) {

        greetingText = "☀️ Good Afternoon!";

    }

    else if (hour >= 17 && hour < 20) {

        greetingText = "🌇 Good Evening!";

    }

    else {

        greetingText = "🌙 Good Night!";

    }

    document.getElementById("greeting").innerHTML = greetingText;

}



// ==========================
// VISITOR NAME POPUP
// ==========================

function askName() {

    let name = prompt("Welcome! Please enter your name:");

    if (name == "" || name == null) {

        name = "Guest";

    }

    document.getElementById("visitorName").innerHTML = name;

}



// ==========================
// RUN BOTH FUNCTIONS
// ==========================

showGreeting();

askName();
 // =========================
// TYPING ANIMATION
// =========================

const words = [

    "Dreamer",

    "Learner",

    "Believer",
    "Achiever",

    "Failure sometimes"



];

let wordIndex = 0;

let letterIndex = 0;

let currentWord = "";

let currentLetter = "";

function typingAnimation(){

    if(wordIndex == words.length){

        wordIndex = 0;

    }

    currentWord = words[wordIndex];

    currentLetter = currentWord.slice(0, ++letterIndex);

    document.getElementById("typingText").innerHTML = currentLetter;

    if(currentLetter.length == currentWord.length){

        wordIndex++;

        letterIndex = 0;

        setTimeout(typingAnimation,1000);

    }

    else{

        setTimeout(typingAnimation,120);

    }

}

// typingAnimation();
// ==========================
// SCROLL PROGRESS BAR
// ==========================

window.addEventListener("scroll", function(){

    let scrollTop = document.documentElement.scrollTop;

    let scrollHeight = document.documentElement.scrollHeight;

    let clientHeight = document.documentElement.clientHeight;

    let totalHeight = scrollHeight - clientHeight;

    let percentage = (scrollTop / totalHeight) * 100;

    document.getElementById("progressBar").style.width = percentage + "%";

});
// ==========================
// THEME COLOR CHANGER
// ==========================

function changeTheme(color){

    // Buttons

    let warningButtons = document.querySelectorAll(".btn-warning");

    warningButtons.forEach(function(button){

        button.style.backgroundColor = color;

        button.style.borderColor = color;

    });



    // Outline Buttons

    let outlineButtons = document.querySelectorAll(".btn-outline-warning");

    outlineButtons.forEach(function(button){

        button.style.color = color;

        button.style.borderColor = color;

    });



    // Orange Text

    let orangeTexts = document.querySelectorAll(".text-warning");

    orangeTexts.forEach(function(text){

        text.style.color = color;

    });



    // Progress Bars

    let progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach(function(bar){

        bar.style.backgroundColor = color;

    });



    // Greeting

    let greeting = document.getElementById("greeting");

    if(greeting){

        greeting.style.color = color;

    }

}
// ==========================
// CONTACT FORM VALIDATION
// ==========================

document.getElementById("contactForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let message = document.getElementById("message").value.trim();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    document.getElementById("nameError").innerHTML = "";

    document.getElementById("emailError").innerHTML = "";

    document.getElementById("messageError").innerHTML = "";

    let valid = true;

    if(name == ""){

        document.getElementById("nameError").innerHTML = "Please enter your name.";

        valid = false;

    }

    if(email == ""){

        document.getElementById("emailError").innerHTML = "Please enter your email.";

        valid = false;

    }

    else if(!emailPattern.test(email)){

        document.getElementById("emailError").innerHTML = "Please enter a valid email.";

        valid = false;

    }

    if(message == ""){

        document.getElementById("messageError").innerHTML = "Please enter your message.";

        valid = false;

    }

    if(valid){

        alert("✅ Message sent successfully!");

        document.getElementById("contactForm").reset();

    }

});
// ==========================
// VIEW DETAILS POPUP
// ==========================

function showDetails(type){

    let title = "";

    let description = "";

    let list = [];

    if(type == "javascript"){

        title = "JavaScript";

        description =
        "I use JavaScript to create interactive and dynamic websites.";

        list = [
            "DOM Manipulation",
            "Event Handling",
            "Form Validation",
            "Animations",
            "Functions and Conditions"
        ];

    }

    else if(type == "react"){

        title = "React & MongoDB";

        description =
        "I am learning modern frontend development and database technologies.";

        list = [
            "React Components",
            "Frontend Development",
            "MongoDB Basics",
            "Database Concepts",
            "Full-Stack Development"
        ];

    }

    else if(type == "node"){

        title = "Node.js";

        description =
        "I am exploring backend development using Node.js and RESTful APIs.";

        list = [
            "Backend Development",
            "Node.js",
            "REST APIs",
            "Server-Side Programming",
            "API Concepts"
        ];

    }

    else if(type == "social"){

        title = "Social Media";

        description =
        "I enjoy creating engaging digital content and maintaining a professional online presence.";

        list = [
            "Digital Content",
            "Social Media Management",
            "Creative Content",
            "Online Presence",
            "Communication"
        ];

    }

    document.getElementById("detailsTitle").innerHTML = title;

    document.getElementById("detailsDescription").innerHTML = description;


    let listHTML = "";

    for(let i = 0; i < list.length; i++){

        listHTML += "<li>✓ " + list[i] + "</li>";

    }

    document.getElementById("detailsList").innerHTML = listHTML;

    document.getElementById("detailsPopup").style.display = "flex";

}
// ==========================
// CLOSE DETAILS POPUP
// ==========================

function closeDetails(){

    document.getElementById("detailsPopup").style.display = "none";

}
// ==========================
// SCROLL ANIMATION
// ==========================

const skillCards = document.querySelectorAll(".skill-card");

const observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

            entry.target.classList.add("show-card");

        }

    });

}, {

    threshold:0.2

});


skillCards.forEach(function(card){

    observer.observe(card);

});