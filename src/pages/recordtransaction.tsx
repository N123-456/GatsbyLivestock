import React from 'react'
import { AppLayout } from '../components/AppShell/AppLayout'
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const recordtransaction = () => {
      const data = useStaticQuery(graphql`
            query {
              listview: file(relativePath: { eq: "listview.png" }) {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
         }}`)
         const listview = getImage(data.listview);
  return (
    <AppLayout>
        <div>
          <div className='flex flex-col justify-center'>
                        <h2 className="text-primary-activelink font-semibold text-[34px] font-montserrat lg:pl-10 pt-5">
                        Record Transaction:
                          </h2>
                          <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                        To record a transaction other than the automatic transactions created, do the following:
                            <br /><br/>
                            <ul className="pl-[15px] list-disc text-primary-paragraph2 font-normal">
                              <li>
                                Go to “Financials” tab.
                              </li>
                              <li>Click on “Record Transaction” button.</li>
                              <li>Enter General details:</li>
                              <li><span className="text-primary-pheading font-bold">Transaction Type:</span> Select the transaction type from the dropdown menu such as assets, revenue, liability etc.</li>
                             <li><span className="text-primary-pheading font-bold">Head of Accounts:</span> You can select one or more options like Cash, Bank,Inventory etc. by clicking on the dropdown menu.</li>
                             <li><span className="text-primary-pheading font-bold">Invoice Number:</span>It is auto generated.</li>
                             <li><span className="text-primary-pheading font-bold">Cheque Number (Optional):</span> If applicable, enter the cheque number.</li>
                             <li><span className="text-primary-pheading font-bold">Date:</span> Use the calendar picker to select the transaction date.</li>
                             <li><span className="text-primary-pheading font-bold">Amount:</span> Enter the total amount for the transaction.</li>
                             <li><span className="text-primary-pheading font-bold">Vendor:</span> Write the name of the vendor.</li>
                             <li><span className="text-primary-pheading font-bold">Life Span (If Applicable): :</span> Select the applicable year using the dropdown menu.</li>
                             <li><span className="text-primary-pheading font-bold">Purpose:</span> Write the purpose or description of the transaction.</li>
                             <br/><div className="pl-13 pt-8 flex justify-center">
                            {listview && (
                              <GatsbyImage
                                image={listview}
                                alt="Startups illustration"
                                className="bg-white w-[1000.58px] "
                              />
                            )}
                          </div><br/>
                             
                             <li>Enter Transaction Details:</li>
                             <li>Once Cash and/or Bank is selected under Head of Accounts, additional fields appear.</li>
                            <br/>
                            <ul className="text-primary-paragraph font-normal">
                                <li className="text-primary-activelink font-bold">For Cash Transactions:</li>
                                <ul><li><span className="text-primary-pheading font-bold">Cash Amount:</span> Enter the amount of cash used for the transaction</li></ul>
                            <br/><li className="text-primary-activelink font-bold">For Bank Transactions:</li>
                             <ul><li><span className="text-primary-pheading font-bold">Bank Name:</span> Select the bank name from the dropdown list.</li>
                             <li><span className="text-primary-pheading font-bold">Bank Account Number:</span> Enter the bank account number associated with the transaction.</li>
                             <li><span className="text-primary-pheading font-bold">Account Title:</span> : Input the account title or name linked to the bank account.</li>
                             <li><span className="text-primary-pheading font-bold">Bank Amount:</span> Enter the transaction amount to be recorded for the bank account.</li></ul>
                            </ul>
                        <br/>
                           <div className="pl-13 pt-8 flex justify-center">
                            {listview && (
                              <GatsbyImage
                                image={listview}
                                alt="Startups illustration"
                                className="bg-white w-[1000.58px] "
                              />
                            )}
                          </div><br/>
                          <li>Add Association and Additional Information:</li>
                          <li><span className="text-primary-pheading font-bold">Associated To:</span> Use the dropdown to link the transaction to an associated entity or value.</li>
                            <li><span className="text-primary-pheading font-bold">Receiver Name:</span> Write the name of the person or entity receiving the payment.</li>
                            <li><span className="text-primary-pheading font-bold">Description:</span> Provide a brief description of the transaction.</li>
                            <li><span className="text-primary-pheading font-bold">Attachment:</span> Upload any relevant documents by clicking the Attachment button.</li>
                            <li><span className="text-primary-pheading font-bold">Step 4: Save the Transaction</span></li>
                            <li>After filling in all required fields, click on the Submit button.</li>
                            <li>Transaction will be created successfully.</li>
            <br/>
                               <div className="pl-13 pt-8 flex justify-center">
                            {listview && (
                              <GatsbyImage
                                image={listview}
                                alt="Startups illustration"
                                className="bg-white w-[1000.58px] "
                              />
                            )}
                          </div><br/>
                          <p>Notes</p><br/>
                          <li>Fields marked as optional can be left blank if not applicable.</li>
                           <li>Ensure you select Head of Accounts first to enable the respective Cash and Bank input fields.</li> 
                            <li>Double-check the values for accuracy before saving.</li>
                            </ul>
                          </div><br/>
                          </div>
        </div>
    </AppLayout>
  )
}

export default recordtransaction
export const Head = () => (
  <>
<title>RecordTransaction | Farm Management System</title>
 <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
</>
)