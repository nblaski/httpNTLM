
const httpntlm = require('httpntlm');

// REQUEST ATTACHMENT API
function usersHttpRequest() {
    const http = new Promise((resolve,reject) => {
      httpntlm.get({
            // url: "http://lblbufsp2.ccllabel.cclind.net/PCC/_api/web/lists/GetByTitle('PFC%20View%20Listing')/items?$top=5",
          // url: "http://lblbufsp2.ccllabel.cclind.net/PCC/Lists/PFC/Attachments",
          url: "http://lblbufsp2.ccllabel.cclind.net/PCC/_api/Web/Lists%28guid%2713fc2605-48a0-4926-94e9-8f7206af9146%27%29/Items?$top=5&$select=Title,Author/ID,Author/Title&$expand=Author/ID,Author/Title",
        //   url: "http://lblbufsp2.ccllabel.cclind.net/PCC/_api/web/lists/GetByTitle('PFC%20View%20Listing')/items?$select=Attachments,AttachmentFiles&$expand=AttachmentFiles&$top=10",
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
        console.log('CALL Get Users')
        if(error) {reject(new Error("Disaster!!!"));}
        if(error) {console.log(new Error("Disaster!!!"))}
        dataBody = JSON.parse(response.body);
        // console.log(dataBody)
        // data = dataBody.d.results
        // console.log(data)
        const d = "d:";
        const results = "results:";
        const dataAuthors = dataBody.d.results
        // console.log(Object.keys(authorMetaData))
        let allAuthorsArray = [];
        for(var i = 0; i < dataAuthors.length; i++) {
            const title = dataBody.d.results[i].Title
            const authorTitle = dataAuthors[i].Author.Title;
            const authorID = dataAuthors[i].Author.ID
            const listID = parseInt(dataAuthors[i].__metadata.id.split('Items(')[1].split(')')[0])
            // console.log(listID)
            allAuthorsArray.push( { listID: listID, authorTitle: authorTitle, idAuthor: authorID, title: title } )
        }
        // console.log(allAuthorsArray)
        resolve(allAuthorsArray)
        }
      )
    })
    // console.log(http)
    return http;
  }

  module.exports = { usersHttpRequest }