let data,Teams;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "https://f9ac9d7b-328e-48f9-9a59-2ca75b9f70a7-00-1fsjk341hswbl.sisko.replit.dev";
  let route= "/Teams"
  Teams = $.getJSON(link+route).responseJSON;
  generateCards(Teams);

  
}

function generateCards(Teams){

  let mainpanel = document.getElementById("centerpanel");
  let build ="";

   
  for(let i=0; i<Teams.length; i++){
    let Team = Teams[i]
    build += `<div class="card" >`
    build += `<h3> Team Name : ${Team.TeamName}</h3>`;
    build += `<hr>`;
    build += `<h3> Player Name </h3>`;
    build += `<p> ${Team.PlayerName}</p>`;
    build += `<img src="Teams/${Team.TeamName}.webp">`;
    build += `<img src="Players/${Team.PlayerName}.webp">`;
    build += `<hr>`;
    build += `</div>`;
  }

  mainpanel.innerHTML = build;
  
}

function filter(){
  let teamName = document.getElementById("teamName").value;
  console.log(teamName);

  
  let teamList = []; //create a list of songs searched for
  
  for(let i=0; i<Teams.length;i++){
    let Team = Teams[i] //get each sog
    //make sure the list is no
    if( Team.TeamName == teamName ) {
          //add to the new list
          teamList.push(Team);
       }
  }
  console.log(`number found ${teamList.length}`)
  generateCards(teamList);
  
}