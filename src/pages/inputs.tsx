import React from 'react'
import { AppLayout } from '../components/AppShell/AppLayout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'

const inputs = () => {
    const data = useStaticQuery(graphql`
                query {
                  inputs: file(relativePath: { eq: "inputs.png" }) {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED)
                    }
             }}`)
             const inputs= getImage(data.inputs);
  return (
   <AppLayout>
    <div>
      <div className='flex flex-col justify-center'>
        <h2 className="text-primary-activelink font-semibold text-[34px] font-montserrat pl-10 pt-5">
                     Inputs/Technologies:
                          </h2>
       <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal pt-5 px-10">
                        The Inputs/Technologies Section is designed
                        for handling and storing chemicals, such as fertilizers,
                        pesticides, weedicides, and application equipment, safely.
                      
                      <ul>
                        <li>
                          <span className="text-primary-pheading font-semibold">
                            Fertilizer:
                          </span>
                          : Materials used to improve soil quality and help crops grow.
                        </li>
                        <li>
                          <span className="text-primary-pheading font-semibold">
                            Pesticides:
                          </span>{" "}
                          Chemicals used to protect crops from pests and insects.
                        </li>
                        <li>
                          <span className="text-primary-pheading font-semibold">
                            Wedicides:
                          </span>{" "}
                          Chemicals to control and eliminate weeds from the farm.
                        </li>
                        <li>
                          <span className="text-primary-pheading font-semibold">
                            Application Equipment:
                          </span>{" "}
                          Tools and machines used to apply fertilizers, pesticides, and
                          wedicides.
                        </li>
                      </ul>
                      <div className="pl-13 pt-8 flex justify-center">
                        {inputs && (
                          <GatsbyImage
                            image={inputs}
                            alt="Startups illustration"
                            className="bg-white w-[1000.58px] "
                          />
                        )}
                      </div>
                      </div><br/>
                      </div>
    </div>
   </AppLayout>
  )
}

export default inputs
export const Head = () => (
  <>
<title>Input/Technology | Farm Management System</title>
 <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
</>
)