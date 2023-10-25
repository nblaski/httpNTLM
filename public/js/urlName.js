
const { fieldNames2 } = require('./fieldNames.js');


const urlName2 = "http://lblbufsp2.ccllabel.cclind.net/PCC/_api/web/lists/GetByTitle('PFC%20View%20Listing')/items?$top=5&$select=ID,Stage,Title,Modified,EditorId,Created,Id,Title,Product_x0020_Number_x0028_s_x00,Quote_x0020_Number_x003a_,Due_x0020_Date,Reason_x0020_for_x0020_change,Change_x0020_From_x003a_,Approved_x0020_By_x003a_,Change_x0020_Type_x003a_,PJ_x0020_Number,Liner_x0020_Mark,Artwork_x0020_Sent_x0020_Date_x0,Artwork_x002f_Customer_x0020_Com,Proof_x0020_Approved,Artwork_x0020_Approved_x0020_By_,Artwork_x0020_Sent_x0020_via_x00,Proof_x0020_Created_x003a_,ContentTypeId,Action_x0020_requested_x003a_,Log_x0020_Number,Type_x0020_of_x0020_Proof,Finance_x0020_Approved,Artwork_x0020_Sent_x0020_Via_x000,Customer,Comments_x0020_to_x0020_PrePress,New_x0020_PJ_x0020_Number,New_x0020_PJ_x0020_Number_x0020_,BOM_x0020_Updated_x002f_Created_,Tooling_x0020_Requested_x0020_Da,Tooling_x0020_Delivery_x0020_Dat,Tooling_x0020_Purchase_x0020_Ord,Overlay_x002f_Plates_x0020_Compl,Quality_x0020_Approved_x0020_Dat,EmailSta,New_x0020_F_x0020_numbers_x003a_,Product_x0020_Activated_x003a_,Cost_x0020_Rollup_x0020_Complete,Pricing_x0020_Comments,Trial,Trial_x0020_Result_x0020_Comment,Date_x0020_Completed,Days_x0020_Open,Unit_x0020_of_x0020_Measure,Tenative_x0020_Press_x0020_Date,Tenative_x0020_Press,Release_x0020_Date,Quote_x002f_Pricing_x0020_Approv,Quote_x0020_Sent,Tooling_x002f_BOM_x0020_comments,PrePress_x0020_Comments,Tooling_x0020_comments,Quantity_x0020_per_x0020_Stock,Sales_x0020_Order_x002f_Manual_x,Order_x0020_Type,Conversion_x0020_Factor_x003a_,PFCWorkf,Prepress_x0020_Tooling_x0020_Req,Non_x002d_Standard_x0020_Ink_x00,Internal_x0020_Proof_x0020_Appro,Engineer_x0020_Press_x0020_Side,Margin_x0020_Percentage,Boxed_x0020_Unit_x0020_of_x0020_,HOLD_x0020_these_x0020_Item_x002,CHEKHOLD_x0020_these_x0020_Item_,Reason_x0020_for_x0020_HOLD_x002,Reason_x0020_for_x0020_HOLD_x002,Hold_x0020_Completed_x0020_Date,Customer_x0020_Service_x002f_Eng,IDcopy,CreatedCopy,ID,OData__UIVersionString,GUID,Attachments,AttachmentFiles,Editor/ID,Editor/Title,CSR/Title,Author/ID,Author/Title&$expand=AttachmentFiles,Author/ID,Author/Title,Editor/ID,Editor/Title,CSR"


