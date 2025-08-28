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
              This feature of the farm management system helps you manage all the work that needs to be done around your farm. You can create a list of tasks, add checklists, assign them to workers, track progress, assign priority, add cost incurred on the task and related transaction information, and record how long they take to complete.
First of all before we showcase the features, we have to see that there are two views of the Tasks page

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
               There are two tabs in the upper left corner when you come on the tasks page: 
                <br />
               <ul className="text-primary-activelink font-semibold">
                <li >
                  List View
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
                <li></li></ul>
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
               <p>These tabs offer different perspectives for task management, enabling users to select the most suitable option based on their needs and preferences. You can switch between tabs as per your wish.</p>
                <br />
                <ul>
                   <li  className="text-primary-activelink font-semibold ">
                  Table View:
                </li>
                <p>:The table view shows a grid of items. Each item is a task with a start date and deadline. It can be sorted by the different column headers, allowing you to order these tasks by priority, starting date, assignee, associated to, status, and title.

                .</p>
                <li  className="text-primary-activelink font-semibold ">
                  Calendar View:
                </li>
                <p>:The calendar view acts as a schedule for your tasks. You can see what tasks are to be done in a particular month, week or a day as well as an agenda of what should be done..</p>
               
                </ul>
                <p>Now that we have covered that there are two views to the Tasks Page. We will now make sure that there are two set of instructions to the Tasks Page. One for the Table view, and another for the Calendar view.
