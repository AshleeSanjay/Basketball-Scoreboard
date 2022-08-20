let home_score_display = document.getElementById("home-score");
let guest_score_display = document.getElementById("guest-score");
let txtTimer = document.getElementById("txtTimer");
let btnId = "";
let arrBtn = [];
let homeScore = 0;
let guestScore = 0;
let num = 0;
let title = "";

let homeBtns = document.getElementById("home-btns");
let guestBtns = document.getElementById("guest-btns");
let spnwinner = document.getElementById("spn-winner");
let divWinner = document.getElementById("div-winner");

function addScore(btnId){   
    arrBtn = btnId.split('-');
    num = arrBtn[2];
    title = arrBtn[1];
    if(title == "home"){        
        if(num == 1){        
            homeScore += 1;
            home_score_display.textContent = homeScore;
        }            
        else if(num == 2){
            homeScore += 2;
            home_score_display.textContent = homeScore;
        }            
        else{
            homeScore += 3;
            home_score_display.textContent = homeScore;
        }                  
    }
    else{        
        if(num == 1){        
            guestScore += 1;
            guest_score_display.textContent = guestScore;
        }            
        else if(num == 2){
            guestScore += 2;
            guest_score_display.textContent = guestScore;
        }            
        else{
            guestScore += 3;
            guest_score_display.textContent = guestScore;
        }            
    }
    if (homeScore > guestScore) {        
        home_score_display.style.color = "green";
        guest_score_display.style.color = "#F94F6D";
    }        
    else if(guestScore > homeScore){        
        home_score_display.style.color = "#F94F6D";
        guest_score_display.style.color = "green";
    } 
    else if(guestScore == homeScore){
        home_score_display.style.color = "#F94F6D";
        guest_score_display.style.color = "#F94F6D";
    }

}

function newGame(){  
    homeScore = 0;
    guestScore = 0; 
    home_score_display.textContent = 0;
    guest_score_display.textContent = 0;
    home_score_display.style.color = "#F94F6D";
    guest_score_display.style.color = "#F94F6D";
    homeBtns.style.display = "block";
    guestBtns.style.display = "block";
    divWinner.style.display = "none";
    spnwinner.textContent ="";
    var timeleft = 10;
    txtTimer.value = 0; 
    var countDowntimer = setInterval(function(){
        if(timeleft <= 0){
          clearInterval(countDowntimer);             
          homeBtns.style.display = "none";
          guestBtns.style.display = "none";
          if(homeScore > guestScore){            
            divWinner.style.display = "block";
            spnwinner.textContent = "HOME wins the Game!!! 🎉";
          }
          else if(homeScore < guestScore){
            divWinner.style.display = "block";
            spnwinner.textContent = "GUEST wins the Game!!! 🎉";
          }
          else if((homeScore == guestScore)){
            divWinner.style.display = "block";
            spnwinner.textContent = "Its a TIE!!! 🎉";
          }
        }
        txtTimer.value = 10 - timeleft;
        timeleft -= 1;
      }, 1000);
}

