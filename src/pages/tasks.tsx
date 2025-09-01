import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, navigate, useStaticQuery } from "gatsby";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import TextToSpeech from "../components/TextToSpeech";

const tasks = () => {
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
      listview: file(relativePath: { eq: "listview.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      cview: file(relativePath: { eq: "cview.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      addtask: file(relativePath: { eq: "addtask.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      stask: file(relativePath: { eq: "stask.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      dtask: file(relativePath: { eq: "dtask.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      vtask: file(relativePath: { eq: "vtask.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const listview = getImage(data.listview);
  const cview = getImage(data.cview);
  const addtask = getImage(data.addtask);
  const stask = getImage(data.stask);
  const dtask = getImage(data.dtask);
  const vtask = getImage(data.vtask);
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
                <h2 className="text-primary-activelink dark:text-[#FFFFFF] font-semibold text-[30px] font-montserrat ">
                  Starting Guide for Task:
                </h2>
              </div>
              <div className="flex items-center pt-5">
                <h2 className="text-primary-subheading dark:text-[#BE8B45] font-semibold text-[22px] font-montserrat lg:pl-10">
                  Introduction
                </h2>
                <div className=" lg:hidden">
                  <TextToSpeech textSelector=".acu" />
                </div>
              </div>
              <p className="text-primary-paragraph dark:text-[#D5D5D5] text-[18px] font-montserrat font-normal lg:px-10">
                This feature of the farm management system helps you manage all
                the work that needs to be done around your farm. You can create
                a list of tasks, add checklists, assign them to workers, track
                progress, assign priority, add cost incurred on the task and
                related transaction information, and record how long they take
                to complete. First of all before we showcase the features, we
                have to see that there are two views of the Tasks page
              </p>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-[#BE8B45] font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 1
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <h2 className="text-primary-subheading pt-5 dark:text-[#D5D5D5] font-semibold text-[22px] font-montserrat lg:pl-10">
                Task Views:
              </h2>
              <p className="text-primary-paragraph2 dark:text-[#D5D5D5] text-[18px] font-montserrat font-normal lg:px-10">
                There are two tabs in the upper left corner when you come on the
                tasks page:
                <br />
                <ul className="text-primary-activelink font-semibold">
                  <li>List View</li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li></li>
                </ul>
                <div className="pl-13 pt-8 flex justify-center">
                  {listview && (
                    <GatsbyImage
                      image={listview}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <p>
                  These tabs offer different perspectives for task management,
                  enabling users to select the most suitable option based on
                  their needs and preferences. You can switch between tabs as
                  per your wish.
                </p>
                <br />
                <ul>
                  <li className="text-primary-activelink font-semibold ">
                    Table View:
                  </li>
                  <p>
                    :The table view shows a grid of items. Each item is a task
                    with a start date and deadline. It can be sorted by the
                    different column headers, allowing you to order these tasks
                    by priority, starting date, assignee, associated to, status,
                    and title. .
                  </p>
                  <li className="text-primary-activelink font-semibold ">
                    Calendar View:
                  </li>
                  <p>
                    The calendar view acts as a schedule for your tasks. You can
                    see what tasks are to be done in a particular month, week or
                    a day as well as an agenda of what should be done..
                  </p>
                </ul>
                <br />
                <p>
                  Now that we have covered that there are two views to the Tasks
                  Page. We will now make sure that there are two set of
                  instructions to the Tasks Page. One for the Table view, and
                  another for the Calendar view.
                </p>
              </p>
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-[#BE8B45] font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 2
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <h2 className="text-primary-subheading pt-5 dark:text-[#D5D5D5] font-semibold text-[22px] font-montserrat lg:pl-10">
                Adding a Tasks:
              </h2>
              <div className="text-primary-paragraph2 dark:text-[#D5D5D5] text-[18px] font-montserrat font-normal lg:px-10">
                <p>
                  {" "}
                  While there are two options to view the task page, both views
                  have the same forms for adding tasks so we will be showing
                  both views in one list. To add a task, you start off by:
                </p>

                <br />
                <ul>
                  <li>
                    Click on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “’+’ Add Task”
                    </span>{" "}
                    button, located on the Top- right corner{" "}
                  </li>
                  <li>
                    of the page, below the tab button you are currently on, and
                    to the right of the “Download Table” button.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <p>[Provided above is the Table View]</p>
                  <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <p>[Provided above is the Calendar View]</p>
                  <br />
                  <br />
                  <li>
                    An{" "}
                    <span className="text-primary-activelink font-bold">
                      "Add Task"
                    </span>{" "}
                    form window will open.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li>
                    Depending on what the task is, you will need to fill more
                    fields of information for the task.
                  </li>
                  <li>
                    We will start with the field on the right side then we will
                    go to the left side.{" "}
                  </li>
                  <li>Fill all the fields on the left, such as: </li>
                  <br />
                  <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <ul>
                    <p>
                      The <span className="font-bold">"Task Title"</span> field:
                      Enter the Task’s title. It should tell the name of the
                      task to be done. (e.g. Ploughing).
                    </p>
                    <p>
                      The <span className="font-bold">"Description"</span>{" "}
                      field: Enter the Description. It should provide a detailed
                      description about the task. (e.g. Ploughing in fields).
                    </p>
                    <p>
                      The <span className="font-bold">"Add Checklist"</span>{" "}
                      field: Enter any additional checklist. It should tell set
                      goals for it to lead to task completion.
                    </p>
                    <p>
                      The <span className="font-bold">"Location"</span> field:
                      Enter the farm location where the Task will be performed.
                      It will open an interactive map where you can move around
                      and select which farm location will the task focus on.
                    </p>
                    <p>
                      The <span className="font-bold">"Attachment"</span> field:
                      Enter any attachments related to the task. It can be
                      anything from the work order, or the schedule, etc
                    </p>
                    <p>
                      The <span className="font-bold">"Head"</span> field: Enter
                      the Head. It should tell what the task is associated to.
                      Some options will open with an additional field for extra
                      information. The options are:
                    </p>
                    <ul>
                      <li>
                        <u>Farm</u>
                      </li>
                      <li>
                        <u>Chemical:</u>It will add the Chemical field. You will
                        need to enter in what product of fertilizer will be
                        used. The options will consist of fertilizers from a
                        specific Inventory.
                      </li>
                      <li>
                        <u>General</u>
                      </li>
                      <li>
                        <u>Goods Receiving Note</u>
                      </li>
                      <li>
                        <u>Health</u>
                      </li>
                      <li>
                        <u>Inventory:</u>It will add the Inventory field. You
                        will need to enter in what Inventory will be used. The
                        options will consist of Inventories that are within the
                        Farm Management System.
                      </li>
                      <li>
                        <u>Land</u>It will add the Land field. You will need to
                        enter which farm location is being used. The options
                        will consist of Farm Locations that are within the Farm
                        Management System.
                      </li>
                      <li>
                        <u>Orchard</u>
                      </li>
                      <li>
                        <u>Pesticides</u>:It will add the Pesticide field. You
                        will need to enter what product of pesticide will be
                        used. The options will consist of pesticides that are
                        from a specific Inventory.
                      </li>
                      <li>
                        <u>Planting</u>:It will add the Planting field. You will
                        need to enter what Crop/Planting is the focus of the
                        task. The options will consist of Crops/Plantings that
                        are within the Farm Management System.
                      </li>
                      <li>
                        <u>Equipment</u>
                      </li>
                      <ul>
                        <li>
                          The <span className="font-bold">"Cost"</span> field:
                          Enter how much cost is incurred on the task.
                        </li>
                        <li>
                          The <span className="font-bold">"Payment Mode"</span>{" "}
                          field: Enter in which payment method is the head of
                          accounts.
                        </li>
                        <li>
                          The <span className="font-bold">"Vendor"</span> field:
                          Enter the name of the vendor of the Task.{" "}
                        </li>
                        <li>
                          The{" "}
                          <span className="font-bold">
                            “Cheque No. / Transaction ID”
                          </span>{" "}
                          field: Enter in the Cheque No. or the Transaction ID
                          of the Task.
                        </li>
                      </ul>
                      <li>Fill all the fields on the right, such as:</li>
                      <div className="pl-13 pt-8 flex justify-center">
                        {listview && (
                          <GatsbyImage
                            image={listview}
                            alt="Startups illustration"
                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                          />
                        )}
                      </div>
                      <br />
                      <br />
                      <p>
                        The <span className="font-bold">"Task Status"</span>{" "}
                        field: Enter in the current state of the task as you are
                        making it. There are three options:
                      </p>
                      <ul className="list-disc">
                        <li>
                          <u>Canceled:</u>The Task is canceled and will neither
                          be in the agenda or assigned to the farm employee any
                          more.
                        </li>
                        <li>
                          <u>In-progress</u>The Task is currently being executed
                          by the person assigned to it.
                        </li>
                        <li>
                          <u>To-Do</u>The Task is currently in the agenda and
                          will be executed by the person assigned to it.
                        </li>
                      </ul>
                    </ul>
                  </ul>
                  <p>
                    The <span className="font-bold">"Assigned To"</span> field:
                    Enter in the name of the employee of your farm operation
                    that the task is assigned to. The options will consist of
                    employee’s that are within the Farm Management System.
                  </p>
                  <p>
                    The <span className="font-bold">"Priority"</span> field:
                    Enter in the priority or how important the task is. There
                    are three options, depending on the time frame or
                    importance:
                  </p>
                  <ul className="list-disc">
                    <li>
                      <u>Low</u>The task needs to be completed but it can take
                      its time. It can also be assigned to tasks that are part
                      of the farms regular maintenance.
                    </li>
                    <li>
                      <u>Medium</u>The task is important and needs to be
                      completed. It can also be assigned to tasks that are
                      necessary for the farm’s logistics.
                    </li>
                    <li>
                      <u>High</u>The task is either under a tight deadline or is
                      a high importance task for the farm employee to act on.
                    </li>
                  </ul>
                  <p>
                    The <span className="font-bold">“Start Date and Time”</span>{" "}
                    field: Enter in the date and time of when the task should
                    start operations or begin work.
                  </p>
                  <p>
                    The <span className="font-bold">“End Date and Time”</span>{" "}
                    field: Enter in the date and time of when the task should be
                    finished or when is the tasks deadline.
                  </p>
                  <p>
                    The <span className="font-bold">“Is Repeatable Task?”</span>{" "}
                    field: Enter in whether the task should be repeated multiple
                    times or not. There are two options:
                  </p>
                  <ul className="list-disc">
                    <li>
                      <u>No</u>
                    </li>
                    <li>
                      <u>Yes</u>: There will be two extra fields that will show.
                    </li>
                    <li>
                      <u>Task Repeat Cycle:</u> Enter in the number of gap days
                      before the task is repeated.
                    </li>
                    <li>
                      <u>No.of Repitition</u>:Enter in the number of times the
                      task is repeated.
                    </li>
                  </ul>
                  <li>
                    The{" "}
                    <span className="font-bold">“Estimated Time and Unit”</span>{" "}
                    field: Enter in the estimated amount of time it will take to
                    complete the task, and the unit of time used. There are
                    three options of which unit you can choose:
                  </li>
                  <ul className="list-disc">
                    <li>
                      <u>Minute</u>
                    </li>
                    <li>
                      <u>Hour</u>
                    </li>
                    <li>
                      <u>Day</u>
                    </li>
                  </ul>
                </ul>
                <p>
                  When a task is completed, a transaction is created against
                  that task. That can be viewed in the financial tab in general
                  ledger table. In the Table view, the task is added as an entry
                  in the table and you can view, edit or delete it using the
                  option buttons on the right.
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {listview && (
                    <GatsbyImage
                      image={listview}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <p>
                  In the Calendar view, the task is added as a rectangular shape
                  that extends from one date to another date. You can click on
                  the task and edit the details, however you cannot delete or
                  view from the calendar view.
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {listview && (
                    <GatsbyImage
                      image={listview}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
              </div>
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-[#BE8B45] font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 3
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <h2 className="text-primary-subheading dark:text-[#D5D5D5] font-semibold pt-5 text-[22px] font-montserrat lg:pl-10">
                Features of the Tasks Dashboard
              </h2>
              <p className="text-primary-paragraph2 dark:text-[#D5D5D5] text-[19px] font-montserrat font-normal lg:px-10">
                Now that we covered how to add a Task into the Farm Management
                System. Let us now focus on the features that are present in the
                Task Dashboard!
                <br />{" "}
                <h3 className="text-primary-pheading font-semibold">
                  Browsing for a task.
                </h3>
                <p>
                  You can browse through the Table and Calendar view to find the
                  task you want using the pages options. Note that both views
                  have different method to browsing for tasks. Lets start with
                  the Table view:
                </p>
                <br />{" "}
                <h4 className="text-primary-activelink font-semibold">
                  Tasks view
                </h4>
                <p>Lets show you how to use the pages options in table view:</p>
                <br />{" "}
                <ul>
                  <li>The page options are located below the tasks table.</li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li>
                    Here you can see the “Total number of records”, the “Records
                    per page option”, the “Page select” and the “Go to page
                    search”.
                  </li>
                  <li>Lets go through them one by one:</li>
                  <p>
                    The Total number of records: This shows a number of how many
                    tasks are there in the Farm Management System. It is located
                    below the Task’s table, above the page select options and is
                    on the bottom left of the page.
                  </p>
                  <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <p>
                    The Records per page option: This opens a menu where you can
                    select how many task entries do you want to see in one page.
                    The default is set to 5. The options are 5, 10, 50 and 100.
                    It is located below the Tasks table, above the page select
                    options and is to the bottom right of the page.
                  </p>
                  <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <p>
                    The Page select: It shows which page you are currently in
                    (The default is the 1st page). It gives you buttons for the
                    next five pages after which it gives you the button to the
                    last page. You can also move to the previous page using the
                    left arrow button, located on the left side or to next page
                    using the right arrow button located on the right side.
                  </p>
                  <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <p>
                    The “Go to page” search: You can type a page number of where
                    the task you are looking for is and hit enter. It will then
                    open the page with the page number shown as well.
                  </p>
                  <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li>
                    You can use the page options as a way of finding a task or a
                    collection of tasks.
                  </li>
                </ul>
                <p>
                  Now let us show the alternative way, through the Calendar
                  view:
                </p>
                <h4 className="text-primary-activelink font-semibold">
                  Calender view
                </h4>
               <p>The calendar view modifications are a set of features, available only to the Calendar view, that let you change the view on the FMS calendar.</p>
                <br />{" "}
                 <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
              <p>Here are the tools listed below going from left to right:</p>
                <br />{" "}
                <li>The “Today” button: It changes the calendar to show only the today date in all views (In Month, Week, Day and Agenda views).
</li>
 <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <p>[Provided above is the “Today” month calendar view]</p>
                   <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <p>[Provided above is the “Today” week calendar view]</p>
                   <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <p>[Provided above is the “Today” day calendar view]</p>
                   <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <p>[Provided above is the “Today” agenda calendar view]</p>
                 <li>The “Back” button: It changes the calendar to show only the previous date in all views (In Month, Week, Day and Agenda views).
</li> 
   <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
<p>[Provided above is the “Back” month calendar view]</p>
<div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
<p>[Provided above is the “Back” week calendar view]</p>
<div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
<p>[Provided above is the “Back” day calendar view]</p>
<div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
<p>[Provided above is the “Back” agenda calendar view]</p>
<li>The “Next” button: It changes the calendar to show only the next date in all views (In Month, Week, Day and Agenda views).</li>
                <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <p>[Provided above is the “Next” month calendar view]</p>
                  <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <p>[Provided above is the “Next” week calendar view]
</p>
 <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
<p>[Provided above is the “Next” day calendar view]</p>
 <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <p>[Provided above is the “Next” agenda calendar view]</p>
                  <li>The current calendar view title: It is a title that shows which present view and date you are currently on.</li>
                 <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <li>The “Month” button: It changes the calendar to show the month view of the current date.</li>
                <p>[Provided above is the “current calendar view” title]
</p>
  <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>

<p>[Provided above is the “Month view” title]</p>
<li>The “Week” button: It changes the calendar to show the week view of the current date.</li>
               <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <p>[Provided above is the “week view” of the calender]</p> 
                   <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <li>The “Day” button: It changes the calendar to show the day view of the current date.</li>
                 <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <p>[Provided above is the “day view” of the calender]</p> 
                <li>The “Agenda” button: It changes the calendar to only show the tasks that are on the agenda starting on today’s date to one month from now.</li>
                 <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <p>[Provided above is the “Agenda view” of the calender]</p> <br/>
                <p>
You can modify the view of the FMS calendar to view the tasks for your farms and its employees in a unique way.
</p>
<h2 className="text-primary-subheading font-semibold">Searching for a Task</h2>
<p>You can search for a task from the table of tasks present in the farm management system in both the table view and the calendar view, as they are in the same places.
You can locate the search options as they are underneath the “Add Task” button and the “Download Table” button, and above the Table (in the table view) and above the Calendar (in the calendar view). 
</p>
 <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <p>[Provided above is the table view]</p>
                   <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <p>[Provided above is the calender view]</p>
                  <p>You can search based on these options going from left to right:</p>
              <ul>
                <li>The “Title” search: You can search by the title name of the task.</li>
              <li>The “Assigned To” search: You can search the task based on which farm employee it is assigned to. Here are the options:
</li>
<ul>
  <li>Me</li>
  <li>Others</li>
  <li>All</li>
</ul>
<li>The “Associated To” search: You can search the task based on what it is associated with such as a specific resource like land, planting, inventory, equipment etc. Here are the options:</li>
              <ul>
                <li>Farm</li>
                <li>Chemical</li>
                <li>General</li>
                <li>Goods Recieving Notes</li>
                <li>Health</li>
                <li>Inventory</li>
                <li>Land</li>
                <li>Orchard</li>
                <li>Pesticide</li>
                <li>Planting</li>
                <li>Equipment</li>
              </ul>
              <li>The “Progress” search: You can search by the progress of the task. You can search for a list of tasks that are pending, in progress, completed or canceled. Here are the options:</li>
              <ul><li>Canceled</li>
              <li>Completed</li>
              <li>In-Progress</li>
              <li>To-Do</li></ul>
              <li>The “Upcoming tasks” search: You can search which tasks are the upcoming ones based on today, tomorrow, this week, next week, next month or can choose a custom range in which tasks were or will be performed.
</li>
<ul><li>All(Default)</li>
<li>Today</li>
<li>Tomorrow</li>
<li>This Week</li>
<li>Next Week</li>
<li>Next Month</li>
<li>Custom Range</li></ul>
<li>The Custom Range option will add 1 more option and in it you can set the date range.
</li>
<li>The “Select a Date range” search: This option is where you can set a start date and end date, for the search to look for tasks whose start date and end date are within the range you set. It’ll open a date set where you can set a start date and end date.
</li>

              </ul>
              <p>Now if you are using the search on the Table view, then click on the “Search” button and see the table change the results to only show what you want. Also, you can click on the “Refresh [Shown as an “arrow pointing back” icon]” button to refresh the data.
If you are using the search on the Calendar view, then you can click on the “Search” button and see the calendar only show results that you want to see. Also, you can click on the “Refresh [Shown as an “arrow pointing back” icon]” button to refresh the data.
</p>
<h3>Downloading the Task’s table</h3>
<p>You can easily download a table of tasks you want. This feature is available in both the calendar and table views.
To download a table from the table view, you start by:
</p>
<ul>
  <li>You can choose to download the entire table or download only a specific set of tasks that are on the table using the search options.</li>
<li>You can then click on the “Download table” button, located to the right of the “’+’ Add Task” and below the view tabs.</li>
 <p>[Provided above is the table view]</p>
                   <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div><br/><br/>
                  <li>It will then open a file explorer window, asking where to download the file in your computer.</li>
<p>[Provided above is the table view]</p>
                   <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div><br/><br/>
                  <li>Now you can either go to the top-right hand of your browser and go into the Downloads section, to view your PDF file, or you can go into the file explorer location where you uploaded the PDF file and open it to view it as well.</li>
                  <li>Provided below is an example of what it looks like:</li>
                   <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div><br/><br/>
                  <p>To download a table from the calendar view, you start by:</p>
                  <li>You can choose to download the entire table or download only a specific set of tasks that are on the table using the search options.</li>
                  <li>You can then click on the “Download table” button, located to the right of the “’+’ Add Task” and below the view tabs.
</li>
 <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div><br/><br/>
                  <li>It will then open a file explorer window, asking where to download the file in your computer.</li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div><br/><br/>
                  <li>Once you have selected a folder to download the file to. Click the “Save” button.</li>
                  <li>Now you can either go to the top-right hand of your browser and go into the Downloads section, to view your PDF file, or you can go into the file explorer location where you uploaded the PDF file and open it to view it as well.</li>
                  <li>Provided below is an example of what it looks like:</li>
                  </ul>
 
                   <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div><br/><br/>

              </p>
              
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-[#BE8B45] font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 2
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <h2 className="text-primary-subheading dark:text-[#D5D5D5] pt-5 font-semibold text-[22px] font-montserrat lg:pl-10">
                Viewing a Task:
              </h2>
              <div className="text-primary-paragraph2 dark:text-[#D5D5D5] text-[19px] font-montserrat font-normal lg:px-10">
                <p>
                  You can easily review the details of the task. There are
                  currently two methods to view a task. This feature is only on
                  the Table view: :
                </p>
                <br />
                <ul className="list-disc dark:text-[#D5D5D5] text-[18px]">
                  <li>There are currently 2 methods to view a Task.</li>
                  <br />
                  <p>
                    The first method is to select the name of the Task. It will
                    then take you to the{" "}
                    <span className="text-primary-pheading font-bold">
                      "View Task"
                    </span>{" "}
                    window.
                  </p>
                  <ul>
                    <li>
                      First, you have to locate the Farm location that you want
                      to view. You can do so by either searching or browsing the
                      farm location dashboard until you find the farm location.
                    </li>
                    <br />
                    <li>
                      Once you have located the farm location you want to view,
                      then you can select its name, which is located on the left
                      of the table on the farm location you want to view.
                    </li>
                    <br />
                    <div className="pl-13 pt-8 flex justify-center">
                      {dtask && (
                        <GatsbyImage
                          image={dtask}
                          alt="Startups illustration"
                          className="border border-gray-200 shadow-lg w-[1000.58px] "
                        />
                      )}
                    </div>
                    <br />
                    <br />
                    <li>
                      It will then take you to the “View Task” window where you
                      can view the details of the task you selected.
                    </li>
                    <div className="pl-13 pt-8 flex justify-center">
                      {dtask && (
                        <GatsbyImage
                          image={dtask}
                          alt="Startups illustration"
                          className="border border-gray-200 shadow-lg w-[1000.58px] "
                        />
                      )}
                    </div>
                    <br />
                    <br />
                    <p>
                      The second method is select the “three dots” icon, to show
                      a small white box
                    </p>
                  </ul>
                  <li>
                    Click on the{" "}
                    <span className="text-primary-pheading font-bold">
                      “three dots”
                    </span>{" "}
                    [It’ll look like this “⋮“] icon. button [Shown as a “pencil”
                    icon], located on the right side of the task, to the right
                    of the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Delete”
                    </span>{" "}
                    <span className="text-primary-activelink font-bold">
                      button [shown as a “trash can” icon]
                    </span>{" "}
                    , and the .
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {dtask && (
                      <GatsbyImage
                        image={dtask}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li>Click on the “View” button once it appears.</li>
                  <br />
                  <li>The task’s “View Task” window will open.</li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {dtask && (
                      <GatsbyImage
                        image={dtask}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li>
                    You can then review all the task’s details and confirm if it
                    is acceptable in your eyes.
                  </li>
                </ul>
                <br />
              </div>
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-[#BE8B45] font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 3
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <h2 className="text-primary-subheading pt-5 dark:text-[#D5D5D5] font-semibold text-[22px] font-montserrat lg:pl-10">
                Editing a Task:
              </h2>
              <div className="text-primary-paragraph2 dark:text-[#D5D5D5] text-[19px] font-montserrat font-normal lg:px-10">
                <p>
                  If there are any task’s detail you want to change, you can
                  easily edit the details except for the transaction details
                  related to the task. We will show how to edit tasks in the
                  different views in different instructions as the process is
                  different in both views. For the table view, you start by :
                </p>
                <br />
                <ul className="list-disc list-inside dark:text-[#D5D5D5] text-[18px]">
                  <li>
                    First, finding the task you wish to edit, you can either use
                    the search feature or go through the different pages to find
                    the task you wish to edit.
                  </li>
                  <br />
                  <li>
                    Click on the “Edit” button [Shown as a “pencil” icon],
                    located on the right side of the task entry and to the left
                    of the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Delete”
                    </span>{" "}
                    <span className="text-primary-activelink font-bold">
                      button [shown as a “trash can” icon]
                    </span>{" "}
                    , and the{" "}
                    <span className="text-primary-pheading font-bold">
                      “three dots”
                    </span>{" "}
                    [It’ll look like this “⋮“] icon.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {dtask && (
                      <GatsbyImage
                        image={dtask}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li>The task’s edit window will open.</li>

                  <div className="pl-13 pt-8 flex justify-center">
                    {dtask && (
                      <GatsbyImage
                        image={dtask}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li>
                    Click on the <span className="font-bold">“field(s)”</span>{" "}
                    you want to edit.
                  </li>
                  <li>
                    Make changes in those{" "}
                    <span className="font-bold">“field(s)”</span> .
                  </li>
                  <br />
                  <li>
                    When you are finished, click on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Submit”
                    </span>{" "}
                    . button.
                  </li>
                  <li>
                    The task’s details will be edited/updated successfully.
                  </li>
                  <br />
                  <p>For the calendar view:</p>
                  <br />
                  <li>
                    First, you have to find the task you wish to edit, you can
                    either use the search functionality or use the{" "}
                    <span className="text-primary-activelink font-bold">
                      “back”
                    </span>{" "}
                    and{" "}
                    <span className="text-primary-activelink font-bold">
                      “next”
                    </span>{" "}
                    buttons that are on the right and left of the{" "}
                    <span className="text-primary-activelink font-bold">
                      “today”
                    </span>{" "}
                    button in the “month” section to find the task you wish to
                    edit.
                  </li>
                  <br />
                  <li>
                    Then click on the task (it is represented as a bar that
                    extends from one date to another date).
                  </li>
                  <br />
                  <div className="pl-13 pt-8 flex justify-center">
                    {dtask && (
                      <GatsbyImage
                        image={dtask}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li>The task’s edit window will open.</li>
                  <br />
                  <div className="pl-13 pt-8 flex justify-center">
                    {dtask && (
                      <GatsbyImage
                        image={dtask}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li>
                    Click on the <span className="font-bold">“field(s)”</span>{" "}
                    you want to edit.
                  </li>
                  <li>
                    Make changes in those{" "}
                    <span className="font-bold">“field(s)”</span> .
                  </li>
                  <br />
                  <li>
                    When you are finished, click on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Submit”
                    </span>{" "}
                    . button.
                  </li>
                  <li>
                    The task’s details will be edited/updated successfully.
                  </li>
                </ul>
                <br />
              </div>
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-[#BE8B45] font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 4
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <h2 className="text-primary-subheading dark:text-[#D5D5D5] font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
                Deleting a Task
              </h2>
              <div className="text-primary-paragraph2 text-[19px] font-montserrat font-normal lg:px-10">
                <p>
                  If you no longer need a particular task and want to delete it,
                  you can easily do so in the Table view only, as the option is
                  not available on the Calendar view.
                </p>
                <br />
                <ul className="list-disc list-inside dark:text-[#D5D5D5] text-primary-paragraph2 font-normal text-[18px]">
                  <li>
                    First, you need to find the task that you want to delete in
                    the tasks table. You can do so by either using the search
                    options or using the page buttons to find the task you want
                    to delete.
                  </li>
                  <br />
                  <li>
                    Click on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Delete”
                    </span>{" "}
                    <span className="text-primary-activelink font-bold">
                      button [shown as a “trash can” icon]
                    </span>{" "}
                    , located on the right of the task entry in the middle of
                    the “Edit” button [shown as a “pencil” icon] and the{" "}
                    <span className="text-primary-pheading font-bold">
                      “three dots”
                    </span>{" "}
                    [It’ll look like this “⋮“] icon.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {dtask && (
                      <GatsbyImage
                        image={dtask}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li>
                    A dialogue box will appear to confirm whether you want to
                    delete the task or not.
                  </li>
                  <li>Make changes in the field.</li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {dtask && (
                      <GatsbyImage
                        image={dtask}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li>
                    Click on the{" "}
                    <span className="text-primary-pheading font-bold">
                      “Delete”
                    </span>{" "}
                    button to confirm your deletion.
                  </li>
                  <li>
                    The Task will be deleted successfully from the table and the
                    calendar as well.
                  </li>
                </ul>
                <br />
                <p>
                  Now that we have checked out all the features of the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Tasks”
                  </span>{" "}
                  page, Congratulations! Onward to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Planting”
                  </span>{" "}
                  page!
                </p>
              </div>
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default tasks;
export const Head = () => (
  <>
    <title>Tasks | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
