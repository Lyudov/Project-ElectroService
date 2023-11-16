import { getDatabase, ref, push } from "firebase/database";
import { useState } from "react";
import styles from "./CreateBlog.Module.css";

function CreateBlog() {
  const [imageUrl, setImageUrl] = useState("");
  const [createBlog, setCreateBlog] = useState({
    imageUrl: "",
    title: "",
    description: "",
  });

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

  const writeToDatabase = () => {
    const database = getDatabase();

    const createBlogRef = ref(database, "blogService");

    const blogData = {
      imageUrl: imageUrl,
      title: createBlog.title,
      description: createBlog.description,
    };

    push(createBlogRef, blogData);

    setCreateBlog({
      title: "",
      description: "",
    });
    setImageUrl("");
  };

  return (
    <section className="create_section layout_padding">
      <div className="container ">
        <div className="heading_container">
          <h2>Create Blog</h2>
          <img src="images/plug.png" alt="" />
        </div>
      </div>
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateBlog;
