import * as React from "react";

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
         costest: file(relativePath: { eq: "costest.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
         farmresource: file(relativePath: { eq: "farmresource.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
         uptask: file(relativePath: { eq: "uptask.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
          menu: file(relativePath: { eq: "menu.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const lanoverview = getImage(data.lanoverview);
   const costest = getImage(data.costest);
    const farmresource = getImage(data.farmresource);
     const uptask = getImage(data.uptask);
     const menu = getImage(data.menu);
  return (
    <AppLayout>
      <main>
        <div className="flex flex-col justify-center">
          <h2 className="text-primary-activelink font-semibold text-[34px] font-montserrat pl-10 pt-5">
            Dashboard
          </h2>
          <p className="text-primary-paragraph text-[18px] font-montserrat font-normal px-10 pt-4">
            After logging into the system, the screen that will be first
            accessible to you will be the dashboard. The dashboard will provide
            you an overview of the farm.
          </p>

          <div className="flex items-center pt-5 space-x-4">
            <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10 ">
              Step 1
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div>
          </div>
          <div>
            {" "}
            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Land Overview
            </h2>
            <p className="text-primary-paragraph text-[18px] font-montserrat font-normal pl-10">
              Welcome to the Farm Management System! Designed specifically for
              agriculture sector, this system will allow you to track your
              crops, manage your expenses, manage your tasks and plan your
              resources well. It will make your work easy and assist you in
              getting better results. An integrated system for streamlined farm
              management. In this user manual, we will show you how to get
              started on the system and how to set up your farm. Let’s get
              started!
            </p>
            <div className="pl-13 pt-8 flex justify-center">
              {lanoverview && (
                <GatsbyImage
                  image={lanoverview}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px] "
                />
              )}
            </div>
          </div>
          <div className="flex items-center pt-10 space-x-4">
            <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10 ">
              Step 2
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div>
          </div>
          <div>
            {" "}
            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10 ">
              Cost Estimation:
            </h2>
            <p className="text-primary-paragraph text-[18px] font-montserrat font-normal pl-10">
              You will get an insight about your farming business. You can see
              how much cost has been incurred and whether you are gaining profit
              or are in loss. Also, you can see the graphical representation for
              the cost estimates. You can further refine the cost estimations by
              filtering them based on your preferred date range.
            </p>
            <div className="pl-13 pt-8 flex justify-center">
              {costest && (
                <GatsbyImage
                  image={costest}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px]"
                />
              )}
            </div>
          </div>
          <div className="flex items-center pt-5 space-x-4">
            <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 3
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div>
          </div>
          <div>
            {" "}
            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Upcoming Tasks:
            </h2>
            <p className="text-primary-paragraph text-[18px] font-montserrat font-normal  pl-10">
              In this portion of dashboard, you can see list of top three
              upcoming tasks to be done along with their due dates.
            </p>
            <div className="pl-13 pt-8 flex justify-center">
              {uptask && (
                <GatsbyImage
                  image={uptask}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px]"
                />
              )}
            </div>
            <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
                Step 4
              </h2>
              <div className="flex-1 h-px bg-primary-line"></div>
            </div>
          </div>
          <div>
            {" "}
            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Menu:
            </h2>
            <p className="text-primary-paragraph2 text-[19px] font-montserrat font-normal px-10">
              On the left-hand side of your screen, you will see a list of menu
              options. The menu is your gateway to all features, the menu
              ensures you can move easily between functions and keep on top of
              your farm operations.
              <br /> The options in the menu are:
              <br />
              <br />{" "}
              <span className="text-primary-pheading font-semibold">Task</span>: Plan,
              assign, and track farm activities efficiently.
              <br />{" "}
              <span className="text-primary-pheading font-semibold">
                Farm Locations
              </span>
              : Manage and monitor all your farm locations in one place.
              <br />{" "}
              <span className="text-primary-pheading font-semibold">Planting</span>:
              Record planting and monitor crop progress.
              <br />{" "}
              <span className="text-primary-pheading font-semibold">Warehouse</span>:
              Organize and track items stored in your farm’s warehouses.
              <br />{" "}
              <span className="text-primary-pheading font-semibold">Inventory</span>:
              Keep a detailed record of your farm supplies and stock levels.
              <br />{" "}
              <span className="text-primary-pheading font-semibold">Machinery</span>:
              Manage machinery details, maintenance schedules, and usage.
              <br />{" "}
              <span className="text-primary-pheading font-semibold">Contact</span>:
              Maintain a list of important contacts for your farm operations.
              <br />{" "}
              <span className="text-primary-pheading font-semibold">Financial</span>:
              Track farm expenses, income, and overall financial performance.
              <br />{" "}
              <span className="text-primary-pheading font-semibold">Manage User</span>
              : Add, remove, or edit user access to the farm management system.
              <br />{" "}
              <span className="text-primary-pheading font-semibold">Reports</span>:
              Generate detailed insights and performance analytics for your
              farm. On top you have the options of:
              <br />{" "}
              <span className="text-primary-pheading font-semibold">
                View Profile
              </span>
              : Access and update your personal account information.
              <br />{" "}
              <span className="text-primary-pheading font-semibold">Logout</span>:
              Exit the farm management system.
              <br/><br/>
              Navigate through the various possibilities to form your own
              understanding of the system. The later section of document
              provides the details of the each of option.
            </p>
            <div className="pl-13 pt-8 flex justify-center">
              {menu && (
                <GatsbyImage
                  image={menu}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px]"
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
<title>Dashboard | Farm Management System</title>
 <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
</>
)
