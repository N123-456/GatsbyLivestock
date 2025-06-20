import { graphql, Link, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { IconLogin, IconLogout } from "@tabler/icons-react";

const Header = ({ onLoginClick }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "livestock.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 60
            height: 60
            placeholder: BLURRED
            layout: FIXED
          )
        }
      }
    }
  `);

  const logoImage = getImage(data.logo);

  return (
    <header className="h-[100px] bg-primary-400 text-dark flex items-center justify-between px-6 shadow-md border-b">
      {/* Logo + Title */}
      <div className="flex items-center gap-4">
        {/* Logo Image */}
        <GatsbyImage image={logoImage!} alt="Logo" className="rounded-full" />
        <div className="text-2xl font-semibold tracking-tight leading-5">
          Livestock
          <p className="text-xl font-normal">Manager</p>
        </div>
      </div>
      {/* <div className="flex items-center space-x-10"> */}
        {/* Nav Links */}
        <nav className="flex space-x-10 text-2xl font-semibold">
          <Link
            to="/"
            className="hover:text-primary-700 hover:text-text-light transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-primary-700 hover:text-text-light transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            to="/userguidance"
            className="hover:text-primary-700 hover:text-text-light transition-colors duration-200"
          >
            User Guidance
          </Link>
          <Link
            to="/contact"
            className="hover:text-primary-700 hover:text-text-light transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Login Button */}
         <div className="flex items-center space-x-6">
        <button className=" text-2xl font-semibold hover:text-text-light transition-colors duration-200" onClick={onLoginClick}>
        
            <IconLogin size={40} />
        
        </button>
        </div>
     
    </header>
  );
};

export default Header;