const urlName3 = "http://lblbufsp2.ccllabel.cclind.net/PCC/_api/web/lists/GetByTitle('PFC%20View%20Listing')/items?$top=5&$select=ID,Stage,Title,Modified,EditorId,Created,Id,Title,Product_x0020_Number_x0028_s_x00,Quote_x0020_Number_x003a_,Due_x0020_Date,Reason_x0020_for_x0020_change,Change_x0020_From_x003a_,Approved_x0020_By_x003a_,Change_x0020_Type_x003a_,PJ_x0020_Number,Liner_x0020_Mark,Artwork_x0020_Sent_x0020_Date_x0,Artwork_x002f_Customer_x0020_Com,Proof_x0020_Approved,Artwork_x0020_Approved_x0020_By_,Artwork_x0020_Sent_x0020_via_x00,Proof_x0020_Created_x003a_,ContentTypeId,Action_x0020_requested_x003a_,Log_x0020_Number,Type_x0020_of_x0020_Proof,Finance_x0020_Approved,Artwork_x0020_Sent_x0020_Via_x000,Customer,Comments_x0020_to_x0020_PrePress,New_x0020_PJ_x0020_Number,New_x0020_PJ_x0020_Number_x0020_,BOM_x0020_Updated_x002f_Created_,Tooling_x0020_Requested_x0020_Da,Tooling_x0020_Delivery_x0020_Dat,Tooling_x0020_Purchase_x0020_Ord,Overlay_x002f_Plates_x0020_Compl,Quality_x0020_Approved_x0020_Dat,EmailSta,New_x0020_F_x0020_numbers_x003a_,Product_x0020_Activated_x003a_,Cost_x0020_Rollup_x0020_Complete,Pricing_x0020_Comments,Trial,Trial_x0020_Result_x0020_Comment,Date_x0020_Completed,Days_x0020_Open,Unit_x0020_of_x0020_Measure,Tenative_x0020_Press_x0020_Date,Tenative_x0020_Press,Release_x0020_Date,Quote_x002f_Pricing_x0020_Approv,Quote_x0020_Sent,Tooling_x002f_BOM_x0020_comments,PrePress_x0020_Comments,Tooling_x0020_comments,Quantity_x0020_per_x0020_Stock,Sales_x0020_Order_x002f_Manual_x,Order_x0020_Type,Conversion_x0020_Factor_x003a_,PFCWorkf,Prepress_x0020_Tooling_x0020_Req,Non_x002d_Standard_x0020_Ink_x00,Internal_x0020_Proof_x0020_Appro,Engineer_x0020_Press_x0020_Side,Margin_x0020_Percentage,Boxed_x0020_Unit_x0020_of_x0020_,HOLD_x0020_these_x0020_Item_x002,CHEKHOLD_x0020_these_x0020_Item_,Reason_x0020_for_x0020_HOLD_x002,Hold_x0020_Completed_x0020_Date,Customer_x0020_Service_x002f_Eng,OData__UIVersionString,GUID,CreatedCopy,IDcopy,Attachments,AttachmentFiles,Editor/ID,Editor/Title,CSR/Title,Author/ID,Author/Title,Engineer/ID,Engineer/Title&$expand=AttachmentFiles,Author/ID,Author/Title,Editor/ID,Editor/Title,CSR,Engineer"

const urlVersions = "http://lblbufsp2.ccllabel.cclind.net/PCC/_layouts/15/versions.aspx?list=13fc2605-48a0-4926-94e9-8f7206af9146&ID=2"

