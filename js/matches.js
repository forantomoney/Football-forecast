async function loadMatches(){

let container = document.getElementById("matchesContainer")

container.innerHTML="Loading matches..."

let matches = await getMatches()

container.innerHTML=""

matches.forEach(match=>{

let card = document.createElement("div")

card.className="match-card"

card.innerHTML=`

<div class="teams">

<span>${match.home}</span>

vs

<span>${match.away}</span>

</div>

<div class="time">

${match.date}

</div>

<button onclick="predictMatch('${match.home}','${match.away}')"
class="predict-btn">

AI прогноз

</button>

<div id="prediction-${match.home}-${match.away}"></div>

`

container.appendChild(card)

})

}
