import React from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const tasks = () => {
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
      <div>
        <div className="flex flex-col ">
          <h2 className="text-primary-activelink font-semibold text-[34px] font-montserrat pl-10 pt-5">
            Starting Guide for Tasks:
          </h2>
          <p className="text-primary-paragraph text-[18px] font-montserrat font-normal px-10 pt-4">
            This feature of farm management system helps you manage all the work
            that needs to be done around your farm. You can create a list of
            tasks, add checklists, assign them to workers, track progress,
            assign priority, add cost incurred on the task and related
            transaction information, and record how long they take to complete.
          </p>

           <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
                Step 1
              </h2>
              <div className="flex-1 h-px bg-primary-line"></div>
            </div>
          <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
            Task Views:
          </h2>
          <p className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
            There are two tabs in the upper left corner when you come on task
            screen: Table and calendar. These tabs offer different perspectives
            for task management, enabling users to select the most suitable
            option based on their needs and preferences.
            <br /> You can switch between tabs as per your wish.
            <br />
            <br />{" "}
            <span className="text-primary-pheading font-semibold">List View</span>:
            The List View shows grid of items. It can be sorted by the different
            column headers, allowing you to order these tasks by priority,
            starting date, assignee, associated to, status, and title.
            <div className="pl-13 pt-8 flex justify-center">
              {listview && (
                <GatsbyImage
                  image={listview}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px] "
                />
              )}
            </div>
            <br />
            <br />
            <br />
            <span className="text-primary-pheading font-semibold ">
              Calendar View
            </span>
            :The Calendar View acts as a schedule for your tasks. You can see
            what tasks are to be done in a particular month, week or a day.
            <div className="pl-13 pt-8 flex justify-center">
              {cview && (
                <GatsbyImage
                  image={cview}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px] "
                />
              )}
            </div>
            <br />{" "}
          </p>

 <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
                Step 2
              </h2>
              <div className="flex-1 h-px bg-primary-line"></div>
            </div>
          <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
            Adding Tasks:
          </h2>
          <p className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
            For adding a task, click on the add task button. A task form will
            open. Enter the details related to the tasks. Enter task title,
            description, additional checklists, where the task will be
            performed, to whom it is associated to, how much cost is incurred on
            the task and related transaction details like Head of Accounts,
            Customer, transaction id etc., status of task, who will perform the
            task, how much is the task important, when will the task start and
            end, will the task be repeated or not, and how much time will be
            spent on the task. When a task is completed, a transaction is
            created against that task. That can be viewed in the financial tab
            in general ledger table.
          </p>
          <div className="pl-13 pt-8 flex justify-center">
            {addtask && (
              <GatsbyImage
                image={addtask}
                alt="Startups illustration"
                className="bg-white w-[1000.58px] "
              />
            )}
          </div>

           <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
                Step 3
              </h2>
              <div className="flex-1 h-px bg-primary-line"></div>
            </div>
          <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
            Tasks Fields:
          </h2>
          <p className="text-primary-paragraph2 text-[19px] font-montserrat font-normal px-10">
            <span className="text-orange-600 font-semibold">Title</span>: It
            will tell the name of the task to be done. (e.g. Ploughing)
            <br />{" "}
            <span className="text-primary-pheading font-semibold">Description</span>
            It will provide the detailed description about the task. (e.g.
            Ploughing in fields)
            <br />{" "}
            <span className="text-primary-pheading font-semibold">Checklists</span>:
            Add subtasks or items required for performing the tasks. The
            checklist contains the description and text.
            <br />{" "}
            <span className="text-primary-pheading font-semibold">Add Location</span>:
            Choose the location where the task will be performed.
            <br />{" "}
            <span className="text-primary-pheading font-semibold">Attachments</span>:
            Add the necessary attachments related to tasks.
            <br />{" "}
            <span className="text-primary-pheading font-semibold">
              Associated To{" "}
            </span>
            : It tells which part of the farm the task is related to. The task
            can be related to:
            <ul className="list-disc list-inside text-primary-activelink font-semibold text-[18px]">
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
            <br /> <span className="text-primary-pheading font-semibold">Cost</span>:
            How much cost will be incurred in doing that task.
            <br />{" "}
            <span className="text-primary-pheading font-semibold">
              Transaction Details
            </span>
            : It will include details like head of accounts, transaction id, and
            customer name.
            <br />{" "}
            <span className="text-primary-pheading font-semibold">Task Status</span>:
            What is the status of the task i.e., on what stage the task is at.
            When a task is created its status cannot be completed. Later on,
            when the task will be completed you will edit the status to
            completed. The other status of task can be:
            <ul className="list-disc list-inside text-primary-activelink font-semibold text-[18px]">
              <li>Pending</li>
              <li>In-Progress</li>
              <li>Cancelled</li>
            </ul>
            <br />{" "}
            <span className="text-primary-pheading font-semibold">Assign to</span>:
            Who will be the person going to perform the task.
            <br />{" "}
            <span className="text-primary-pheading font-semibold">Priority</span>
            :How much important it is to perform the task. Based on the
            importance you can assign priority to the task like High, Medium,
            and Low.
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
            select no otherwise select yes. In case the task is repeatable new
            fields will appear which will include:
            <ul className="text-[18px]">
              <li>
                <span className="text-primary-activelink font-semibold">
                  Task Repeatable Cycle
                </span>
                :After how many days the task will be repeated.
              </li>
              <li>
                {" "}
                <span className="text-primary-activelink font-semibold">
                  No: of Repetition
                </span>
                :Fow how many times the task will be repeated.
              </li>
            </ul>
            <br />{" "}
            <span className="text-primary-pheading font-semibold">Time Spent</span>
            :How much it will take the task to complete.
            <br />{" "}
            <span className="text-primary-pheading font-semibold">Time Unit</span>:
            The unit of time can be seconds, hour, minute and day to complete
            the task.
          </p>


 <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
                Step 4
              </h2>
              <div className="flex-1 h-px bg-primary-line"></div>
            </div>
           <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
            Search Task:
          </h2>
          <p className="text-primary-paragraph2 text-[19px] font-montserrat font-normal px-10">
            You can search the task from the list of tasks present in the system. You can search based on either:<br/>
            <span className="text-primary-pheading font-semibold">Title</span>: You can search by the title of the task.
            <br />{" "}
            <span className="text-primary-pheading font-semibold">Assigned to</span>:
            You can search the task assigned to specific person.
            <br />{" "}
            <span className="text-primary-pheading font-semibold">Associated to</span>:
         You can search the task associated to specific resource like land, planting, inventory, equipment etc
            <br />{" "}
            <span className="text-primary-pheading font-semibold">Progress</span>:
            You can search by the progress of the task. You can search list of tasks that are pending, in progress, completed or cancelled.
            <br />{" "}
            <span className="text-primary-pheading font-semibold">Upcoming tasks</span>:
            You can search which tasks are the upcoming ones based on today, tomorrow, this week, next week, next month or can choose a custom range in which tasks were or will be performed.
            <br />{" "}
            
          Then click on the Search button. Also, you can click on the refresh button to refresh the data.
          </p>
           <div className="pl-13 pt-8 flex justify-center">
            {stask && (
              <GatsbyImage
                image={stask}
                alt="Startups illustration"
                className="bg-white w-[1000.58px] "
              />
            )}
          </div>

           <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
                Step 5
              </h2>
              <div className="flex-1 h-px bg-primary-line"></div>
            </div>

