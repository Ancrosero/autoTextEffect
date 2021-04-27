const textEl = document.getElementById('text')
const text = 'when the pawn hits the conflicts he thinks like a king'
let textIndex = 1

// setInterval(writeText, 100)


setInterval(() => {
	writeText();
}, 100);


function writeText(){
    textEl.innerHTML = text.slice(0, textIndex)
    textIndex++

    if(textIndex > text.length){
        textIndex = 1
    }
}