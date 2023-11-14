function Blog() {
  return (
    <section className="blog_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Blog</h2>
          <img src="images/plug.png" alt="" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="box">
              <div className="img-box">
                <img src="images/blog1.jpg" alt="" />
              </div>
              <div className="detail-box">
                <h5>Blog Title Goes Here</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box">
              <div className="img-box">
                <img src="images/blog2.jpg" alt="" />
              </div>
              <div className="detail-box">
                <h5>Blog Title Goes Here</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