const urlName = "http://lblbufsp2.ccllabel.cclind.net/PCC/_api/web/lists/GetByTitle('PFC%20View%20Listing')/items?$top=5&$select=ID,Stage,Title,Modified,EditorId,Created,Product_x0020_Number_x0028_s_x00,Quote_x0020_Number_x003a_,Action_x0020_requested_x003a_,Approved_x0020_By_x003a_,Artwork_x0020_Sent_x0020_Date_x0,Artwork_x002f_Customer_x0020_Com,Proof_x0020_Approved,Artwork_x0020_Approved_x0020_By_,Artwork_x0020_Sent_x0020_via_x00,Proof_x0020_Created_x003a_,ContentTypeId,Type_x0020_of_x0020_Proof,Customer,Comments_x0020_to_x0020_PrePress,New_x0020_PJ_x0020_Number,New_x0020_PJ_x0020_Number_x0020_,Liner_x0020_Mark,Due_x0020_Date,New_x0020_PJ_x0020_Number_x0020_,Attachments,AttachmentFiles,Editor/ID,Editor/Title,CSR/Title,Author/ID,Author/Title&$expand=AttachmentFiles,Author/ID,Author/Title,Editor/ID,Editor/Title,CSR"




            // fieldNames2.actionRequested + ',' +
            // fieldNames2.approvedBy + ',' +
            // fieldNames2.artworkApprovedBy + ',' +
            // fieldNames2.artworkCustomerComments + ',' +
            // fieldNames2.artworkSendDate + ',' +
            // fieldNames2.artworkSendVia + ',' +
            // fieldNames2.artworkSentViaEmail + ',' +
            // fieldNames2.bomUpdatedCreated + ',' +
            // fieldNames2.boxedUnit + ',' +
            // fieldNames2.changeFrom + ',' +
            // fieldNames2.changeType + ',' +
            // fieldNames2.checkHold + ',' +
            // fieldNames2.commentsToPrepress + ',' +
            // fieldNames2.contentTypeId + ',' +
            // fieldNames2.conversionFactor + ',' +
            // fieldNames2.costRollupComplete + ',' +
            // fieldNames2.createdCopy + ',' +
            // fieldNames2.csEngCompletedDate + ',' +
            // fieldNames2.customer + ',' +
            // fieldNames2.dateCompleted + ',' +
            // fieldNames2.dateCreated + ',' +
            // fieldNames2.dateModified + ',' +
            // fieldNames2.daysOpen + ',' +
            // fieldNames2.dueDate + ',' +
            // fieldNames2.editorId + ',' +
            // fieldNames2.emailSta + ',' +
            // fieldNames2.engineerID + ',' +
            // fieldNames2.engineerPressSide + ',' +
            // fieldNames2.financeApproved + ',' +
            // fieldNames2.guidNumber + ',' +
            // fieldNames2.holdCompletedDate + ',' +
            // fieldNames2.holdItem + ',' +
            // fieldNames2.id + ',' +
            // fieldNames2.internalProofApproved + ',' +
            // fieldNames2.isHoldRequired + ',' +
            // fieldNames2.linerMark + ',' +
            // fieldNames2.logNumber + ',' +
            // fieldNames2.marginPercentage + ',' +
            // fieldNames2.newFNumbers + ',' +
            // fieldNames2.newPjNumber + ',' +
            // // fieldNames2.newPjNumberDate + ',' +
            // fieldNames2.nonStandardInk + ',' +
            // fieldNames2.numOfAttachments + ',' +
            // fieldNames2.orderType + ',' +
            // fieldNames2.overlayPlatesCompletedDate + ',' +
            // fieldNames2.pfcID + ',' +
            // fieldNames2.pfcWorkF + ',' +
            // fieldNames2.pjNumber + ',' +
            // fieldNames2.prepressComments + ',' +
            // fieldNames2.prepressToolingReq + ',' +
            // fieldNames2.pricingComments + ',' +
            // fieldNames2.productActivated + ',' +
            // fieldNames2.productNumber + ',' +
            // fieldNames2.proofApproved + ',' +
            // fieldNames2.proofCreated + ',' +
            // fieldNames2.qualityApprovedDate + ',' +
            // fieldNames2.quantityPerStock + ',' +
            // fieldNames2.quoteNumber + ',' +
            // fieldNames2.quotePricingApprived + ',' +
            // fieldNames2.quoteSend + ',' +
            // fieldNames2.reasonForChange + ',' +
            // fieldNames2.reasonForHold + ',' +
            // fieldNames2.releaseDate + ',' +
            // fieldNames2.salesOrderManual + ',' +
            // fieldNames2.stage + ',' +
            // fieldNames2.tenativePress + ',' +
            // fieldNames2.tenativePressDate + ',' +
            // fieldNames2.title + ',' +
            // fieldNames2.toolingBomComments + ',' +
            // fieldNames2.toolingComments + ',' +
            // fieldNames2.toolingDeliveryDate + ',' +
            // fieldNames2.toolingPurchaseOrders + ',' +
            // fieldNames2.toolingRequestedDate + ',' +
            // fieldNames2.trial + ',' +
            // fieldNames2.trialResultComment + ',' +
            // fieldNames2.typeOfProof + ',' +
            // fieldNames2.unitOfMeasure + ',' +
            // fieldNames2.versionString + ',' +
            // "Attachments,AttachmentFiles,Editor/ID,Editor/Title,CSR/Title,Author/ID,Author/Title&$expand=AttachmentFiles,Author/ID,Author/Title,Editor/ID,Editor/Title,CSR"
            
