var Scissors = document.getElementById('option1')
var Paper = document.getElementById('option2')
var Rock = document.getElementById('option3')

let playerOption 

Scissors.onclick = function ()
{
    playerOption = 'Scissors'
    $('#tochange1')[0].src='./m9as.PNG'
}
Paper.onclick = function ()
{
    playerOption = 'Paper'
    $('#tochange1')[0].src='./yed ma7loulaa.PNG'

}
Rock.onclick = function ()
{
    playerOption = 'Rock'
    $('#tochange1')[0].src='./yed msakraaa.PNG'
} 

Scissors.addEventListener('click', winner);
Paper.addEventListener('click', winner);
Rock.addEventListener('click', winner);

// to get the option 



// Get references to the HTML elements

let used=[]
let choise = ['Scissors','Paper','Rock']
let i = 0
let j= -1 
function computer() {
  do{
     i = Math.floor(Math.random() * choise.length);
    used.push(choise[i])
    console.log(used)
j++
}while (choise[i]===used[j-1])
console.log('used j '+used[j],j)
if (used[j]==='Scissors')
{
  $('#tochange2')[0].src='./m9as.PNG'


}
else if (used[j]==='Rock')
{
  $('#tochange2')[0].src='./yed msakraaa.PNG'

}
else if (used[j]==='Paper')
{
  $('#tochange2')[0].src='./yed ma7loulaa.PNG'
}
    return used[j];

  }
  let playerScore = 0
  let compScore = 0
