import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogNews() {




  // Fetch data from the API
  const [data, setData] = useState([]);

  // Fetch data from the API
  const fetchData = async () => {
    try {
      // const response = await axios.get("https://tharayildb.vercel.app/api/data");
      const response = await axios.get("https://admindb-indol.vercel.app/");


      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div
      className="work_bg py-0 py-lg-1 pb-lg-5 overflow-hidden"
      id="blog_news"
    >
      <div className="container py-1 py-lg-3">
        <div className="row p-0 m-0 g-5">
          <div className="col-12 col-lg-6 h-50">
            <div>
              <div
                className="font_stroke"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                Blog & News
              </div>
              <div
                className="ftittle"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                Stay Informed with the Best in Renewable Energy
              </div>
              <div
                className="py-3 pera text-secondary"
                data-aos="fade-right"
                data-aos-duration="1800"
                data-aos-once="true"
              >
                Discover insights and updates on renewable energy trends,
                technologies, and success stories through our blog.
              </div>
            </div>
          </div>

         
          {data.map((blog, index) => {
            console.log(blog);

            // Parse the date string and format it as "DD MMM"
            const blogDate = new Date(blog.date);
            const formattedDate = `${blogDate.getDate()} ${blogDate.toLocaleString('default', { month: 'short' })}`;

            return (
              <div
                key={blog.id}
                className={`col-12 col-lg-6 ${index % 2 === 0 ? "" : "pt-0 pt-lg-5"
                  }`}
                id="saeds"
              >
                <div
                  className="m-0 m-lg-5 mt-5"
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-duration="1800"
                  data-aos-once="true"
                >
                  <Link
                    to={blog.blogUrl}
                    className="text-decoration-none"
                    target="_blank"
                  >
                    <div className="blog_height">
                      <img
                        src={blog.imageUrl}
                        alt={blog.title}
                        className="img-fluid w-100 h-100 z-0 object-fit-cover shadow"
                      />
                    </div>
                    <div className="content-box">
                      <div
                        className="w-75 mx-auto bg-white p-2 p-lg-4 text-center text-lg-start z-1 shadow position-relative"
                        style={{ marginTop: "-55px" }}
                      >
                        <div className="text-white fw-bold ms-auto datecss bg-success p-3 border border-5 border-white">
                          {formattedDate} 
                        </div>
                        <div className="py-2 fw-bold fs-5 text-dark text-capitalize">
                          {blog.title}
                        </div>
                        <div className="pera py-2 text-secondary">
                          {blog.description}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}

export default BlogNews;


