
const httpntlm = require('httpntlm');
const {XMLParser} = require('fast-xml-parser');
const xml2js = require('xml2js');
var parseString = require('xml2js').parseString;
const fs = require('fs');
const { fieldNames, dFieldNames } = require('./fieldNames.js');
const { urlName } = require('./urlName.js');
const { workingDaysBetweenDates } = require('./workingDaysBetweenDates.js');


// GET MODIFIED DATE STRING FORMAT
function getDate(field, element) {
    const mNull = "m:null"
    const mProp = "m:properties"
    const hashText = "#text"
    const dateString = element.content[mProp][field][hashText]
    
    if(dateString !== undefined) {
      const yearMonth = dateString.split("-");
      const day = yearMonth[2].split('T')[0];
      const time = dateString.split("T")[1];
      const date = `${yearMonth[1]}/${day}/${yearMonth[0]}`;
      // const date = `${yearMonth[1]}/${day}/${yearMonth[0]} - T${time}`
        return date;
      } else {
        return "NA";
      }
    }

  // GET TEXT FIELD IF BLANK/NOT BLANK
  function getTextFieldValue(fieldCode, element) {
    const mNull = "m:null"
    const mProp = "m:properties"
    const hashText = "#text"
    let fieldNull = element.content[mProp][fieldCode][mNull]
    let fieldHash = element.content[mProp][fieldCode][hashText]
    let field = element.content[mProp][fieldCode]
    if( fieldNull === true || fieldHash === false ) {
      field = 'NA'
    } else {
      return field
    }
    return field
  }

  // GET Boolean FIELD Value
  function getBooleanFieldValue(fieldCode, element) {
    const mNull = "m:null"
    const mProp = "m:properties"
    const hashText = "#text"
    let fieldNull = element.content[mProp][fieldCode][mNull]
    let fieldHash = element.content[mProp][fieldCode][hashText]
    let field = element.content[mProp][fieldCode]
    if( fieldNull === true ) {
      field = 'yes'
    } else if ( fieldNull === false ) {
      field = 'no'
    } else if ( fieldNull === undefined ) {
      field = 'undefined'
    }
    return field
  } 

  // Get Field Data and push into Array
  function getData(element) {
    const mProp = "m:properties"
    const mLine = "m:inline"
    const dTitle = "d:Title"
    const dId = "d:Id"
    const dID = "d:ID"
    const hashText = "#text"
    const dStage = "d:Stage"
    const dFileName = 'd:FileName'
    const hRef = 'href'
    const dServer = 'd:ServerRelativeUrl'
    const listId = element.content[mProp][dId][hashText]
    const stage = element.content[mProp][dStage]

    const authorId = element.link[2][mLine].entry.content[mProp][dID][hashText]
    const createdBy = element.link[2][mLine].entry.content[mProp][dTitle]
    const editorId = element.link[2][mLine].entry.content[mProp][dID][hashText]
    const editor = element.link[2][mLine].entry.content[mProp][dTitle]
    const newPjNumberDateRaw = element.content[mProp][fieldNames.newPjNumberDate][hashText]
    // GET ATTACHMENTS
    let attachmentArray = []
    const attachment = element.link[1][mLine].feed.entry
      // const attachment = element.link[1][mLine].feed.entry[2].content[mProp][dFileName]
      for(var i = 0; i < attachment.length; i++) {
          const serverURL = attachment[i].link[hRef]
          const fileItemId = serverURL.split('Items(')[1].split(')')[0]
          const fileName = attachment[i].content[mProp][dFileName]
          const serverRelativeUrl = attachment[i].content[mProp][dServer]
          let urlRaw = `http://lblbufsp2.ccllabel.cclind.net${serverRelativeUrl}`
          const urlAttachment = urlRaw.replace(/\s/g, "%20")
          attachmentArray.push({fileItemId: fileItemId, fileName: fileName, urlAttachment: urlAttachment})
      }

    // console.log(attachmentArray)
// console.log(element.content)
    // GET TEXT FIELDS
    const productNumber = getTextFieldValue(fieldNames.productNumber, element);
    const itemTitle = getTextFieldValue(fieldNames.title, element);
    const quoteNumber = getTextFieldValue(fieldNames.quoteNumber, element)
    const actionRequested = getTextFieldValue(fieldNames.actionRequested, element)
    const qualityApprovedBy = getTextFieldValue(fieldNames.approvedBy, element)


    const artworkSendDate = getDate(fieldNames.artworkSendDate, element)
    const artworkCustomerComments = getTextFieldValue(fieldNames.artworkCustomerComments,element)
    const proofApproved = getTextFieldValue(fieldNames.proofApproved, element)
    const artworkApprovedBy = getTextFieldValue(fieldNames.artworkApprovedBy, element)
    const artworkSentViaEmail = getTextFieldValue(fieldNames.artworkSentViaEmail, element)
    const proofCreated = getDate(fieldNames.proofCreated, element)
    const contentTypeId = getTextFieldValue(fieldNames.contentTypeId, element)
    const dateCreated = getDate(fieldNames.dateCreated, element)
    const typeOfProof = getTextFieldValue(fieldNames.typeOfProof, element)
    // const financeApproved = getBooleanFieldValue(fieldNames.financeApproved, element)
    // const artworkSendVia = getBooleanFieldValue(fieldNames.artworkSendVia)
    const customer = getTextFieldValue(fieldNames.customer, element)
    const commentsToPrepress = getTextFieldValue(fieldNames.commentsToPrepress, element)
    const newPjNumber = getTextFieldValue(fieldNames.newPjNumber, element)
    const newPjNumberDate = getDate(fieldNames.newPjNumberDate, element)

    // const bomUpdatedCreated = getDate(fieldNames.bomUpdatedCreated)
    // toolingRequestedDate: 'd:Tooling_x0020_Requested_x0020_Da', // { 'm:null': true }
    // toolingDeliveryDate: 'd:Tooling_x0020_Delivery_x0020_Dat', // { 'm:null': true }
    // toolingPurchaseOrders: 'd:Tooling_x0020_Purchase_x0020_Ord', // { 'm:null': true }
    // overlayPlatesCompletedDate: 'd:Overlay_x002f_Plates_x0020_Compl', // { 'm:null': true }
    // qualityApprovedDate: 'd:Quality_x0020_Approved_x0020_Dat', // { 'm:null': true }
    // emailSta: 'd:EmailSta', // { 'm:null': true }
    // newFNumbers: 'd:New_x0020_F_x0020_numbers_x003a_', // { 'm:null': true }
    // productActivated: 'd:Product_x0020_Activated_x003a_', // { 'm:null': true }
    // costRollupComplete: 'd:Cost_x0020_Rollup_x0020_Complete', // { 'm:null': true }
    // pricingComments: 'd:Pricing_x0020_Comments', //'<div class="ExternalClassF0E43AD46833433B88EEDB69BC5FD3F8"><html>\n' +'  <p>​Cost detail attached.&#160; No formal pricing to XC yet per Bob.</p>\n' +'</html></div>',
    // trial: 'd:Trial', // 'Trial'
    // trialResultComment: 'd:Trial_x0020_Result_x0020_Comment', // { 'm:null': true }
    // dateCompleted: 'd:Date_x0020_Completed', // { 'm:null': true }
    // daysOpen: 'd:Days_x0020_Open', // 43020.7123958333
    // unitOfMeasure: 'd:Unit_x0020_of_x0020_Measure', // 'Sheet'
    // tenativePressDate: 'd:Tenative_x0020_Press_x0020_Date', // { 'm:null': true }
    // tenativePress: 'd:Tenative_x0020_Press', // { 'm:null': true }
    // releaseDate: 'd:Release_x0020_Date', // { 'm:null': true }
    // quotePricingApprived: 'd:Quote_x002f_Pricing_x0020_Approv', // { 'm:null': true }
    // quoteSend: 'd:Quote_x0020_Sent', // { 'm:null': true }
    // toolingBomComments: 'd:Tooling_x002f_BOM_x0020_comments', // { 'm:null': true }
    // prepressComments: 'd:PrePress_x0020_Comments', // { 'm:null': true }
    // toolingComments: 'd:Tooling_x0020_comments', // { 'm:null': true }
    // quantityPerStock: 'd:Quantity_x0020_per_x0020_Stock', // { '#text': 1000, 'm:type': 'Edm.Double' }
    // salesOrderManual: 'd:Sales_x0020_Order_x002f_Manual_x',
    // orderType: 'd:Order_x0020_Type',
    // conversionFactor: 'd:Conversion_x0020_Factor_x003a_', // 0.001
    // pfcWorkF: 'd:PFCWorkf', // { 'm:null': true }
    // csrID: 'd:CSRId', // { '#text': 2, 'm:type': 'Edm.Int32' }
    // engineerID: 'd:EngineerId', // { '#text': 4, 'm:type': 'Edm.Int32' },
    // prepressToolingReq: 'd:Prepress_x0020_Tooling_x0020_Req', //{ 'm:null': true }
    // nonStandardInk: 'd:Non_x002d_Standard_x0020_Ink_x00', // { 'm:null': true }
    // internalProofApproved: 'd:Internal_x0020_Proof_x0020_Appro', // { 'm:null': true }
    // engineerPressSide: 'd:Engineer_x0020_Press_x0020_Side', // { 'm:null': true }
    // marginPercentage: 'd:Margin_x0020_Percentage', // { 'm:null': true }
    // boxedUnit: 'd:Boxed_x0020_Unit_x0020_of_x0020_', // { 'm:null': true }
    // holdItem: 'd:HOLD_x0020_these_x0020_Item_x002', // { 'm:null': true }
    // checkHold: 'd:CHEKHOLD_x0020_these_x0020_Item_', // { 'm:null': true }
    // reasonForHold: 'd:Reason_x0020_for_x0020_HOLD_x002', // { 'm:null': true }
    // isHoldRequired: 'd:Reason_x0020_for_x0020_HOLD_x002', // { 'm:null': true }
    // holdCompletedDate: 'd:Hold_x0020_Completed_x0020_Date', // { 'm:null': true }
    // csEngCompletedDate: 'd:Customer_x0020_Service_x002f_Eng', // { 'm:null': true }
    // idCopy: 'd:IDcopy', //0,
    // createdCopy: 'd:CreatedCopy', // '2017-10-12T21:05:51Z',
    // pfcID: 'd:ID', // { '#text': 6, 'm:type': 'Edm.Int32' },
    // versionString: 'd:OData__UIVersionString', // 7
    // numOfAttachments: 'd:Attachments', //{ '#text': true, 'm:type': 'Edm.Boolean' }
    // guidNumber: 'd:GUID', // {'#text': 'fa43bb5a-b3a8-4d66-8e12-eb5a7c68e85b','m:type': 'Edm.Guid'}
    // hashText: '#text',





    // GET BOOLEAN FIELDS
    const linerMark = getBooleanFieldValue(fieldNames.linerMark, element)

    // GET DATE FIELDS
    const dueDate = getDate(fieldNames.dueDate, element)
    const modifiedDate = getDate(fieldNames.dateModified, element)

    // GET CSR REPS
    let csr = element.link[2][mLine]
    if(csr !== undefined) {
      csr = csr.entry.content[mProp][dTitle]
    } else {
      csr = "NA"
    }

    return {
      listId:listId,
      authorId: authorId, 
      createdBy:createdBy, 
      modifiedDate: new Date(modifiedDate), 
      stage: stage, 
      CSR: csr, 
      title: itemTitle,
      productNumber: productNumber,
      editorId: editorId,
      editor: editor,
      quoteNumber: quoteNumber,
      dueDate: dueDate,
      actionRequested: actionRequested,
      qualityApprovedBy: qualityApprovedBy,
      linerMark: linerMark,
      attachments: attachmentArray,
      customer: customer,
      commentsToPrepress: commentsToPrepress,
      newPjNumber: newPjNumber,
      artworkSendDate, artworkSendDate,
      newPjNumberDate: newPjNumberDate,
      newPjNumberDateUTC: new Date(newPjNumberDate),
      today: new Date()
    };
  }

  

