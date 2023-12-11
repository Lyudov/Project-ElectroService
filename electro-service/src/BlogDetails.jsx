import { Link } from "react-router-dom";
import { getDatabase, ref, get } from "firebase/database";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./BlogDetails.Module.css";

import { isAuthenticated, getCookie } from "./authService";

function BlogDetails() {
  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState(null);
  // const { isAuth } = isAuthenticated();
  // const currentUserId = getCurrentUserId();
  // const currentUserId = user ? user.uid : null;
  const userId = getCookie("userId");

  useEffect(() => {
    const fetchBlogDetails = async () => {
      const database = getDatabase();
      const blogRef = ref(database, "blogService");
      try {
        const snapshot = await get(blogRef);
        const blogServiceData = snapshot.val();

        if (blogServiceData) {
          const specifiedBlog = Object.values(blogServiceData).find(
            (blog) => blog.id === id
          );

          if (specifiedBlog) {
            setBlogDetails(specifiedBlog);
          } else {
            console.log("Blog entry not found");
          }
        } else {
          console.log("No blog entries found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (!blogDetails) {
    return <p>Loading...</p>;
  }

  // const isAuthor = isAuth && user && user.uid === currentUserId;
  // const isAuthor = userId && userId === blogDetails.author.userId;
  const isAuthor =
    userId &&
    blogDetails &&
    blogDetails.author &&
    userId === blogDetails.author.userId;
  console.log(isAuthor);

  return (
    <section className="blog_details_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>{blogDetails.title}</h2>
          <img src="images/plug.png" alt="" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="box">
              <div className="img-box">
                <img src={blogDetails.imageUrl} alt="" />
              </div>
              <div className="detail-box">
                <p>{blogDetails.description}</p>
              </div>
              {isAuthor && (
                <div className="btn-box">
                  <Link to={`/edit/${id}`}>Edit</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDetails;
