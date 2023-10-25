let dFieldNames = [
'd:FileSystemObjectType', // { '#text': 0, 'm:type': 'Edm.Int32' }, 
'd:Id', //{ '#text': 6, 'm:type': 'Edm.Int32' },
'd:Title', //'12up Shelftalker Redesign Option 2',
'd:Product_x0020_Number_x0028_s_x00', //'F3277',
'd:Quote_x0020_Number_x003a_', //{ 'm:null': true }, 
'd:Due_x0020_Date', //{ '#text': '2017-10-16T04:00:00Z', 'm:type': 'Edm.DateTime' },
'd:Reason_x0020_for_x0020_change', //'Redesign',
'd:Change_x0020_From_x003a_', //{'#text': "Redesign of Sobey's Shelftalker.",'xml:space': 'preserve'},
'd:Approved_x0020_By_x003a_', //{ 'm:null': true },
'd:Change_x0020_Type_x003a_', //'Non-Cosmetic -  Material, Press, Processing, Finished Good, Method, or Product Master Changes',
'd:PJ_x0020_Number', // { 'm:null': true },
'd:Liner_x0020_Mark', // { '#text': false, 'm:type': 'Edm.Boolean' },
'd:Artwork_x0020_Sent_x0020_Date_x0', // { 'm:null': true },
'd:Artwork_x002f_Customer_x0020_Com', // { 'm:null': true }
'd:Proof_x0020_Approved', // { 'm:null': true } DATE/TIME
'd:Artwork_x0020_Approved_x0020_By_', // { 'm:null': true }
'd:Artwork_x0020_Sent_x0020_via_x00', // 'E-mail',
'd:Proof_x0020_Created_x003a_', //{ '#text': '2017-10-17T04:00:00Z', 'm:type': 'Edm.DateTime' },
'd:ContentTypeId', // 8.736831074195805e+40,
'd:AuthorId', // { '#text': 177, 'm:type': 'Edm.Int32' },
'd:EditorId', // { '#text': 172, 'm:type': 'Edm.Int32' },
'd:Modified', // { '#text': '2022-09-27T15:24:13Z', 'm:type': 'Edm.DateTime' },
'd:Created', //{ '#text': '2017-10-12T21:05:51Z', 'm:type': 'Edm.DateTime' },
'd:Action_x0020_requested_x003a_', //'New Item - Copying does not obsolete previous',
'd:Log_x0020_Number', //1710023
'd:Type_x0020_of_x0020_Proof', //'PDF With CCL Logo',
'd:Finance_x0020_Approved', //{ '#text': false, 'm:type': 'Edm.Boolean' },
'd:Artwork_x0020_Sent_x0020_Via_x000', //{ '#text': false, 'm:type': 'Edm.Boolean' }
'd:Customer', // "Sobey's",
'd:Comments_x0020_to_x0020_PrePress', // { 'm:null': true },
'd:Stage', // 'CLOSED Opportunity Lost'
'd:New_x0020_PJ_x0020_Number', // { 'm:null': true }
'd:New_x0020_PJ_x0020_Number_x0020_', // { 'm:null': true }
'd:BOM_x0020_Updated_x002f_Created_', // { 'm:null': true }
'd:Tooling_x0020_Requested_x0020_Da', // { 'm:null': true }
'd:Tooling_x0020_Delivery_x0020_Dat', // { 'm:null': true }
'd:Tooling_x0020_Purchase_x0020_Ord', // { 'm:null': true }
'd:Overlay_x002f_Plates_x0020_Compl', // { 'm:null': true }
'd:Quality_x0020_Approved_x0020_Dat', // { 'm:null': true }
'd:EmailSta', // { 'm:null': true }
'd:New_x0020_F_x0020_numbers_x003a_', // { 'm:null': true }
'd:Product_x0020_Activated_x003a_', // { 'm:null': true }
'd:Cost_x0020_Rollup_x0020_Complete', // { 'm:null': true }
'd:Pricing_x0020_Comments', //'<div class="ExternalClassF0E43AD46833433B88EEDB69BC5FD3F8"><html>\n' +'  <p>​Cost detail attached.&#160; No formal pricing to XC yet per Bob.</p>\n' +'</html></div>',
'd:Trial', // 'Trial'
'd:Trial_x0020_Result_x0020_Comment', // { 'm:null': true }
'd:Date_x0020_Completed', // { 'm:null': true }
'd:Days_x0020_Open', // 43020.7123958333
'd:Unit_x0020_of_x0020_Measure', // 'Sheet'
'd:Tenative_x0020_Press_x0020_Date', // { 'm:null': true }
 'd:Tenative_x0020_Press', // { 'm:null': true }
'd:Release_x0020_Date', // { 'm:null': true }
'd:Quote_x002f_Pricing_x0020_Approv', // { 'm:null': true }
'd:Quote_x0020_Sent', // { 'm:null': true }
'd:Tooling_x002f_BOM_x0020_comments', // { 'm:null': true }
'd:PrePress_x0020_Comments', // { 'm:null': true }
'd:Tooling_x0020_comments', // { 'm:null': true }
'd:Quantity_x0020_per_x0020_Stock', // { '#text': 1000, 'm:type': 'Edm.Double' }
'd:Sales_x0020_Order_x002f_Manual_x',
'd:Order_x0020_Type',
'd:Conversion_x0020_Factor_x003a_', // 0.001
'd:PFCWorkf', // { 'm:null': true }
'd:CSRId', // { '#text': 2, 'm:type': 'Edm.Int32' }
'd:EngineerId', // { '#text': 4, 'm:type': 'Edm.Int32' },
'd:Prepress_x0020_Tooling_x0020_Req', //{ 'm:null': true }
'd:Non_x002d_Standard_x0020_Ink_x00', // { 'm:null': true }
'd:Internal_x0020_Proof_x0020_Appro', // { 'm:null': true }
'd:Engineer_x0020_Press_x0020_Side', // { 'm:null': true }
'd:Margin_x0020_Percentage', // { 'm:null': true }
'd:Boxed_x0020_Unit_x0020_of_x0020_', // { 'm:null': true }
'd:HOLD_x0020_these_x0020_Item_x002', // { 'm:null': true }
'd:CHEKHOLD_x0020_these_x0020_Item_', // { 'm:null': true }
'd:Reason_x0020_for_x0020_HOLD_x002', // { 'm:null': true }
'd:Reason_x0020_for_x0020_HOLD_x002', // { 'm:null': true }
'd:Hold_x0020_Completed_x0020_Date', // { 'm:null': true }
'd:Customer_x0020_Service_x002f_Eng', // { 'm:null': true }
'd:IDcopy', //0,
'd:CreatedCopy', // '2017-10-12T21:05:51Z',
'd:ID', // { '#text': 6, 'm:type': 'Edm.Int32' },
'd:OData__UIVersionString', // 7
'd:Attachments', //{ '#text': true, 'm:type': 'Edm.Boolean' }
'd:GUID', // {'#text': 'fa43bb5a-b3a8-4d66-8e12-eb5a7c68e85b','m:type': 'Edm.Guid'}
]


