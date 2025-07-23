import { graphql, navigate, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import { AppLayout } from '../components/AppShell/AppLayout'
import PrivateRoute from '../components/Privateroute/PrivateRoute'
import { isLoggedIn } from '../utils/auth'

const trialbalance = () => {
  // const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  
  //   useEffect(() => {
  //     const loggedIn = isLoggedIn();
  //     if (!loggedIn) {
  //       navigate("/introduction");
  //     } else {
  //       setIsCheckingAuth(false); // allow page to render
  //     }
  //   }, []);
  
  //   // ⛔ Don't render anything while checking auth
  //   if (isCheckingAuth) return null;
     const data = useStaticQuery(graphql`
        query {
          tbr: file(relativePath: { eq: "tbr.png" }) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
     }}`)
     const tbr = getImage(data.tbr);
  return (
    <AppLayout>
      <PrivateRoute>
    <div>
      <div className='flex flex-col justify-center'>
             <div className="max-w-7xl w-full px-4 lg:px-4  text-justify">
      <h2 className="text-primary-activelink font-semibold text-[34px] font-montserrat lg:pl-10 pt-5">
                      Trial Balance Report:
                    </h2>
                    <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 pt-5">
                   The Trial Balance is a financial report that lists all the accounts in the general ledger along with their respective debit and credit balances at a specific point in time. Its primary purpose is to ensure that the total debits equal the total credits, maintaining the accounting equation's accuracy. If the trial balance does not balance, it indicates an error, such as incorrect entries, missing transactions, or misclassifications. For example, if the farm spent money on equipment maintenance, the expense would be debited to the maintenance account, while the same amount would be credited to the cash or bank account. The trial balance ensures both sides are equal, proving the mathematical accuracy of the financial records.
                      <br /><br/>
                    </div>
                    <div className="pl-13 pt-8 flex justify-center">
                      {tbr && (
                        <GatsbyImage
                          image={tbr}
                          alt="Startups illustration"
                          className="bg-white w-[1000.58px] "
                        />
                      )}
                    </div>
</div>
                    </div>
      
    </div>
    </PrivateRoute>
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