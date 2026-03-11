function generatePrediction(score){

if(score.home>score.away && score.home>score.draw){

return "Победа хозяев"

}

if(score.away>score.home && score.away>score.draw){

return "Победа гостей"

}

return "Ничья"

}
