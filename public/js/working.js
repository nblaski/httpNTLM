require('dotenv').config();
const httpntlm = require('httpntlm');
const xml2js = require('xml2js')
const {XMLParser} = require('fast-xml-parser');
const fs = require('fs');

function getModifiedDate(element) {
    const mProp = "m:properties"
    const modified = "d:Modified"
    const hashText = "#text"
    const modifiedDateString = element.content[mProp][modified][hashText]
    const modifiedYearMonth = modifiedDateString.split("-")
    const modifiedDay = modifiedYearMonth[2].split('T')[0]
    
    const modifiedTime = modifiedDateString.split("T")[1] 
    const modifiedDate = `${modifiedYearMonth[1]}/${modifiedDay}/${modifiedYearMonth[0]} - T${modifiedTime}`
    return modifiedDate;
}

function getItemData() {
    let promise = new Promise(function(resolve, reject) {
        httpntlm.get(
            {
                url: "http://lblbufsp2.ccllabel.cclind.net/PCC/_api/web/lists/GetByTitle('PFC%20View%20Listing')/items?$top=5",
                username: process.env.USERNAME,
                password: process.env.PASSWORD,
                workstation: '',
                domain: process.env.DOMAIN,
             },
            function (err, res) { 
                if(err) {
                    reject(new Error("Disaster!!!"));
                } else {
                    console.log("CALL Data")
                    const options = {
                        ignoreAttributes: false,
                        attributeNamePrefix : "",
                        //removeNSPrefix: true
                        parseAttributeValue: true
                    };
                    const parser = new XMLParser(options);
                    const output = parser.parse(res.body);
                    const data = output.feed.entry

                    resolve(data);
                }
            }
        )
    })
    .then((result) => {
        fs.writeFile(`./public/xml/newData.json`, JSON.stringify(result), function (err){
            if (err) throw err;
                console.log('New Data Saved to newData.json');
            });
        // console.log(result)
        result.forEach((element) => {
          const modifiedDate = getModifiedDate(element);
          console.log(modifiedDate)
          return modifiedDate;
        })
    })
}



function getAttachments() {
    let promise = new Promise(function(resolve, reject) {

        httpntlm.get({
                // url: "http://lblbufsp2.ccllabel.cclind.net/PCC/_api/web/lists/GetByTitle('PFC%20View%20Listing')/items?$top=5",
                // url: "http://lblbufsp2.ccllabel.cclind.net/PCC/Lists/PFC/Attachments",
                url: "http://lblbufsp2.ccllabel.cclind.net/PCC/_api/web/lists/GetByTitle('PFC%20View%20Listing')/items?$select=Attachments,AttachmentFiles&$expand=AttachmentFiles&$top=10",
                // url: "http://lblbufsp2.ccllabel.cclind.net/PCC/Lists/PFC/AllItems.aspx?RootFolder=%2fPCC%2fLists%2fPFC%2fAttachments&amp;FolderCTID=0x012001",
                username: process.env.USERNAME,
                password: process.env.PASSWORD,
                workstation: '',
                domain: process.env.DOMAIN,
            },
            function (err, res) { 
                if(err) {
                    reject(new Error("Disaster!!!"));
                } else {
                    console.log("CALL Attachments")
                    const options = {
                        ignoreAttributes: false,
                        attributeNamePrefix : "",
                        //removeNSPrefix: true
                        parseAttributeValue: true
                    };
                    const parser = new XMLParser(options);
                    const output = parser.parse(res.body);
                    // const xml = res.body
                    // parseString(xml, function (err, result) {
                    //     if(err) {console.log(err)}
                    //     dataParsed = result
                    //     return dataParsed;
                    // });
                    const data = output.feed.entry
                    let array = [];
                    let itemArray = []


                    for(var i = 0; i < data.length; i++) {
                        const mLine = 'm:inline'
                        let entry = output.feed.entry[i].link[1][mLine].feed.entry
                        array.push(entry)
                    }
                    array.forEach((element) => {
                        if(element !== undefined) {
                            for(var i = 0; i<element.length; i++) {
                                var mProp = "m:properties"
                                var dName = "d:FileName"
                                let fileName = element[i].content[mProp][dName]
                                let fileLink = element[i].id
                                let fileIDpt1 = fileLink.split('Items(')[1]
                                let fileIDpt2 = fileIDpt1.split(')')[0];
                                let fileID = parseInt(fileIDpt2)
                                itemArray.push({fileID, fileName , fileLink})
                            }
                        }
                            
                    });
                    resolve(itemArray);
                }
            }
        );
    })
    .then(
        (result) => { 
            // console.log(result)
            var builder = new xml2js.Builder();
            var buildXML = builder.buildObject(result);
            // console.log(buildXML)
            // fs.writeFile(`./public/xml/build10.xml`, buildXML, function (err){
            //     if (err) throw err;
            //         console.log('It\'s saved as xml!');
            //     });
            // const resultString = result.toString()
            fs.writeFile(`./public/xml/build10.json`, JSON.stringify(result), function (err){
                if (err) throw err;
                    console.log('It\'s saved as json!');
                });
            return result;
        },
        (error) => { 
            console.error(`onRejected function called: ${error.message}`)
        }
        

    )
}


module.exports = { getAttachments, getItemData }