<h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
        Edit Task:
          </h2>
          <p className="text-primary-paragraph2 text-[19px] font-montserrat font-normal px-10">
           If any tasks detail you want to change, you can easily edit the details except for the transaction details related to the task. For that:<br/>
           <ul className="list-disc list-inside text-primary-activelink font-semibold text-[18px]">
            <li>Click on the edit icon.</li>
            <li>Task details screen will open.</li>
            <li>Click on the field you want to edit.</li>
            <li>Make changes in the field.</li>
            <li>Click on submit button.</li>
            <li>Tasks details will be edited/updated successfully.</li>
           </ul>
            </p>

             <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
                Step 6
              </h2>
              <div className="flex-1 h-px bg-primary-line"></div>
            </div>

<h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
        Delete Task:
          </h2>
          <p className="text-primary-paragraph2 text-[19px] font-montserrat font-normal px-10">
          If you no longer need any task and wants to delete the machinery, you can easily do so:<br/>
           <ul className="list-disc list-inside text-primary-activelink font-semibold text-[18px]">
            <li>Click on the delete icon against the row you want to delete in the tasks table.</li>
            <li>A dialogue box will appear to confirm whether you want to delete or not.</li>
            <li>Click on delete button.</li>
            <li>Make changes in the field.</li>
            <li>Task will be deleted successfully.</li>
            
           </ul>
            </p>
  <div className="pl-13 pt-8 flex justify-center">
            {dtask && (
              <GatsbyImage
                image={dtask}
                alt="Startups illustration"
                className="bg-white w-[1000.58px] "
              />
            )}
          </div>

           <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
                Step 7
              </h2>
              <div className="flex-1 h-px bg-primary-line"></div>
            </div>

<h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
        View Task:
          </h2>
          <p className="text-primary-paragraph2 text-[19px] font-montserrat font-normal px-10">
          You can easily view the details of task. For that:<br/>
           <ul className="list-disc list-inside text-primary-activelink font-semibold text-[18px]">
            <li>Hover on three dots.</li>
            <li>Click on view details button.</li>
            <li>Task details page will open.</li>
            <li>Click on print button if you want to print the details of the task.</li>
           </ul>
            </p>
            <div className="pl-13 pt-8 flex justify-center">
            {vtask && (
              <GatsbyImage
                image={vtask}
                alt="Startups illustration"
                className="bg-white w-[1000.58px] "
              />
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default tasks;