let test = false 
function winner() {
      let computers=computer()
      console.log('comp = ' + computers)
      console.log('player = ' + playerOption)
      if (playerOption === 'Scissors') {
        if (computers === 'Rock') { 
          $('h1')[0].innerHTML = 'Computer wins!';
          compScore += 1;
          test = false
        } else if (computers=== 'Paper') {
          $('h1')[0].innerHTML = 'Player wins!';
          playerScore += 1;
          test = true
        } else if (computers === 'Scissors') {
          $('h1')[0].innerHTML = 'Tie!';
        }
        

      }

      else if (playerOption === 'Rock') {
        if (computers === 'Rock') {
          $('h1')[0].innerHTML = 'Tie!';
        } else if (computers === 'Scissors') {
          $('h1')[0].innerHTML = 'Player wins!';
          playerScore += 1;
        } else if (computers === 'Paper') {
          $('h1')[0].innerHTML = 'Computer wins!';
          compScore += 1;
        }
        if (compScore===1)
        {
          $('#1').hide(); 
          $('#nice').css('opacity','1%')
          $('#nice').hide(); 


        }
         if (compScore===2)
        {
          $('#2').hide(); 
          $('#nice').css('opacity','1%')
          $('#nice').hide(); 


        }
         if (compScore===3)
        {
          $('#3').hide(); 
          $('#nice').css('opacity','1%')
          $('#nice').hide(); 


        }
         if (compScore===4)
        {
          $('#4').hide(); 
          $('#nice').css('opacity','1%')
          $('#nice').hide(); 


        }
         if (compScore===5)
        {
          $('#5').hide(); 
          $('#nice').css('opacity','1%')
          $('#nice').hide(); 


        }
         if (playerScore===1)
        {
          $('#11').hide();
          $('#nice').css('opacity','100%')
          $('#nice').show()

           
        }
         if (playerScore===2)
        {
          $('#12').hide(); 
          $('#nice').css('opacity','100%')
          $('#nice').show()

          
        }
         if (playerScore===3)
        {
          $('#13').hide(); 
          $('#nice').css('opacity','100%')

          $('#nice').show()

        }
         if (playerScore===4)
        {
          $('#14').hide(); 
          $('#nice').css('opacity','100%')
          $('#nice').show()

        }
         if (playerScore===5)
        {
          $('#15').hide();  
          $('#nice').css('opacity','100%')
          $('#nice').show()

        }

      }
      
      else if (playerOption === 'Paper') {
        if (computers === 'Paper') {
          $('h1')[0].innerHTML = 'Tie!';
        } else if (computers === 'Scissors') {
          $('h1')[0].innerHTML = 'Computer wins!';
          compScore += 1;
        } else if (computers === 'Rock') {
          $('h1')[0].innerHTML = 'Player wins!';
          playerScore += 1;
        }
        console.log(compScore)
        if (compScore===1)
        {
          $('#1').hide(); 
          $('#nice').css('opacity','1%')
          $('#nice').hide(); 


        }
         if (compScore===2)
        {
          $('#2').hide(); 
          $('#nice').css('opacity','1%')
          $('#nice').hide(); 


        }
         if (compScore===3)
        {
          $('#3').hide(); 
          $('#nice').css('opacity','1%')
          $('#nice').hide(); 


        }
         if (compScore===4)
        {
          $('#4').hide(); 
          $('#nice').css('opacity','1%')
          $('#nice').hide(); 
           console.log('hiiiii')

        }
         if (compScore===5)
        {
          $('#5').hide(); 
          $('#nice').css('opacity','1%')
          $('#nice').hide(); 


        }
         if (playerScore===1)
        {
          $('#11').hide();
          $('#nice').css('opacity','100%')
          $('#nice').show()

           
        }
         if (playerScore===2)
        {
          $('#12').hide(); 
          $('#nice').css('opacity','100%')
          $('#nice').show()

          
        }
         if (playerScore===3)
        {
          $('#13').hide(); 
          $('#nice').css('opacity','100%')

          $('#nice').show()

        }
         if (playerScore===4)
        {
          $('#14').hide(); 
          $('#nice').css('opacity','100%')
          $('#nice').show()

        }
         if (playerScore===5)
        {
          $('#15').hide();  
          $('#nice').css('opacity','100%')
          $('#nice').show()

        }

      }
      if (compScore===1 && !test)
        {
          $('#1').hide(); 
          $('#nice').css('opacity','1%')
          $('#nice').hide(); 


        }
         if (compScore===2 && !test)
        {
          $('#2').hide(); 
          $('#nice').css('opacity','1%')
          $('#nice').hide(); 


        }
         if (compScore===3 && !test)
        {
          $('#3').hide(); 
          $('#nice').css('opacity','1%')
          $('#nice').hide(); 


        }
         if (compScore===4 && !test)
        {
          $('#4').hide(); 
          $('#nice').css('opacity','1%')
          $('#nice').hide(); 


        }
         if (compScore===5 && !test)
        {
          $('#5').hide(); 
          $('#nice').css('opacity','1%')
          $('#nice').hide(); 


        }
         if (playerScore===1 && test )
        {
          $('#11').hide();
          $('#nice').css('opacity','100%')
          $('#nice').show()

           
        }
         if (playerScore===2 && test)
        {
          $('#12').hide(); 
          $('#nice').css('opacity','100%')
          $('#nice').show()

          
        }
         if (playerScore===3 && test)
        {
          $('#13').hide(); 
          $('#nice').css('opacity','100%')

          $('#nice').show()

        }
         if (playerScore===4 && test)
        {
          $('#14').hide(); 
          $('#nice').css('opacity','100%')
          $('#nice').show()

        }
         if (playerScore===5 && test)
        {
          $('#15').hide();  
          $('#nice').css('opacity','100%')
          $('#nice').show()

        }

      console.log(compScore)
      console.log ($('.result'))

      
      if (compScore === 5) {
        alert('you lost!');
        $('.result').css ('color','red') ;
        $('.result')[0].innerHTML = 'Game Over';
        compScore = 0;
        playerScore =0; 
      }


      else if (playerScore === 5){
       alert('you win the game!');
       $('.result').css ('color','green') 
       $('.result')[0].innerHTML = 'Game Over';
        compScore = 0;
        playerScore =0;
      }

    }




