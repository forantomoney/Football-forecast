async function getMatches(){

let response = await fetch(

"https://api-football-v1.p.rapidapi.com/v3/fixtures"

)

let data = await response.json()

return data.response

}
