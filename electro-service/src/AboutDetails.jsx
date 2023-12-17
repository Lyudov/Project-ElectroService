import styles from "./AboutDetails.Module.css";

function AboutDetails() {
  return (
    <section className="about_details_section layout_padding">
      <div className="container">
        {/* Introduction */}
        <div className="heading_container">
          <h2>About Us</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="box">
              <div className="img-box">
                <img src="images/about-us.jpg" alt="" />
              </div>
              <div className="detail-box">
                <p>
                  Welcome to Electro Elite Solutions, your trusted partner in
                  providing top-notch electro services. Our mission is to
                  [briefly describe your mission].
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company History */}
        <div className="heading_container">
          <h2>Our Journey</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="box">
              <div className="img-box">
                <img src="images/journey-success.jpg" alt="" />
              </div>
              <div className="detail-box">
                <p>
                  Electro Elite Solutions was founded in 1991. Since then, we
                  have been on a journey marked by [key milestones,
                  achievements, awards, and recognitions].
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}

        <div className="heading_container">
          <h2>Meet Our Team</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="box">
              <div className="img-box">
                <img src="images/team.jpg" alt="" />
              </div>
              <div className="detail-box">
                <p>
                  At Electro Elite Solutions, we take pride in our talented
                  team. Our founders, executives, and every team member bring
                  valuable expertise and experience to the table.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values and Culture */}

        <div className="heading_container">
          <h2>Our Values</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="box">
              <div className="img-box">
                <img src="images/values.jpg" alt="" />
              </div>
              <div className="detail-box">
                <p>
                  Our core values of [list your core values] shape our business
                  practices. We foster a culture of collaboration, innovation,
                  and customer-centricity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Unique Selling Proposition (USP) */}

        <div className="heading_container">
          <h2>Why Choose Us?</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="box">
              <div className="img-box">
                <img src="images/choose-us.jpg" alt="" />
              </div>
              <div className="detail-box">
                <p>
                  Electro Elite Solutions stands out in the market with [clearly
                  communicate your USP, unique features, benefits, or services].
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}

        <div className="heading_container">
          <h2>What Our Customers Say</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="box">
              <div className="img-box">
                <img src="images/our-customers.jpg" alt="" />
              </div>
              <div className="detail-box">
                <p>
                  Don't just take our word for it. Hear from our satisfied
                  customers who have experienced the excellence of our services.
                  [Include customer testimonials, images, or videos if
                  possible].
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partnerships and Collaborations */}

        <div className="heading_container">
          <h2>Our Partnerships</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="box">
              <div className="img-box">
                <img src="images/partnerships.jpg" alt="" />
              </div>
              <div className="detail-box">
                <p>
                  Electro Elite Solutions proudly collaborates with [mention
                  partnerships and collaborations]. These relationships enhance
                  our credibility and strengthen our commitment to quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutDetails;
