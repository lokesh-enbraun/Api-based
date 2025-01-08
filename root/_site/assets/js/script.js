// let text = "re, green,red, green, gren, gr,blue,yellow";
// let pattern = /(red|green)/g
// console.log(text.match(pattern))

// let str = "Is this all there is? "
// let patternStr = /[h]/g
// console.log(str.match(patternStr))

// let str1 = "Is this all there is? "
// let patternStr1 = /[^h]/g
// console.log(str1.match(patternStr1))

// let num = "123456789"
// let patternNum = /[1-4]/g
// console.log(num.match(patternNum))
// // not include between
// let num1 = "123456789"
// let patternNum1 = /[^1-4]/g
// console.log(num1.match(patternNum1))

// // A global search for any character between h and t:
// const dot = "That's helloat!";
// // let patternDot = /h.....t/g;
// let patternDot = /h.t/g;
// console.log(dot.match(patternDot))

// // A global search for word characters:
// let wordchar = "Give 100% !";
// let patternWordchar = /\w/g
// console.log(wordchar.match(patternWordchar))

// let wordchar1 = "Give 100% !";
// let patternWordchar1 = /\W/g
// console.log(wordchar1.match(patternWordchar1))

// let digit = "Give 100% !";
// let patternDigit = /\d/g
// console.log(digit.match(patternDigit))

// // The \D metacharacter matches non-digit characters.
// let digit1 = "Give 100% !";
// let patternDigit1 = /\D/g
// console.log(digit1.match(patternDigit1))

// let whitespace = "Is this all there is?";
// let patternWhitespace = /\s/g;
// console.log(whitespace.match(patternWhitespace))
// // The \S metacharacter matches non-whitespace characters.
// let whitespace1 = "Is this all there is?";
// let patternWhitespace1 = /\S/g;
// console.log(whitespace1.match(patternWhitespace1))

// // Search for "LO" at the beginning of a word
// let begin = "HELLO, Look at you";
// // let patternBegin = /\bLo/;
// // let patternBegin = /LO\b/;
// let patternBegin = /\BLo/;
// console.log(begin.search(patternBegin))
const dom = document.getElementsByClassName('root')
const root = dom[0];
const sub_root = root.childNodes[1]
const children = sub_root.childNodes[1];
const NoneElement = document.getElementById('none');
const buttonDiv = children.childNodes[1];
const MainButton = buttonDiv.childNodes[1];
const buttons = document.getElementById('captureAndBubble').childNodes;
for(let i=0; i<buttons.length; i++){
    if(i % 2 ===0){
    }
    else{
        switch(i){
            case 1:{
                buttons[1].addEventListener('click',function(){
                    capture();
                })
            };
            break;
            case 3:{
                buttons[3].addEventListener('click',function(){
                    bubble();
                })
            };
            break;
            case 5:{
                buttons[5].addEventListener('click',function(){
                    captureAndBubble();
                });
            };
            break;
            case 7:{
                buttons[7].addEventListener('click',function(){
                    if(NoneElement.classList.value === 'none'){
                        NoneElement.style.display = "block";
                    }else{
                        setTimeout(()=>{
                            NoneElement.style.display = "none";
                        },100000)
                    }
                    bubbleAndcapture();
                });
            }
            default:{
            } 
        }
    }
}
function capture(){
alert("you have selected Caputure")
root.addEventListener('click',()=>{
    alert("Root node");
},true)
sub_root.addEventListener('click',()=>{
    alert("Sub-root node");
},true)
children.addEventListener('click',()=>{
    alert("Children node")
},true)
buttonDiv.addEventListener('click',()=>{
    alert("button node")
},true)
MainButton.addEventListener('click',()=>{
    // alert("Clicked Button")
    console.log("click")
})
setTimeout(()=>{window.location.reload()},10000)
}

function bubble(){
    alert("you have selected Bubble")
    root.addEventListener('click',()=>{
    alert("Root node");
})
sub_root.addEventListener('click',()=>{
    alert("Sub-root node");
})
children.addEventListener('click',()=>{
    alert("Children node");
})
buttonDiv.addEventListener('click',()=>{
    alert("button node")
})
MainButton.addEventListener('click',()=>{
    alert("Clicked Button");
})
setTimeout(()=>{window.location.reload()},10000)
}
function captureAndBubble(){
    alert("you have selected CaptureAndBubbleBoth")
    function logEvent(e) {
        let phase;
        if (e.eventPhase === 1) {
            phase = "Capturing";
        } else if (e.eventPhase === 3) {
            phase = "Bubbling";
        } else if (e.eventPhase === 2) {
            phase = "At Target";
        }
        console.log(`Element: ${this.className}`);
        alert(`Element: ${this.className}`);
    }
    document.querySelectorAll('.root, .sub-root, .children ,.button,.button button').forEach(element => {
        console.log(element)
        element.addEventListener("click", logEvent, true); // Capturing
        element.addEventListener("click", logEvent, false); // Bubbling
    });
    setTimeout(()=>{window.location.reload()},10000)
}



function bubbleAndcapture(){
    alert("you have selected BubbleAndCaptureBoth")
    function logEvent(e) {
        let phase;
        if (e.eventPhase === 1) {
            phase = "Capturing";
        } else if (e.eventPhase === 3) {
            phase = "Bubbling";
        } else if (e.eventPhase === 2) {
            phase = "At Target";
        }
        console.log(`Element: ${this.className}, Phase: ${phase}`);
        alert(`Element: ${this.className}`);
    }
    
    document.querySelectorAll('.root, .sub-root, .children, .button,.button button').forEach(element => {
        // Bubbling phase
        element.addEventListener("click", logEvent, false);
    
        // Capturing phase with a delay to simulate reversed order
        element.addEventListener("click", (e) => {
            setTimeout(() => logEvent.call(element, e), 0);
        }, true);
    });
    setTimeout(()=>{window.location.reload()},10000)
}