const fieldNames = {
    fileSystemObjectType: 'd:FileSystemObjectType', // { '#text': 0, 'm:type': 'Edm.Int32' }, 
    id: 'd:Id', //{ '#text': 6, 'm:type': 'Edm.Int32' },
    title: 'd:Title', //'12up Shelftalker Redesign Option 2',
    productNumber: 'd:Product_x0020_Number_x0028_s_x00', //'F3277',
    quoteNumber: 'd:Quote_x0020_Number_x003a_', //{ 'm:null': true }, 
    dueDate: 'd:Due_x0020_Date', //{ '#text': '2017-10-16T04:00:00Z', 'm:type': 'Edm.DateTime' },
    reasonForChange: 'd:Reason_x0020_for_x0020_change', //'Redesign',
    changeFrom: 'd:Change_x0020_From_x003a_', //{'#text': "Redesign of Sobey's Shelftalker.",'xml:space': 'preserve'},
    approvedBy: 'd:Approved_x0020_By_x003a_', //{ 'm:null': true },
    changeType: 'd:Change_x0020_Type_x003a_', //'Non-Cosmetic -  Material, Press, Processing, Finished Good, Method, or Product Master Changes',
    pjNumber: 'd:PJ_x0020_Number', // { 'm:null': true },
    linerMark: 'd:Liner_x0020_Mark', // { '#text': false, 'm:type': 'Edm.Boolean' },
    artworkSendDate: 'd:Artwork_x0020_Sent_x0020_Date_x0', // { 'm:null': true },
    artworkCustomerComments: 'd:Artwork_x002f_Customer_x0020_Com', // { 'm:null': true }
    proofApproved: 'd:Proof_x0020_Approved', // { 'm:null': true }
    artworkApprovedBy: 'd:Artwork_x0020_Approved_x0020_By_', // { 'm:null': true }
    artworkSentViaEmail: 'd:Artwork_x0020_Sent_x0020_via_x00', // 'E-mail',
    proofCreated: 'd:Proof_x0020_Created_x003a_', //{ '#text': '2017-10-17T04:00:00Z', 'm:type': 'Edm.DateTime' },
    contentTypeId: 'd:ContentTypeId', // 8.736831074195805e+40,
    authorId: 'd:AuthorId', // { '#text': 177, 'm:type': 'Edm.Int32' },
    editorId: 'd:EditorId', // { '#text': 172, 'm:type': 'Edm.Int32' },
    dateModified: 'd:Modified', // { '#text': '2022-09-27T15:24:13Z', 'm:type': 'Edm.DateTime' },
    dateCreated: 'd:Created', //{ '#text': '2017-10-12T21:05:51Z', 'm:type': 'Edm.DateTime' },
    actionRequested: 'd:Action_x0020_requested_x003a_', //'New Item - Copying does not obsolete previous',
    logNumber: 'd:Log_x0020_Number', //1710023
    typeOfProof: 'd:Type_x0020_of_x0020_Proof', //'PDF With CCL Logo',
    financeApproved: 'd:Finance_x0020_Approved', //{ '#text': false, 'm:type': 'Edm.Boolean' },
    artworkSendVia: 'd:Artwork_x0020_Sent_x0020_Via_x000', //{ '#text': false, 'm:type': 'Edm.Boolean' }
    customer: 'd:Customer', // "Sobey's",
    commentsToPrepress: 'd:Comments_x0020_to_x0020_PrePress', // { 'm:null': true },
    stage: 'd:Stage', // 'CLOSED Opportunity Lost'
    newPjNumber: 'd:New_x0020_PJ_x0020_Number', // { 'm:null': true }
    newPjNumberDate: 'd:New_x0020_PJ_x0020_Number_x0020_', // { 'm:null': true }
    bomUpdatedCreated: 'd:BOM_x0020_Updated_x002f_Created_', // { 'm:null': true }
    toolingRequestedDate: 'd:Tooling_x0020_Requested_x0020_Da', // { 'm:null': true }
    toolingDeliveryDate: 'd:Tooling_x0020_Delivery_x0020_Dat', // { 'm:null': true }
    toolingPurchaseOrders: 'd:Tooling_x0020_Purchase_x0020_Ord', // { 'm:null': true }
    overlayPlatesCompletedDate: 'd:Overlay_x002f_Plates_x0020_Compl', // { 'm:null': true }
    qualityApprovedDate: 'd:Quality_x0020_Approved_x0020_Dat', // { 'm:null': true }
    emailSta: 'd:EmailSta', // { 'm:null': true }
    newFNumbers: 'd:New_x0020_F_x0020_numbers_x003a_', // { 'm:null': true }
    productActivated: 'd:Product_x0020_Activated_x003a_', // { 'm:null': true }
    costRollupComplete: 'd:Cost_x0020_Rollup_x0020_Complete', // { 'm:null': true }
    pricingComments: 'd:Pricing_x0020_Comments', //'<div class="ExternalClassF0E43AD46833433B88EEDB69BC5FD3F8"><html>\n' +'  <p>​Cost detail attached.&#160; No formal pricing to XC yet per Bob.</p>\n' +'</html></div>',
    trial: 'd:Trial', // 'Trial'
    trialResultComment: 'd:Trial_x0020_Result_x0020_Comment', // { 'm:null': true }
    dateCompleted: 'd:Date_x0020_Completed', // { 'm:null': true }
    daysOpen: 'd:Days_x0020_Open', // 43020.7123958333
    unitOfMeasure: 'd:Unit_x0020_of_x0020_Measure', // 'Sheet'
    tentativePressDate: 'd:Tenative_x0020_Press_x0020_Date', // { 'm:null': true }
    tentativePress: 'd:Tenative_x0020_Press', // { 'm:null': true }
    releaseDate: 'd:Release_x0020_Date', // { 'm:null': true }
    quotePricingApproved: 'd:Quote_x002f_Pricing_x0020_Approv', // { 'm:null': true }
    quoteSent: 'd:Quote_x0020_Sent', // { 'm:null': true }
    toolingBomComments: 'd:Tooling_x002f_BOM_x0020_comments', // { 'm:null': true }
    prepressComments: 'd:PrePress_x0020_Comments', // { 'm:null': true }
    toolingComments: 'd:Tooling_x0020_comments', // { 'm:null': true }
    quantityPerStock: 'd:Quantity_x0020_per_x0020_Stock', // { '#text': 1000, 'm:type': 'Edm.Double' }
    salesOrderManual: 'd:Sales_x0020_Order_x002f_Manual_x',
    orderType: 'd:Order_x0020_Type',
    conversionFactor: 'd:Conversion_x0020_Factor_x003a_', // 0.001
    pfcWorkF: 'd:PFCWorkf', // { 'm:null': true }
    csrID: 'd:CSRId', // { '#text': 2, 'm:type': 'Edm.Int32' }
    engineerID: 'd:EngineerId', // { '#text': 4, 'm:type': 'Edm.Int32' },
    prepressToolingReq: 'd:Prepress_x0020_Tooling_x0020_Req', //{ 'm:null': true }
    nonStandardInk: 'd:Non_x002d_Standard_x0020_Ink_x00', // { 'm:null': true }
    internalProofApproved: 'd:Internal_x0020_Proof_x0020_Appro', // { 'm:null': true }
    engineerPressSide: 'd:Engineer_x0020_Press_x0020_Side', // { 'm:null': true }
    marginPercentage: 'd:Margin_x0020_Percentage', // { 'm:null': true }
    boxedUnit: 'd:Boxed_x0020_Unit_x0020_of_x0020_', // { 'm:null': true }
    holdItem: 'd:HOLD_x0020_these_x0020_Item_x002', // { 'm:null': true }
    checkHold: 'd:CHEKHOLD_x0020_these_x0020_Item_', // { 'm:null': true }
    reasonForHold: 'd:Reason_x0020_for_x0020_HOLD_x002', // { 'm:null': true }
    isHoldRequired: 'd:Reason_x0020_for_x0020_HOLD_x002', // { 'm:null': true }
    holdCompletedDate: 'd:Hold_x0020_Completed_x0020_Date', // { 'm:null': true }
    csEngCompletedDate: 'd:Customer_x0020_Service_x002f_Eng', // { 'm:null': true }
    idCopy: 'd:IDcopy', //0,
    createdCopy: 'd:CreatedCopy', // '2017-10-12T21:05:51Z',
    pfcID: 'd:ID', // { '#text': 6, 'm:type': 'Edm.Int32' },
    versionString: 'd:OData__UIVersionString', // 7
    numOfAttachments: 'd:Attachments', //{ '#text': true, 'm:type': 'Edm.Boolean' }
    guidNumber: 'd:GUID', // {'#text': 'fa43bb5a-b3a8-4d66-8e12-eb5a7c68e85b','m:type': 'Edm.Guid'}
    hashText: '#text',
}



