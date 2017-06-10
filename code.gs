function doGet(e) 
{
  var template = HtmlService.createTemplateFromFile('index2');
  return template.evaluate()
  .setTitle('ProjectData')
  .setSandboxMode(HtmlService.SandboxMode.IFRAME); 
}

function getData()
{
  try
  {
    var allData = SpreadsheetApp.openById("1BmO0gXY7Pqk67d8Jgsh1nZ1IbeZrwQi9BvjPyKYmgpo").getSheetByName("indiadata").getDataRange().getValues();
    var results = [];
//    results.push(['Lat', 'Long', 'Name']);//'Attack Type','Target Type','Target','Weapon Type','Terrorist Organization']);
    for(var i=1;i<allData.length;i++)
    {
      if(allData[i][5]=="Bombing/Explosion")
      results.push([allData[i][1],allData[i][1],"bomb"]);
      else if(allData[i][5]=="Armed Assault")
      results.push([allData[i][1],allData[i][1],"gun"]);
      else if(allData[i][5]=="Assassination")
      results.push([allData[i][1],allData[i][1],"mask"]);
      else if(allData[i][5]=="Hostage Taking (Kidnapping)")
      results.push([allData[i][1],allData[i][1],"hit"]);
      else if(allData[i][5]=="Unarmed Assault")
      results.push([allData[i][1],allData[i][1],"karate"]);
      else if(allData[i][5]=="Hijacking")
      results.push([allData[i][1],allData[i][1],"plane"]);
      else if(allData[i][5]=="Facility/Infrastructure Attack")
      results.push([allData[i][1],allData[i][1],"house"]);
      else if(allData[i][5]=="Hostage Taking (Barricade Incident)")
      results.push([allData[i][1],allData[i][1],"block"]);
      else 
      results.push([allData[i][1],allData[i][1],"ukow"]);
    }
    return results;
  }
  catch(ex)
  {
    Logger.log(JSON.stringify(ex));
  }
}
