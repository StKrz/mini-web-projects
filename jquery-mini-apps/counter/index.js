const   DEFAULT = 0
let counter = DEFAULT

$('document').ready(function() {
    const btnDecr = $('#btnDecr')
    const btnReset = $('#btnReset')
    const btnIncr = $('#btnIncr')

    btnDecr.on('click', () => onDecreaseClicked())
    btnReset.on('click', () => onResetClicked())
    btnIncr.on('click', () => onIncreaseClicked())
})

/**
 * Actions taken after 'Decrease' button was clicked.
 * Actions include decreasing the counter
 */
function onDecreaseClicked () {
    decreaseCounter()
}
 
/**
 * Actions taken after 'Reset' button was clicked.
 * Actions include reseting the counter
 */
function onResetClicked () {
    resetCounter()
}
 
/**
 * Actions taken after 'Increase' button was clicked.
 * Actions include increasing the counter
 */
function onIncreaseClicked () {
    increaseCounter()
}
 
function decreaseCounter() {
    counter--
    showCounter()
}
 
function resetCounter() {
    counter = DEFAULT
    showCounter()
}
 
function increaseCounter() {
    counter++
    showCounter()
}

function showCounter() {
    const counterDOM = $('#counter')
    counterDOM.html(counter)
    styleCounter(counterDOM)
}

/**
 * Assigns counter to the corresponding UI Element.
 * And gives styling accordingly.
 */
function styleCounter(counterDOM) {
    counterDOM.removeClass('color-green color-black color-red'); // Remove all color classes first
  
    if (counter > 0) {
      counterDOM.addClass('color-green');
    } else if (counter === 0) {
      counterDOM.addClass('color-black');
    } else {
      counterDOM.addClass('color-red');
    }
  }
