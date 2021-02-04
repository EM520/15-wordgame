import {commonWords} from './constants'
//console.log(commonWords)

//Create button return its value when clicked on it 



//Choose a random word of 3 or more letters
const randomWordArray = commonWords.filter(item=>item.length>=3)
//console.log(randomWordArray)

//show up the random word generated on the screen and make it blank with underscore

function randomWord() { 
     randomWord= randomWordArray[Math.floor(Math.random() * randomWordArray.length)]
    }
    randomWord()
    //console.log(randomWord)
    
    let hiddenWord = ''
    for (var i = 0; i < randomWord.length; i++) {
      hiddenWord += "_ "
    }
    
    document.querySelector('#randomWord').innerHTML  = hiddenWord
    

//Allow user to guess one letter once
//Get user input info by innerHTML
const buttonLetter = 'abcdefghijkmlnopqrstuvwxyz'.split('')
.map(letter=>`<button id='btn'>${letter}</button>`).join('')
//console.log(buttonLetter)
document.querySelector('#btnList').innerHTML=buttonLetter



//Show up the letter when click button,then check if randomWord includes this letter
//tracking the index of an arr to show up on the dashes


// Set User's life then decrease it when guesse wrong, if right guesses no change
let lifeNum = 8 
const guessLetter=[]

const formButton = document.querySelector('#btnList')    
formButton.addEventListener('click',function(e){
        e.preventDefault()
        const currentButton = e.target
        //console.log(currentButton)
        const letter = e.target.textContent
        const hasTheLetterInIt = randomWord.includes(letter)
        console.log(randomWord,letter,hasTheLetterInIt)
        guessLetter.push(letter)
        //console.log(guessLetter)
        const btn= document.querySelector('#btn')
       
        // function handleBtnClick(e){
        //    t) if (letter==btnContent){
        //         btn.setAttribute('disabled',true)
        //     }
        // }
        // btn.addEventListener('click',handleBtnClick)


        function makeDashes(word,guess){
            return word.split('').map(letter=>{
                const letterGuessed = guess.includes(letter)
                const letterOrBlank = letterGuessed ? letter : ''
                
                return letterOrBlank
            }).join('')

        }
        
       // if  letter right update it in dash
       const indexOfClick = randomWord.indexOf(letter)
       console.log(indexOfClick)
       const dashHidden=hiddenWord.split('')
       console.log(dashHidden)
       
       //console.log(guessLetter)
        if(hasTheLetterInIt){
            
            // dashHidden.splice(indexOfClick,1,letter)
            // dashHidden.splice(indexOfClick,1,letter)
            
            document.querySelector('#randomWord').innerHTML=makeDashes(randomWord,guessLetter)
        //    console.log(dashHidden)

        //    document.querySelector('#randomWord').innerHTML=dashHidden.join('')
              
        }
        
       
      
        if (hasTheLetterInIt ){
            
            lifeNum = lifeNum
        }else{
            lifeNum--
        }

        if(!dashHidden.includes('_')){
            alert('BINGO!YOU WON')
        }
        
        if (lifeNum===0){
         
         alert('GAME OVER!');
            window.location.assign('http://localhost:1234')
        }
             
        //console.log(lifeNum)
        document.querySelector('#lifesNum').innerHTML=`Lives : ${lifeNum}`
             
        })
        

// When the user runs out of turns, show a losing screen









// When the user guesses all of the letters in the word, show a winning screen