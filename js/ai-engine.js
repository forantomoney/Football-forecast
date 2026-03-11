function predictMatch(home,away){

let stats = getTeamStats(home,away)

let odds = getBookmakerOdds(home,away)

let formScore = analyzeForm(stats)

let oddsScore = analyzeOdds(odds)

let finalScore = combineScores(formScore,oddsScore)

let prediction = generatePrediction(finalScore)

showPrediction(home,away,prediction)

}
