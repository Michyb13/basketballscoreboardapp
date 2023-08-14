let homePoint = 0
let awayPoint = 0
let homeScore = document.getElementById("home-scores")
let awayScore = document.getElementById("away-scores")
let result = document.getElementById("results")

function homeOnePoint(){
    homePoint += 1
    homeScore.textContent = homePoint
    
}


function homeTwoPoints(){
    homePoint += 2
    homeScore.textContent = homePoint
    
}


function homeThreePoints(){
    homePoint += 3
    homeScore.textContent = homePoint
    
}


function awayOnePoint(){
    awayPoint += 1
    awayScore.textContent = awayPoint
   
}

function awayTwoPoints(){
    awayPoint += 2
    awayScore.textContent = awayPoint

}

function awayThreePoints(){
    awayPoint += 3
    awayScore.textContent = awayPoint
}

function endGame(){
    let owari = homeScore.textContent + " - " + awayScore.textContent + " , "
    console.log(owari)
    result.textContent += owari
    homeScore.textContent = 0
    awayScore.textContent = 0
    homePoint = 0
    awayPoint = 0
}

