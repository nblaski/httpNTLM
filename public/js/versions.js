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
function versions() {
  // console.log(urlName)
  const http = new Promise((resolve,reject) => {
  
    httpntlm.get(
        {
            url: urlVersions,
            // url: "http://lblbufsp2.ccllabel.cclind.net/PCC/_api/web/lists/GetByTitle('PFC View Listing')/items?$top=5&$select=ID,Stage,Title,Modified,EditorId,Created,New_x0020_PJ_x0020_Number_x0020_",
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            workstation: '',
            domain: process.env.DOMAIN,
        },
        function (err, res) { 
            let versionData;
          
            if(err) {
                reject(new Error("Disaster!!!"));
            } else {
                console.log("CALL Item HTTP Request on VERSIONS")
                const options = {
                    ignoreAttributes: false,
                    attributeNamePrefix : "",
                    //removeNSPrefix: true
                    parseAttributeValue: true
                };



                const parser = new XMLParser(options);
                const output = parser.parse(res.body);

                const hashText = '#text'
                const hostHttp = "http://lblbufsp2.ccllabel.cclind.net"

                versionData = output.html.body.form.div[9].div.div[1].div[1].div[2].table[1].tr[1]
                const previousVersion = output.html.body.form.div[9].div.div[1].div[1].div[2].table[1].tr[1]
                const previousVersionData = output.html.body.form.div[9].div.div[1].div[1].div[2].table[1].tr[2].td[1].table.tr
                const previousVersionDataField = output.html.body.form.div[9].div.div[1].div[1].div[2].table[1].tr[2].td[1].table.tr[0].td[0][hashText]
                const pvNumber = output.html.body.form.div[9].div.div[1].div[1].div[2].table[1].tr[1].td[0][hashText]
                const verUrlPT2 = output.html.body.form.div[9].div.div[1].div[1].div[2].table[1].tr[1].td[1].table.verUrl
                const verUrl = hostHttp + verUrlPT2
                const table = output.html.body.form.div[9].div.div[1].div[1].div[2].table[1].tr[1].td[1].table

                const preVerData = output.html.body.form.div[9].div.div[1].div[1].div[2].table[1].tr[2].td[1].table.tr

                verData = [];
                function previousVersionDataFields() {
                    for(var i = 0; i < previousVersionData.length; i++) {
                        const fieldName = preVerData[i].td[0][hashText]
                        const fieldValues = preVerData[i].title
                        verData.push({fieldName: fieldName, fieldValues: fieldValues})
                    }
                } 

                previousVersionDataFields()

                console.log(verData)
                // console.log(verData)
            }
          // console.log("STAGEARRAY: " + stageArray)
          resolve(versionData)
        }
    )
  })
  return http;
}



  module.exports = { versions };