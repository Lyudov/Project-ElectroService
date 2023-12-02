import { Link } from "react-router-dom";
import { getDatabase, ref, update, remove, get } from "firebase/database";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditBlog() {
  const { id } = useParams();
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

  const handleUpdate = async () => {
    const database = getDatabase();
    const blogRef = ref(database, "blogService");

    try {
      await update(blogRef.child(id), {
        title: blogDetails.title,
        description: blogDetails.description,
        // Add other fields you want to update
      });

      // Redirect to the blog details page after the update
      navigate(`/details/${id}`);
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const handleDelete = async () => {
    const database = getDatabase();
    const blogRef = ref(database, "blogService");

    try {
      await remove(blogRef.child(id));

      // Redirect to the blog page after the deletion
      navigate("/blog");
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

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
                <Link to={`/details/${id}`}>Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditBlog;
