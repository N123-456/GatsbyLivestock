import * as React from "react";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import { login } from "../utils/auth"
const signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    if (email === "admin" && password === "123@gmail.com") {
     localStorage.setItem("isLoggedIn", "true");
      navigate("/userguidance");
    } else {
      alert("Invalid credentials");
    }
  };
  
  const data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);
  const image = getImage(data.bgImage);
  return (
    <div className="min-h-screen">
      <div className="relative min-h-screen">
        <GatsbyImage
          image={image!}
          alt="Background"
          className="absolute inset-0 w-full h-full z-0"
          style={{ objectFit: "cover" }}
        />
    <div className="flex min-h-screen bg-cover bg-center relative z-10">
      <div className="bg-green-800  p-8 rounded-lg shadow-md w-full max-w-sm space-y-8 text-white">
        <h2 className="text-4xl font-semibold text-left mb-6">Login</h2>
      
          <div>
            <label className="block text-[24px] font-medium mb-1 ">Email address</label>
            <input
              type="email"
              placeholder="hello@gmail.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full text-black font-semibold px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-[24px] font-medium mb-1 ">Password</label>
            <input
              type="password"
              placeholder="Your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full text-black font-semibold px-4 py-2 space-y-10 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            onClick={handleLogin}
            className="w-full text-[20px] bg-[#be8b45] text-white py-2 rounded-md  transition duration-200"
          >
            Login
          </button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default signin;
