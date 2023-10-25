
const httpntlm = require('httpntlm');
const {XMLParser} = require('fast-xml-parser');
const xml2js = require('xml2js');
var parseString = require('xml2js').parseString;
const fs = require('fs');
const { fieldNames, dFieldNames } = require('./fieldNames.js');
const { urlName, urlName2, urlName3, urlVersions } = require('./urlName.js');
const { workingDaysBetweenDates } = require('./workingDaysBetweenDates.js');
const { getData } = require('./getItemData.js');
const { closedStageNames } = require('./stages.js');


// REQUEST ITEM API
function itemHttpRequest() {
  // console.log(urlName)
  const http = new Promise((resolve,reject) => {
  
    httpntlm.get(
        {
            url: urlName3,
            // url: "http://lblbufsp2.ccllabel.cclind.net/PCC/_api/web/lists/GetByTitle('PFC View Listing')/items?$top=5&$select=ID,Stage,Title,Modified,EditorId,Created,New_x0020_PJ_x0020_Number_x0020_",
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            workstation: '',
            domain: process.env.DOMAIN,
        },
        function (err, res) { 

          let stageArray = [];
            if(err) {
                reject(new Error("Disaster!!!"));
            } else {
                console.log("CALL Item HTTP Request")
                const options = {
                    ignoreAttributes: false,
                    attributeNamePrefix : "",
                    //removeNSPrefix: true
                    parseAttributeValue: true
                };

                const parser = new XMLParser(options);
                const output = parser.parse(res.body);

                const data = output.feed.entry
                
                  data.forEach((element) => {
                    const mProp = "m:properties"
                    const dStage = "d:Stage"
                    const hashText = "#text"
                    const stageFieldData = element.content[mProp][dStage]
                    const dateString = element.content[mProp][fieldNames.newPjNumberDate][hashText]
                    const newPjNumberDateUTC = new Date(dateString)
                    // const dateStringSlice = dateString.slice(0,10)
                    const today = new Date()
                    const todayDAY = today.getDate()
                    const todayMONTH = today.getMonth() + 1
                    const todayYEAR = today.getFullYear()
                    // const todayString = `${todayYEAR}-${todayMONTH}-${todayDAY}`

                    const diffTime = Math.abs(today - newPjNumberDateUTC);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
                    // console.log("all days: " + diffDays)


                    // console.log("working days: " + workingDaysBetweenDates(newPjNumberDateUTC,today))


                    if(stageFieldData === closedStageNames[0] || stageFieldData === closedStageNames[2] ) {
                      // console.log('included   ' + stageFieldData)
                      const data = getData(element)
                      stageArray.push(data);
                    } else {
                      // console.log('not included')
                    }
                    
                  })                 
          
                  // console.log(stageArray)

                
  
                  fs.writeFile(`./public/xml/newDataNEW.json`, JSON.stringify(stageArray), function (err){
                    if (err) throw err;
                        console.log('New Data Saved to newDataNEW.json');
                    });
          
                  const itemString = JSON.stringify(stageArray)
                  
                  var builder = new xml2js.Builder();        
                  var buildXML = builder.buildObject(itemString);    
                  fs.writeFile(`./public/xml/buildItems.xml`, buildXML, function (err){
                      if (err) throw err;
                          console.log('It\'s saved as xml!');
                      });
            }
          // console.log("STAGEARRAY: " + stageArray)
          resolve(stageArray)
        }
    )
  })
  return http;
}



  module.exports = { itemHttpRequest };