</p>
              </p>
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-[#BE8B45] font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 2
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <h2 className="text-primary-subheading pt-5 dark:text-[#D5D5D5] font-semibold text-[22px] font-montserrat lg:pl-10">
                Adding Tasks:
              </h2>
              <p className="text-primary-paragraph2 dark:text-[#D5D5D5] text-[18px] font-montserrat font-normal lg:px-10">
                For adding a task, click on the add task button. A task form
                will open. Enter the details related to the tasks. Enter task
                title, description, additional checklists, where the task will
                be performed, to whom it is associated to, how much cost is
                incurred on the task and related transaction details like Head
                of Accounts, Customer, transaction id etc., status of task, who
                will perform the task, how much is the task important, when will
                the task start and end, will the task be repeated or not, and
                how much time will be spent on the task. When a task is
                completed, a transaction is created against that task. That can
                be viewed in the financial tab in general ledger table.
              </p>
              <div className="pl-13 pt-8 flex justify-center">
                {addtask && (
                  <GatsbyImage
                    image={addtask}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-[#BE8B45] font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 3
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <h2 className="text-primary-subheading dark:text-[#D5D5D5] font-semibold pt-5 text-[22px] font-montserrat lg:pl-10">
                Tasks Fields:
              </h2>
              <p className="text-primary-paragraph2 dark:text-[#D5D5D5] text-[19px] font-montserrat font-normal lg:px-10">
                <span className="text-primary-pheading font-semibold">
                  Title
                </span>
                : It will tell the name of the task to be done. (e.g. Ploughing)
                <br />{" "}
                <span className="text-primary-pheading font-semibold">
                  Description
                </span>
                It will provide the detailed description about the task. (e.g.
                Ploughing in fields)
                <br />{" "}
                <span className="text-primary-pheading font-semibold">
                  Checklists
                </span>
                : Add subtasks or items required for performing the tasks. The
                checklist contains the description and text.
                <br />{" "}
                <span className="text-primary-pheading font-semibold">
                  Add Location
                </span>
                : Choose the location where the task will be performed.
                <br />{" "}
                <span className="text-primary-pheading font-semibold">
                  Attachments
                </span>
                : Add the necessary attachments related to tasks.
                <br />{" "}
                <span className="text-primary-pheading font-semibold">
                  Associated To{" "}
                </span>
                : It tells which part of the farm the task is related to. The
                task can be related to:
                <ul className="list-disc list-inside dark:text-[#D5D5D5] text-primary-activelink font-semibold text-[18px]">
                  <li>Land</li>
                  <li>Planting</li>
                  <li>Fertilizer</li>
                  <li>Pesticide</li>
                  <li>Farm</li>
                  <li>General</li>
                  <li>Inventory</li>
                  <li>Health</li>
                  <li>Equipment</li>
                  <li>Goods Recieving Notes</li>
                </ul>
                <br />{" "}
                <span className="text-primary-pheading font-semibold">
                  Cost
                </span>
                : How much cost will be incurred in doing that task.
                <br />{" "}
                <span className="text-primary-pheading font-semibold">
                  Transaction Details
                </span>
                : It will include details like head of accounts, transaction id,
                and customer name.
                <br />{" "}
                <span className="text-primary-pheading font-semibold">
                  Task Status
                </span>
                : What is the status of the task i.e., on what stage the task is
                at. When a task is created its status cannot be completed. Later
                on, when the task will be completed you will edit the status to
                completed. The other status of task can be:
                <ul className="list-disc list-inside dark:text-[#D5D5D5] text-primary-activelink font-semibold text-[18px]">
                  <li>Pending</li>
                  <li>In-Progress</li>
                  <li>Cancelled</li>
                </ul>
                <br />{" "}
                <span className="text-primary-pheading font-semibold">
                  Assign to
                </span>
                : Who will be the person going to perform the task.
                <br />{" "}
                <span className="text-primary-pheading font-semibold">
                  Priority
                </span>
                :How much important it is to perform the task. Based on the
                importance you can assign priority to the task like High,
                Medium, and Low.
                <br />{" "}
                <span className="text-primary-pheading font-semibold">
                  Start Date and Time
                </span>
                :When will the task start, its starting date and time.
                <br />{" "}
                <span className="text-primary-pheading font-semibold">
                  End Date and Time
                </span>
                :When will the task end, its ending date and time.
                <br />{" "}
                <span className="text-primary-pheading font-semibold">
                  Repeating Task
                </span>
                :Is the task repeatable or not? If the task is non repeatable,
                select no otherwise select yes. In case the task is repeatable
                new fields will appear which will include:
                <ul className="text-[18px]">
                  <li>
                    <span className="text-primary-activelink dark:text-[#D5D5D5] font-semibold">
                      Task Repeatable Cycle
                    </span>
                    :After how many days the task will be repeated.
                  </li>
                  <li>
                    {" "}
                    <span className="text-primary-activelink dark:text-[#D5D5D5] font-semibold">
                      No: of Repetition
                    </span>
                    :Fow how many times the task will be repeated.
                  </li>
                </ul>
                <br />{" "}
                <span className="text-primary-pheading font-semibold">
                  Time Spent
                </span>
                :How much it will take the task to complete.
                <br />{" "}
                <span className="text-primary-pheading font-semibold">
                  Time Unit
                </span>
                : The unit of time can be seconds, hour, minute and day to
                complete the task.
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
                    <li>Once you have located the farm location you want to view, then you can select its name, which is located on the left of the table on the farm location you want to view.</li>
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
                  <li>It will then take you to the “View Task” window where you can view the details of the task you selected.</li>
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
                  <p>The second method is select the “three dots” icon, to show a small white box</p>
                  </ul>
                  <li>
                    Click on the {" "}
                    <span className="text-primary-pheading font-bold">
                      “three dots”
                    </span>{" "}  [It’ll look like this “⋮“] icon. button [Shown as a “pencil” icon],
                    located on the right side of the task,  to the right of the {" "}
                    <span className="text-primary-activelink font-bold">
                      “Delete”
                    </span>{" "}
                    <span className="text-primary-activelink font-bold">
                      button [shown as a “trash can” icon]
                    </span>{" "}
                    , and the
                   .
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
                  <li>Click on the “View” button once it appears.</li><br />
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
                  You can then review all the task’s details and confirm if it is acceptable in your eyes.
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
