import React from 'react'
import { AppLayout } from '../components/AppShell/AppLayout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

const vaccination = () => {
     const data = useStaticQuery(graphql`
                    query {
                      vaccination: file(relativePath: { eq: "vaccination.png" }) {
                        childImageSharp {
                          gatsbyImageData(placeholder: BLURRED)
                        }
                 }}`)
                 const vaccination = getImage(data.vaccination);
  return (
   <AppLayout>
    <div>
      <div className='flex flex-col justify-center'>
         <h2 className="text-primary-activelink font-semibold text-[34px] font-montserrat pl-10 pt-5">
                    Vaccination Centre:
                          </h2>
             <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10 pt-5">
                       The Vaccination Centre ensures proper
                       management of vaccines and immunization tools. Options include
                       Cabinets and Refrigerators for temperature-sensitive vaccines.
                    
                     <ul>
                       <li>
                         <span className="text-primary-pheading font-semibold">
                           Cabinet:
                         </span>{" "}
                         Storage space for vaccines and immunization materials.
                       </li>
                       <li>
                         <span className="text-primary-pheading font-semibold">
                           Refrigerator:
                         </span>{" "}
                         A cooling appliance used to store vaccines and immunization
                         materials.
                       </li>
                     </ul>
                     <div className="pl-13 pt-8 flex justify-center">
                       {vaccination && (
                         <GatsbyImage
                           image={vaccination}
                           alt="Startups illustration"
                           className="bg-white w-[1000.58px] "
                         />
                       )}
                     </div></div><br/> 
                     </div>
    </div>
   </AppLayout>
  )
}

export default vaccination
export const Head = () => (
  <>
<title>Vaccination | Farm Management System</title>
 <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
</>
)