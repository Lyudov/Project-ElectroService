import { Link } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import styles from "./Blog.Module.css";

function Blog() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const database = getDatabase();
    const blogRef = ref(database, "blogService");

    onValue(blogRef, (snapshot) => {
      const blogServiceData = snapshot.val();

      if (blogServiceData) {
        const blogServiceList = Object.values(blogServiceData);
        setBlogData(blogServiceList);
      }
    });
  }, []);

  return (
    <section className="blog_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Blog</h2>
          <img src="images/plug.png" alt="" />
        </div>
        <div className="row">
          {blogData.map((data) => (
            <div className="col-md-6" key={data.id}>
              <div className="box">
                <div className="img-box">
                  <img src={data.imageUrl} alt="" />
                </div>
                <div className="detail-box">
                  <h5>{data.title}</h5>
                  <p className="truncate">{data.description}</p>
                  <div className="button">
                    <Link to={`/details/${data.id}`}>Read more</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    // <section className="blog_section layout_padding">
    //   <div className="container">
    //     <div className="row">
    //       {blogData.map((data) => (
    //         <div className="col-md-6" key={data.key}>
    //           <div className="box">
    //             <div className="img-box">
    //               <img src={data.imageUrl} alt="" />
    //             </div>
    //             <div className="detail-box">
    //               <h5>{data.title}</h5>
    //               <p>{data.description}</p>

    //               <Link to={`/blog/${data.key}`}>Read More</Link>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
}

export default Blog;
