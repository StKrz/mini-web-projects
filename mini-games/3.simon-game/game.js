const buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userClickedPattern = []

function nextSequence() {
    userClickedPattern = []

    level++

    let randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100)

    playSound(randomChosenColor)

    $("#level-title").text("Level " + level)
}

let numberOfButtons = $(".btn").length

$(".btn").click(function() { 

    let userChosenColor = $(this).attr("id")
    userClickedPattern.push(userChosenColor)
    
    playSound(userChosenColor)

    animatePress(userChosenColor)

    checkAnswer(userClickedPattern.length-1)
})


function playSound(name) {

    let audio = new Audio('sounds/' + name + '.mp3')
    audio.play()

}

function animatePress(currentColor) {
    
    $("#" + currentColor).addClass("pressed")

    setTimeout(function() {
        $(".btn").removeClass("pressed")
    }, 100)
}

let started = false

let level = 0

$(document).keypress(function() {

    if (!started) {
        $("#level-title").text("Level " + level)
        nextSequence();
        started = true
    }
});

function checkAnswer(currentLevel) {
    
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        if(gamePattern.length === userClickedPattern.length) {
            setTimeout(function() {
                nextSequence()
            },1000)
        }

    } else {

        playSound("wrong")

        $("body").addClass("game-over")

        setTimeout(function() {
        
            $("body").removeClass("game-over")
        
        }, 200)

        $("#level-title").text("Game Over, Press Any Key to Restart")
            
        startOver()
    }
}
    
function startOver() {
        level = 0
        gamePattern = []
        started = false
}