const { fieldNames, dFieldNames, dateFields, textFields, booleanFields } = require('./fieldNames.js');

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
    // console.log(fieldCode)
    const mNull = "m:null"
    const mProp = "m:properties"
    const hashText = "#text"
    let fieldNull = element.content[mProp][fieldCode][mNull]
    // console.log(fieldNull)
    let fieldHash = element.content[mProp][fieldCode][hashText]
    let field = element.content[mProp][fieldCode]
    // console.log(field)
    if( fieldHash === true ) {
      field = 'yes'
    } else if ( fieldNull === false || fieldHash === false ) {
      field = 'no'
    } else if ( fieldNull === undefined ) {
      field = 'undefined'
    } else if ( fieldNull === true ) {
        field = 'unselected'
    }
    return field
  } 

  function getFieldName() {
    for(var i = 0; i < dFieldNames.length; i++) {


    }
  }

  // GET DATA AND PUSH TO ARRAY
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
    const mType = 'm:type'
    const listId = element.content[mProp][dId][hashText]
    const stage = element.content[mProp][dStage]

    // GET Author ID, Created By (Author), Editor ID, Editor
    const authorId = element.link[2][mLine].entry.content[mProp][dID][hashText]
    const createdBy = element.link[2][mLine].entry.content[mProp][dTitle]
    const editorId = element.link[3][mLine].entry.content[mProp][dID][hashText]
    const editor = element.link[3][mLine].entry.content[mProp][dTitle]


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

    // sample of running through without using individual fieldNames
    // for(var i = 0; i < dateFields.length; i++) {
    //     let dates = getDate(dateFields[i], element);
    //     console.log("DATE FIELDS: " + dates)
    // } 


    // GET TEXT FIELDS
    const productNumber = getTextFieldValue(fieldNames.productNumber, element);
    const itemTitle = getTextFieldValue(fieldNames.title, element);
    const quoteNumber = getTextFieldValue(fieldNames.quoteNumber, element)
    const actionRequested = getTextFieldValue(fieldNames.actionRequested, element)
    const qualityApprovedBy = getTextFieldValue(fieldNames.approvedBy, element)
    const artworkCustomerComments = getTextFieldValue(fieldNames.artworkCustomerComments,element)
    const proofApproved = getTextFieldValue(fieldNames.proofApproved, element)
    const artworkApprovedBy = getTextFieldValue(fieldNames.artworkApprovedBy, element)
    const artworkSentViaEmail = getTextFieldValue(fieldNames.artworkSentViaEmail, element)
    const contentTypeId = getTextFieldValue(fieldNames.contentTypeId, element)
    const typeOfProof = getTextFieldValue(fieldNames.typeOfProof, element)
    const customer = getTextFieldValue(fieldNames.customer, element)
    const commentsToPrepress = getTextFieldValue(fieldNames.commentsToPrepress, element)
    const newPjNumber = getTextFieldValue(fieldNames.newPjNumber, element)
    const toolingPurchaseOrders = getTextFieldValue(fieldNames.toolingPurchaseOrders, element)
    const newFNumbers = getTextFieldValue(fieldNames.newFNumbers, element)
    const pricingComments = getTextFieldValue(fieldNames.pricingComments, element)
    const trial = getTextFieldValue(fieldNames.trial, element)
    const trialResultComment = getTextFieldValue(fieldNames.trialResultComment, element)
    const daysOpen = getTextFieldValue(fieldNames.daysOpen, element)
    const unitOfMeasure = getTextFieldValue(fieldNames.unitOfMeasure, element)
    const tentativePress = getTextFieldValue(fieldNames.tentativePress, element)
    const toolingBomComments = getTextFieldValue(fieldNames.toolingBomComments, element)
    const prepressComments = getTextFieldValue(fieldNames.prepressComments, element)
    const toolingComments = getTextFieldValue(fieldNames.toolingComments, element)
    const quantityPerStock = getTextFieldValue(fieldNames.quantityPerStock, element)
    const salesOrderManual = getTextFieldValue(fieldNames.salesOrderManual, element)
    const orderType = getTextFieldValue(fieldNames.orderType, element)
    const conversionFactor = getTextFieldValue(fieldNames.conversionFactor, element)
    const pfcWorkF = getTextFieldValue(fieldNames.pfcWorkF, element)
    const internalProofApproved = getFieldName(fieldNames.internalProofApproved, element)
    const marginPercentage = getFieldName(fieldNames.marginPercentage, element)
    const boxedUnit = getFieldName(fieldNames.boxedUnit, element)
    const holdItem = getFieldName(fieldNames.holdItem, element)
    const checkHold = getFieldName(fieldNames.checkHold, element)
    const reasonForHold = getFieldName(fieldNames.reasonForHold, element)
    const versionString = getFieldName(fieldNames.versionString, element)
    const numOfAttachments = getFieldName(fieldNames.numOfAttachments, element)
    const guidNumber = getTextFieldValue(fieldNames.guidNumber, element)
      
    // GET DATE FIELDS
    const artworkSendDate = getDate(fieldNames.artworkSendDate, element)
    const proofCreated = getDate(fieldNames.proofCreated, element)
    const dateCreated = getDate(fieldNames.dateCreated, element)
    const newPjNumberDate = getDate(fieldNames.newPjNumberDate, element)
    const dueDate = getDate(fieldNames.dueDate, element)
    const modifiedDate = getDate(fieldNames.dateModified, element)
    const bomUpdatedCreated = getDate(fieldNames.bomUpdatedCreated, element)
    const toolingRequestedDate = getDate(fieldNames.toolingRequestedDate, element)
    const toolingDeliveryDate = getDate(fieldNames.toolingDeliveryDate, element)
    const overlayPlatesCompletedDate = getDate(fieldNames.overlayPlatesCompletedDate, element)
    const qualityApprovedDate = getDate(fieldNames.qualityApprovedDate, element)
    const productActivated = getDate(fieldNames.productActivated, element)
    const costRollupComplete = getDate(fieldNames.costRollupComplete, element)
    const dateCompleted = getDate(fieldNames.dateCompleted, element)
    const tentativePressDate = getDate(fieldNames.tentativePressDate, element)
    const releaseDate = getDate(fieldNames.releaseDate, element)
    const quotePricingApproved = getDate(fieldNames.quotePricingApproved, element)
    const quoteSent = getDate(fieldNames.quoteSent,element)
    const holdCompletedDate = getDate(fieldNames.holdCompletedDate, element)
    const csEngCompletedDate = getDate(fieldNames.csEngCompletedDate, element)

    // GET BOOLEAN FIELDS
    const linerMark = getBooleanFieldValue(fieldNames.linerMark, element)
    const financeApproved = getBooleanFieldValue(fieldNames.financeApproved, element)
    const artworkSendVia = getBooleanFieldValue(fieldNames.artworkSendVia, element)
    const prepressToolingReq = getBooleanFieldValue(fieldNames.prepressToolingReq, element)
    const nonStandardInk = getBooleanFieldValue(fieldNames.nonStandardInk, element)
    const engineerPressSide = getBooleanFieldValue(fieldNames.engineerPressSide, element)
    const isHoldRequired = getBooleanFieldValue(fieldNames.isHoldRequired, element)
    
    // emailSta: 'd:EmailSta', // { 'm:null': true }
    // csrID: 'd:CSRId', // { '#text': 2, 'm:type': 'Edm.Int32' }
    // engineerID: 'd:EngineerId', // { '#text': 4, 'm:type': 'Edm.Int32' },






    // // GET Editor
    // let editorExpand = element.link[3][mLine]
    // if( editorExpand !== undefined ) {
    //     editorExpand = editorExpand.entry.content[mProp][dTitle]
    //     console.log(editorExpand)
    // } else {
    //     editorExpand = "NA"
    // }

    // // GET Author
    // let authorExpand = element.link[2][mLine]
    // if(authorExpand !== undefined ) {
    //     authorExpand = authorExpand.entry.content[mProp][dTitle]
    //     console.log(authorExpand)
    // } else {
    //     authorExpand = "NA"
    // }

    // GET CSR REPS
    let csr = element.link[4][mLine]
    if(csr !== undefined ) {
      csr = csr.entry.content[mProp][dTitle]
    } else {
      csr = "NA"
    }

    let engineer = element.link[5][mLine]
    let engineerID = element.link[5][mLine]
    if(engineer !== undefined) {
        engineer = engineer.entry.content[mProp][dTitle]
        engineerID = engineerID.entry.content[mProp][dID][hashText]
      } else {
        engineer = "NA"
        engineerID = "NA"
      }

    return {
      listId:listId,
      authorId: authorId, 
      createdBy:createdBy, 
      modifiedDate: new Date(modifiedDate), 
      stage: stage, 
    //   csrID: csrID,
      csr: csr, 
      engineerID: engineerID,
      engineer: engineer,
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
      today: new Date(),
      artworkCustomerComments: artworkCustomerComments,
      artworkApprovedBy: artworkApprovedBy,
      artworkSentViaEmail: artworkSentViaEmail,
      contentTypeId: contentTypeId,
      proofApproved: proofApproved,
      typeOfProof: typeOfProof,
      proofCreated: proofCreated,
      dateCreated: dateCreated,
      bomUpdatedCreated: bomUpdatedCreated,
      financeApproved: financeApproved,
      artworkSendVia: artworkSendVia,
      



    };
  }



  module.exports = { getData }