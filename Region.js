let data,Regions;
function init(){
  $.ajaxSetup({async: false});

  let link = "https://f9ac9d7b-328e-48f9-9a59-2ca75b9f70a7-00-1fsjk341hswbl.sisko.replit.dev";
  let route= "/Regions"
    Regions = $.getJSON(link+route).responseJSON;

  generateCards(Regions);

}

function generateCards(Regions){
  // 1- getelement output
  let output = document.getElementById("centerpanel");
  let build ="";

  for(let i=0; i<Regions.length; i++){
    let Region = Regions[i]
    build += `<div class="card" >`
    build += `<h3> Region Name </h3>`;
    build += `<p> ${Region.RegionName}</p>`;
    build += `<img src="Regions/${Region.RegionName}.png">`;
    build += `<hr>`;
    build += `<h3> Player Name </h3>`;
    build += `<p> ${Region.PlayerName}</p>`;
    build += `<hr>`;
    build += `</div>`;
  }

  // Now inject the build content into the output container
  output.innerHTML = build;

}

function filter(){
  let RegionName = document.getElementById("RegionName").value;

  console.log(RegionName);
  let regionList = []; //create a list of songs searched for

  for(let i=0; i<Regions.length;i++){
    let Region = Regions[i] //get each sog
    //make sure the list is no
    if( Region.RegionName == RegionName ) {
          //add to the new list
            regionList.push(Region);
       }
  }
  console.log(`number found ${regionList.length}`)
  generateCards(regionList);

}
