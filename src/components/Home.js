import React, { useEffect, useState } from "react";
import Image from "../images/blogging.png";
import axios from "axios";
// import Link from "react-router-dom";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        setBlogs(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="myHome">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="hero">
              <div className="left-text ">
                <h1> Hey there, Welcome to</h1>
                <h4 className="pt-3 name"> The Doreen Ntumy Blog :)</h4>
              </div>
            </div>
          </div>
          {/* first col ends here */}
          <div className="col-6">
            <div className="hero">
              <div className="right-text">
                <img src={Image} alt="an illustration of blog" />
              </div>
            </div>
          </div>
          {/* second col ends here */}
        </div>
      </div>
      <div className="blogs-container">
        <div className="text-center">
          {blogs.map((blog) => (
            <div className="blogs-list">
              <h5 className="py-3" key={blog.id}>
                {blog.title}
              </h5>
              <p key={blog.id}> {blog.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
