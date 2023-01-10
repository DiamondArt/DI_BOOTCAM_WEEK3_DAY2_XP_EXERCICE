/***********************************************************************************
 * Exercise XP : 
 * ---------------------------------------------------------------------------------
 * @author Melissa Kouadio <angemelisk@gmail.com>
 * @description : Resolve all xp exercice,
 * **********************************************************************************/ 

let article = document.querySelector('article');
let h1 = article.querySelector('h1');

/***************************************************************************************
 * EXERCICE I
 ***************************************************************************************/
article.removeChild(article.getElementsByTagName('p')[3]) //remove the last paragraph in the <article> tag
article.getElementsByTagName('p')[1].addEventListener('mouseover',function(){
    this.style.opacity = '0.5'; //hover on the 2nd paragraph, it should fade out 
});
article.getElementsByTagName('p')[1].addEventListener('mouseout',function(){
    this.style.opacity = '1'; 
});


article.querySelector('h2').addEventListener('click',function() {
    this.style = "background: red" //change the background color of the h2 to red, when it’s clicked on
});

article.querySelector('h2').addEventListener('mouseover',function() {
    const size = Math.floor(Math.random() * 100); //hover on the h1, set the font size to a random pixel size between 0 to 100
    this.style.fontSize = `${size}px`;
});


article.querySelector('h3').addEventListener('click',function() {
    this.style = "display: none" // Add an event listener which will hide the h3 when it’s clicked
});

// Add a <button> to the HTML file, that when clicked on,
// should make the text of all the paragraphs, bold.
let btnBold = document.createElement('button');
btnBold.appendChild(document.createTextNode("Click to make all text bold"));
btnBold.setAttribute('name','btnBold');
article.appendChild(btnBold);
btnBold.addEventListener('click',function(){
    article.style = 'font-weight:bold';
})

/***************************************************************************************
 * EXERCICE II: Work With Forms
 ***************************************************************************************/
let form = document.forms[0]; 
console.log(form); //Retrieve the form and console.log it.

Array.from(form.elements).forEach((input) => {
    console.log(input); //retrieve the inputs by their name attribute and console.log them
});

// Add submit event listener
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
form.addEventListener('submit', function(e){
    e.preventDefault()
    let response = document.getElementsByClassName('usersAnswer')[0]
    let errMsg = form.querySelector("span#error")
    errMsg.setAttribute('id','error')

    try{
        Array.from(form.elements).forEach((input) => {
            if(input.type !== 'submit'){
                if(input.value.trim() == ""){
                    throw `one of item has empty value`
                }else{
                    let li = document.createElement('li')
                    li.appendChild(document.createTextNode(`${input.value}`))
                    response.appendChild(li)
                    console.log(input.value)
                }
            }
        });
    } catch(err) {
        errMsg.innerHTML = err
        errMsg.style.color = 'red'
        console.log(err);
      }
});
/***************************************************************************************
 * EXERCICE III: Transform tag style
 ***************************************************************************************/
let allBoldItems 
(function getBold_items(){
    allBoldItems = document.querySelectorAll('strong') // get all tag has bolder style 
}())

/******************************************************************************
 * @function highlight
 * @description: change text color to blue
 * @param {e}
 * @returns {void}
 ******************************************************************************/
function highlight(e) { 
    e.target.style.color = "blue"
}

/******************************************************************************
 * @function return_normal
 * @description: change text color to black
 * @param {e}
 * @returns {void}
 ******************************************************************************/
function return_normal(e) {
    e.target.style.color = "black"
}

for (let tag = 0; tag < allBoldItems.length; tag++) { // add new style for tag
    console.log(allBoldItems[tag])
    allBoldItems[tag].addEventListener('mouveover',highlight)
    allBoldItems[tag].addEventListener('mouseout', return_normal)
}

/***************************************************************************************
 * EXERCICE IV: Volume Of A Sphere
 ***************************************************************************************/
 (() => {
    let calculForm  = document.getElementById("MyForm");
    calculForm.addEventListener('submit', function(event){
        event.preventDefault()
        try { 

            let radiusVal = calculForm.radius.value;
            if (radiusVal.trim() == "")  throw "is empty";
            if (isNaN(radiusVal)) throw "is not a number";

            radiusVal = parseInt(radiusVal)
            let volume = Math.round(4 * Math.PI * Math.pow(radiusVal,3))
            calculForm.volume.value = volume
            console.log(volume);
        }
        catch(err) {
            console.log(err)
        }
    })
})()

/***************************************************************************************
 * EXERCICE V: Event Listeners
 ***************************************************************************************/
 let btn = document.getElementById('testevent');
 btn.style = "height: 60px; width: 200px; border: none; background: black; color:white";

 btn.addEventListener('mouseover',function(e){ // add mouseover event to button
    console.log(e.clientY);
    console.log(e.clientX);
    console.log(e.movementX);
    console.log(e.movementY);
    this.style= "height: 60px; width: 200px; border: none; background: green; color:white"
 })

 btn.addEventListener('mouseout',function(e) { // add mouseout event to button
    this.style= "height: 60px; width: 200px; border: none; background: black; color:white"
 })

 btn.addEventListener('click',function(e) { // add click event to button
    console.log(e.clientY);
    console.log(e.clientX);
    console.log(e.movementX);
    console.log(e.movementY);
    this.style= "height: 60px; width: 200px; border: none; background: blue; color:white; border-radius: 50px"
 })

