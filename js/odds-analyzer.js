function analyzeOdds(odds){

let home = 1/odds.home
let draw = 1/odds.draw
let away = 1/odds.away

let total = home+draw+away

return{

home:(home/total)*100,
draw:(draw/total)*100,
away:(away/total)*100

}

}
