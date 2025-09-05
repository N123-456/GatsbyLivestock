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
      adct: file(relativePath: { eq: "adct.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      cv: file(relativePath: { eq: "cv.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      brtv: file(relativePath: { eq: "brtv.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      brcv: file(relativePath: { eq: "brcv.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      adtt: file(relativePath: { eq: "adtt.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      adt: file(relativePath: { eq: "adt.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      tv: file(relativePath: { eq: "tv.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      deleting: file(relativePath: { eq: "deleting.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      docal: file(relativePath: { eq: "docal.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      dota: file(relativePath: { eq: " dota.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      editing: file(relativePath: { eq: "editing.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      srcv: file(relativePath: { eq: " srcv.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      srtv: file(relativePath: { eq: "srtv.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      vi2: file(relativePath: { eq: "   vi2.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      viewing: file(relativePath: { eq: "viewing.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
         gtp: file(relativePath: { eq: "gtp.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
         ps: file(relativePath: { eq: "ps.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const adct = getImage(data.adct);
  const adt = getImage(data.adt);
  const adtt = getImage(data.adtt);
  const brcv = getImage(data.brcv);
  const brtv = getImage(data.brtv);
  const cv = getImage(data.cv);
  const tv = getImage(data.tv);
  const deleting = getImage(data.deleting);
  const docal = getImage(data.docal);
  const dota = getImage(data.dota);
  const editing = getImage(data.editing);
  const srcv = getImage(data.srcv);
  const srtv = getImage(data.srtv);
  const vi2 = getImage(data.vi2);
  const viewing = getImage(data.viewing);
   const gtp = getImage(data.gtp);
    const ps = getImage(data.ps);
  return (
    <AppLayout>
      <PrivateRoute>
        <div>
          <div className="flex flex-col justify-center">
            <div className="acu lg:pr-4 text-justify font-montserrat text-primary-paragraph2 text-[18px]">
              <div className="flex items-center">
                <div className="hidden lg:block">
                  <TextToSpeech textSelector=".acu" />
                </div>
                <h2 className="text-primary-activelink dark:text-[#FFFFFF] font-semibold text-[30px] font-montserrat ">
                  Starting Guide for Task:
                </h2>
              </div>
              <div className="flex items-center pt-5">
                <h2 className="text-primary-subheading dark:text-primary-pheading font-bold font-semibold text-[22px] font-montserrat lg:pl-10">
                  Introduction
                </h2>
                <div className=" lg:hidden">
                  <TextToSpeech textSelector=".acu" />
                </div>
              </div>
              <div className="lg:pl-10">
                <p className="mb-4">
                  This feature of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>{" "}
                  helps you manage all the work that needs to be done around
                  your farm. You can create a list of tasks, add checklists,
                  assign them to workers, track progress, assign priority, add
                  cost incurred on the task and related transaction information,
                  and record how long they take to complete.
                </p>
                <p className="mb-4">
                  First of all, before we showcase the features, we have to see
                  that there are two views of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Tasks
                  </span>{" "}
                  page:
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Task Views
                </h2>
                <p className="mb-4">
                  There are two tabs in the upper left corner when you come on
                  the{" "}
                  <span className="text-primary-activelink font-bold">
                    Tasks
                  </span>{" "}
                  page:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Table View
                    </span>
                  </li>
                   <div className="pl-13 pt-8 flex justify-center">
                                  {tv && (
                                    <GatsbyImage
                                      image={tv}
                                      alt="Startups illustration"
                                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                                    />
                                  )}
                                </div><br/><br/>
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Calendar View
                    </span>
                  </li>
                    <div className="pl-13 pt-8 flex justify-center">
                                  {cv && (
                                    <GatsbyImage
                                      image={cv}
                                      alt="Startups illustration"
                                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                                    />
                                  )}
                                </div><br/><br/>
                </ul>
                <p className="mb-4">
                  These tabs offer different perspectives for task management,
                  enabling users to select the most suitable option based on
                  their needs and preferences. You can switch between tabs as
                  per your wish.
                </p>
                <p className="mb-4">
                  <span className="text-primary-activelink font-bold">
                    Table View
                  </span>
                  : The table view shows a grid of items. Each item is a task
                  with a start date and deadline. It can be sorted by the
                  different column headers, allowing you to order these tasks by
                  priority, starting date, assignee, associated to, status, and
                  title.
                </p>
                <p className="mb-4">
                  <span className="text-primary-activelink font-bold">
                    Calendar View
                  </span>
                  : The calendar view acts as a schedule for your tasks. You can
                  see what tasks are to be done in a particular month, week, or
                  a day as well as an agenda of what should be done.
                </p>
                <p className="mb-4">
                  Now that we have covered that there are two views to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Tasks Page
                  </span>
                  . We will now make sure that there are two sets of
                  instructions to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Tasks Page
                  </span>
                  . One for the{" "}
                  <span className="text-primary-activelink font-bold">
                    Table View
                  </span>
                  , and another for the{" "}
                  <span className="text-primary-activelink font-bold">
                    Calendar View
                  </span>
                  .
                </p>
              </div>
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 1
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <div className="lg:pl-10">
                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Adding a Task
                </h2>
                <p className="mb-4">
                  While there are two options to view the task page, both views
                  have the same forms for adding tasks, so we will be showing
                  both views in one list.
                </p>
                <p className="mb-4">To add a task, you start off by:</p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    Click on the{" "}
                    <span className=" font-bold">“’+’ Add Task”</span> button,
                    located on the top-right corner of the page, below the tab
                    button you are currently on, and to the right of the{" "}
                    <span className=" font-bold">“Download Table”</span> button.
                  </li>
                </ol>
                <p className="mb-4">
                  [Provided above is the{" "}
                  <span className="text-primary-activelink font-bold">
                    Table View
                  </span>
                  ]
                </p>
                <p className="mb-4">
                  [Provided above is the{" "}
                  <span className="text-primary-activelink font-bold">
                    Calendar View
                  </span>
                  ]
                </p>
                <p className="mb-4">
                  An{" "}
                  <span className="text-primary-activelink font-bold">
                    “Add Task”
                  </span>{" "}
                  form window will open.
                </p>
                <p className="mb-4">
                  Depending on what the task is, you will need to fill more
                  fields of information for the task.
                </p>
                <p className="mb-4">
                  We will start with the fields on the right side, then we will
                  go to the left side.
                </p>
                <p className="mb-4">
                  Fill all the fields on the left, such as:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Task Title”
                    </span>{" "}
                    field: Enter the task’s title. It should tell the name of
                    the task to be done (e.g.,{" "}
                    <span className="text-primary-pheading font-bold">
                      Ploughing
                    </span>
                    ).
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Description”
                    </span>{" "}
                    field: Enter the description. It should provide a detailed
                    description about the task (e.g.,{" "}
                    <span className="text-primary-pheading font-bold">
                      Ploughing in fields
                    </span>
                    ).
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Add Checklist”
                    </span>{" "}
                    field: Enter any additional checklist. It should tell set
                    goals for it to lead to task completion.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Location”
                    </span>{" "}
                    field: Enter the farm location where the task will be
                    performed. It will open an interactive map where you can
                    move around and select which farm location the task will
                    focus on.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Attachment”
                    </span>{" "}
                    field: Enter any attachments related to the task. It can be
                    anything from the work order, or the schedule, etc.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Head”
                    </span>{" "}
                    field: Enter the head. It should tell what the task is
                    associated to. Some options will open with an additional
                    field for extra information. The options are:
                  </li>
                  <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Farm
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Chemical
                      </span>
                      : It will add the{" "}
                      <span className="text-primary-activelink font-bold">
                        Chemical
                      </span>{" "}
                      field. You will need to enter what product of fertilizer
                      will be used. The options will consist of fertilizers from
                      a specific{" "}
                      <span className="text-primary-activelink font-bold">
                        Inventory
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        General
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Goods Receiving Note
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Health
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Inventory
                      </span>
                      : It will add the{" "}
                      <span className="text-primary-activelink font-bold">
                        Inventory
                      </span>{" "}
                      field. You will need to enter what{" "}
                      <span className="text-primary-activelink font-bold">
                        Inventory
                      </span>{" "}
                      will be used. The options will consist of Inventories that
                      are within the{" "}
                      <span className="text-primary-activelink font-bold">
                        Farm Management System
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Land
                      </span>
                      : It will add the{" "}
                      <span className="text-primary-activelink font-bold">
                        Land
                      </span>{" "}
                      field. You will need to enter which farm location is being
                      used. The options will consist of Farm Locations that are
                      within the{" "}
                      <span className="text-primary-activelink font-bold">
                        Farm Management System
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Orchard
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Pesticide
                      </span>
                      : It will add the{" "}
                      <span className="text-primary-activelink font-bold">
                        Pesticide
                      </span>{" "}
                      field. You will need to enter what product of pesticide
                      will be used. The options will consist of pesticides that
                      are from a specific{" "}
                      <span className="text-primary-activelink font-bold">
                        Inventory
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Planting
                      </span>
                      : It will add the{" "}
                      <span className="text-primary-activelink font-bold">
                        Planting
                      </span>{" "}
                      field. You will need to enter what Crop/Planting is the
                      focus of the task. The options will consist of
                      Crops/Plantings that are within the{" "}
                      <span className="text-primary-activelink font-bold">
                        Farm Management System
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Equipment
                      </span>
                    </li>
                  </ul>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Cost”
                    </span>{" "}
                    field: Enter how much cost is incurred on the task.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Payment Mode”
                    </span>{" "}
                    field: Enter which payment method is the head of accounts.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Vendor”
                    </span>{" "}
                    field: Enter the name of the vendor of the task.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Cheque No. / Transaction ID”
                    </span>{" "}
                    field: Enter the Cheque No. or the Transaction ID of the
                    task.
                  </li>
                </ul>
                <p className="mb-4">
                  Fill all the fields on the right, such as:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Task Status”
                    </span>{" "}
                    field: Enter the current state of the task as you are making
                    it. There are three options:
                  </li>
                  <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Canceled
                      </span>
                      : The task is canceled and will neither be in the agenda
                      nor assigned to the farm employee anymore.
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        In-Progress
                      </span>
                      : The task is currently being executed by the person
                      assigned to it.
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        To-Do
                      </span>
                      : The task is currently in the agenda and will be executed
                      by the person assigned to it.
                    </li>
                  </ul>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Assigned to”
                    </span>{" "}
                    field: Enter the name of the employee of your farm operation
                    that the task is assigned to. The options will consist of
                    employees that are within the{" "}
                    <span className="text-primary-activelink font-bold">
                      Farm Management System
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Priority”
                    </span>{" "}
                    field: Enter the priority or how important the task is.
                    There are three options, depending on the time frame or
                    importance:
                  </li>
                  <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Low
                      </span>
                      : The task needs to be completed but it can take its time.
                      It can also be assigned to tasks that are part of the
                      farm’s regular maintenance.
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Medium
                      </span>
                      : The task is important and needs to be completed. It can
                      also be assigned to tasks that are necessary for the
                      farm’s logistics.
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        High
                      </span>
                      : The task is either under a tight deadline or is a high
                      importance task for the farm employee to act on.
                    </li>
                  </ul>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Start Date and Time”
                    </span>{" "}
                    field: Enter the date and time of when the task should start
                    operations or begin work.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “End Date and Time”
                    </span>{" "}
                    field: Enter the date and time of when the task should be
                    finished or when is the task’s deadline.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Is Repeatable Task?”
                    </span>{" "}
                    field: Enter whether the task should be repeated multiple
                    times or not. There are two options:
                  </li>
                  <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        No
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Yes
                      </span>
                      : There will be two extra fields that will show.
                    </li>
                    <ul className="list-disc ml-6 mb-4">
                      <li className="mb-2">
                        <span className="text-primary-activelink font-bold">
                          Task Repeat Cycle
                        </span>
                        : Enter the number of gap days before the task is
                        repeated.
                      </li>
                      <li className="mb-2">
                        <span className="text-primary-activelink font-bold">
                          No. of Repetition
                        </span>
                        : Enter the number of times the task is repeated.
                      </li>
                    </ul>
                  </ul>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Estimated Time and Unit”
                    </span>{" "}
                    field: Enter the estimated amount of time it will take to
                    complete the task, and the unit of time used. There are
                    three options of which unit you can choose:
                  </li>
                  <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Minute
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Hour
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Day
                      </span>
                    </li>
                  </ul>
                </ul>
                <p className="mb-4">
                  When a task is completed, a transaction is created against
                  that task. That can be viewed in the financial tab in the{" "}
                  <span className="text-primary-activelink font-bold">
                    General Ledger
                  </span>{" "}
                  table.
                </p>
                <p className="mb-4">
                  In the{" "}
                  <span className="text-primary-activelink font-bold">
                    Table View
                  </span>
                  , the task is added as an entry in the table, and you can
                  view, edit, or delete it using the option buttons on the
                  right.
                </p>
                <p className="mb-4">
                  In the{" "}
                  <span className="text-primary-activelink font-bold">
                    Calendar View
                  </span>
                  , the task is added as a rectangular shape that extends from
                  one date to another date. You can click on the task and edit
                  the details; however, you cannot delete or view from the{" "}
                  <span className="text-primary-activelink font-bold">
                    Calendar View
                  </span>
                  .
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Features of the Tasks Dashboard
                </h2>
                <p className="mb-4">
                  Now that we covered how to add a{" "}
                  <span className="text-primary-activelink font-bold">
                    Task
                  </span>{" "}
                  into the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>
                  , let us now focus on the features that are present in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Tasks Dashboard
                  </span>
                  !
                </p>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Browsing for a Task
                </h3>
                <p className="mb-4">
                  You can browse through the{" "}
                  <span className="text-primary-activelink font-bold">
                    Table
                  </span>{" "}
                  and{" "}
                  <span className="text-primary-activelink font-bold">
                    Calendar View
                  </span>{" "}
                  to find the task you want using the page options. Note that
                  both views have different methods for browsing for tasks.
                </p>
                <p className="mb-4">
                  Let’s start with the{" "}
                  <span className="text-primary-activelink font-bold">
                    Table View
                  </span>
                  :
                </p>
                <h4 className="text-lg font-semibold mb-3 text-primary-activelink font-bold">
                  Tasks View
                </h4>
                <p className="mb-4">
                  Let’s show you how to use the page options in{" "}
                  <span className="text-primary-activelink font-bold">
                    Table View
                  </span>
                  :
                </p>
                <p className="mb-4">
                  The page options are located below the{" "}
                  <span className="text-primary-activelink font-bold">
                    Tasks
                  </span>{" "}
                  table.
                </p>
                  <div className="pl-13 pt-8 flex justify-center">
                                  {brtv && (
                                    <GatsbyImage
                                      image={brtv}
                                      alt="Startups illustration"
                                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                                    />
                                  )}
                                </div><br/><br/>
                <p className="mb-4">
                  Here you can see the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Total number of records”
                  </span>
                  , the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Records per page option”
                  </span>
                  , the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Page select”
                  </span>
                  , and the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Go to page search”
                  </span>
                  .
                </p>
                <p className="mb-4">Let’s go through them one by one:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Total number of records
                    </span>
                    : This shows a number of how many tasks are there in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Farm Management System
                    </span>
                    . It is located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      Tasks
                    </span>{" "}
                    table, above the page select options, and is on the bottom
                    left of the page.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Records per page option
                    </span>
                    : This opens a menu where you can select how many task
                    entries you want to see in one page. The default is set to
                    5. The options are 5, 10, 50, and 100. It is located below
                    the{" "}
                    <span className="text-primary-activelink font-bold">
                      Tasks
                    </span>{" "}
                    table, above the page select options, and is to the bottom
                    right of the page.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Page select
                    </span>
                    : It shows which page you are currently in (the default is
                    the 1st page). It gives you buttons for the next five pages
                    after which it gives you the button to the last page. You
                    can also move to the previous page using the left arrow
                    button, located on the left side, or to the next page using
                    the right arrow button located on the right side.
                  </li>
                    <div className="pl-13 pt-8 flex justify-center">
                                  {ps && (
                                    <GatsbyImage
                                      image={ps}
                                      alt="Startups illustration"
                                      className="border border-gray-200 shadow-lg"
                                    />
                                  )}
                                </div><br/><br/>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Go to page” search
                    </span>
                    : You can type a page number of where the task you are
                    looking for is and hit enter. It will then open the page
                    with the page number shown as well.
                  </li>
                    <div className="pl-13 pt-8 flex justify-center">
                                  {gtp && (
                                    <GatsbyImage
                                      image={gtp}
                                      alt="Startups illustration"
                                      className="border border-gray-200 shadow-lg"
                                    />
                                  )}
                                </div><br/><br/>
                </ul>
                <p className="mb-4">
                  You can use the page options as a way of finding a task or a
                  collection of tasks.
                </p>
                <p className="mb-4">
                  Now let us show the alternative way, through the{" "}
                  <span className="text-primary-activelink font-bold">
                    Calendar View
                  </span>
                  :
                </p>
               
                <h4 className="text-lg font-semibold mb-3 text-primary-activelink font-bold">
                  Calendar View
                </h4>
                   <div className="pl-13 pt-8 flex justify-center">
                                  {cv && (
                                    <GatsbyImage
                                      image={cv}
                                      alt="Startups illustration"
                                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                                    />
                                  )}
                                </div><br/><br/>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    Calendar View
                  </span>{" "}
                  modifications are a set of features, available only to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Calendar View
                  </span>
                  , that let you change the view on the{" "}
                  <span className="text-primary-activelink font-bold">FMS</span>{" "}
                  calendar.
                </p>
                <p className="mb-4">
                  Here are the tools listed below going from left to right:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Today”
                    </span>{" "}
                    button: It changes the calendar to show only the today date
                    in all views (in{" "}
                    <span className="text-primary-activelink font-bold">
                      Month
                    </span>
                    ,{" "}
                    <span className="text-primary-activelink font-bold">
                      Week
                    </span>
                    ,{" "}
                    <span className="text-primary-activelink font-bold">
                      Day
                    </span>
                    , and{" "}
                    <span className="text-primary-activelink font-bold">
                      Agenda
                    </span>{" "}
                    views).
                  </li>
                  <p className="mb-4">
                    [Provided above is the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Today”
                    </span>{" "}
                    month calendar view]
                  </p>
                  <p className="mb-4">
                    [Provided above is the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Today”
                    </span>{" "}
                    week calendar view]
                  </p>
                  <p className="mb-4">
                    [Provided above is the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Today”
                    </span>{" "}
                    day calendar view]
                  </p>
                  <p className="mb-4">
                    [Provided above is the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Today”
                    </span>{" "}
                    agenda calendar view]
                  </p>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Back”
                    </span>{" "}
                    button: It changes the calendar to show only the previous
                    date in all views (in{" "}
                    <span className="text-primary-activelink font-bold">
                      Month
                    </span>
                    ,{" "}
                    <span className="text-primary-activelink font-bold">
                      Week
                    </span>
                    ,{" "}
                    <span className="text-primary-activelink font-bold">
                      Day
                    </span>
                    , and{" "}
                    <span className="text-primary-activelink font-bold">
                      Agenda
                    </span>{" "}
                    views).
                  </li>
                  <p className="mb-4">
                    [Provided above is the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Back”
                    </span>{" "}
                    month calendar view]
                  </p>
                  <p className="mb-4">
                    [Provided above is the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Back”
                    </span>{" "}
                    week calendar view]
                  </p>
                  <p className="mb-4">
                    [Provided above is the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Back”
                    </span>{" "}
                    day calendar view]
                  </p>
                  <p className="mb-4">
                    [Provided above is the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Back”
                    </span>{" "}
                    agenda calendar view]
                  </p>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Next”
                    </span>{" "}
                    button: It changes the calendar to show only the next date
                    in all views (in{" "}
                    <span className="text-primary-activelink font-bold">
                      Month
                    </span>
                    ,{" "}
                    <span className="text-primary-activelink font-bold">
                      Week
                    </span>
                    ,{" "}
                    <span className="text-primary-activelink font-bold">
                      Day
                    </span>
                    , and{" "}
                    <span className="text-primary-activelink font-bold">
                      Agenda
                    </span>{" "}
                    views).
                  </li>
                  <p className="mb-4">
                    [Provided above is the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Next”
                    </span>{" "}
                    month calendar view]
                  </p>
                  <p className="mb-4">
                    [Provided above is the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Next”
                    </span>{" "}
                    week calendar view]
                  </p>
                  <p className="mb-4">
                    [Provided above is the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Next”
                    </span>{" "}
                    day calendar view]
                  </p>
                  <p className="mb-4">
                    [Provided above is the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Next”
                    </span>{" "}
                    agenda calendar view]
                  </p>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Current Calendar View Title
                    </span>
                    : It is a title that shows which present view and date you
                    are currently on.
                  </li>
                  <p className="mb-4">
                    [Provided above is the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Current Calendar View”
                    </span>{" "}
                    title]
                  </p>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Month”
                    </span>{" "}
                    button: It changes the calendar to show the month view of
                    the current date.
                  </li>
                  <p className="mb-4">
                    [Provided above is the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Month”
                    </span>{" "}
                    view of the calendar]
                  </p>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Week”
                    </span>{" "}
                    button: It changes the calendar to show the week view of the
                    current date.
                  </li>
                  <p className="mb-4">
                    [Provided above is the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Week”
                    </span>{" "}
                    view of the calendar]
                  </p>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Day”
                    </span>{" "}
                    button: It changes the calendar to show the day view of the
                    current date.
                  </li>
                  <p className="mb-4">
                    [Provided above is the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Day”
                    </span>{" "}
                    view of the calendar]
                  </p>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Agenda”
                    </span>{" "}
                    button: It changes the calendar to only show the tasks that
                    are on the agenda starting on today’s date to one month from
                    now.
                  </li>
                  <p className="mb-4">
                    [Provided above is the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Agenda”
                    </span>{" "}
                    view of the calendar]
                  </p>
                </ul>
                <p className="mb-4">
                  You can modify the view of the{" "}
                  <span className="text-primary-activelink font-bold">FMS</span>{" "}
                  calendar to view the tasks for your farms and its employees in
                  a unique way.
                </p>
              </div>
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 2
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <div className="lg:pl-10">
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Searching for a Task
                </h3>
                <p className="mb-4">
                  You can search for a task from the table of tasks present in
                  the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>{" "}
                  in both the{" "}
                  <span className="text-primary-activelink font-bold">
                    Table View
                  </span>{" "}
                  and the{" "}
                  <span className="text-primary-activelink font-bold">
                    Calendar View
                  </span>
                  , as they are in the same places.
                </p>
                <p className="mb-4">
                  You can locate the search options as they are underneath the{" "}
                  <span className=" font-bold">“Add Task”</span> button and the{" "}
                  <span className=" font-bold">“Download Table”</span> button,
                  and above the{" "}
                  <span className="text-primary-activelink font-bold">
                    Table
                  </span>{" "}
                  (in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Table View
                  </span>
                  ) and above the{" "}
                  <span className="text-primary-activelink font-bold">
                    Calendar
                  </span>{" "}
                  (in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Calendar View
                  </span>
                  ).
                </p>
                   <div className="pl-13 pt-8 flex justify-center">
                                  {srtv && (
                                    <GatsbyImage
                                      image={srtv}
                                      alt="Startups illustration"
                                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                                    />
                                  )}
                                </div><br/><br/>
                <p className="mb-4">
                  [Provided above is the{" "}
                  <span className="text-primary-activelink font-bold">
                    Table View
                  </span>
                  ]
                </p>
                   <div className="pl-13 pt-8 flex justify-center">
                                  {srcv && (
                                    <GatsbyImage
                                      image={srcv}
                                      alt="Startups illustration"
                                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                                    />
                                  )}
                                </div><br/><br/>
                <p className="mb-4">
                  [Provided above is the{" "}
                  <span className="text-primary-activelink font-bold">
                    Calendar View
                  </span>
                  ]
                </p>
                <p className="mb-4">
                  You can search based on these options going from left to
                  right:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Title”
                    </span>{" "}
                    search: You can search by the title name of the task.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Assigned To”
                    </span>{" "}
                    search: You can search the task based on which farm employee
                    it is assigned to. Here are the options:
                  </li>
                  <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Me
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Others
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        All
                      </span>
                    </li>
                  </ul>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Associated To”
                    </span>{" "}
                    search: You can search the task based on what it is
                    associated with, such as a specific resource like land,
                    planting, inventory, equipment, etc. Here are the options:
                  </li>
                  <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Farm
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Chemical
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        General
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        GoodsReceivingNote
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Health
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Inventory
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Land
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Orchard
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Pesticide
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Planting
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Equipment
                      </span>
                    </li>
                  </ul>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Progress”
                    </span>{" "}
                    search: You can search by the progress of the task. You can
                    search for a list of tasks that are pending, in progress,
                    completed, or canceled. Here are the options:
                  </li>
                  <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Canceled
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Completed
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        In-Progress
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        To-Do
                      </span>
                    </li>
                  </ul>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Upcoming Tasks”
                    </span>{" "}
                    search: You can search which tasks are the upcoming ones
                    based on today, tomorrow, this week, next week, next month,
                    or can choose a custom range in which tasks were or will be
                    performed.
                  </li>
                  <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        All
                      </span>{" "}
                      (Default)
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Today
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Tomorrow
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        This Week
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Next Week
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Next Month
                      </span>
                    </li>
                    <li className="mb-2">
                      <span className="text-primary-activelink font-bold">
                        Custom Range
                      </span>
                    </li>
                  </ul>
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Custom Range
                    </span>{" "}
                    option will add one more option, and in it, you can set the
                    date range.
                  </p>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Select a Date Range”
                    </span>{" "}
                    search: This option is where you can set a start date and
                    end date, for the search to look for tasks whose start date
                    and end date are within the range you set. It’ll open a date
                    set where you can set a start date and end date.
                  </li>
                </ul>
                <p className="mb-4">
                  Now, if you are using the search on the{" "}
                  <span className="text-primary-activelink font-bold">
                    Table View
                  </span>
                  , then click on the{" "}
                  <span className=" font-bold">“Search”</span> button and see
                  the table change the results to only show what you want. Also,
                  you can click on the{" "}
                  <span className=" font-bold">
                    “Refresh [Shown as an ‘arrow pointing back’ icon]”
                  </span>{" "}
                  button to refresh the data.
                </p>
                <p className="mb-4">
                  If you are using the search on the{" "}
                  <span className="text-primary-activelink font-bold">
                    Calendar View
                  </span>
                  , then you can click on the{" "}
                  <span className=" font-bold">“Search”</span> button and see
                  the calendar only show results that you want to see. Also, you
                  can click on the{" "}
                  <span className=" font-bold">
                    “Refresh [Shown as an ‘arrow pointing back’ icon]”
                  </span>{" "}
                  button to refresh the data.
                </p>
              </div>
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 3
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <div className="lg:pl-10">
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Downloading the Task’s Table
                </h3>
                <p className="mb-4">
                  You can easily download a table of tasks you want. This
                  feature is available in both the{" "}
                  <span className="text-primary-activelink font-bold">
                    Calendar
                  </span>{" "}
                  and{" "}
                  <span className="text-primary-activelink font-bold">
                    Table Views
                  </span>
                  .
                </p>
                <p className="mb-4">
                  To download a table from the{" "}
                  <span className="text-primary-activelink font-bold">
                    Table View
                  </span>
                  , you start by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    You can choose to download the entire table or download only
                    a specific set of tasks that are on the table using the
                    search options.
                  </li>
                  <li className="mb-2">
                    You can then click on the{" "}
                    <span className=" font-bold">“Download Table”</span> button,
                    located to the right of the{" "}
                    <span className=" font-bold">“’+’ Add Task”</span> and below
                    the view tabs.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                                  {dota && (
                                    <GatsbyImage
                                      image={dota}
                                      alt="Startups illustration"
                                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                                    />
                                  )}
                                </div><br/><br/>
                  <li className="mb-2">
                    It will then open a file explorer window, asking where to
                    download the file in your computer.
                  </li>
                  <li className="mb-2">
                    Once you have selected a folder to download the file to,
                    click the <span className=" font-bold">“Save”</span> button.
                  </li>
                  <li className="mb-2">
                    Now you can either go to the top-right hand of your browser
                    and go into the Downloads section, to view your PDF file, or
                    you can go into the file explorer location where you
                    uploaded the PDF file and open it to view it as well.
                  </li>
                </ol>
                {/* <p className="mb-4">
                  Provided below is an example of what it looks like:
                </p>
                <p className="mb-4">
                  [Placeholder for Tasks table PDF example image]
                </p> */}
                <p className="mb-4">
                  To download a table from the{" "}
                  <span className="text-primary-activelink font-bold">
                    Calendar View
                  </span>
                  , you start by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    You can choose to download the entire table or download only
                    a specific set of tasks that are on the table using the
                    search options.
                  </li>
                  <li className="mb-2">
                    You can then click on the{" "}
                    <span className=" font-bold">“Download Table”</span> button,
                    located to the right of the{" "}
                    <span className=" font-bold">“’+’ Add Task”</span> and below
                    the view tabs.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                                  {docal && (
                                    <GatsbyImage
                                      image={docal}
                                      alt="Startups illustration"
                                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                                    />
                                  )}
                                </div><br/><br/>
                  <li className="mb-2">
                    It will then open a file explorer window, asking where to
                    download the file in your computer.
                  </li>
                  <li className="mb-2">
                    Once you have selected a folder to download the file to,
                    click the <span className=" font-bold">“Save”</span> button.
                  </li>
                  <li className="mb-2">
                    Now you can either go to the top-right hand of your browser
                    and go into the Downloads section, to view your PDF file, or
                    you can go into the file explorer location where you
                    uploaded the PDF file and open it to view it as well.
                  </li>
                </ol>
                {/* <p className="mb-4">
                  Provided below is an example of what it looks like:
                </p>
                <p className="mb-4">
                  [Placeholder for Tasks table PDF example image]
                </p> */}
              </div>
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 4
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <div className="lg:pl-10">
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Viewing a Task
                </h3>
                <p className="mb-4">
                  You can easily review the details of the task. There are
                  currently two methods to view a task. This feature is only on
                  the{" "}
                  <span className="text-primary-activelink font-bold">
                    Table View
                  </span>
                  :
                </p>
                <p className="mb-4">
                  There are currently 2 methods to view a{" "}
                  <span className="text-primary-activelink font-bold">
                    Task
                  </span>
                  .
                </p>
                <p className="mb-4">
                  The first method is to select the name of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Task
                  </span>
                  . It will then take you to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Task”
                  </span>{" "}
                  window.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, you have to locate the{" "}
                    <span className="text-primary-activelink font-bold">
                      Farm Location
                    </span>{" "}
                    that you want to view. You can do so by either searching or
                    browsing the farm location dashboard until you find the farm
                    location.
                  </li>
                  <li className="mb-2">
                    Once you have located the farm location you want to view,
                    then you can select its name, which is located on the left
                    of the table on the farm location you want to view.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                                  {viewing && (
                                    <GatsbyImage
                                      image={viewing}
                                      alt="Startups illustration"
                                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                                    />
                                  )}
                                </div><br/><br/>
                  <li className="mb-2">
                    It will then take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Task”
                    </span>{" "}
                    window where you can view the details of the task you
                    selected.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                                  {vi2 && (
                                    <GatsbyImage
                                      image={vi2}
                                      alt="Startups illustration"
                                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                                    />
                                  )}
                                </div><br/><br/>
                </ol>
                <p className="mb-4">
                  The second method is to select the{" "}
                  <span className=" font-bold">“Three dots”</span> icon, to show
                  a small white box:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    You can also select the{" "}
                    <span className=" font-bold">“Three dots”</span> [It’ll look
                    like this <span className=" font-bold">“⋮“</span>] icon,
                    located on the right side of the task, to the right of the{" "}
                    <span className=" font-bold">“Delete”</span> button [shown
                    as a <span className=" font-bold">“trash can”</span> icon].
                  </li>
                  <li className="mb-2">
                    Click on the <span className=" font-bold">“View”</span>{" "}
                    button once it appears.
                  </li>
                  <li className="mb-2">
                    The task’s{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Task”
                    </span>{" "}
                    window will open.
                  </li>
                </ol>
                <p className="mb-4">
                  You can then review all the task’s details and confirm if it
                  is acceptable in your eyes.
                </p>
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 5
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <div className="lg:pl-10">
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Editing a Task
                </h3>
                <p className="mb-4">
                  If there are any task’s details you want to change, you can
                  easily edit the details except for the transaction details
                  related to the task. We will show how to edit tasks in the
                  different views in different instructions as the process is
                  different in both views.
                </p>
                <p className="mb-4">
                  For the{" "}
                  <span className="text-primary-activelink font-bold">
                    Table View
                  </span>
                  , you start by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, find the task you wish to edit; you can either use
                    the search feature or go through the different pages to find
                    the task you wish to edit.
                  </li>
                  <li className="mb-2">
                    Click on the <span className=" font-bold">“Edit”</span>{" "}
                    button [shown as a{" "}
                    <span className=" font-bold">“pencil”</span> icon], located
                    on the right side of the task entry and to the left of the{" "}
                    <span className=" font-bold">“Delete”</span> button [shown
                    as a <span className=" font-bold">“trash can”</span> icon],
                    and the <span className=" font-bold">“Three dots”</span>{" "}
                    [It’ll look like this{" "}
                    <span className=" font-bold">“⋮“</span>] icon.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                                  {editing && (
                                    <GatsbyImage
                                      image={editing}
                                      alt="Startups illustration"
                                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                                    />
                                  )}
                                </div><br/><br/>
                  <li className="mb-2">The task’s edit window will open.</li>
                  <li className="mb-2">
                    Click on the field(s) you want to edit.
                  </li>
                  <li className="mb-2">Make changes in those field(s).</li>
                  <li className="mb-2">
                    When you are finished, click on the{" "}
                    <span className=" font-bold">“Submit”</span> button.
                  </li>
                  <li className="mb-2">
                    The task’s details will be edited/updated successfully.
                  </li>
                </ol>
                <p className="mb-4">
                  For the{" "}
                  <span className="text-primary-activelink font-bold">
                    Calendar View
                  </span>
                  :
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, you have to find the task you wish to edit; you can
                    either use the search functionality or use the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Back”
                    </span>{" "}
                    and{" "}
                    <span className="text-primary-activelink font-bold">
                      “Next”
                    </span>{" "}
                    buttons that are on the right and left of the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Today”
                    </span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Month”
                    </span>{" "}
                    section to find the task you wish to edit.
                  </li>
                  <li className="mb-2">
                    Then click on the task (it is represented as a bar that
                    extends from one date to another date).
                  </li>
                  <li className="mb-2">The task’s edit window will open.</li>
                  <li className="mb-2">
                    Click on the field(s) you want to edit.
                  </li>
                  <li className="mb-2">Make changes in those field(s).</li>
                  <li className="mb-2">
                    When you are finished, click on the{" "}
                    <span className=" font-bold">“Submit”</span> button.
                  </li>
                  <li className="mb-2">
                    The task’s details will be edited/updated successfully.
                  </li>
                </ol>
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 6
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <div className="lg:pl-10">
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Deleting a Task
                </h3>
                <p className="mb-4">
                  If you no longer need a particular task and want to delete it,
                  you can easily do so in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Table View
                  </span>{" "}
                  only, as the option is not available on the{" "}
                  <span className="text-primary-activelink font-bold">
                    Calendar View
                  </span>
                  .
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, you need to find the task that you want to delete in
                    the tasks table. You can do so by either using the search
                    options or using the page buttons to find the task you want
                    to delete.
                  </li>
                  <li className="mb-2">
                    Click on the <span className=" font-bold">“Delete”</span>{" "}
                    button [shown as a{" "}
                    <span className=" font-bold">“trash can”</span> icon],
                    located on the right of the task entry in the middle of the{" "}
                    <span className=" font-bold">“Edit”</span> button [shown as
                    a <span className=" font-bold">“pencil”</span> icon] and the{" "}
                    <span className=" font-bold">“Three dots”</span> [It’ll look
                    like this <span className=" font-bold">“⋮“</span>] icon.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                                  {deleting && (
                                    <GatsbyImage
                                      image={deleting}
                                      alt="Startups illustration"
                                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                                    />
                                  )}
                                </div><br/><br/>
                  <li className="mb-2">
                    A dialogue box will appear to confirm whether you want to
                    delete the task or not.
                  </li>
                  <li className="mb-2">
                    Click on the <span className=" font-bold">“Delete”</span>{" "}
                    button to confirm your deletion.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Task
                    </span>{" "}
                    will be deleted successfully from the table and the calendar
                    as well.
                  </li>
                </ol>
                <p className="mb-4">
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
