import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";

const maintenance = () => {
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
      main: file(relativePath: { eq: "main.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      amain: file(relativePath: { eq: "amain.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      smain: file(relativePath: { eq: "smain.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      dmain: file(relativePath: { eq: "dmain.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      vmain: file(relativePath: { eq: "vmain.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
     
    }
  `);
  const main = getImage(data.main);
  const amain = getImage(data.amain);
  const smain = getImage(data.smain);
  const dmain = getImage(data.dmain);
  const vmain = getImage(data.vmain);
  
  return (
    <AppLayout>
      <PrivateRoute>
      <div>
        <div className="flex flex-col justify-center">
            <div className="max-w-7xl w-full px-4 lg:px-4  text-justify">
          <h2 className="text-primary-activelink font-semibold text-[34px] font-montserrat lg:pl-10 pt-5">
            Starting Guide for Maintenance:
          </h2>
          <p className="text-primary-paragraph text-[18px] font-montserrat font-normal lg:px-10 pt-4">
            Maintenance of machinery involves regular checks, repairs, and
            servicing to ensure the equipment works efficiently and lasts
            longer. This includes cleaning, lubricating moving parts, checking
            for wear and tear, and replacing worn-out components. It's important
            to follow the manufacturer's guidelines for maintenance schedules
            and procedures. Preventive maintenance helps reduce unexpected
            breakdowns and costly repairs. Operators and technicians should be
            trained to identify signs of potential issues early. Regular
            inspections can detect problems like leaks, unusual sounds, or
            vibrations. Machinery should also be calibrated and tested
            periodically for optimal performance. Maintenance records should be
            kept for tracking repairs and updates. By maintaining equipment
            well, businesses can reduce downtime and improve productivity.
          </p>
          <div className="pl-13 pt-8 flex justify-center">
            {main && (
              <GatsbyImage
                image={main}
                alt="Startups illustration"
                className="bg-white w-[1000.58px] "
              />
            )}
          </div>

          <div className="flex items-center pt-5 space-x-4">
            <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
              Step 1
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div>
          </div>
          <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
            Add Maintenance:
          </h2>
          <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
            <p>For adding maintenance</p>
            Click on{" "}
            <span className="text-primary-activelink font-semibold">
              "Machinery"
            </span>
            button.
            <p>
              Click on the three dots against the machinery you want to add
              maintenance record..
            </p>
            <p>Click on <span className="text-primary-activelink font-semibold">
              "Maintenance"
            </span> button</p>
            <p>Enter the required details:</p>
            <br />
            <ul className="list-disc ">
              <li>
                What type of maintenance service will be performed on the
                machinery either wash or repair.{" "}
              </li>
              <li>
                When was the maintenance performed, when it started, when it
                ended and when the machinery was delivered after maintenance.
              </li>
              <li>Who performed the service</li>
              <li>
                Transaction details including cost of maintenance, head of
                accounts, and transaction id/ cheque no in case of head of
                accounts is bank.
              </li>
              <li>Description of service</li>
              <li>
                Inventory used and in how much quantity. Available quantity of
                inventory will be shown. Quantity to be used cannot exceed the
                available quantity.
              </li>
            </ul>
            <br />
            <p>Click on the submit button.</p>
            <p>Maintenance will be added successfully.</p>
            <p>Inventory will be reduced</p>
            <p>
              Transaction will be created against the maintenance as it is an
              expense.
            </p>
            <div className="pl-13 pt-8 flex justify-center">
              {amain && (
                <GatsbyImage
                  image={amain}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px] "
                />
              )}
            </div>
          </div>

          <div className="flex items-center pt-5 space-x-4">
            <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
              Step 2
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div>
          </div>
          <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
            Search Maintenance:
          </h2>
          <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
            You can search the maintenance from the list of maintenance of
            locations present in the system. You can search based on either:
            <br />
            <ul >
              <li>
                <p><span className="text-primary-pheading font-bold">
              Name
            </span>: You can search by the name of machinery.</p>
              </li>
              <li>
                <p>
                   <span className="text-primary-pheading font-bold">
              Service
            </span>: You can search by the service performed on the
                  machinery which can be either:
                </p>
                <ul className="text-primary-activelink font-semibold pl-[15px]">
                  <li>Wash</li>
                  <li>Repair</li>
                </ul>
              </li>

              <br />
              <p>
                Then click on the Search button. Also, you can click on the
                refresh button to refresh the data.
              </p>
              <div className="pl-13 pt-8 flex justify-center">
                {smain && (
                  <GatsbyImage
                    image={smain}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
            </ul>
            <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                Step 3
              </h2>
              <div className="flex-1 h-px bg-primary-line"></div>
            </div>
            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
              Edit Maintenance:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
              If any maintenance details you want to change, you can easily edit
              the details. For that:
              <br />
              <br />
              <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                <li>Click on the edit icon</li>
                <li>Maintenance details screen will open.</li>
                <li>Click on the field you want to edit.</li>
                <li>Make changes in the fields</li>
                <li>Click on submit button.</li>
                <li>
                  Maintenance details will be edited/updated successfully.
                </li>
              </ul>
            </div>
            <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                Step 4
              </h2>
              <div className="flex-1 h-px bg-primary-line"></div>
            </div>
            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
              Delete Maintenance:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
              If you want to delete the maintenance, you can easily do so.
              <br />
              <br />
              <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                <li>
                  Click on the delete icon against the row you want to delete in
                  the maintenance’s table.
                </li>
                <li>
                  A dialogue box will appear to confirm whether you want to
                  delete or not.
                </li>
                <li>Click on delete button.</li>
                <li>Maintenance will be deleted successfully.</li>
              </ul>
            </div>
            <div className="pl-13 pt-8 flex justify-center">
              {dmain && (
                <GatsbyImage
                  image={dmain}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px] "
                />
              )}
            </div>
            <div className="flex items-center pt-5 space-x-4">
            <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
              Step 5
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
              View Maintenance:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
              You can easily view the details of the maintenance. For that:
              <br />
              <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                <li>Hover on three dots.</li>
                <li>Click on view button.</li>
                <li>Click on delete button.</li>
                <li>Maintenance details page will open.</li>
                <li>
                  Click on print button if you want to print the details of the
                  maintenance.
                </li>
              </ul>
            </div>
            <div className="pl-13 pt-8 flex justify-center">
              {vmain && (
                <GatsbyImage
                  image={vmain}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px] "
                />
              )}
            </div>
           
          </div>
          </div>
        </div>
      </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default maintenance;
export const Head = () => (
  <>
<title>Maintenance | Farm Management System</title>
 <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
</>
)