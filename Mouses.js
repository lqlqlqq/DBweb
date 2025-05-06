let data,Mouses;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "https://f9ac9d7b-328e-48f9-9a59-2ca75b9f70a7-00-1fsjk341hswbl.sisko.replit.dev";
  let route= "/Mouses"
  Mouses = $.getJSON(link+route).responseJSON;

  generateCards(Mouses);

}

function generateCards(Mouses){
  // 1- getelement output
  let centerpanel = document.getElementById("centerpanel");
    centerpanel.innerHTML="";
  
  let text ="";
  let extent ="";
  
  for(let i=0; i<Mouses.length; i++){
    let Mouse = Mouses[i]
    text = `<div class="card1" >`
    text += `<h3> Player Name </h3>`;
    text += `<p> ${Mouse.PlayerName}</p>`;
    text += `<img src='Mouses/${Mouse.MouseName}.jpg'>`;
    text += `</div>`;

    extent = `<div class="card1" >`
    extent += `<h3> Mouse Name </h3>`;
    extent += `<p> ${Mouse.MouseName}</p>`;
    extent += `</div>`;
    
    let collapse1 = new Collapsible(text,extent);
    collapse1.render("centerpanel");
  }

  // Now inject the build content into the output container

}

function filter(){
  let MouseName = document.getElementById("MouseName").value;

  console.log(MouseName);
  let mouseList = []; //create a list of songs searched for
  
  for(let i=0; i<Mouses.length;i++){
    let Mouse = Mouses[i] //get each sog
    //make sure the list is no
    if( Mouse.MouseName == MouseName ) {
          //add to the new list
          mouseList.push(Mouse);
       }
  }
  console.log(`number found ${mouseList.length}`)
  generateCards(mouseList);
  
}
