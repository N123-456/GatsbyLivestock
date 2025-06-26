import React from 'react'
import { AppLayout } from '../components/AppShell/AppLayout'
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const addlocation = () => {
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
                Starting Guide for Farm Locations:
                </h2>
                <p className="text-primary-paragraph text-[18px] font-montserrat font-normal px-10 pt-4">
                  Farm Locations are the locations that are owned by you or where you can plant your crops. So, for that you need to Add the location first. After that, on that particular location you can add the details of your farm. The locations can be of any type like fields, building etc. You can easily manage all your farm locations all at one place. For adding planting, warehouse and tasks related to land you first need to have a farm location. The location is an asset of the farmer. When a location is added, a transaction is created against that location. That can be viewed in the financial tab in general ledger table. 
                </p>
       <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="bg-white w-[1000.58px] "
                      />
                    )}
                  </div>
      
                 <div className="flex items-center pt-5 space-x-4">
                    <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
                      Step 1
                    </h2>
                    <div className="flex-1 h-px bg-primary-line"></div>
                  </div>
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
                  Add Location:
                </h2>
                <p className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
                  For adding a location:
                  <br /><br/>
                  ▪	Click on <span className="text-primary-activelink font-semibold">"Add location"</span>button.<br/>
▪	Enter the required information.<br/>
▪	First enter the <span className="text-primary-activelink font-semibold">name and type</span>: of the location. The type of location can be:<br/>

                  <br />{" "}
                  <ul className='list-disc'>
                  <li><span className="text-primary-pheading font-semibold">Animal Enclosure:</span>An animal enclosure is a designated space designed to house and safely contain animals, providing them with a suitable environment for living and movement.</li>
                  <li><span className="text-primary-pheading font-semibold">Buffer Zones: </span>
                  Buffer zones are designated areas created to separate and protect one region from another, often used to reduce conflict or impact.</li>
                  <li><span className="text-primary-pheading font-semibold">Buildings : </span>
                 Buildings are structures designed for specific purposes, such as housing, storage, or operations.</li>
                  <li><span className="text-primary-pheading font-semibold">Farm Boundaries : </span>
                Farm boundaries are defined perimeters that mark the extent of a farm's land.</li>
                  <li><span className="text-primary-pheading font-semibold">Fields: </span>
                 Fields are open areas of land used for planting crops or grazing livestock.</li>
                 <li><span className="text-primary-pheading font-semibold">Greenhouse: </span>
                 A greenhouse is a controlled-environment structure designed for growing plants.</li>
                 <li><span className="text-primary-pheading font-semibold">Grow Room: </span>
                 A grow room is an indoor space designed for cultivating plants under controlled conditions.</li>
                   <li><span className="text-primary-pheading font-semibold">Irrigation Zone: </span>
                Irrigation zones are designated areas within a farm that receive water through a specific irrigation system.</li>
                  <li><span className="text-primary-pheading font-semibold">Paddock: </span>
                A paddock is an enclosed area of land used for grazing or exercising livestock.</li>
                  <li><span className="text-primary-pheading font-semibold">Pasture: </span>
Pasture is land covered with grass or other vegetation used for grazing livestock.</li>
                  <li><span className="text-primary-pheading font-semibold">Other: </span>
    Any other type other than the above mentioned..</li>
                  </ul>
                  <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="bg-white w-[1000.58px] "
                      />
                    )}
                  </div>
▪	Enter the required information.<br/>
<ul className='text-primary-activelink font-semibold'>
    <li>Province</li>
    <li>Division</li>
    <li>District</li>
    <li>Tehsil</li>
    <li>Address</li>
</ul>
   <div className="pl-13 pt-8 flex justify-center">
                    {listview && (
                      <GatsbyImage
                        image={listview}
                        alt="Startups illustration"
                        className="bg-white w-[1000.58px] "
                      />
                    )}
                  </div></p>

              </div>
    </div>
    </AppLayout>
  )
}

export default addlocation
