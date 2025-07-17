import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { AppLayout } from '../components/AppShell/AppLayout'

const trialbalance = () => {
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
      <h2 className="text-primary-activelink font-semibold text-[34px] font-montserrat pl-10 pt-5">
                      Trial Balance Report:
                    </h2>
                    <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
                   The Trial Balance is a financial report that lists all the accounts in the general ledger along with their respective debit and credit balances at a specific point in time. Its primary purpose is to ensure that the total debits equal the total credits, maintaining the accounting equation's accuracy. If the trial balance does not balance, it indicates an error, such as incorrect entries, missing transactions, or misclassifications. For example, if the farm spent money on equipment maintenance, the expense would be debited to the maintenance account, while the same amount would be credited to the cash or bank account. The trial balance ensures both sides are equal, proving the mathematical accuracy of the financial records.
                      <br /><br/>
                    </div>
                    <div className="pl-13 pt-8 flex justify-center">
                      {listview && (
                        <GatsbyImage
                          image={listview}
                          alt="Startups illustration"
                          className="bg-white w-[1000.58px] "
                        />
                      )}
                    </div>
                    </div>
      
    </div>
    </AppLayout>
  )
}

export default trialbalance
export const Head = () => (
  <>
<title>TrialBalance | Farm Management System</title>
 <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
</>
)