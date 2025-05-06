let data,Players;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "https://f9ac9d7b-328e-48f9-9a59-2ca75b9f70a7-00-1fsjk341hswbl.sisko.replit.dev";
  let route= "/Players"
    Players = $.getJSON(link+route).responseJSON;

  generateCards(Players)


}

function generateCards(Players){
  let centerpanel = document.getElementById("centerpanel");
  centerpanel.innerHTML=""; //clear out the container

  let front ="";
  let back ="";


  for(let i=0; i<Players.length; i++){
    let Player = Players[i]
    front = `<div class="card" >`
    front += `<h3>${Player.PlayerName}</h3>`;
    front += `<img src='Players/${Player.PlayerName}.webp'>`;
    front += `</div>`;

    back = `<div class="card" >`
    back += `<div> Age : ${Player.Age}</div>`;
    back += `<div> Region : ${Player.RegionName}</div>`;
    back += `<div> Team : ${Player.TeamName}</div>`;
    back += `<p> Mouse : ${Player.MouseName}</p>`;
    back += `</div>`;

    let card = new FlipCard(front,back);
    card.render("centerpanel");
  }

  // Now inject the build content into the output container

}

function filter(){
  let PlayerName = document.getElementById("PlayerName").value;
  console.log(PlayerName);

  let playerList = []; //create a list of songs searched for
  
  for(let i=0; i<Players.length;i++){
    let Player = Players[i] //get each sog
    //make sure the list is no
    if( Player.PlayerName == PlayerName ) {
          //add to the new list
          playerList.push(Player);
       }
  }
  console.log(`number found ${playerList.length}`)
  generateCards(playerList);
}