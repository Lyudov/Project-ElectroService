import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

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
          {blogData.map((data, index) => (
            <div className="col-md-6" key={index}>
              <div className="box">
                <div className="img-box">
                  <img src={data.imageUrl} alt="" />
                </div>
                <div className="detail-box">
                  <h5>{data.title}</h5>
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
