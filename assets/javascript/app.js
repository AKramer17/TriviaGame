$(document).ready(function () {

    $("#btnReset").hide();
    $("correctGif").hide();
    $("wrongGif").hide();


    // var choice1 = document.getElementById("#first");
    // var choice2 = document.getElementById("#second");
    // var choice3 = document.getElementById("#third");
    // var choice4 = document.getElementById("#fourth");
    var playerChoice;
    var question;
    var answer;
    // var theQuestions = document.getElementById("#question");
    // var gameTimer = document.getElementById("#timer");
    var numCorrect = 0;
    var numWrong = 0;
    var numUnanswered = 0;
    var timerOn = false;
    gameTimer = 10;
    var numQuestions;
    var placeholder;
    usedQuestions = [];
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
            choice3 = "That One Guy From Allstate",
            choice4 = "Just Whoever Was In Charge Of That Decision",
            // choices: ["The Gorilla's Keeper", "The Lions", "That One Guy From Allstate", "Just The People Who Are In Charge Of That Decision"],
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

    //#8ac13e lime green background color

    function stopGame() {
        timerOn = false;
        clearInterval(placeholder);
    }

    function showQuestion() {
        var i = Math.floor(Math.random() * 4);
        $("#question").html(theQuestions[i].question);
    }

    $("#first").click(function() {
        playerChoice = choice1;
        if (playerChoice === answer) {
            setTimeout($("#correctGif").show(), 2000);
        } else {
            setTimeout($("#wrongGif").show(), 1300);
        }
    });

    $("#second").click(function() {
        playerChoice = choice2;
        if (playerChoice === answer) {
            setTimeout($("#correctGif").show(), 2000);
        } else {
            $("#wrongGif").show();
        }
    });

    $("#third").click(function() {
        playerChoice = choice3;
        if (playerChoice === answer) {
            setTimeout($("#correctGif").show(), 2000);
        } else {
            $("#wrongGif").show();
        }
    });

    $("#fourth").click(function() {
        playerChoice = choice4;
        if (playerChoice === answer) {
            setTimeout($("#correctGif").show(), 2000);
        } else {
            $("#wrongGif").show();
        }
    });

        $("#btnStart").on("click", function() {
            $("#btnStart").hide();
            showQuestions();
            runTimer();
            for (var i = 0; i < questions.length; i++) {
              qholder.push(questions[i]);
            }
          });

    $("#btnStart").on("click", function () {

    });

    function decrement() {
        $("#timer").html("<h4>Time remaining: <strong>" + gameTimer + " sec.</strong></h4>");
        gameTimer--;
        if (gameTimer === 0) {
            numUnanswered++;
            setTimeout(function() {
                $("#question").html(
                  "<p>Out of time! The answer is: " + answer + "</p>"
                    // pick.option[pick.answer] +
                    // "</p>"
                );
                $("#timer").hide();
                stop();
                $(".playerChoice").hide();
                $("#timeup").show();
                finish();
              }, 3000);
            }
          }

        function runTimer() {
            if (!timerOn) {
                timerOn = true;
                placeholder = setInterval(decrement, 1000);
            }
        }

    });