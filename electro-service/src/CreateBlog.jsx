import { getDatabase, ref, push } from "firebase/database";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { isAuthenticated, getCookie } from "./authService";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase";
import styles from "./CreateBlog.Module.css";

function CreateBlog() {
  const [imageUrl, setImageUrl] = useState("");
  // const id = uuidv4();
  const navigate = useNavigate();
  const [createBlog, setCreateBlog] = useState({
    id: uuidv4(),
    imageUrl: "",
    title: "",
    description: "",
  });

  const userId = getCookie("userId");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreateBlog({
      ...createBlog,
      [name]: value,
    });
  };

  const handleImageURLChange = (e) => {
    setImageUrl(e.target.value);
  };

  const writeToDatabase = async () => {
    const database = getDatabase();

    const createBlogRef = ref(database, "blogService");

    const blogData = {
      id: createBlog.id,
      imageUrl: imageUrl,
      title: createBlog.title,
      description: createBlog.description,
      author: {
        userId: userId,
      },
    };

    const newBlogRef = push(createBlogRef, blogData);
    const newBlogId = newBlogRef.key;
    console.log("New Blog Id:", newBlogId);

    setCreateBlog({
      id: uuidv4(),
      title: "",
      description: "",
    });
    setImageUrl("");
    navigate("/blog");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <section className="create_section layout_padding">
      {isAuthenticated() ? (
        <div className="container ">
          <div className="heading_container">
            <h2>Create Blog</h2>
            <img src="images/plug.png" alt="" />
          </div>
        </div>
      ) : (
        <div className="container">
          <p>Please log in to create a blog.</p>
        </div>
      )}

      {isAuthenticated() && (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form action="">
                <div className="img-box">
                  <input
                    type="text"
                    name="imageUrl"
                    value={imageUrl}
                    onChange={handleImageURLChange}
                    placeholder="Enter Image URL"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={createBlog.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <textarea
                    type="text"
                    className="message-box"
                    name="description"
                    placeholder="Description"
                    value={createBlog.description}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex ">
                  <button type="button" onClick={writeToDatabase}>
                    Create
                  </button>
                  <button type="button" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CreateBlog;
