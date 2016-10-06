var list =[["Name", "Age", "Email"],
             [ "John", "35","John@gmail.com"],
            ["Mudassa","20", "Mudassa@gmail.com"],
            [ "Suzanne", "26","Suzanne@gmail.com"],
            [ "Robert", "30","Robert@gmail.com"]];
  var table = document.createElement("TABLE");
  table.border = "1";
  var columnCount = list[0].length;
     var row = table.insertRow(-1);

  for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = list[0][i];
        row.appendChild(headerCell);
    }

function GenerateTable(div) { 
    for (var i = 1; i < list.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = list[i][j];
        }
    }
 
    var dvTable = document.getElementById(div);
    dvTable.appendChild(table);
}

  var getRandList = function(){
      var randomName = faker.name.findName();
      var randomEmail = faker.internet.email();
      var randomAge = Math.floor(Math.random()*40) + 20;
      return[
          randomName,
           randomAge,
          randomEmail,
      ]
  }
  
  var showMore = function(div){

      
      var randlist =[];
      randlist.push(getRandList());
      randlist.push(getRandList());
      randlist.push(getRandList());
      console.log(randlist);
      for (var i = 1; i < 3; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < 3; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = randlist[i][j];
        }
    }  
  }
  
  GenerateTable("dvTable1");