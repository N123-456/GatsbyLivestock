import * as React from "react"

import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const IndexPage = () => {
  const data = useStaticQuery(graphql`
      query {
        lanoverview: file(relativePath: { eq: "lanoverview.png" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    `);
    const lanoverview=getImage(data.lanoverview);
  return (
    
  <AppLayout>
    <main>
      <div className="flex flex-col ">
                <h2 className="text-primary-activelink font-semibold text-[34px] font-montserrat pl-10 pt-5">
                  Dashboard
                </h2>
                <p className="text-primary-paragraph text-[18px] font-montserrat font-normal px-10 pt-4">
                 After logging into the system, the screen that will be first accessible to you will be the dashboard. The dashboard will provide you an overview of the farm. 
                </p>
                
                    <div className="flex items-center pt-5 space-x-4">
                    <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] ">Step 1</h2>
                    <div className="flex-1 h-px bg-primary-line"></div>
                    </div>
                    <div>    <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5">
            Land Overview
          </h2>
          <p className="text-primary-paragraph text-[18px] font-montserrat font-normal pt-4">
            Welcome to the Farm Management System! Designed specifically for
            agriculture sector, this system will allow you to track your crops,
            manage your expenses, manage your tasks and plan your resources
            well. It will make your work easy and assist you in getting better
            results. An integrated system for streamlined farm management. In
            this user manual, we will show you how to get started on the system
            and how to set up your farm. Let’s get started!
          </p>
           <div className="pl-13 pt-8 flex justify-center">
                      {lanoverview && (
                      <GatsbyImage
                        image={lanoverview}
                        alt="Startups illustration"
                        className="bg-white w-[1500.58px] h-[580px]"
                      />
                    )}
                    </div>
                    <div className="flex items-center pt-10 space-x-4">
                    <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] ">Step 2</h2>
                    <div className="flex-1 h-px bg-primary-line"></div>
                    </div>
                                        <div>    <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5">
            Cost Estimation:
          </h2>
          <p className="text-primary-paragraph text-[18px] font-montserrat font-normal pt-4">
           You will get an insight about your farming business. You can see how much cost has been incurred and whether you are gaining profit or are in loss. Also, you can see the graphical representation for the cost estimates. You can further refine the cost estimations by filtering them based on your preferred date range.
          </p>
           <div className="pl-13 pt-8 flex justify-center">
                      {lanoverview && (
                      <GatsbyImage
                        image={lanoverview}
                        alt="Startups illustration"
                        className="bg-white w-[1500.58px] h-[580px]"
                      />
                    )}
                    </div>
          </div>
              </div></div>
    </main>
    </AppLayout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