const fieldNames2 = {
    fileSystemObjectType: 'FileSystemObjectType', // { '#text': 0, 'm:type': 'Edm.Int32' }, 
    id: 'Id', //{ '#text': 6, 'm:type': 'Edm.Int32' },
    title: 'Title', //'12up Shelftalker Redesign Option 2',
    productNumber: 'Product_x0020_Number_x0028_s_x00', //'F3277',
    quoteNumber: 'Quote_x0020_Number_x003a_', //{ 'm:null': true }, 
    dueDate: 'Due_x0020_Date', //{ '#text': '2017-10-16T04:00:00Z', 'm:type': 'Edm.DateTime' },
    reasonForChange: 'Reason_x0020_for_x0020_change', //'Redesign',
    changeFrom: 'Change_x0020_From_x003a_', //{'#text': "Redesign of Sobey's Shelftalker.",'xml:space': 'preserve'},
    approvedBy: 'Approved_x0020_By_x003a_', //{ 'm:null': true },
    changeType: 'Change_x0020_Type_x003a_', //'Non-Cosmetic -  Material, Press, Processing, Finished Good, Method, or Product Master Changes',
    pjNumber: 'PJ_x0020_Number', // { 'm:null': true },
    linerMark: 'Liner_x0020_Mark', // { '#text': false, 'm:type': 'Edm.Boolean' },
    artworkSendDate: 'Artwork_x0020_Sent_x0020_Date_x0', // { 'm:null': true },
    artworkCustomerComments: 'Artwork_x002f_Customer_x0020_Com', // { 'm:null': true }
    proofApproved: 'Proof_x0020_Approved', // { 'm:null': true }
    artworkApprovedBy: 'Artwork_x0020_Approved_x0020_By_', // { 'm:null': true }
    artworkSentViaEmail: 'Artwork_x0020_Sent_x0020_via_x00', // 'E-mail',
    proofCreated: 'Proof_x0020_Created_x003a_', //{ '#text': '2017-10-17T04:00:00Z', 'm:type': 'Edm.DateTime' },
    contentTypeId: 'ContentTypeId', // 8.736831074195805e+40,
    authorId: 'AuthorId', // { '#text': 177, 'm:type': 'Edm.Int32' },
    editorId: 'EditorId', // { '#text': 172, 'm:type': 'Edm.Int32' },
    dateModified: 'Modified', // { '#text': '2022-09-27T15:24:13Z', 'm:type': 'Edm.DateTime' },
    dateCreated: 'Created', //{ '#text': '2017-10-12T21:05:51Z', 'm:type': 'Edm.DateTime' },
    actionRequested: 'Action_x0020_requested_x003a_', //'New Item - Copying does not obsolete previous',
    logNumber: 'Log_x0020_Number', //1710023
    typeOfProof: 'Type_x0020_of_x0020_Proof', //'PDF With CCL Logo',
    financeApproved: 'Finance_x0020_Approved', //{ '#text': false, 'm:type': 'Edm.Boolean' },
    artworkSendVia: 'Artwork_x0020_Sent_x0020_Via_x000', //{ '#text': false, 'm:type': 'Edm.Boolean' }
    customer: 'Customer', // "Sobey's",
    commentsToPrepress: 'Comments_x0020_to_x0020_PrePress', // { 'm:null': true },
    stage: 'Stage', // 'CLOSED Opportunity Lost'
    newPjNumber: 'New_x0020_PJ_x0020_Number', // { 'm:null': true }
    newPjNumberDate: 'New_x0020_PJ_x0020_Number_x0020_', // { 'm:null': true }
    bomUpdatedCreated: 'BOM_x0020_Updated_x002f_Created_', // { 'm:null': true }
    toolingRequestedDate: 'Tooling_x0020_Requested_x0020_Da', // { 'm:null': true }
    toolingDeliveryDate: 'Tooling_x0020_Delivery_x0020_Dat', // { 'm:null': true }
    toolingPurchaseOrders: 'Tooling_x0020_Purchase_x0020_Ord', // { 'm:null': true }
    overlayPlatesCompletedDate: 'Overlay_x002f_Plates_x0020_Compl', // { 'm:null': true }
    qualityApprovedDate: 'Quality_x0020_Approved_x0020_Dat', // { 'm:null': true }
    emailSta: 'EmailSta', // { 'm:null': true }
    newFNumbers: 'New_x0020_F_x0020_numbers_x003a_', // { 'm:null': true }
    productActivated: 'Product_x0020_Activated_x003a_', // { 'm:null': true }
    costRollupComplete: 'Cost_x0020_Rollup_x0020_Complete', // { 'm:null': true }
    pricingComments: 'Pricing_x0020_Comments', //'<div class="ExternalClassF0E43AD46833433B88EEDB69BC5FD3F8"><html>\n' +'  <p>​Cost detail attached.&#160; No formal pricing to XC yet per Bob.</p>\n' +'</html></div>',
    trial: 'Trial', // 'Trial'
    trialResultComment: 'Trial_x0020_Result_x0020_Comment', // { 'm:null': true }
    dateCompleted: 'Date_x0020_Completed', // { 'm:null': true }
    daysOpen: 'Days_x0020_Open', // 43020.7123958333
    unitOfMeasure: 'Unit_x0020_of_x0020_Measure', // 'Sheet'
    tenativePressDate: 'Tenative_x0020_Press_x0020_Date', // { 'm:null': true }
    tenativePress: 'Tenative_x0020_Press', // { 'm:null': true }
    releaseDate: 'Release_x0020_Date', // { 'm:null': true }
    quotePricingApprived: 'Quote_x002f_Pricing_x0020_Approv', // { 'm:null': true }
    quoteSend: 'Quote_x0020_Sent', // { 'm:null': true }
    toolingBomComments: 'Tooling_x002f_BOM_x0020_comments', // { 'm:null': true }
    prepressComments: 'PrePress_x0020_Comments', // { 'm:null': true }
    toolingComments: 'Tooling_x0020_comments', // { 'm:null': true }
    quantityPerStock: 'Quantity_x0020_per_x0020_Stock', // { '#text': 1000, 'm:type': 'Edm.Double' }
    salesOrderManual: 'Sales_x0020_Order_x002f_Manual_x',
    orderType: 'Order_x0020_Type',
    conversionFactor: 'Conversion_x0020_Factor_x003a_', // 0.001
    pfcWorkF: 'PFCWorkf', // { 'm:null': true }
    csrID: 'CSRId', // { '#text': 2, 'm:type': 'Edm.Int32' }
    engineerID: 'EngineerId', // { '#text': 4, 'm:type': 'Edm.Int32' },
    prepressToolingReq: 'Prepress_x0020_Tooling_x0020_Req', //{ 'm:null': true }
    nonStandardInk: 'Non_x002d_Standard_x0020_Ink_x00', // { 'm:null': true }
    internalProofApproved: 'Internal_x0020_Proof_x0020_Appro', // { 'm:null': true }
    engineerPressSide: 'Engineer_x0020_Press_x0020_Side', // { 'm:null': true }
    marginPercentage: 'Margin_x0020_Percentage', // { 'm:null': true }
    boxedUnit: 'Boxed_x0020_Unit_x0020_of_x0020_', // { 'm:null': true }
    holdItem: 'HOLD_x0020_these_x0020_Item_x002', // { 'm:null': true }
    checkHold: 'CHEKHOLD_x0020_these_x0020_Item_', // { 'm:null': true }
    reasonForHold: 'Reason_x0020_for_x0020_HOLD_x002', // { 'm:null': true }
    isHoldRequired: 'Reason_x0020_for_x0020_HOLD_x002', // { 'm:null': true }
    holdCompletedDate: 'Hold_x0020_Completed_x0020_Date', // { 'm:null': true }
    csEngCompletedDate: 'Customer_x0020_Service_x002f_Eng', // { 'm:null': true }
    idCopy: 'IDcopy', //0,
    createdCopy: 'CreatedCopy', // '2017-10-12T21:05:51Z',
    pfcID: 'ID', // { '#text': 6, 'm:type': 'Edm.Int32' },
    versionString: 'OData__UIVersionString', // 7
    numOfAttachments: 'Attachments', //{ '#text': true, 'm:type': 'Edm.Boolean' }
    guidNumber: 'GUID', // {'#text': 'fa43bb5a-b3a8-4d66-8e12-eb5a7c68e85b','m:type': 'Edm.Guid'}
    attachments: 'Attachments,AttachmentFiles,Editor/ID,Editor/Title,CSR/Title,Author/ID,Author/Title&$expand=AttachmentFiles,Author/ID,Author/Title,Editor/ID,Editor/Title,CSR,Engineer'
}

// let booleanFields = {}

// let textFields = []


// let dateFields = ['d:Due_x0020_Date', 'd:Created']


module.exports = { fieldNames, fieldNames2, dFieldNames}