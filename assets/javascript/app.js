$(document).ready(function () {




    var choice1 = document.getElementById("#first");
    var choice2 = document.getElementById("#second");
    var choice3 = document.getElementById("#third");
    var choice4 = document.getElementById("#fourth");
    var question;
    var answer;
    var theQuestions = document.getElementById("#question");
    // var gameTimer = document.getElementById("#timer");
    var numCorrect = 0;
    var numWrong = 0;
    var numUnanswered = 0;
    gameTimer = 10;
    theQuestions = [
        {
            question = "What kind of pizza did Sethical try to order?",
            choice1 = "Hawaiian Pizza",
            choice2 = "Boneless Pizza",
            choice3 = "White Pizza",
            choice4 = "No Dough Pizza",
            // choices: ["Hawaiian Pizza", "Boneless Pizza", "White Pizza", "No Dough Pizza"],
            answer = choice2
        },
        {
            question = "Who didn't let the gorilla into the ballet?",
            choice1 = "The Gorilla's Keeper",
            choice2 = "The Loins",
            choice3 = "That One Guy From Allstata",
            choice4 = "Just Whoever Was In Charge Of That Decision",
            // choices: ["The Gorilla's Keeper", "The Lions", "That One Guy From Allstate", "Just Whoever Was In Charge Of That Decision"],
            answer = choice4
        },
        {
            question = "Finish This _______",
            choice1 = "Sentence",
            choice2 = "Dinner",
            choice3 = "Book",
            choice4 = "Please",
            // choices: ["Sentence", "Dinner", "Book", "Please"],
            answer = choice2
        },
        {
            question = "Which of the following life forms contain an immortal species?",
            choice1 = "Jellyfish",
            choice2 = "Sheep",
            choice3 = "Dragonflies",
            choice4 = "Shrimp",
            // choices: ["Jellyfish", "Sheep", "Dragonflies", "Shrimp"],
            answer = choice1
        }
    ];

    $("#btnStart").on("click", function () {

    })

    function decrement() {
        $("#timer").html("<h3>Time remaining: " + gameTimer + "</h3>");
        gameTimer--;
        if (gameTimer === 0) {
            numUnanswered++;
        }
    }

        function runTimer() {

        }

    });