// REQUEST ITEM API
function itemHttpRequest() {
  // console.log(urlName)
  const http = new Promise((resolve,reject) => {
  
    httpntlm.get(
        {
            url: urlName,
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
                // console.log(res.body)

                let closedStageNames = ['CLOSED Quote Lost',
                'CLOSED Opportunity Lost',
                'CLOSED New Item Completed',
                'CLOSED Changed Item Completed',
                'CLOSED Trial Passed',
                'CLOSED Trial Failed']
                
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
                  console.log("all days: " + diffDays)


                  console.log("working days: " + workingDaysBetweenDates(newPjNumberDateUTC,today))





                  if(stageFieldData === closedStageNames[0] || stageFieldData === closedStageNames[2] ) {
                    console.log('included   ' + stageFieldData)
                    const data = getData(element)
                    stageArray.push(data);
                  } else {
                    console.log('not included')
                  }
                 
                  // // FILTERS BY STAGE
                  // if(stageFieldData === closedStageNames[0] || stageFieldData === closedStageNames[2] ) {
                  //   console.log('included   ' + stageFieldData)
                  //   const data = getData(element)
                  //   stageArray.push(data);
                  // } else {
                  //   console.log('not included')
                  // }
                    
                  })
                  // data.forEach((element) => {
                  //   const data = getData(element)
                  //   listData.push(data);
                  // })
                  // // SELECT ITEMS THAT MATCH STATE
                  // for(var i = 0; i < listData.length; i++) {
                  //   const stageItem = listData[i].stage
                  //   if(stageItem === closedStageNames[1] || stageItem === closedStageNames[2] || stageItem === closedStageNames[3] || stageItem === closedStageNames[4] || stageItem === closedStageNames[5] ) {
                  //     // console.log('nope')
                  //   } else {
                  //     stageArray.push(listData[i])
                  //     // console.log('in here')
                  //   }
                  // }
          
                  console.log(stageArray)

                
  
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