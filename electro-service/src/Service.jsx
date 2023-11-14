function Service() {
  return (
    <section className="service_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Our Services</h2>
          <img src="images/plug.png" alt="" />
        </div>

        <div className="service_container">
          <div className="box">
            <div className="img-box">
              <img src="images/s1.png" className="img1" alt="" />
            </div>
            <div className="detail-box">
              <h5>Equipment installation</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
              </p>
            </div>
          </div>
          <div className="box active">
            <div className="img-box">
              <img src="images/s2.png" className="img1" alt="" />
            </div>
            <div className="detail-box">
              <h5>Windmill Energy</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
              </p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="images/s3.png" className="img1" alt="" />
            </div>
            <div className="detail-box">
              <h5>Equipment Maintenance</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
              </p>
            </div>
          </div>
          <div className="box ">
            <div className="img-box">
              <img src="images/s4.png" className="img1" alt="" />
            </div>
            <div className="detail-box">
              <h5>Offshore Engineering</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
              </p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="images/s5.png" className="img1" alt="" />
            </div>
            <div className="detail-box">
              <h5>Electrical Wiring</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available,
              </p>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <a href="">Read More</a>
        </div>
      </div>
    </section>
  );
}

export default Service;
