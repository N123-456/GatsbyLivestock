import React from "react";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { AppLayout } from "../components/AppShell/AppLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import TextToSpeech from "../components/TextToSpeech";

const orchardfertilizer = () => {
  const data = useStaticQuery(graphql`
    query {
      fertilizer: file(relativePath: { eq: "fertilizer.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      AF: file(relativePath: { eq: "AF.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      AF1: file(relativePath: { eq: "AF1.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      SF: file(relativePath: { eq: "SF.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      DF: file(relativePath: { eq: "DF.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      VF: file(relativePath: { eq: "VF.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const fertilizer = getImage(data.fertilizer);
  const AF = getImage(data.AF);
  const AF1 = getImage(data.AF1);
  const SF = getImage(data.SF);
  const DF = getImage(data.DF);
  const VF = getImage(data.VF);
  return (
    <AppLayout>
      <PrivateRoute>
        <div>
          <div className="flex flex-col justify-center">
            <div className="acu lg:pr-4 text-justify">
              <div className="flex items-center">
                <div className="hidden lg:block">
                  <TextToSpeech textSelector=".acu" />
                </div>
                <h2 className="text-primary-activelink font-semibold text-[30px] font-montserrat dark:text-[#FFFFFF]">
                  Starting Guide for Fertilizer:
                </h2>
              </div>
              <div className="flex items-center pt-5">
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-[#BE8B45]">
                  Introduction
                </h2>
                <div className=" lg:hidden">
                  <TextToSpeech textSelector=".acu" />
                </div>
              </div>

              <p className="text-primary-paragraph text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
                Fertilizers are substances added to soil or plants to provide
                essential nutrients that promote healthy growth and increase
                crop yield. They supply key nutrients like nitrogen, phosphorus,
                and potassium, which plants need for development. Fertilizers
                can be organic (e.g., compost, manure) or chemical-based,
                depending on the farm's needs. Proper use of fertilizers
                improves soil fertility, strengthens plants, and ensures better
                quality produce. It is important to apply the right type and
                amount of fertilizer to avoid harming crops or the environment.
                Now within the Fertilizer feature, you can have a fertilizer
                applied to a specific crop. From there you can essentially
                ensure that the Orchard will always have that fertilizer given
                to it and FMS will make sure that a task regarding fertilization
                of the field will have that fertilizer attached to it. Below is
                an example of what it looks like:
                <br />
                Now, lets us show how to add a fertilizer entry on your Orchard
                entry in FMS!
              </p>

              <br />
              <br />

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl- dark:text-[#BE8B45]">
                  Step 1
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <h2 className="text-primary-subheading pt-5 font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-[#D5D5D5]">
                Adding a Fertilizer:
              </h2>

              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
                <p>
                  If you want to add a Fertilizer to your Orchard, you must make
                  sure that there are a few things you need ready and set up:
                </p>
                <br />
                <ul className="list-disc">
                  <li>
                    An Inventory entry of the Fertilizer product. (Learn more
                    here)
                  </li>
                  <li>
                    A Purchase Requisition entry of the Fertilizer for your
                    farm. (Learn more here)
                  </li>
                  <li>
                    A Purchase Order entry of the Fertilizer for your farm.
                    (Learn more here)
                  </li>
                  <li>
                    A Goods receiving note for the Fertilizer you purchased
                    (Learn more here)
                  </li>
                </ul>
                <br />
                <p>
                  Now that we have all the required assets for the farm we need
                  to add a fertilizer entry for our Orchard, Now let us start
                  by:
                </p>
                <p>
                  First, you need to go to the{" "}
                  <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                    "Fertilizer"
                  </span>{" "}
                  page of the Orchard you want to add Fertilizers to.
                </p>
                <ul className="list-disc">
                  <li>
                    You start by, selecting the{" "}
                    <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                      "Three dots"
                    </span>{" "}
                    icon [shown as “⋮” icon], located at the right-side of the
                    Orchard you want to add Fertilizer to.
                  </li>
                  <li>
                    A small window will appear containing a list of buttons.
                  </li>
                  <li>
                    Select the{" "}
                    <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                      "Fertilizer"
                    </span>{" "}
                    button located as the third option in this list, below the{" "}
                    <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                      "Tasks"
                    </span>{" "}
                    button and above the “Chemicals” button.
                  </li>
                  <li>
                    You will then be taken to the{" "}
                    <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                      "Fertilizer"
                    </span>{" "}
                    page of the Orchard. It should look like this:
                  </li>
                </ul>
                <br />
                <p>
                  You can now continue on adding the Fertilizer to the Orchard
                  from here.
                </p>
                <p>
                  Now, click on the{" "}
                  <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                    "’+’ Add Fertilizer"
                  </span>{" "}
                  button, located at the top-left corner of the page, to the
                  right of the “Download Table” button.
                </p>
                <p>
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                    "Add Fertilizer"
                  </span>{" "}
                  page.
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {AF && (
                    <GatsbyImage
                      image={AF}
                      alt="Startups illustration"
                      className="bg-white w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <p>
                  All the fields within this page are required to be filled. So
                  please make sure to not skip any fields.
                </p>
                <p>
                  Let’s go through the steps and their fields of the “Add
                  Fertilizer” page:
                </p>
                <ul>
                  <li>
                    The first step that we are cover is the “Product Details”
                    step:
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {AF && (
                      <GatsbyImage
                        image={AF}
                        alt="Startups illustration"
                        className="bg-white w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <li>
                    The{" "}
                    <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                      “Product Details”
                    </span>{" "}
                    step is a step where you input the general details of the
                    Fertilizer you are providing to the plant.
                  </li>
                  <li>
                    The{" "}
                    <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                      “Product Name”
                    </span>{" "}
                    field: Enter the name of the Fertilizer product that is
                    being used for the farm.
                  </li>
                  <li>
                    The “Type” field: Enter what type of Fertilizer is being
                    used for the farm. Select 1 from 10 options:
                  </li>
                  <ul className="text-primary-activelink font-semibold dark:text-[#D5D5D5] list-disc">
                    <li>BOP:</li>
                    <li>Bio Fertilizer:</li>
                    <li>CAN:</li>
                    <li>DAP:</li>
                    <li>MOP</li>
                    <li>NP</li>
                    <li>NPK</li>
                    <li>SOP</li>
                    <li>Sulfer Coated Urea</li>
                    <li>Urea</li>
                  </ul>
                  <li>
                    The{" "}
                    <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                      “Company”
                    </span>{" "}
                    field: Enter the name of the company that is on the package
                    of the Fertilizer. Select 1 of 6 options for the name of the
                    company.
                  </li>
                  <p>
                    <span className="text-primary-pheading font-semibold">
                      Agritech
                    </span>
                    : Select this if the company’s name on the package is
                    “Agritech”.
                  </p>{" "}
                  <p>
                    <span className="text-primary-pheading font-semibold">
                      Engro
                    </span>
                    : Select this if the company’s name on the package is
                    “Engro”.
                  </p>
                  <p>
                    <span className="text-primary-pheading font-semibold">
                      Agritech
                    </span>
                    : Select this if the company’s name on the package is
                    “Agritech”.
                  </p>
                  <p>
                    <span className="text-primary-pheading font-semibold">
                      FFC
                    </span>
                    :Select this if the company’s name on the package is “FFC”.
                  </p>{" "}
                  <p>
                    <span className="text-primary-pheading font-semibold">
                      Fatima
                    </span>
                    : Select this if the company’s name on the package is
                    “Fatima”.
                  </p>{" "}
                  <p>
                    <span className="text-primary-pheading font-semibold">
                      VAN
                    </span>
                    : Select this if the company’s name on the package is “VAN”.
                  </p>{" "}
                  <p>
                    <span className="text-primary-pheading font-semibold">
                      Other
                    </span>
                    : Select this if the company’s name on the package is not
                    any of the one’s listed above.
                  </p>{" "}
                  <p>
                    The “Application Method” field: Enter in what application
                    method will the farm be using to apply the fertilizer.
                    Select 1 of 7 options for the application method:
                  </p>
                  <ul>
                    <li>Broadcast</li>
                    <li>Fertigation</li>
                    <li>Foliar</li>
                    <li>Liquid Feed</li>
                    <li>Placement</li>
                    <li>Soil Injection</li>
                    <li>Spray</li>
                  </ul>
                  <li>
                    Please make sure that all these fields are filled with what
                    they are supposed to be filled with.
                  </li>
                  <li>The next and final step, is the “Usage Details” step:</li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {AF && (
                      <GatsbyImage
                        image={AF}
                        alt="Startups illustration"
                        className="bg-white w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <li>
                    The “Usage Details” step is a step where you can input the
                    details of what fertilizer will be used from the Inventory
                    and how much will be used on the farm.
                  </li>
                  <ul>
                    <li>
                      The “Select Inventory” field: Enter in the name of the
                      fertilizer product that is within the Inventory that is
                      the same fertilizer you wish to use on the farm. It will
                      open a menu with a list of options that are within the
                      Inventory for you to select.
                    </li>
                    <li>
                      The “Available Quantity” field: This is a non-editable
                      field that updates how many of the fertilizer you chose
                      earlier is there within the Inventory.
                    </li>
                    <li>
                      The “Application Quantity” field: Enter in a number of how
                      much of the fertilizer you want to apply on the farm to be
                      used.
                    </li>
                    <li>
                      The “Date of Application” field: Enter in a date and time
                      of when the fertilizer should be applied to the farm. It
                      will open a Calendar box where you can input in the Date
                      and time.
                    </li>
                    <li>
                      The “Mark Area” field: Enter in what area on the farm
                      location should the fertilizer be applied to. It will open
                      a map window where you can put in map points and edit
                      them. Provided below are steps on how to approach the mark
                      area feature.
                    </li>
                  </ul>
                  <li>
                    When you select the “Mark Area” button, A satellite imagery
                    map window will open.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {AF && (
                      <GatsbyImage
                        image={AF}
                        alt="Startups illustration"
                        className="bg-white w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <li>
                    In the map, you can see the farm location the Orchard is
                    located on, marked with a red dotted outline.
                  </li>
                  <li>
                    Mark the boundaries of your farm location, by clicking and
                    placing points on the map.
                  </li>
                  <li>
                    A red shape will be drawn on the top of the field you want
                    the fertilizer applied to.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {AF && (
                      <GatsbyImage
                        image={AF}
                        alt="Startups illustration"
                        className="bg-white w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <li>
                    After the boundaries are marked, click on the “Save” button.
                    You will then be taken back to the edit page with the mark
                    area button, having double tick mark next to it.
                  </li>
                  <li>
                    Once, you have filled in all the required fields, then you
                    can click the “Submit” button.
                  </li>
                  <li>
                    It will then take you to back to the “Fertilizer” page to
                    show you that you have added your Fertilizer to the
                    Orchard’s Fertilizer Table.
                  </li>
                </ul>
                <br />
                <p>
                  Now that we have added a fertilizer we can now move on to the
                  next feature, which is browsing through the Fertilizer page.
                </p>
                <h1 className="text-primary-activelink font-semibold">
                  Features of the Fertilizer Dashboard
                </h1>
                <p>
                  Now that we covered how to add a Fertilizer into the Farm
                  Management System. Let us now focus on the features that are
                  present in the Fertilizer Dashboard!
                </p>
                <ul className="pl-[15px] ">
                  <li className="text-primary-activelink">
                    Browsing within the Fertilizer
                  </li>
                  <li>
                    You can browse through the fertilizer table of the Orchard
                    you want using the pages options.
                  </li>
                  <li>Lets show you how to use the pages options:</li>
                  <br />
                  <ul className="list-disc">
                    <li>
                      The page options are located below the Fertilizer table.
                    </li>
                    <li>
                      Here you can see the “Total number of records”, the
                      “Records per page option”, the “Page select” and the “Go
                      to page search”.{" "}
                    </li>
                    <li>Lets go through them one by one:</li>

                    <ul>
                      <li>
                        The Total number of records: This shows a number of how
                        many fertilizers are there in the Orchard you selected.
                        It is located below the Fertilizer’s table, above the
                        page select options and is on the bottom left of the
                        page.
                      </li>
                      <li>
                        The Records per page option: This opens a menu where you
                        can select how many fertilizer entries do you want to
                        see in one page. The default is set to 5. The options
                        are 5, 10, 50 and 100. It is located below the
                        fertilizers table, above the page select options and is
                        to the bottom right of the page.
                      </li>
                      <li>
                        The Page select options: It shows which page you are
                        currently in (The default is the 1st page). It gives you
                        buttons for the next five pages after which it gives you
                        the button to the last page. You can move to the
                        previous page using the left arrow button, located on
                        the left side or to next page using the right arrow
                        button located on the right side. It is Located below
                        the Fertilizer’s table, the Total number of records and
                        the records per page and is on the bottom middle of the
                        page.
                      </li>
                    </ul>
                    <li>
                      If the fertilizer you applied was not available in the
                      inventory and you have to buy the fertilizer, choose the
                      option{" "}
                      <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                        "New Buy"
                      </span>{" "}
                      .
                    </li>
                    <li>
                      Enter the details when the fertilizer was bought, how much
                      did the fertilizer cost, how much quantity did you buy,
                      transaction details like head of accounts, transaction
                      id/cheque no in case head of accounts is bank, and from
                      whom you bought the fertilizer i.e., the vendor’s name.
                    </li>
                    <div className="pl-13 pt-8 flex justify-center">
                      {AF1 && (
                        <GatsbyImage
                          image={AF1}
                          alt="Startups illustration"
                          className="border border-gray-200 shadow-lg w-[1000.58px] "
                        />
                      )}
                    </div>
                  </ul>
                </ul>
                <br />
                <p>Click on the submit button.</p>
                <p>Fertilizer will be added successfully.</p>
                <p>
                  If the fertilizer was a new buy, in that case it was an
                  expense so a transaction will be created.
                </p>
                <br />{" "}
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-[#BE8B45]">
                  Step 2
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <h2 className="text-primary-subheading pt-5 font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-[#D5D5D5]">
                Searching for Orchard
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
                You can search for an Orchard from the table of Orchards present
                in the farm management system. You can locate the search options
                as they are underneath the “’+’ Add Orchard” button and the
                “Download Table” button, and above the table.
                <div className="pl-13 pt-8 flex justify-center">
                  {SF && (
                    <GatsbyImage
                      image={SF}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <p>
                  You can search based on these options going from left to
                  right:
                </p>{" "}
                <br />
                <p>
                  The “Crop Name” search: You can search and filter by the name
                  of the crop (for e.g. Mango, Guava, etc).
                </p>
                <p>
                  The “Growth Stage” search: You can search and filter the table
                  for the stage of growth the crop goes through. There are 8
                  options you can search and filter the table from:
                </p>
                <ul>
                  <li>Decline Stage</li>
                  <li>Early Fruiting Stage</li>
                  <li>Peak Stage</li>
                  <li>Vegetative Growth</li>
                </ul>
                <p>
                  The “Upcoming Harvest” search: You can search and filter the
                  table for the Orchards harvest time. There are 6 timing
                  related options you can search and filter the table from:
                </p>
                <ul className="text-primary-activelink font-bold">
                  <li>All (Default)</li>
                  <li>Today</li>
                  <li>Tomorrow</li>
                  <li>This week</li>
                  <li>Next Week</li>
                  <li>Next Month</li>
                </ul>
                <p>
                  Then click on the “Search” button, located on the far- right
                  of the page, to the left of the “Refresh data” button.
                </p>
                <p>
                  You will see the Orchard table update with only the search
                  options you typed or selected in the search bar.{" "}
                </p>
                <p>
                  Also, you can click on the “Refresh data” button to refresh
                  the data. It highlighted as a red button with an “arrow
                  pointing back” icon.
                </p>
                <p>
                  Now those are the search options! You can now search for a
                  specific Orchard or filter the table for a set of Orchard that
                  are in a specific stage or harvest time. You can also use the
                  search options as a filter so that you can “Download a Table”
                  of specific Orchard entries to use later.
                </p>
                <h1 className="text-primary-pheading font-bold">
                  Downloading the Orchard table
                </h1>
                <p>
                  If you want to have a set of Orchards or the entire Orchards
                  in the table within FMS on a PDF downloaded. Then you can do
                  so by:
                </p>
                <ul>
                  <li>
                    First, You can use the search to filter the table for
                    specific things that you want to download, otherwise if you
                    want to download the entire table, leave the search options
                    as it is and go to the records per page count and set it to
                    100.
                  </li>
                  <li>
                    Next, you can select the “Download Table” button located on
                    the top of the page, to the right of the “Add Orchard”
                    button and above the Search options of the page.
                  </li>{" "}
                  <div className="pl-13 pt-8 flex justify-center">
                    {SF && (
                      <GatsbyImage
                        image={SF}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <li>
                    Once you select it, it will open a file explorer window,
                    asking where to put the file in.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {SF && (
                      <GatsbyImage
                        image={SF}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <p>
                    This file contains all the Orchards that are present in page
                    1 of the table and their details.
                  </p>
                  <li>
                    When you have found a suitable place for your PDF file, then
                    you can press the “Save” button, located on the bottom right
                    of your file explorer, so that it saves the PDF file to that
                    folder.
                  </li>
                  <li>
                    Now you can either go to the top-right hand of your browser
                    and go into the Downloads section, to view your PDF file, or
                    you can go into the file explorer location where you
                    uploaded the PDF file and open it to view it as well.
                  </li>
                  <li>
                    Provided below is an example of what it should look like:
                  </li>
                </ul>
                <div className="pl-13 pt-8 flex justify-center">
                  {SF && (
                    <GatsbyImage
                      image={SF}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
              </div>

              <br />
              <br />

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-[#BE8B45]">
                  Step 3
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <h2 className="text-primary-subheading pt-5 font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-[#D5D5D5]">
                Viewing the Tasks of an Orchard
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
                If you want to view the associated tasks regarding an Orchard
                then you can start by:
                <br />
                <br />
                <ul className="pl-[15px] text-primary-paragraph2 font-semibold dark:text-[#D5D5D5]">
                  <li>First, hovering on the “Three dots” icon button [It’ll look like this “⋮“] located to the right of the Orchard you wish to view the tasks of. A small white box will show up with a list of options you can go to.
.</li>  <div className="pl-13 pt-8 flex justify-center">
                {VF && (
                  <GatsbyImage
                    image={VF}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>
                  <li>Click on the “Tasks” button which will be second on the list, below the “View” button and the “Fertilizer” button.</li>
                  <div className="pl-13 pt-8 flex justify-center">
                {VF && (
                  <GatsbyImage
                    image={VF}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>
                  <li>Listed here should all the tasks that are in relation to the Orchard you selected. The tasks table should consist of tasks that help maintain and nurture the Orchard farm you selected.
</li>
                  <p>Now that we have checked out how to get to the “Tasks of the Orchard” page, Now lets show you how to view the details of an Orchard entry within the Farm management system.</p>
                 <h1 className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">Viewing a Orchard</h1>
                 <p>You can view an Orchard entry with in FMS and confirm the extra details about the crop you entered. There are currently 2 methods to viewing an Orchard entry in the table.</p>
                <p>Here is how you can view an Orchard:</p>
                <ul>
                <li>The first method to viewing an Orchard entry in the table, is just by selecting the plant name of the Orchard you want to check out.</li>
                <li>You can select the plant name of the Orchard you want to view.</li>
                              <div className="pl-13 pt-8 flex justify-center">
                {VF && (
                  <GatsbyImage
                    image={VF}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>
              <li>You will then be taken to a “View Orchard” page of the Orchard you selected.</li>
                  <div className="pl-13 pt-8 flex justify-center">
                {VF && (
                  <GatsbyImage
                    image={VF}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>
              <li>The second method to view an Orchard entry in the table, is just by selecting the “more options” icon, then selecting the “view” button in the menu that shows,</li>
                
                </ul></ul>
              </div>

              <div className="pl-13 pt-8 flex justify-center">
                {VF && (
                  <GatsbyImage
                    image={VF}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default orchardfertilizer;
