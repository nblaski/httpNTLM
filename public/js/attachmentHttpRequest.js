
const httpntlm = require('httpntlm');

// REQUEST ATTACHMENT API
function attachmentHttpRequest() {
    const http = new Promise((resolve,reject) => {
      httpntlm.get({
            // url: "http://lblbufsp2.ccllabel.cclind.net/PCC/_api/web/lists/GetByTitle('PFC%20View%20Listing')/items?$top=5",
          // url: "http://lblbufsp2.ccllabel.cclind.net/PCC/Lists/PFC/Attachments",
          url: "http://lblbufsp2.ccllabel.cclind.net/PCC/_api/web/lists/GetByTitle('PFC%20View%20Listing')/items?$select=&$top=10",
          // url: "http://lblbufsp2.ccllabel.cclind.net/PCC/Lists/PFC/AllItems.aspx?RootFolder=%2fPCC%2fLists%2fPFC%2fAttachments&amp;FolderCTID=0x012001",
          username: process.env.USERNAME,
          password: process.env.PASSWORD,
          workstation: '',
          domain: process.env.DOMAIN,
          headers: {
            "Accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose;"
          }
        },
        function (error, response) {
            console.log('CALL Attachment HTTP Request')

            if(error) {reject(new Error("Disaster!!!"));}
            if(error) {console.log(new Error("Disaster!!!"))}
            // console.log(response)
            dataBody = JSON.parse(response.body);
            console.log(dataBody)
            data = dataBody.d.results
            // console.log(data)

            let dataArray =[];
            let attachmentArray = [];

            for(var i = 0; i < data.length; i++) {
                const attachment = data[i].AttachmentFiles.results
                dataArray.push(attachment)
            }

            dataArray.forEach((element) => {
              for(var i = 0; i<element.length; i++) {
                const fileID = parseInt(element[i].__metadata.id.split('Items(')[1].split(')')[0])
                const fileName = element[i].FileName
                const serverRelativeUrl = element[i].ServerRelativeUrl
                let urlRaw = `http://lblbufsp2.ccllabel.cclind.net${serverRelativeUrl}`
                const url = urlRaw.replace(/\s/g, "%20")
                const attachment = {fileID,fileName, url}
                attachmentArray.push(attachment)
      
              }
            })
          // console.log(attachmentArray)
          resolve(attachmentArray)
        }
      )
    })
    // console.log(http)
    return http;
  }

  module.exports = { attachmentHttpRequest }