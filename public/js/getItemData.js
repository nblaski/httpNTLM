function ifBlankTextField(value) {
    const mNull = 'm:null'
    if(value[mNull] === true ) {
        value = 'NA'
      }
      return value;
}

function ifBlankDateField(value) {
    const mNull = 'm:null'
    if(value === undefined ) {
        value = 'NA'
      }
      return value;
}

function getItemData(result) {
    let itemArray = [];
    console.log("CALL GET FIELDS")
    // console.log(result)
    result.data.forEach((element) => {
        // const author = element.author
        // console.log(Object.keys(author))
        // console.log("author" + author)
        const content = element.content
        const mProp = 'm:properties'
        const hashText = '#text'
        const id = 'd:id'
        const fields = content[mProp]

        // id: 'd:Id', //{ '#text': 6, 'm:type': 'Edm.Int32' },
        const dId = 'd:Id'
        const itemId = fields[dId][hashText]

        // title: 'd:Title', //'12up Shelftalker Redesign Option 2',
        const dTitle = 'd:Title'
        let title = fields[dTitle]
        title = ifBlankTextField(title);

        //productNumber: 'd:Product_x0020_Number_x0028_s_x00', //'F3277'
        const dProductNumber = 'd:Product_x0020_Number_x0028_s_x00'
        let productNumber = fields[dProductNumber]
        productNumber = ifBlankTextField(productNumber)

        //  quoteNumber: 'd:Quote_x0020_Number_x003a_',
        const dQuoteNumber = 'd:Quote_x0020_Number_x003a_'
        let quoteNumber = fields[dQuoteNumber];
        quoteNumber = ifBlankTextField(quoteNumber)

        // dueDate: 'd:Due_x0020_Date', //{ '#text': '2017-10-16T04:00:00Z', 'm:type': 'Edm.DateTime' },
        const dDueDate = 'd:Due_x0020_Date'
        let dueDate = fields[dDueDate][hashText];
        dueDate = ifBlankDateField(dueDate)

        // Return itemData Object
        itemData = { itemId, title, productNumber, quoteNumber, dueDate }
        // console.log(itemData)
        itemArray.push(fields);
    })
    return itemArray;
  }



  module.exports = { getItemData }