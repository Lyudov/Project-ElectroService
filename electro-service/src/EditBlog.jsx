import { Link, Navigate } from "react-router-dom";
import { getDatabase, ref, update, remove, get } from "firebase/database";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { isAuthenticated } from "./authService";

import styles from "./EditBlog.module.css";

function EditBlog() {
  const { id } = useParams();
  console.log("ID Parameter:", id);
  const [blogDetails, setBlogDetails] = useState(null);
  const navigate = useNavigate();

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const database = getDatabase();
    const blogServiceRef = ref(database, "blogService");

    try {
      const snapshot = await get(blogServiceRef);
      const blogServiceData = snapshot.val();

      if (blogServiceData) {
        const blogKey = Object.keys(blogServiceData).find(
          (key) => blogServiceData[key].id === id
        );

        if (blogKey) {
          const blogRef = ref(database, `blogService/${blogKey}`);
          const updatedBlogDetails = {
            title: blogDetails.title,
            description: blogDetails.description,
          };

          await update(blogRef, updatedBlogDetails);

          console.log("Updated Blog Key:", blogKey);
          navigate(`/details/${id}`);
        } else {
          console.log("Blog entry not found");
        }
      } else {
        console.log("No blog entries found");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const handleDelete = async () => {
    const findBlogKeyById = (blogServiceData, id) => {
      return Object.keys(blogServiceData).find(
        (key) => blogServiceData[key].id === id
      );
    };

    const database = getDatabase();
    const blogServiceRef = ref(database, "blogService");

    try {
      const snapshot = await get(blogServiceRef);
      const blogServiceData = snapshot.val();

      if (blogServiceData) {
        const blogKey = findBlogKeyById(blogServiceData, id);

        if (blogKey) {
          const blogRef = ref(database, `blogService/${blogKey}`);
          await remove(blogRef);
          console.log("Deleted Blog Key:", blogKey);
          navigate("/blog");
        } else {
          console.log("Blog entry not found");
        }
      } else {
        console.log("No blog entries found");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleCancel = () => {
    // Navigate to the home page
    navigate(`/details/${id}`);
  };

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  if (!blogDetails) {
    return <p>Loading...</p>;
  }

  return (
    <section className="edit_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Edit Blog</h2>
          <img src="images/plug.png" alt="" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleUpdate}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={blogDetails.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="message-box"
                  id="description"
                  name="description"
                  value={blogDetails.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="form-group">
                <button type="submit">Update Blog</button>
                <button type="button" onClick={handleDelete}>
                  Delete Blog
                </button>
                <button type="button" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditBlog;