module.exports = { urlName, urlName2, urlName3, urlVersions }


           // url: "http://lblbufsp2.ccllabel.cclind.net/PCC/_api/web/lists/GetByTitle('PFC%20View%20Listing')/items?$top=5",
            // url: "http://lblbufsp2.ccllabel.cclind.net/PCC/_api/web/lists/GetByTitle('PFC%20View%20Listing')/items?$top=5&$select=Title,Author/ID,Author/Title&$expand=Author/ID,Author/Title&$select=CSR/Title&$expand=CSR&$select=ID,Title,Stage,Quote_x0020_Number_x003a_,Reason_x0020_for_x0020_change,Product_x0020_Number_x0028_s_x00,Due_x0020_Date,Reason_x0020_for_x0020_change,Change_x0020_From_x003a_,Approved_x0020_By_x003a_,Change_x0020_Type_x003a_,PJ_x0020_Number,Liner_x0020_Mark,Modified,EditorId",
            // url: "http://lblbufsp2.ccllabel.cclind.net/PCC/_api/web/lists/GetByTitle('PFC%20View%20Listing')/items?$top=5&$select=ID,Stage,Title,Modified,EditorId,Product_x0020_Number_x0028_s_x00,Quote_x0020_Number_x003a_,Due_x0020_Date,Reason_x0020_for_x0020_change,Change_x0020_From_x003a_,Approved_x0020_By_x003a_,Change_x0020_Type_x003a_,PJ_x0020_Number,Liner_x0020_Mark,Artwork_x0020_Sent_x0020_Date_x0,Artwork_x002f_Customer_x0020_Com,Proof_x0020_Approved,Artwork_x0020_Approved_x0020_By_,Artwork_x0020_Sent_x0020_via_x00,Proof_x0020_Created_x003a_,ContentTypeId,Created,Action_x0020_requested_x003a_,Log_x0020_Number,Type_x0020_of_x0020_Proof,Editor/ID,Editor/Title,CSR/Title,Author/ID,Author/Title&$expand=Author/ID,Author/Title,Editor/ID,Editor/Title,CSR",

                        // url: "http://lblbufsp2.ccllabel.cclind.net/PCC/_api/web/lists/GetByTitle('PFC%20View%20Listing')/items?$top=5&$select=ID,Stage,Title,Modified,EditorId,Product_x0020_Number_x0028_s_x00,Quote_x0020_Number_x003a_,Due_x0020_Date,Reason_x0020_for_x0020_change,Change_x0020_From_x003a_,Approved_x0020_By_x003a_,Change_x0020_Type_x003a_,PJ_x0020_Number,Liner_x0020_Mark,Artwork_x0020_Sent_x0020_Date_x0,Artwork_x002f_Customer_x0020_Com,Proof_x0020_Approved,Artwork_x0020_Approved_x0020_By_,Artwork_x0020_Sent_x0020_via_x00,Proof_x0020_Created_x003a_,ContentTypeId,Created,Action_x0020_requested_x003a_,Log_x0020_Number,Type_x0020_of_x0020_Proof,Editor/ID,Editor/Title,CSR/Title,Author/ID,Author/Title&$expand=Author/ID,Author/Title,Editor/ID,Editor/Title,CSR",