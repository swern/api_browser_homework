window.onload = function(){
  var url = 'http://hp-api.herokuapp.com/api/characters'
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();

  request.onload = function () {
     loadCharacterCharts(request.responseText)
      }
  }
  
var loadCharacterCharts = function(responseText){
  var characters = JSON.parse(responseText);

  characterHouseData = [];

  for(character of characters){
    characterHouseData.push({
      name: character.name,
      y: character.house
    });
  }

  var characterHouseData = {
    name: "Number of Houses",
    data: []
  }

  var characterHouseLabels = []

  for(character of characters){
    if(!characterHouseLabels.includes(character.house)){
      characterHouseLabels.push(character.house);
    }
  }

  for(label of characterHouseLabels){
    var num = 0;
    for(character of characters){
      if(character.house == label){
        num++
      }
    }
    characterHouseData.data.push(num);
  }

  new PieChart("Number of Characters in House", characterHouseData);
}

