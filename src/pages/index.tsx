import * as React from "react";

import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import { useEffect, useState } from "react";
import TextToSpeech from "../components/TextToSpeech";
const IndexPage = () => {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const loggedIn = isLoggedIn();
    if (!loggedIn) {
      navigate("/introduction");
    } else {
      setIsCheckingAuth(false); // allow page to render
    }
  }, []);

  // ⛔ Don't render anything while checking auth
  if (isCheckingAuth) return null;

  const data = useStaticQuery(graphql`
    query {
      pending: file(relativePath: { eq: "pending.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      ferm: file(relativePath: { eq: "ferm.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      manu: file(relativePath: { eq: "manu.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      c: file(relativePath: { eq: "c.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      Dashboard: file(relativePath: { eq: "Dashboard.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      l: file(relativePath: { eq: "l.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      s: file(relativePath: { eq: "s.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      t: file(relativePath: { eq: "t.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      p: file(relativePath: { eq: "p.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      o: file(relativePath: { eq: "o.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      wh: file(relativePath: { eq: "wh.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      in: file(relativePath: { eq: "in.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      mac: file(relativePath: { eq: "mac.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      co: file(relativePath: { eq: "co.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      fin: file(relativePath: { eq: "fin.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      mus: file(relativePath: { eq: "mus.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      r: file(relativePath: { eq: "r.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      land: file(relativePath: { eq: "land.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      tcaoo: file(relativePath: { eq: "tcaoo.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      tpto: file(relativePath: { eq: "tpto.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      tfrm: file(relativePath: { eq: "tfrm.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const pending = getImage(data.pending);
  const manu = getImage(data.manu);
  const c = getImage(data.c);
  const Dashboard = getImage(data.Dashboard);
  const ferm = getImage(data.ferm);
  const l = getImage(data.l);
  const s = getImage(data.s);
  const t = getImage(data.t);
  const p = getImage(data.p);
  const o = getImage(data.o);
  const wh = getImage(data.wh);
  const n = getImage(data.in);
  const mac = getImage(data.mac);
  const co = getImage(data.co);
  const fin = getImage(data.fin);
  const mus = getImage(data.mus);
  const r = getImage(data.r);
  const land = getImage(data.land);
  const tcaoo = getImage(data.tcaoo);
  const tpto = getImage(data.tpto);
  const tfrm = getImage(data.tfrm);
  return (
    <AppLayout>
      <PrivateRoute>
        <main>
          <div className="flex flex-col justify-center">
            <div className="acu lg:pr-4 text-justify font-montserrat text-[18px] text-primary-paragraph2">
              <div className="flex items-center">
                <div className="hidden lg:block">
                  <TextToSpeech textSelector=".acu" />
                </div>
                <h2 className="text-primary-activelink dark:text-[#FFFFFF] font-semibold text-[30px] font-montserrat ">
                  Dashboard:
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
                  The page that you will first see after logging in to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>{" "}
                  will be the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard Page
                  </span>
                  . The{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard
                  </span>{" "}
                  is the Main home page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>{" "}
                  and it provides you a general overview of your farms as well
                  as the resources of your farms. It also contains shortcuts to
                  many of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System’s Tools
                  </span>
                  .
                </p>
                <p className="mb-4">Below is what it should look like:</p>
                <p className="mb-4">[Placeholder for Dashboard Page image]</p>
                <p className="mb-4">
                  Let's go through and describe all the parts in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard Page
                  </span>
                  !
                </p>
                <p className="mb-4">
                  Starting with the{" "}
                  <span className="text-primary-activelink font-bold">
                    Status bar
                  </span>{" "}
                  located at the top!
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {Dashboard && (
                    <GatsbyImage
                      image={Dashboard}
                      alt="Startups illustration"
                      className="border border-gray-300  shadow-xl  "
                    />
                  )}
                </div>
                <br />
                <br />
                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  The Status Bar
                </h2>
                <p className="mb-4">
                  On the Top, you have your{" "}
                  <span className="text-primary-activelink font-bold">
                    status bar
                  </span>{" "}
                  which contains your profile, where you are in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>{" "}
                  as well as the <span className="font-bold">log out</span>{" "}
                  button.
                </p>
                <p className="mb-4">
                  Below is what the{" "}
                  <span className="text-primary-activelink font-bold">
                    Status Bar
                  </span>{" "}
                  looks like:
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {s && (
                    <GatsbyImage
                      image={s}
                      alt="Startups illustration"
                      className="border border-gray-300  shadow-xl w-[1000.58px]"
                    />
                  )}
                </div>
                <br />
                <br />
                <p className="mb-4">[Placeholder for Status Bar image]</p>
                <p className="mb-4">The options are:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    <span className="font-bold">“Go back?”</span> button: This
                    button takes you back to a previous page you were in from
                    the page you are currently on. It is located to the left of
                    the <span className="font-bold">View Profile</span> button
                    and on the right of the Logo for the{" "}
                    <span className="text-primary-activelink font-bold">
                      Farm Management System
                    </span>
                    .
                  </li>
                </ul>
                <p className="mb-4">
                  Below is what the{" "}
                  <span className="font-bold">“Go back?”</span> button looks
                  like:
                </p>

                <p className="mb-4">[Placeholder for Go back? button image]</p>
                <p className="mb-4">
                  Next we are going to check out the{" "}
                  <span className="font-bold">“View Profile”</span> button.
                </p>
                <p className="mb-4">
                  <span className="font-bold">“View Profile”</span> button: You
                  can access and update your personal account information and
                  any updated information you wish to provide. It also acts as a
                  shortcut to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Profile details”
                  </span>{" "}
                  page.
                </p>

                <p className="mb-4">
                  Here is how to access the{" "}
                  <span className="text-primary-activelink font-bold">
                    profile details
                  </span>
                  , you can start by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First moving the mouse to the top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    and hovering over your account name located in the top-left
                    side of the{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>
                    . It is to the right of the{" "}
                    <span className="font-bold">“Go back?”</span> button and the
                    left{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Title bar text. Your account name should be right beside a
                    picture of you or your farm company.
                  </li>
                  <li className="mb-2">
                    Click on your account name and you will be directed to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Profile details”
                    </span>{" "}
                    page.
                  </li>
                </ol>
                <p className="mb-4">
                  Below your{" "}
                  <span className="text-primary-activelink font-bold">
                    “Profile details”
                  </span>{" "}
                  page should look like this:
                </p>
                {/* <div className="pl-13 pt-8 flex justify-center">
                {Menu && (
                  <GatsbyImage
                    image={Menu}
                    alt="Startups illustration"
                    className="border border-gray-300  shadow-xl  "
                  />
                )}
              </div>
<br/><br/> */}
                <p className="mb-4">
                  [Placeholder for Profile details page image]
                </p>
                <p className="mb-4">
                  As you can see you have your name on the top as well as your
                  full name and phone number fields on the bottom. You can
                  change them from here as well.
                </p>
                <p className="mb-4">
                  You can also change your password here if you want, you first
                  start by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    Making sure that you re-type your old password first in the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Password”
                    </span>{" "}
                    field.
                  </li>
                  <li className="mb-2">
                    Then type the new password in the{" "}
                    <span className="text-primary-activelink font-bold">
                      “New Password”
                    </span>{" "}
                    field.
                  </li>
                  <li className="mb-2">
                    Afterwards, if you have made any changes in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Profile
                    </span>{" "}
                    page, make sure you click the{" "}
                    <span className="font-bold">“Submit”</span> button to save
                    your changes!
                  </li>
                </ol>
                <p className="mb-4">
                  That was how to access the{" "}
                  <span className="text-primary-activelink font-bold">
                    Profile
                  </span>{" "}
                  page! Next we will back out to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard
                  </span>{" "}
                  page and check out the next feature on the top{" "}
                  <span className="text-primary-activelink font-bold">
                    Status bar
                  </span>
                  , which is the <span className="font-bold">logout</span>{" "}
                  button.
                </p>
                <p className="mb-4">
                  <span className="font-bold">“Logout”</span>: You can exit out
                  of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>{" "}
                  and it will return you to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Login Page
                  </span>{" "}
                  if you press this button, please keep in mind that you need to
                  sign in again if you wish to go back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Here is what the <span className="font-bold">“Logout”</span>{" "}
                  button looks like and does in action!
                </p>
                {/* <div className="pl-13 pt-8 flex justify-center">
                {Menu && (
                  <GatsbyImage
                    image={Menu}
                    alt="Startups illustration"
                    className="border border-gray-300  shadow-xl  "
                  />
                )}
              </div>
<br/><br/> */}
                <p className="mb-4">[Placeholder for Logout button image]</p>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    Status Bar
                  </span>{" "}
                  also acts as a Title bar holding which tool in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>{" "}
                  you are currently accessing and where you are in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>
                  .
                </p>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    Status bar
                  </span>{" "}
                  will always follow you wherever you are and whatever page you
                  are in within the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>
                  !
                </p>
                <p className="mb-4">
                  Now let’s move on to the next part of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard Page
                  </span>
                  .
                </p>
                <p className="mb-4">
                  The next part we will cover is on the left-hand side of the
                  page on your screen and it is called{" "}
                  <span className="text-primary-activelink font-bold">
                    “The Menu”
                  </span>
                  .
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  The Menu
                </h2>
                <p className="mb-4">
                  On the left-hand side of your screen, you will see a list of
                  Menu options. The{" "}
                  <span className="text-primary-activelink font-bold">
                    Menu
                  </span>{" "}
                  is your gateway to all features, the{" "}
                  <span className="text-primary-activelink font-bold">
                    Menu
                  </span>{" "}
                  ensures you can move easily between functions and keep on top
                  of your farm operations.
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {manu && (
                    <GatsbyImage
                      image={manu}
                      alt="Startups illustration"
                      className="border border-gray-300 shadow-xl h-[1100px]  "
                    />
                  )}
                </div>
                <br />
                <br />
                <p className="mb-4">
                  Below is what the{" "}
                  <span className="text-primary-activelink font-bold">
                    Menu bar
                  </span>{" "}
                  looks like:
                </p>
                <p className="mb-4">[Placeholder for Menu bar image]</p>
                <p className="mb-4">
                  The options in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Menu
                  </span>{" "}
                  are:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Farm Locations
                    </span>
                    : Here, you can manage and monitor all your farm locations
                    in one place. Here is how to access the{" "}
                    <span className="text-primary-activelink font-bold">
                      Farm Locations
                    </span>{" "}
                    page from the{" "}
                    <span className="text-primary-activelink font-bold">
                      Dashboard
                    </span>{" "}
                    page:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hovering your mouse over the{" "}
                      <span className="font-bold">“Farm Locations”</span> button
                      in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Dashboard”</span> button and
                      be above the <span className="font-bold">“Tasks”</span>{" "}
                      button.
                    </li>
                    <div className="pl-13 pt-8 flex justify-center">
                      {ferm && (
                        <GatsbyImage
                          image={ferm}
                          alt="Startups illustration"
                          className="border border-gray-300 shadow-xl w-[1000.58px] "
                        />
                      )}
                    </div>
                    <br />
                    <br />
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Farm Locations”</span>{" "}
                      button. It will direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Farm Locations”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Farm Locations”
                    </span>{" "}
                    page looks like:
                  </p>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                {ferm && (
                  <GatsbyImage
                    image={ferm}
                    alt="Startups illustration"
                    className="border border-gray-300  shadow-xl  "
                  />
                )}
              </div>
<br/><br/> */}
                  <p className="mb-4">
                    [Placeholder for Farm Locations page image]
                  </p>
                  <p className="mb-4">
                    We will explain how to use the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Farm Locations”
                    </span>{" "}
                    page in the{" "}
                    <span className="text-primary-pheading font-bold">
                      Farm Locations
                    </span>{" "}
                    chapter of this guide.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Farm Locations”
                    </span>{" "}
                    page, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the <span className="font-bold">“Dashboard”</span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                {Menu && (
                  <GatsbyImage
                    image={Menu}
                    alt="Startups illustration"
                    className="border border-gray-300  shadow-xl  "
                  />
                )}
              </div>
<br/><br/> */}
                  {/* <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p> */}
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="font-bold">“Dashboard”</span> button:
                  </p>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                {ferm && (
                  <GatsbyImage
                    image={ferm}
                    alt="Startups illustration"
                    className="border border-gray-300  shadow-xl  "
                  />
                )}
              </div>
<br/><br/> */}
                  {/* <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p> */}
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Tasks
                    </span>
                    : Allow you to plan, assign, and track farm activities
                    efficiently. To access the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Tasks”
                    </span>{" "}
                    page, you can start by:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hover your mouse over the{" "}
                      <span className="font-bold">“Tasks”</span> button in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Farm Locations”</span> button
                      and be above the{" "}
                      <span className="font-bold">“Planting”</span> button.
                    </li>
                    <div className="pl-13 pt-8 flex justify-center">
                      {t && (
                        <GatsbyImage
                          image={t}
                          alt="Startups illustration"
                          className="border border-gray-300  shadow-xl h-[1100px]"
                        />
                      )}
                    </div>
                    <br />
                    <br />
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Tasks”</span> button. It will
                      direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Tasks”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Tasks”
                    </span>{" "}
                    page looks like:
                  </p>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                {Menu && (
                  <GatsbyImage
                    image={Menu}
                    alt="Startups illustration"
                    className="border border-gray-300  shadow-xl  "
                  />
                )}
              </div>
<br/><br/> */}
                  <p className="mb-4">[Placeholder for Tasks page image]</p>
                  <p className="mb-4">
                    We will explain how to use the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Tasks”
                    </span>{" "}
                    page in the{" "}
                    <span className="text-primary-pheading font-bold">
                      Tasks
                    </span>{" "}
                    chapter of this user guide.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Tasks”
                    </span>{" "}
                    page, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the <span className="font-bold">“Dashboard”</span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  {/* <div className="pl-13 pt-8 flex justify-center"> */}
                  {/* {Menu && (
                  <GatsbyImage
                    image={Menu}
                    alt="Startups illustration"
                    className="border border-gray-300  shadow-xl  "
                  />
                )}
              </div>
<br/><br/> */}
                  <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p>
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="font-bold">“Dashboard”</span> button:
                  </p>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                {Menu && (
                  <GatsbyImage
                    image={Menu}
                    alt="Startups illustration"
                    className="border border-gray-300  shadow-xl  "
                  />
                )}
              </div>
<br/><br/> */}
                  <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p>
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Planting
                    </span>
                    : You can record planting and monitor your crops progress in
                    your farms. To access the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Planting”
                    </span>{" "}
                    page, you can start by:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hover your mouse over the{" "}
                      <span className="font-bold">“Planting”</span> button in
                      the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Tasks”</span> button and be
                      above the <span className="font-bold">“Orchard”</span>{" "}
                      button.
                    </li>
                    <div className="pl-13 pt-8 flex justify-center">
                      {p && (
                        <GatsbyImage
                          image={p}
                          alt="Startups illustration"
                          className="border border-gray-300  shadow-xl  "
                        />
                      )}
                    </div>
                    <br />
                    <br />
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Planting”</span> button. It
                      will direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Planting”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Planting”
                    </span>{" "}
                    page looks like:
                  </p>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                {Menu && (
                  <GatsbyImage
                    image={Menu}
                    alt="Startups illustration"
                    className="border border-gray-300  shadow-xl  "
                  />
                )}
              </div>
<br/><br/> */}
                  <p className="mb-4">[Placeholder for Planting page image]</p>
                  <p className="mb-4">
                    We will explain how the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Planting”
                    </span>{" "}
                    page works at the{" "}
                    <span className="text-primary-pheading font-bold">
                      Planting
                    </span>{" "}
                    chapter of this user guide.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Planting”
                    </span>{" "}
                    page, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the <span className="font-bold">“Dashboard”</span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                {Menu && (
                  <GatsbyImage
                    image={Menu}
                    alt="Startups illustration"
                    className="border border-gray-300  shadow-xl  "
                  />
                )}
              </div>
<br/><br/> */}
                  {/* <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p> */}
                  {/* <div className="pl-13 pt-8 flex justify-center">
                {Menu && (
                  <GatsbyImage
                    image={Menu}
                    alt="Startups illustration"
                    className="border border-gray-300  shadow-xl  "
                  />
                )}
              </div>
<br/><br/> */}
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p>
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>
                    : You can record planting and monitor your orchards progress
                    in your farms. To access the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Orchard”
                    </span>{" "}
                    page, you can start by:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hovering your mouse over the{" "}
                      <span className="font-bold">“Orchard”</span> button in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Planting”</span> button and
                      be above the{" "}
                      <span className="font-bold">“Warehouse”</span> button.
                    </li>
                    <div className="pl-13 pt-8 flex justify-center">
                      {o && (
                        <GatsbyImage
                          image={o}
                          alt="Startups illustration"
                          className="border border-gray-300  shadow-xl  "
                        />
                      )}
                    </div>
                    <br />
                    <br />
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Orchard”</span> button. It
                      will direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Orchard”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Orchard”
                    </span>{" "}
                    page looks like:
                  </p>
                  {/* <div className="pl-13 pt-8 flex justify-center"> */}
                  {/* {Menu && (
                  <GatsbyImage
                    image={Menu}
                    alt="Startups illustration"
                    className="border border-gray-300  shadow-xl  "
                  />
                )}
              </div>
<br/><br/> */}
                  <p className="mb-4">[Placeholder for Orchard page image]</p>
                  <p className="mb-4">
                    We will explain how the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Orchard”
                    </span>{" "}
                    page works at the{" "}
                    <span className="text-primary-pheading font-bold">
                      Orchard’s
                    </span>{" "}
                    chapter of this user guide.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Orchard”
                    </span>{" "}
                    page, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the <span className="font-bold">“Dashboard”</span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p>
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="font-bold">“Dashboard”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p>
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>
                    : Organize and track items stored in your farm’s warehouses.
                    To access the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Warehouse”
                    </span>{" "}
                    page, you can start by:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hover your mouse over the{" "}
                      <span className="font-bold">“Warehouse”</span> button in
                      the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Orchard”</span> button and be
                      above the <span className="font-bold">“Inventory”</span>{" "}
                      button.
                    </li>
                    <div className="pl-13 pt-8 flex justify-center">
                      {wh && (
                        <GatsbyImage
                          image={wh}
                          alt="Startups illustration"
                          className="border border-gray-300  shadow-xl  "
                        />
                      )}
                    </div>
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Warehouse”</span> button. It
                      will direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Warehouse”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Warehouse”
                    </span>{" "}
                    page looks like:
                  </p>
                  <p className="mb-4">[Placeholder for Warehouse page image]</p>
                  <p className="mb-4">
                    We will explain how to use the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Warehouse”
                    </span>{" "}
                    page at the{" "}
                    <span className="text-primary-pheading font-bold">
                      Warehouse
                    </span>{" "}
                    chapter of this user guide.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Warehouse”
                    </span>{" "}
                    page, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the <span className="font-bold">“Dashboard”</span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p>
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="font-bold">“Dashboard”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p>
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Inventory
                    </span>
                    : You can keep a detailed record of your farm supplies and
                    stock levels from the{" "}
                    <span className="text-primary-activelink font-bold">
                      Inventory
                    </span>{" "}
                    page. To access the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inventory”
                    </span>{" "}
                    page, you can start by:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hovering your mouse over the{" "}
                      <span className="font-bold">“Inventory”</span> button in
                      the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Warehouse”</span> button and
                      be above the{" "}
                      <span className="font-bold">“Machinery/Tools”</span>{" "}
                      button.
                    </li>
                    <div className="pl-13 pt-8 flex justify-center">
                      {n && (
                        <GatsbyImage
                          image={n}
                          alt="Startups illustration"
                          className="border border-gray-300  shadow-xl  "
                        />
                      )}
                    </div>
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Inventory”</span> button. It
                      will direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Inventory”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inventory”
                    </span>{" "}
                    page looks like:
                  </p>
                  <p className="mb-4">[Placeholder for Inventory page image]</p>
                  <p className="mb-4">
                    We will explain how to use the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inventory”
                    </span>{" "}
                    page at the{" "}
                    <span className="text-primary-pheading font-bold">
                      Inventory
                    </span>{" "}
                    chapter of this user guide.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inventory”
                    </span>{" "}
                    page, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p>
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="font-bold">“Dashboard”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p>
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Machinery/Tools
                    </span>
                    : Here you can manage machinery details, maintenance
                    schedules, and usage as well as the tools within your farms.
                    To access the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Machinery/Tools”
                    </span>{" "}
                    page, you can start by:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hovering your mouse over the{" "}
                      <span className="font-bold">“Machinery/Tools”</span>{" "}
                      button in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Inventory”</span> button and
                      be above the <span className="font-bold">“Contact”</span>{" "}
                      button.
                    </li>
                    <div className="pl-13 pt-8 flex justify-center">
                      {mac && (
                        <GatsbyImage
                          image={mac}
                          alt="Startups illustration"
                          className="border border-gray-300  h-[1000px] shadow-xl  "
                        />
                      )}
                    </div>
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Machinery/Tools”</span>{" "}
                      button. It will direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Machinery/Tools”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Machinery/Tools”
                    </span>{" "}
                    page looks like:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Machinery/Tools page image]
                  </p>
                  <p className="mb-4">
                    We will explain how to use the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Machinery/Tools”
                    </span>{" "}
                    page at the{" "}
                    <span className="text-primary-pheading font-bold">
                      Machinery/Tools
                    </span>{" "}
                    chapter of this user guide.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Machinery/Tools”
                    </span>{" "}
                    page, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the <span className="font-bold">“Dashboard”</span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p>
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="font-bold">“Dashboard”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p>
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Contact
                    </span>
                    : Maintain a list of important contacts for your farm
                    operations. To access the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Contact”
                    </span>{" "}
                    page, you can start by:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hover your mouse over the{" "}
                      <span className="font-bold">“Contact”</span> button in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Inventory”</span> button and
                      be above the{" "}
                      <span className="font-bold">“Financials”</span> button.
                    </li>
                    <div className="pl-13 pt-8 flex justify-center">
                      {co && (
                        <GatsbyImage
                          image={co}
                          alt="Startups illustration"
                          className="border border-gray-300  shadow-xl  "
                        />
                      )}
                    </div>
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Contact”</span> button. It
                      will direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Contact”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Contact”
                    </span>{" "}
                    page looks like:
                  </p>
                  <p className="mb-4">[Placeholder for Contact page image]</p>
                  <p className="mb-4">
                    We will explain how to use the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Contact”
                    </span>{" "}
                    page at the{" "}
                    <span className="text-primary-pheading font-bold">
                      Contact
                    </span>{" "}
                    chapter of this user guide.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Contact”
                    </span>{" "}
                    page, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the <span className="font-bold">“Dashboard”</span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p>
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="font-bold">“Dashboard”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p>
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Financials
                    </span>
                    : You can track farm expenses, income, and overall financial
                    performance of your farms. To access the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Financials”
                    </span>{" "}
                    module and open the{" "}
                    <span className="text-primary-activelink font-bold">
                      “General Ledger”
                    </span>{" "}
                    page, you can start by:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hover your mouse over the{" "}
                      <span className="font-bold">“Financials”</span> button in
                      the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Tasks”</span> button and be
                      above the <span className="font-bold">“Orchard”</span>{" "}
                      button.
                    </li>
                    <div className="pl-13 pt-8 flex justify-center">
                      {fin && (
                        <GatsbyImage
                          image={fin}
                          alt="Startups illustration"
                          className="border border-gray-300  shadow-xl  "
                        />
                      )}
                    </div>
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Financials”</span> button. It
                      will direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “General Ledger”
                      </span>{" "}
                      page within the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Financials”
                      </span>{" "}
                      module.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “General Ledger”
                    </span>{" "}
                    page within the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Financials”
                    </span>{" "}
                    module looks like:
                  </p>
                  <p className="mb-4">
                    [Placeholder for General Ledger page image]
                  </p>
                  <p className="mb-4">
                    We will explain how to use the{" "}
                    <span className="text-primary-activelink font-bold">
                      “General Ledger”
                    </span>{" "}
                    page within the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Financials”
                    </span>{" "}
                    module at the{" "}
                    <span className="text-primary-pheading font-bold">
                      Financials
                    </span>{" "}
                    chapter of this user guide.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “General Ledger”
                    </span>{" "}
                    page within the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Financials”
                    </span>{" "}
                    module, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p>
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="font-bold">“Dashboard”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p>
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Manage Users
                    </span>
                    : You can add, remove, or edit user access to the{" "}
                    <span className="text-primary-activelink font-bold">
                      Farm Management System
                    </span>
                    . To access the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Manage Users”
                    </span>{" "}
                    page, you can start by:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hover your mouse over the{" "}
                      <span className="font-bold">“Manage Users”</span> button
                      in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Financials”</span> button and
                      be above the <span className="font-bold">“Reports”</span>{" "}
                      button.
                    </li>
                    <div className="pl-13 pt-8 flex justify-center">
                      {mus && (
                        <GatsbyImage
                          image={mus}
                          alt="Startups illustration"
                          className="border border-gray-300  shadow-xl  "
                        />
                      )}
                    </div>
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Manage Users”</span> button.
                      It will direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Manage Users”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Manage Users”
                    </span>{" "}
                    page looks like:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Manage Users page image]
                  </p>
                  <p className="mb-4">
                    We will explain how to use the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Manage Users”
                    </span>{" "}
                    page at the{" "}
                    <span className="text-primary-pheading font-bold">
                      Manage Users
                    </span>{" "}
                    chapter of this user guide.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Manage Users”
                    </span>{" "}
                    page, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the <span className="font-bold">“Dashboard”</span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p>
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="font-bold">“Dashboard”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p>
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Reports
                    </span>
                    : You can generate detailed insights and performance
                    analytics for your farm. To access the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Reports”
                    </span>{" "}
                    page, you can start by:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hover your mouse over the{" "}
                      <span className="font-bold">“Reports”</span> button in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Manage Users”</span> button
                      and have no buttons below it.
                    </li>
                    <div className="pl-13 pt-8 flex justify-center">
                      {r && (
                        <GatsbyImage
                          image={r}
                          alt="Startups illustration"
                          className="border border-gray-300  shadow-xl  "
                        />
                      )}
                    </div>
                    <br />
                    <br />
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Reports”</span> button. It
                      will direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Reports”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Reports”
                    </span>{" "}
                    page looks like:
                  </p>
                  <p className="mb-4">[Placeholder for Reports page image]</p>
                  <p className="mb-4">
                    We will explain how to use the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Reports”
                    </span>{" "}
                    page at the{" "}
                    <span className="text-primary-pheading font-bold">
                      Reports
                    </span>{" "}
                    section of the demo.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Reports”
                    </span>{" "}
                    page, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the <span className="font-bold">“Dashboard”</span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p>
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="font-bold">“Dashboard”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p>
                </ul>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    Menu
                  </span>{" "}
                  is where you can quickly access many of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System’s Tools
                  </span>{" "}
                  and take a look at all your resources and assets in a more
                  detailed manner.
                </p>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    Menu
                  </span>{" "}
                  also follows you wherever you go in the site and acts as a
                  shortcut to the various pages as well.
                </p>
                <p className="mb-4">
                  The next part we will be looking at is the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard
                  </span>{" "}
                  and what the page contains. There are many important panels in
                  the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard
                  </span>{" "}
                  so let’s go through step-by-step what each of them show.
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  The Dashboard Panels
                </h2>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  The Land Overview
                </h3>
                <p className="mb-4">
                  On the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard
                  </span>
                  , you will first get a panel which is an overview of your farm
                  locations, their land area and health of the area. Here is
                  what it looks like below:
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {land && (
                    <GatsbyImage
                      image={land}
                      alt="Startups illustration"
                      className="border border-gray-300  shadow-xl w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <p className="mb-4">[Placeholder for Land Overview image]</p>
                <p className="mb-4">It consists of three panels:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Total land area
                    </span>{" "}
                    panel: Here you can see how much total land you have and you
                    can also see how much land is populated by either Buildings,
                    Fields, Greenhouses, etc. It also acts as a shortcut to the{" "}
                    <span className="text-primary-activelink font-bold">
                      Farm Locations
                    </span>{" "}
                    page:
                  </li>
                  <p className="mb-4">Here is what it looks like:</p>
                  <p className="mb-4">
                    [Placeholder for Total land area panel image]
                  </p>
                  <p className="mb-4">
                    Here is how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Farm Locations”
                    </span>{" "}
                    page from this panel. You start by:
                  </p>
                  <ol className="list-decimal ml-6 mb-4">
                    <li className="mb-2">
                      First, click on the{" "}
                      <span className="font-bold">“View Details”</span> link
                      located on the bottom right, below the number of acres
                      count within the panel.
                    </li>
                    <li className="mb-2">
                      It will then direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Farm Locations”
                      </span>{" "}
                      page where you can see each of your farm locations in more
                      detail.
                    </li>
                  </ol>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Total Farms (Map of Farm Locations)
                    </span>{" "}
                    panel: Here you can access an interactive map where you can
                    see where your farm locations are located and how many total
                    farm locations you have.
                  </li>
                  <p className="mb-4">Here is what it looks like:</p>
                  <p className="mb-4">
                    [Placeholder for Total Farms panel image]
                  </p>
                  <p className="mb-4">
                    Here is how to open the{" "}
                    <span className="text-primary-activelink font-bold">
                      Map
                    </span>{" "}
                    Menu from this panel, and take a look at the locations of
                    each of your{" "}
                    <span className="text-primary-activelink font-bold">
                      Farm Locations
                    </span>
                    . You start by:
                  </p>
                  <ol className="list-decimal ml-6 mb-4">
                    <li className="mb-2">
                      First clicking on the{" "}
                      <span className="font-bold">“View Locations”</span> link
                      located at the bottom right below the number of location
                      count within the panel.
                    </li>
                    <li className="mb-2">
                      It will then open a window with an interactive map within
                      it, where your farm locations are pinned on the map.
                    </li>
                    <li className="mb-2">
                      You can move around and zoom in and out of the map to see
                      where each of your farm locations are located.
                    </li>
                    <li className="mb-2">
                      You can also click on a farm location pin, and it will
                      take you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “View Farm Location”
                      </span>{" "}
                      page of the{" "}
                      <span className="text-primary-activelink font-bold">
                        Farm Location
                      </span>
                      .
                    </li>
                  </ol>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Weather Forecast
                    </span>{" "}
                    Panel: You will also soon have access to an upcoming feature
                    where you can see the weather on your current location as
                    well as the weather forecast for the next 7 days.
                  </li>
                  <p className="mb-4">
                    Here is what it looks like, at the moment:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Weather Forecast panel image]
                  </p>
                </ul>
                <p className="mb-4">
                  Now that we have covered the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Land overview”
                  </span>{" "}
                  and its panels. Next we will check out the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Pending Tasks Overview panel”
                  </span>
                  .
                </p>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  The Pending Tasks Overview
                </h3>
                <p className="mb-4">
                  In this panel of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard
                  </span>
                  , you can see a list of the top three pending tasks to be done
                  along with their due dates. You can scroll down within the
                  panel and see other pending tasks as well as their due dates.
                  It is a shortcut to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Tasks
                  </span>{" "}
                  page as well.
                </p>
                <p className="mb-4">Provided below is what it looks like:</p>
                <p className="mb-4">
                  [Placeholder for Pending Tasks Overview image]
                </p>
                <p className="mb-4">
                  Here is how you can get to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Tasks”
                  </span>{" "}
                  page from the{" "}
                  <span className="text-primary-activelink font-bold">
                    Pending tasks
                  </span>{" "}
                  panel. You first start off by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, Clicking on the{" "}
                    <span className="font-bold">“View all”</span> link located
                    on the top-right of the panel.
                  </li>
                  <li className="mb-2">
                    It will then take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Tasks”
                    </span>{" "}
                    page.
                  </li>
                </ol>
                <p className="mb-4">
                  Now that we have covered what the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Pending tasks Overview panel”
                  </span>{" "}
                  can do, next let’s check out what the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Crops and Orchards Overview panel”
                  </span>{" "}
                  does.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  The Crops and Orchards Overview
                </h3>
                <p className="mb-4">
                  In this panel of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard
                  </span>
                  , you can get an overview of which crops and orchards are
                  planted, where they are planted, and in which growth and
                  seasoning stage they are in.
                </p>
                <p className="mb-4">
                  They are two separate sub-panels within this panel. It is also
                  a shortcut to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Planting
                  </span>{" "}
                  page and{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  page as well.
                </p>
                <p className="mb-4">
                  Now the two sub-panels within the{" "}
                  <span className="text-primary-activelink font-bold">
                    Crops and Orchards Overview
                  </span>{" "}
                  panel are:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Crops”
                    </span>{" "}
                    sub-panel: This sub-panel contains all the crops from all
                    your farms and their growth state listed. They are also
                    arranged from latest to the earliest.
                  </li>
                  <p className="mb-4">Provided below is what it looks like:</p>
                  <p className="mb-4">
                    [Placeholder for Crops sub-panel image]
                  </p>
                  <p className="mb-4">
                    Clicking on a crop will lead you to the Crop’s{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Planting”
                    </span>{" "}
                    page, where you can check on the crop in a more detailed
                    manner. You can start by:
                  </p>
                  <ol className="list-decimal ml-6 mb-4">
                    <li className="mb-2">
                      First, you can check out a crop you want to view by
                      clicking on the Crop’s button in the list.
                    </li>
                    <li className="mb-2">
                      It will then take you to the Crop’s{" "}
                      <span className="text-primary-activelink font-bold">
                        “View crop”
                      </span>{" "}
                      page within the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Planting”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    You can also get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Planting”
                    </span>{" "}
                    page from the{" "}
                    <span className="text-primary-activelink font-bold">
                      Crops
                    </span>{" "}
                    sub-panel. You can start by:
                  </p>
                  <ol className="list-decimal ml-6 mb-4">
                    <li className="mb-2">
                      First, clicking on the{" "}
                      <span className="font-bold">“View all”</span> link located
                      on the top-right of the sub-panel.
                    </li>
                    <li className="mb-2">
                      It will then take you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Planting”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Orchards”
                    </span>{" "}
                    sub-panel: This sub-panel contains all the Orchards from all
                    your farms and their growth state listed. They are also
                    arranged from latest to the earliest.
                  </li>
                  <p className="mb-4">Provided below is what it looks like:</p>
                  <p className="mb-4">
                    [Placeholder for Orchards sub-panel image]
                  </p>
                  <p className="mb-4">
                    Clicking on a crop will lead you to the Crop’s{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Orchard”
                    </span>{" "}
                    page, where you can check on the crop in a more detailed
                    manner.
                  </p>
                  <ol className="list-decimal ml-6 mb-4">
                    <li className="mb-2">
                      First, you can check out an Orchard you want to view by
                      clicking on the Orchard’s button in the list.
                    </li>
                    <li className="mb-2">
                      It will then take you to the Orchard’s{" "}
                      <span className="text-primary-activelink font-bold">
                        “View Orchard”
                      </span>{" "}
                      page within the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Orchard”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    You can also get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Orchard”
                    </span>{" "}
                    page from the{" "}
                    <span className="text-primary-activelink font-bold">
                      Crops
                    </span>{" "}
                    sub-panel. You can start by:
                  </p>
                  <ol className="list-decimal ml-6 mb-4">
                    <li className="mb-2">
                      First, clicking on the{" "}
                      <span className="font-bold">“View all”</span> link located
                      on the top-right of the sub-panel.
                    </li>
                    <li className="mb-2">
                      It will then take you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Orchard”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                </ul>
                <p className="mb-4">
                  Now that we have checked out the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Crops and Orchards Overview”
                  </span>{" "}
                  panel and its sub-panels. Let us now check out the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Farm Resources Summary”
                  </span>
                  .
                </p>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  The Farm Resources Summary
                </h3>
                <p className="mb-4">
                  In this panel of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard
                  </span>
                  , you can see a general summary of the overall resources of
                  your farms all over the country.
                </p>
                <p className="mb-4">Here is what it looks like below:</p>
                <p className="mb-4">
                  [Placeholder for Farm Resources Summary image]
                </p>
                <p className="mb-4">It consists of 4 panels:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Inventory “Total items”
                    </span>{" "}
                    panel: The total no. of items that are currently in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Inventory
                    </span>{" "}
                    of your farms warehouses. It is also a shortcut to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inventory”
                    </span>{" "}
                    page:
                  </li>
                  <p className="mb-4">Provided below is what it looks like:</p>
                  <p className="mb-4">
                    [Placeholder for Inventory Total items panel image]
                  </p>
                  <p className="mb-4">
                    To go to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inventory”
                    </span>{" "}
                    page from the{" "}
                    <span className="text-primary-activelink font-bold">
                      Inventory
                    </span>{" "}
                    panel, you start off by:
                  </p>
                  <ol className="list-decimal ml-6 mb-4">
                    <li className="mb-2">
                      First, clicking on the{" "}
                      <span className="font-bold">“View all”</span> link located
                      on the bottom right of the panel.
                    </li>
                    <li className="mb-2">
                      It will take you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Inventory”
                      </span>{" "}
                      page right afterwards.
                    </li>
                  </ol>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse “Total warehouses”
                    </span>{" "}
                    panel: The total no. of warehouses that are a part of your
                    farms. It is also a shortcut to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Warehouse”
                    </span>{" "}
                    page:
                  </li>
                  <p className="mb-4">Provided below is what it looks like:</p>
                  <p className="mb-4">
                    [Placeholder for Warehouse Total warehouses panel image]
                  </p>
                  <p className="mb-4">
                    To go to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Warehouse”
                    </span>{" "}
                    page from the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    panel, you start off by:
                  </p>
                  <ol className="list-decimal ml-6 mb-4">
                    <li className="mb-2">
                      First, clicking on the{" "}
                      <span className="font-bold">“View all”</span> link located
                      on the bottom right of the panel.
                    </li>
                    <li className="mb-2">
                      It will take you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Warehouse”
                      </span>{" "}
                      page right afterwards.
                    </li>
                  </ol>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Machinery Total Machines
                    </span>{" "}
                    panel: The total no. of machines that are a part of your
                    farm's assets. It is also a shortcut to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Machinery/Tools”
                    </span>{" "}
                    page:
                  </li>
                  <p className="mb-4">Provided below is what it looks like:</p>
                  <p className="mb-4">
                    [Placeholder for Machinery Total Machines panel image]
                  </p>
                  <p className="mb-4">
                    To go to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Machinery/Tools”
                    </span>{" "}
                    page from the{" "}
                    <span className="text-primary-activelink font-bold">
                      Machinery
                    </span>{" "}
                    panel, you start off by:
                  </p>
                  <ol className="list-decimal ml-6 mb-4">
                    <li className="mb-2">
                      First, clicking on the{" "}
                      <span className="font-bold">“View all”</span> link located
                      on the bottom right of the panel.
                    </li>
                    <li className="mb-2">
                      It will take you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Machinery/Tools”
                      </span>{" "}
                      page right afterwards.
                    </li>
                  </ol>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Livestock
                    </span>{" "}
                    Panel [Upcoming Panel]: An upcoming panel that will detail
                    the Livestock of your farms.
                  </li>
                </ul>
                <p className="mb-4">
                  It shows the total count of your farm's resources such as the{" "}
                  <span className="text-primary-activelink font-bold">
                    Inventory
                  </span>
                  ,{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>
                  ,{" "}
                  <span className="text-primary-activelink font-bold">
                    Machinery/Tools
                  </span>
                  ,{" "}
                  <span className="text-primary-activelink font-bold">
                    Livestock
                  </span>{" "}
                  [Upcoming] etc. It is also a shortcut to each of those pages
                  as well.
                </p>
                <p className="mb-4">
                  Now that we have all the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard Panels
                  </span>{" "}
                  looked at, thus concludes our overview of the entire{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard Page
                  </span>
                  !
                </p>
                <p className="mb-4">But we are not done yet!</p>
                <p className="mb-4">
                  Navigate through the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard
                  </span>{" "}
                  and see how different parts connect to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>{" "}
                  tools and see how you wish to use the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard Page
                  </span>{" "}
                  to your best advantage!
                </p>
                <p className="mb-4">
                  Next we are now going to check out the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Farm Locations”
                  </span>{" "}
                  Page in more detail. This is where we will review how the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Location
                  </span>{" "}
                  page works, How to add a{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Location
                  </span>
                  , its many shown and hidden features...
                </p>
                <p className="mb-4">So without further ado, let’s begin!</p>
                <p className="mb-4">
                  The page that you will first see after logging in to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>{" "}
                  will be the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard Page
                  </span>
                  . The{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard
                  </span>{" "}
                  is the Main home page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>{" "}
                  and it provides you a general overview of your farms as well
                  as the resources of your farms. It also contains shortcuts to
                  many of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System’s Tools
                  </span>
                  .
                </p>
                <p className="mb-4">Below is what it should look like:</p>
                <p className="mb-4">[Placeholder for Dashboard Page image]</p>
                <p className="mb-4">
                  Let's go through and describe all the parts in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard Page
                  </span>
                  !
                </p>
                <p className="mb-4">
                  Starting with the{" "}
                  <span className="text-primary-activelink font-bold">
                    Status bar
                  </span>{" "}
                  located at the top!
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  The Status Bar
                </h2>
                <p className="mb-4">
                  On the Top, you have your{" "}
                  <span className="text-primary-activelink font-bold">
                    status bar
                  </span>{" "}
                  which contains your profile, where you are in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>{" "}
                  as well as the <span className="font-bold">log out</span>{" "}
                  button.
                </p>
                <p className="mb-4">
                  Below is what the{" "}
                  <span className="text-primary-activelink font-bold">
                    Status Bar
                  </span>{" "}
                  looks like:
                </p>
                <p className="mb-4">[Placeholder for Status Bar image]</p>
                <p className="mb-4">The options are:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    <span className="font-bold">“Go back?”</span> button: This
                    button takes you back to a previous page you were in from
                    the page you are currently on. It is located to the left of
                    the <span className="font-bold">View Profile</span> button
                    and on the right of the Logo for the{" "}
                    <span className="text-primary-activelink font-bold">
                      Farm Management System
                    </span>
                    .
                  </li>
                </ul>
                <p className="mb-4">
                  Below is what the{" "}
                  <span className="font-bold">“Go back?”</span> button looks
                  like:
                </p>
                <p className="mb-4">[Placeholder for Go back? button image]</p>
                <p className="mb-4">
                  Next we are going to check out the{" "}
                  <span className="font-bold">“View Profile”</span> button.
                </p>
                <p className="mb-4">
                  <span className="font-bold">“View Profile”</span> button: You
                  can access and update your personal account information and
                  any updated information you wish to provide. It also acts as a
                  shortcut to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Profile details”
                  </span>{" "}
                  page.
                </p>
                <p className="mb-4">
                  Here is how to access the{" "}
                  <span className="text-primary-activelink font-bold">
                    profile details
                  </span>
                  , you can start by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First moving the mouse to the top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    and hovering over your account name located in the top-left
                    side of the{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>
                    . It is to the right of the{" "}
                    <span className="font-bold">“Go back?”</span> button and the
                    left{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Title bar text. Your account name should be right beside a
                    picture of you or your farm company.
                  </li>
                  <li className="mb-2">
                    Click on your account name and you will be directed to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Profile details”
                    </span>{" "}
                    page.
                  </li>
                </ol>
                <p className="mb-4">
                  Below your{" "}
                  <span className="text-primary-activelink font-bold">
                    “Profile details”
                  </span>{" "}
                  page should look like this:
                </p>
                <p className="mb-4">
                  [Placeholder for Profile details page image]
                </p>
                <p className="mb-4">
                  As you can see you have your name on the top as well as your
                  full name and phone number fields on the bottom. You can
                  change them from here as well.
                </p>
                <p className="mb-4">
                  You can also change your password here if you want, you first
                  start by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    Making sure that you re-type your old password first in the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Password”
                    </span>{" "}
                    field.
                  </li>
                  <li className="mb-2">
                    Then type the new password in the{" "}
                    <span className="text-primary-activelink font-bold">
                      “New Password”
                    </span>{" "}
                    field.
                  </li>
                  <li className="mb-2">
                    Afterwards, if you have made any changes in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Profile
                    </span>{" "}
                    page, make sure you click the{" "}
                    <span className="font-bold">“Submit”</span> button to save
                    your changes!
                  </li>
                </ol>
                <p className="mb-4">
                  That was how to access the{" "}
                  <span className="text-primary-activelink font-bold">
                    Profile
                  </span>{" "}
                  page! Next we will back out to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard
                  </span>{" "}
                  page and check out the next feature on the top{" "}
                  <span className="text-primary-activelink font-bold">
                    Status bar
                  </span>
                  , which is the <span className="font-bold">logout</span>{" "}
                  button.
                </p>
                <p className="mb-4">
                  <span className="font-bold">“Logout”</span>: You can exit out
                  of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>{" "}
                  and it will return you to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Login Page
                  </span>{" "}
                  if you press this button, please keep in mind that you need to
                  sign in again if you wish to go back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Here is what the <span className="font-bold">“Logout”</span>{" "}
                  button looks like and does in action!
                </p>
                <p className="mb-4">[Placeholder for Logout button image]</p>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    Status Bar
                  </span>{" "}
                  also acts as a Title bar holding which tool in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>{" "}
                  you are currently accessing and where you are in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>
                  .
                </p>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    Status bar
                  </span>{" "}
                  will always follow you wherever you are and whatever page you
                  are in within the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>
                  !
                </p>
                <p className="mb-4">
                  Now let’s move on to the next part of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard Page
                  </span>
                  .
                </p>
                <p className="mb-4">
                  The next part we will cover is on the left-hand side of the
                  page on your screen and it is called{" "}
                  <span className="text-primary-activelink font-bold">
                    “The Menu”
                  </span>
                  .
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  The Menu
                </h2>
                <p className="mb-4">
                  On the left-hand side of your screen, you will see a list of
                  Menu options. The{" "}
                  <span className="text-primary-activelink font-bold">
                    Menu
                  </span>{" "}
                  is your gateway to all features, the{" "}
                  <span className="text-primary-activelink font-bold">
                    Menu
                  </span>{" "}
                  ensures you can move easily between functions and keep on top
                  of your farm operations.
                </p>
                <p className="mb-4">
                  Below is what the{" "}
                  <span className="text-primary-activelink font-bold">
                    Menu bar
                  </span>{" "}
                  looks like:
                </p>
                <p className="mb-4">[Placeholder for Menu bar image]</p>
                <p className="mb-4">
                  The options in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Menu
                  </span>{" "}
                  are:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Farm Locations
                    </span>
                    : Here, you can manage and monitor all your farm locations
                    in one place. Here is how to access the{" "}
                    <span className="text-primary-activelink font-bold">
                      Farm Locations
                    </span>{" "}
                    page from the{" "}
                    <span className="text-primary-activelink font-bold">
                      Dashboard
                    </span>{" "}
                    page:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hovering your mouse over the{" "}
                      <span className="font-bold">“Farm Locations”</span> button
                      in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Dashboard”</span> button and
                      be above the <span className="font-bold">“Tasks”</span>{" "}
                      button.
                    </li>
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Farm Locations”</span>{" "}
                      button. It will direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Farm Locations”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Farm Locations”
                    </span>{" "}
                    page looks like:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Farm Locations page image]
                  </p>
                  <p className="mb-4">
                    We will explain how to use the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Farm Locations”
                    </span>{" "}
                    page in the{" "}
                    <span className="text-primary-pheading font-bold">
                      Farm Locations
                    </span>{" "}
                    chapter of this guide.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Farm Locations”
                    </span>{" "}
                    page, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the <span className="font-bold">“Dashboard”</span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p>
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="font-bold">“Dashboard”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p>
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Tasks
                    </span>
                    : Allow you to plan, assign, and track farm activities
                    efficiently. To access the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Tasks”
                    </span>{" "}
                    page, you can start by:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hover your mouse over the{" "}
                      <span className="font-bold">“Tasks”</span> button in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Farm Locations”</span> button
                      and be above the{" "}
                      <span className="font-bold">“Planting”</span> button.
                    </li>
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Tasks”</span> button. It will
                      direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Tasks”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Tasks”
                    </span>{" "}
                    page looks like:
                  </p>
                  <p className="mb-4">[Placeholder for Tasks page image]</p>
                  <p className="mb-4">
                    We will explain how to use the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Tasks”
                    </span>{" "}
                    page in the{" "}
                    <span className="text-primary-pheading font-bold">
                      Tasks
                    </span>{" "}
                    chapter of this user guide.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Tasks”
                    </span>{" "}
                    page, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the <span className="font-bold">“Dashboard”</span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p>
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="font-bold">“Dashboard”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p>
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Planting
                    </span>
                    : You can record planting and monitor your crops progress in
                    your farms. To access the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Planting”
                    </span>{" "}
                    page, you can start by:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hover your mouse over the{" "}
                      <span className="font-bold">“Planting”</span> button in
                      the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Tasks”</span> button and be
                      above the <span className="font-bold">“Orchard”</span>{" "}
                      button.
                    </li>
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Planting”</span> button. It
                      will direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Planting”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Planting”
                    </span>{" "}
                    page looks like:
                  </p>
                  <p className="mb-4">[Placeholder for Planting page image]</p>
                  <p className="mb-4">
                    We will explain how the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Planting”
                    </span>{" "}
                    page works at the{" "}
                    <span className="text-primary-pheading font-bold">
                      Planting
                    </span>{" "}
                    chapter of this user guide.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Planting”
                    </span>{" "}
                    page, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the <span className="font-bold">“Dashboard”</span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p>
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p>
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>
                    : You can record planting and monitor your orchards progress
                    in your farms. To access the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Orchard”
                    </span>{" "}
                    page, you can start by:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hovering your mouse over the{" "}
                      <span className="font-bold">“Orchard”</span> button in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Planting”</span> button and
                      be above the{" "}
                      <span className="font-bold">“Warehouse”</span> button.
                    </li>
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Orchard”</span> button. It
                      will direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Orchard”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Orchard”
                    </span>{" "}
                    page looks like:
                  </p>
                  <p className="mb-4">[Placeholder for Orchard page image]</p>
                  <p className="mb-4">
                    We will explain how the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Orchard”
                    </span>{" "}
                    page works at the{" "}
                    <span className="text-primary-pheading font-bold">
                      Orchard’s
                    </span>{" "}
                    chapter of this user guide.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Orchard”
                    </span>{" "}
                    page, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the <span className="font-bold">“Dashboard”</span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p>
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="font-bold">“Dashboard”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p>
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>
                    : Organize and track items stored in your farm’s warehouses.
                    To access the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Warehouse”
                    </span>{" "}
                    page, you can start by:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hover your mouse over the{" "}
                      <span className="font-bold">“Warehouse”</span> button in
                      the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Orchard”</span> button and be
                      above the <span className="font-bold">“Inventory”</span>{" "}
                      button.
                    </li>
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Warehouse”</span> button. It
                      will direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Warehouse”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Warehouse”
                    </span>{" "}
                    page looks like:
                  </p>
                  <p className="mb-4">[Placeholder for Warehouse page image]</p>
                  <p className="mb-4">
                    We will explain how to use the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Warehouse”
                    </span>{" "}
                    page at the{" "}
                    <span className="text-primary-pheading font-bold">
                      Warehouse
                    </span>{" "}
                    chapter of this user guide.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Warehouse”
                    </span>{" "}
                    page, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the <span className="font-bold">“Dashboard”</span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p>
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="font-bold">“Dashboard”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p>
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Inventory
                    </span>
                    : You can keep a detailed record of your farm supplies and
                    stock levels from the{" "}
                    <span className="text-primary-activelink font-bold">
                      Inventory
                    </span>{" "}
                    page. To access the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inventory”
                    </span>{" "}
                    page, you can start by:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hovering your mouse over the{" "}
                      <span className="font-bold">“Inventory”</span> button in
                      the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Warehouse”</span> button and
                      be above the{" "}
                      <span className="font-bold">“Machinery/Tools”</span>{" "}
                      button.
                    </li>
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Inventory”</span> button. It
                      will direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Inventory”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inventory”
                    </span>{" "}
                    page looks like:
                  </p>
                  <p className="mb-4">[Placeholder for Inventory page image]</p>
                  <p className="mb-4">
                    We will explain how to use the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inventory”
                    </span>{" "}
                    page at the{" "}
                    <span className="text-primary-pheading font-bold">
                      Inventory
                    </span>{" "}
                    chapter of this user guide.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inventory”
                    </span>{" "}
                    page, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p>
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="font-bold">“Dashboard”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p>
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Machinery/Tools
                    </span>
                    : Here you can manage machinery details, maintenance
                    schedules, and usage as well as the tools within your farms.
                    To access the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Machinery/Tools”
                    </span>{" "}
                    page, you can start by:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hovering your mouse over the{" "}
                      <span className="font-bold">“Machinery/Tools”</span>{" "}
                      button in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Inventory”</span> button and
                      be above the <span className="font-bold">“Contact”</span>{" "}
                      button.
                    </li>
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Machinery/Tools”</span>{" "}
                      button. It will direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Machinery/Tools”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Machinery/Tools”
                    </span>{" "}
                    page looks like:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Machinery/Tools page image]
                  </p>
                  <p className="mb-4">
                    We will explain how to use the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Machinery/Tools”
                    </span>{" "}
                    page at the{" "}
                    <span className="text-primary-pheading font-bold">
                      Machinery/Tools
                    </span>{" "}
                    chapter of this user guide.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Machinery/Tools”
                    </span>{" "}
                    page, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the <span className="font-bold">“Dashboard”</span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p>
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="font-bold">“Dashboard”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p>
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Contact
                    </span>
                    : Maintain a list of important contacts for your farm
                    operations. To access the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Contact”
                    </span>{" "}
                    page, you can start by:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hover your mouse over the{" "}
                      <span className="font-bold">“Contact”</span> button in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Inventory”</span> button and
                      be above the{" "}
                      <span className="font-bold">“Financials”</span> button.
                    </li>
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Contact”</span> button. It
                      will direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Contact”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Contact”
                    </span>{" "}
                    page looks like:
                  </p>
                  <p className="mb-4">[Placeholder for Contact page image]</p>
                  <p className="mb-4">
                    We will explain how to use the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Contact”
                    </span>{" "}
                    page at the{" "}
                    <span className="text-primary-pheading font-bold">
                      Contact
                    </span>{" "}
                    chapter of this user guide.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Contact”
                    </span>{" "}
                    page, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the <span className="font-bold">“Dashboard”</span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p>
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="font-bold">“Dashboard”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p>
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Financials
                    </span>
                    : You can track farm expenses, income, and overall financial
                    performance of your farms. To access the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Financials”
                    </span>{" "}
                    module and open the{" "}
                    <span className="text-primary-activelink font-bold">
                      “General Ledger”
                    </span>{" "}
                    page, you can start by:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hover your mouse over the{" "}
                      <span className="font-bold">“Financials”</span> button in
                      the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Tasks”</span> button and be
                      above the <span className="font-bold">“Orchard”</span>{" "}
                      button.
                    </li>
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Financials”</span> button. It
                      will direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “General Ledger”
                      </span>{" "}
                      page within the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Financials”
                      </span>{" "}
                      module.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “General Ledger”
                    </span>{" "}
                    page within the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Financials”
                    </span>{" "}
                    module looks like:
                  </p>
                  <p className="mb-4">
                    [Placeholder for General Ledger page image]
                  </p>
                  <p className="mb-4">
                    We will explain how to use the{" "}
                    <span className="text-primary-activelink font-bold">
                      “General Ledger”
                    </span>{" "}
                    page within the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Financials”
                    </span>{" "}
                    module at the{" "}
                    <span className="text-primary-pheading font-bold">
                      Financials
                    </span>{" "}
                    chapter of this user guide.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “General Ledger”
                    </span>{" "}
                    page within the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Financials”
                    </span>{" "}
                    module, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p>
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="font-bold">“Dashboard”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p>
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Manage Users
                    </span>
                    : You can add, remove, or edit user access to the{" "}
                    <span className="text-primary-activelink font-bold">
                      Farm Management System
                    </span>
                    . To access the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Manage Users”
                    </span>{" "}
                    page, you can start by:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hover your mouse over the{" "}
                      <span className="font-bold">“Manage Users”</span> button
                      in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Financials”</span> button and
                      be above the <span className="font-bold">“Reports”</span>{" "}
                      button.
                    </li>
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Manage Users”</span> button.
                      It will direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Manage Users”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Manage Users”
                    </span>{" "}
                    page looks like:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Manage Users page image]
                  </p>
                  <p className="mb-4">
                    We will explain how to use the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Manage Users”
                    </span>{" "}
                    page at the{" "}
                    <span className="text-primary-pheading font-bold">
                      Manage Users
                    </span>{" "}
                    chapter of this user guide.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Manage Users”
                    </span>{" "}
                    page, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the <span className="font-bold">“Dashboard”</span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p>
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="font-bold">“Dashboard”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p>
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Reports
                    </span>
                    : You can generate detailed insights and performance
                    analytics for your farm. To access the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Reports”
                    </span>{" "}
                    page, you can start by:
                  </li>
                  <ol className="list-decimal ml-6 mt-2 mb-2">
                    <li className="mb-2">
                      First hover your mouse over the{" "}
                      <span className="font-bold">“Reports”</span> button in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Menu
                      </span>
                      . It should be below the{" "}
                      <span className="font-bold">“Manage Users”</span> button
                      and have no buttons below it.
                    </li>
                    <li className="mb-2">
                      Then you click on the{" "}
                      <span className="font-bold">“Reports”</span> button. It
                      will direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Reports”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    Below is what the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Reports”
                    </span>{" "}
                    page looks like:
                  </p>
                  <p className="mb-4">[Placeholder for Reports page image]</p>
                  <p className="mb-4">
                    We will explain how to use the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Reports”
                    </span>{" "}
                    page at the{" "}
                    <span className="text-primary-pheading font-bold">
                      Reports
                    </span>{" "}
                    section of the demo.
                  </p>
                  <p className="mb-4">
                    Now that you know how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Reports”
                    </span>{" "}
                    page, if you want to go back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Dashboard”
                    </span>{" "}
                    Page, you can either press the{" "}
                    <span className="font-bold">“Go back?”</span> button in the
                    top{" "}
                    <span className="text-primary-activelink font-bold">
                      status bar
                    </span>{" "}
                    or click the <span className="font-bold">“Dashboard”</span>{" "}
                    button in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu
                    </span>
                    . Here they are shown below:
                  </p>
                  <p className="mb-4">
                    The top{" "}
                    <span className="text-primary-activelink font-bold">
                      Status bar
                    </span>{" "}
                    <span className="font-bold">“Go back?”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Go back? button image]
                  </p>
                  <p className="mb-4">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Menu Panel
                    </span>{" "}
                    <span className="font-bold">“Dashboard”</span> button:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Dashboard button image]
                  </p>
                </ul>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    Menu
                  </span>{" "}
                  is where you can quickly access many of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System’s Tools
                  </span>{" "}
                  and take a look at all your resources and assets in a more
                  detailed manner.
                </p>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    Menu
                  </span>{" "}
                  also follows you wherever you go in the site and acts as a
                  shortcut to the various pages as well.
                </p>
                <p className="mb-4">
                  The next part we will be looking at is the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard
                  </span>{" "}
                  and what the page contains. There are many important panels in
                  the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard
                  </span>{" "}
                  so let’s go through step-by-step what each of them show.
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  The Dashboard Panels
                </h2>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  The Land Overview
                </h3>
                <p className="mb-4">
                  On the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard
                  </span>
                  , you will first get a panel which is an overview of your farm
                  locations, their land area and health of the area. Here is
                  what it looks like below:
                </p>
                <p className="mb-4">[Placeholder for Land Overview image]</p>
                <p className="mb-4">It consists of three panels:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Total land area
                    </span>{" "}
                    panel: Here you can see how much total land you have and you
                    can also see how much land is populated by either Buildings,
                    Fields, Greenhouses, etc. It also acts as a shortcut to the{" "}
                    <span className="text-primary-activelink font-bold">
                      Farm Locations
                    </span>{" "}
                    page:
                  </li>
                  <p className="mb-4">Here is what it looks like:</p>
                  <p className="mb-4">
                    [Placeholder for Total land area panel image]
                  </p>
                  <p className="mb-4">
                    Here is how to get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Farm Locations”
                    </span>{" "}
                    page from this panel. You start by:
                  </p>
                  <ol className="list-decimal ml-6 mb-4">
                    <li className="mb-2">
                      First, click on the{" "}
                      <span className="font-bold">“View Details”</span> link
                      located on the bottom right, below the number of acres
                      count within the panel.
                    </li>
                    <li className="mb-2">
                      It will then direct you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Farm Locations”
                      </span>{" "}
                      page where you can see each of your farm locations in more
                      detail.
                    </li>
                  </ol>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Total Farms (Map of Farm Locations)
                    </span>{" "}
                    panel: Here you can access an interactive map where you can
                    see where your farm locations are located and how many total
                    farm locations you have.
                  </li>
                  <p className="mb-4">Here is what it looks like:</p>
                  <p className="mb-4">
                    [Placeholder for Total Farms panel image]
                  </p>
                  <p className="mb-4">
                    Here is how to open the{" "}
                    <span className="text-primary-activelink font-bold">
                      Map
                    </span>{" "}
                    Menu from this panel, and take a look at the locations of
                    each of your{" "}
                    <span className="text-primary-activelink font-bold">
                      Farm Locations
                    </span>
                    . You start by:
                  </p>
                  <ol className="list-decimal ml-6 mb-4">
                    <li className="mb-2">
                      First clicking on the{" "}
                      <span className="font-bold">“View Locations”</span> link
                      located at the bottom right below the number of location
                      count within the panel.
                    </li>
                    <li className="mb-2">
                      It will then open a window with an interactive map within
                      it, where your farm locations are pinned on the map.
                    </li>
                    <li className="mb-2">
                      You can move around and zoom in and out of the map to see
                      where each of your farm locations are located.
                    </li>
                    <li className="mb-2">
                      You can also click on a farm location pin, and it will
                      take you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “View Farm Location”
                      </span>{" "}
                      page of the{" "}
                      <span className="text-primary-activelink font-bold">
                        Farm Location
                      </span>
                      .
                    </li>
                  </ol>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Weather Forecast
                    </span>{" "}
                    Panel: You will also soon have access to an upcoming feature
                    where you can see the weather on your current location as
                    well as the weather forecast for the next 7 days.
                  </li>
                  <p className="mb-4">
                    Here is what it looks like, at the moment:
                  </p>
                  <p className="mb-4">
                    [Placeholder for Weather Forecast panel image]
                  </p>
                </ul>
                <p className="mb-4">
                  Now that we have covered the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Land overview”
                  </span>{" "}
                  and its panels. Next we will check out the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Pending Tasks Overview panel”
                  </span>
                  .
                </p>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  The Pending Tasks Overview
                </h3>
                <p className="mb-4">
                  In this panel of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard
                  </span>
                  , you can see a list of the top three pending tasks to be done
                  along with their due dates. You can scroll down within the
                  panel and see other pending tasks as well as their due dates.
                  It is a shortcut to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Tasks
                  </span>{" "}
                  page as well.
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {tpto && (
                    <GatsbyImage
                      image={tpto}
                      alt="Startups illustration"
                      className="border border-gray-300  shadow-xl w-[1000.58px]  "
                    />
                  )}
                </div>
                <br />
                <br />
                <p className="mb-4">Provided below is what it looks like:</p>
                <p className="mb-4">
                  [Placeholder for Pending Tasks Overview image]
                </p>
                <p className="mb-4">
                  Here is how you can get to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Tasks”
                  </span>{" "}
                  page from the{" "}
                  <span className="text-primary-activelink font-bold">
                    Pending tasks
                  </span>{" "}
                  panel. You first start off by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, Clicking on the{" "}
                    <span className="font-bold">“View all”</span> link located
                    on the top-right of the panel.
                  </li>
                  <li className="mb-2">
                    It will then take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Tasks”
                    </span>{" "}
                    page.
                  </li>
                </ol>
                <p className="mb-4">
                  Now that we have covered what the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Pending tasks Overview panel”
                  </span>{" "}
                  can do, next let’s check out what the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Crops and Orchards Overview panel”
                  </span>{" "}
                  does.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  The Crops and Orchards Overview
                </h3>
                <p className="mb-4">
                  In this panel of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard
                  </span>
                  , you can get an overview of which crops and orchards are
                  planted, where they are planted, and in which growth and
                  seasoning stage they are in.
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {tcaoo && (
                    <GatsbyImage
                      image={tcaoo}
                      alt="Startups illustration"
                      className="border border-gray-300  shadow-xl  w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <p className="mb-4">
                  They are two separate sub-panels within this panel. It is also
                  a shortcut to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Planting
                  </span>{" "}
                  page and{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  page as well.
                </p>
                <p className="mb-4">
                  Now the two sub-panels within the{" "}
                  <span className="text-primary-activelink font-bold">
                    Crops and Orchards Overview
                  </span>{" "}
                  panel are:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Crops”
                    </span>{" "}
                    sub-panel: This sub-panel contains all the crops from all
                    your farms and their growth state listed. They are also
                    arranged from latest to the earliest.
                  </li>
                  <p className="mb-4">Provided below is what it looks like:</p>
                  <p className="mb-4">
                    [Placeholder for Crops sub-panel image]
                  </p>
                  <p className="mb-4">
                    Clicking on a crop will lead you to the Crop’s{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Planting”
                    </span>{" "}
                    page, where you can check on the crop in a more detailed
                    manner. You can start by:
                  </p>
                  <ol className="list-decimal ml-6 mb-4">
                    <li className="mb-2">
                      First, you can check out a crop you want to view by
                      clicking on the Crop’s button in the list.
                    </li>
                    <li className="mb-2">
                      It will then take you to the Crop’s{" "}
                      <span className="text-primary-activelink font-bold">
                        “View crop”
                      </span>{" "}
                      page within the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Planting”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    You can also get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Planting”
                    </span>{" "}
                    page from the{" "}
                    <span className="text-primary-activelink font-bold">
                      Crops
                    </span>{" "}
                    sub-panel. You can start by:
                  </p>
                  <ol className="list-decimal ml-6 mb-4">
                    <li className="mb-2">
                      First, clicking on the{" "}
                      <span className="font-bold">“View all”</span> link located
                      on the top-right of the sub-panel.
                    </li>
                    <li className="mb-2">
                      It will then take you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Planting”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Orchards”
                    </span>{" "}
                    sub-panel: This sub-panel contains all the Orchards from all
                    your farms and their growth state listed. They are also
                    arranged from latest to the earliest.
                  </li>
                  <p className="mb-4">Provided below is what it looks like:</p>
                  <p className="mb-4">
                    [Placeholder for Orchards sub-panel image]
                  </p>
                  <p className="mb-4">
                    Clicking on a crop will lead you to the Crop’s{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Orchard”
                    </span>{" "}
                    page, where you can check on the crop in a more detailed
                    manner.
                  </p>
                  <ol className="list-decimal ml-6 mb-4">
                    <li className="mb-2">
                      First, you can check out an Orchard you want to view by
                      clicking on the Orchard’s button in the list.
                    </li>
                    <li className="mb-2">
                      It will then take you to the Orchard’s{" "}
                      <span className="text-primary-activelink font-bold">
                        “View Orchard”
                      </span>{" "}
                      page within the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Orchard”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                  <p className="mb-4">
                    You can also get to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Orchard”
                    </span>{" "}
                    page from the{" "}
                    <span className="text-primary-activelink font-bold">
                      Crops
                    </span>{" "}
                    sub-panel. You can start by:
                  </p>
                  <ol className="list-decimal ml-6 mb-4">
                    <li className="mb-2">
                      First, clicking on the{" "}
                      <span className="font-bold">“View all”</span> link located
                      on the top-right of the sub-panel.
                    </li>
                    <li className="mb-2">
                      It will then take you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Orchard”
                      </span>{" "}
                      page.
                    </li>
                  </ol>
                </ul>
                <p className="mb-4">
                  Now that we have checked out the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Crops and Orchards Overview”
                  </span>{" "}
                  panel and its sub-panels. Let us now check out the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Farm Resources Summary”
                  </span>
                  .
                </p>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  The Farm Resources Summary
                </h3>
                <p className="mb-4">
                  In this panel of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard
                  </span>
                  , you can see a general summary of the overall resources of
                  your farms all over the country.
                </p>
                <p className="mb-4">Here is what it looks like below:</p>
                <div className="pl-13 pt-8 flex justify-center">
                  {tfrm && (
                    <GatsbyImage
                      image={tfrm}
                      alt="Startups illustration"
                      className="border border-gray-300  shadow-xl  w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <p className="mb-4">
                  [Placeholder for Farm Resources Summary image]
                </p>
                <p className="mb-4">It consists of 4 panels:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Inventory “Total items”
                    </span>{" "}
                    panel: The total no. of items that are currently in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Inventory
                    </span>{" "}
                    of your farms warehouses. It is also a shortcut to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inventory”
                    </span>{" "}
                    page:
                  </li>
                  <p className="mb-4">Provided below is what it looks like:</p>
                  <p className="mb-4">
                    [Placeholder for Inventory Total items panel image]
                  </p>
                  <p className="mb-4">
                    To go to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inventory”
                    </span>{" "}
                    page from the{" "}
                    <span className="text-primary-activelink font-bold">
                      Inventory
                    </span>{" "}
                    panel, you start off by:
                  </p>
                  <ol className="list-decimal ml-6 mb-4">
                    <li className="mb-2">
                      First, clicking on the{" "}
                      <span className="font-bold">“View all”</span> link located
                      on the bottom right of the panel.
                    </li>
                    <li className="mb-2">
                      It will take you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Inventory”
                      </span>{" "}
                      page right afterwards.
                    </li>
                  </ol>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse “Total warehouses”
                    </span>{" "}
                    panel: The total no. of warehouses that are a part of your
                    farms. It is also a shortcut to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Warehouse”
                    </span>{" "}
                    page:
                  </li>
                  <p className="mb-4">Provided below is what it looks like:</p>
                  <p className="mb-4">
                    [Placeholder for Warehouse Total warehouses panel image]
                  </p>
                  <p className="mb-4">
                    To go to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Warehouse”
                    </span>{" "}
                    page from the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    panel, you start off by:
                  </p>
                  <ol className="list-decimal ml-6 mb-4">
                    <li className="mb-2">
                      First, clicking on the{" "}
                      <span className="font-bold">“View all”</span> link located
                      on the bottom right of the panel.
                    </li>
                    <li className="mb-2">
                      It will take you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Warehouse”
                      </span>{" "}
                      page right afterwards.
                    </li>
                  </ol>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Machinery Total Machines
                    </span>{" "}
                    panel: The total no. of machines that are a part of your
                    farm's assets. It is also a shortcut to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Machinery/Tools”
                    </span>{" "}
                    page:
                  </li>
                  <p className="mb-4">Provided below is what it looks like:</p>
                  <p className="mb-4">
                    [Placeholder for Machinery Total Machines panel image]
                  </p>
                  <p className="mb-4">
                    To go to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Machinery/Tools”
                    </span>{" "}
                    page from the{" "}
                    <span className="text-primary-activelink font-bold">
                      Machinery
                    </span>{" "}
                    panel, you start off by:
                  </p>
                  <ol className="list-decimal ml-6 mb-4">
                    <li className="mb-2">
                      First, clicking on the{" "}
                      <span className="font-bold">“View all”</span> link located
                      on the bottom right of the panel.
                    </li>
                    <li className="mb-2">
                      It will take you to the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Machinery/Tools”
                      </span>{" "}
                      page right afterwards.
                    </li>
                  </ol>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Livestock
                    </span>{" "}
                    Panel [Upcoming Panel]: An upcoming panel that will detail
                    the Livestock of your farms.
                  </li>
                </ul>
                <p className="mb-4">
                  It shows the total count of your farm's resources such as the{" "}
                  <span className="text-primary-activelink font-bold">
                    Inventory
                  </span>
                  ,{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>
                  ,{" "}
                  <span className="text-primary-activelink font-bold">
                    Machinery/Tools
                  </span>
                  ,{" "}
                  <span className="text-primary-activelink font-bold">
                    Livestock
                  </span>{" "}
                  [Upcoming] etc. It is also a shortcut to each of those pages
                  as well.
                </p>
                <p className="mb-4">
                  Now that we have all the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard Panels
                  </span>{" "}
                  looked at, thus concludes our overview of the entire{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard Page
                  </span>
                  !
                </p>
                <p className="mb-4">But we are not done yet!</p>
                <p className="mb-4">
                  Navigate through the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard
                  </span>{" "}
                  and see how different parts connect to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>{" "}
                  tools and see how you wish to use the{" "}
                  <span className="text-primary-activelink font-bold">
                    Dashboard Page
                  </span>{" "}
                  to your best advantage!
                </p>
                <p className="mb-4">
                  Next we are now going to check out the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Farm Locations”
                  </span>{" "}
                  Page in more detail. This is where we will review how the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Location
                  </span>{" "}
                  page works, How to add a{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Location
                  </span>
                  , its many shown and hidden features...
                </p>
                <p className="mb-4">So without further ado, let’s begin!</p>
              </div>
            </div>
          </div>
        </main>
      </PrivateRoute>
    </AppLayout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Dashboard | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
