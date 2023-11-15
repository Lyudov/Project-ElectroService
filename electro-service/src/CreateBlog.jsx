function CreateBlog() {
  return (
    <section className="contact_section layout_padding">
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
                <img src="" alt="" />
              </div>
              <div>
                <input type="text" name="title" placeholder="Title" />
              </div>
              <div>
                <input
                  type="text"
                  className="message-box"
                  name="description"
                  placeholder="Description"
                />
              </div>
              <div className="d-flex ">
                <button>SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
