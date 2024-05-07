import React from 'react'

export default function Check() {
  return (
    <>
  <div className="preloader-cover">
    <div id="cube-loader">
      <div className="caption">
        <div className="cube-loader">
          <div className="cube loader-1" />
          <div className="cube loader-2" />
          <div className="cube loader-4" />
          <div className="cube loader-3" />
        </div>
      </div>
    </div>
  </div>
  {/*============== PRELOADER END ==============*/}
  {/* ================= HEADER ================= */}
  <header className="header">
    <a href="#" className="nav-btn">
      <span />
      <span />
      <span />
    </a>
    <div className="top-panel">
      <div className="container">
        <div className="header-left">
          <ul className="header-cont">
            <li>
              <i className="fa fa-phone" aria-hidden="true" />
              <a href="tel:18004886040">1-800-488-6040</a>
            </li>
            <li>
              <i className="fa fa-clock-o" aria-hidden="true" />
              Mon - Fri: 8:00AM - 7:00PM | Sat - Sun: Closed
            </li>
          </ul>
        </div>
        <div className="header-right">
          <form className="search-form">
            <input
              type="search"
              className="search-form__field"
              placeholder="Search"
              defaultValue=""
              name="s"
            />
            <button type="submit" className="search-form__submit">
              <i className="fa fa-search" aria-hidden="true" />
            </button>
          </form>
          <ul className="social-list">
            <li>
              <a target="_blank" href="https://www.facebook.com/rovadex">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/RovadexStudio">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.youtube.com">
                <i className="fa fa-youtube" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/rovadex">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="header-menu">
      <div className="container">
        <div className="header-logo">
          <a href="index.html" className="logo">
            <img src="assets/img/logo.svg" alt="logo" />
          </a>
        </div>
        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="dropdown">
              <a href="#">
                Home <i className="fa fa-caret-down" />
              </a>
              <ul>
                <li className="menu-active">
                  <a href="index.html">Crossfit</a>
                </li>
                <li>
                  <a href="home-fitness.html">Fitness</a>
                </li>
                <li>
                  <a href="home-crossfit-lite.html">Crossfit Lite</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="services.html">Services</a>
            </li>
            <li className="dropdown">
              <a href="#">
                Pages <i className="fa fa-caret-down" />
              </a>
              <ul>
                <li>
                  <a href="program.html">Program</a>
                </li>
                <li>
                  <a href="trainer.html">Trainer</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="blog.html">News</a>
            </li>
            <li>
              <a href="contacts.html">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  {/* =============== HEADER END =============== */}
  {/* ============ S-CROSSFIT-SLIDER ============ */}
  <section className="s-crossfit-slider">
    <div className="crossfit-slider">
      <div className="crossfit-slide">
        <div className="crossfit-slider-effect effect-1">
          <div data-hover-only="true" className="scene">
            <span
              className="scene-item"
              data-depth="0.2"
              style={{ backgroundImage: "url(assets/img/effect-1.svg)" }}
            />
          </div>
        </div>
        <div className="crossfit-slider-effect effect-2">
          <div data-hover-only="true" className="scene">
            <span
              className="scene-item"
              data-depth="0.4"
              style={{ backgroundImage: "url(assets/img/effect-2.svg)" }}
            />
          </div>
        </div>
        <div
          className="crossfit-slide-bg"
          style={{ backgroundImage: "url(assets/img/slide-1.jpg)" }}
        />
        <div className="container">
          <div className="crossfit-slide-cover">
            <h2 className="title">
              push <span>yourself</span>
            </h2>
            <p>
              Maecenas consequat ex id lobortis venenatis. Mauris id erat enim.
              Morbi dolor dolor, auctor tincidunt lorem ut, venenatis dapibus
              mi. Nunc venenatis sollicitudin nisl vel auctor.
            </p>
          </div>
        </div>
      </div>
      <div className="crossfit-slide">
        <div className="crossfit-slider-effect effect-1">
          <div data-hover-only="true" className="scene">
            <span
              className="scene-item"
              data-depth="0.2"
              style={{ backgroundImage: "url(assets/img/effect-1.svg)" }}
            />
          </div>
        </div>
        <div className="crossfit-slider-effect effect-2">
          <div data-hover-only="true" className="scene">
            <span
              className="scene-item"
              data-depth="0.4"
              style={{ backgroundImage: "url(assets/img/effect-2.svg)" }}
            />
          </div>
        </div>
        <div
          className="crossfit-slide-bg"
          style={{ backgroundImage: "url(assets/img/slide-2.jpg)" }}
        />
        <div className="container">
          <div className="crossfit-slide-cover">
            <h2 className="title">
              push <span>yourself</span>
            </h2>
            <p>
              Maecenas consequat ex id lobortis venenatis. Mauris id erat enim.
              Morbi dolor dolor, auctor tincidunt lorem ut, venenatis dapibus
              mi. Nunc venenatis sollicitudin nisl vel auctor.
            </p>
          </div>
        </div>
      </div>
      <div className="crossfit-slide">
        <div className="crossfit-slider-effect effect-1">
          <div data-hover-only="true" className="scene">
            <span
              className="scene-item"
              data-depth="0.2"
              style={{ backgroundImage: "url(assets/img/effect-1.svg)" }}
            />
          </div>
        </div>
        <div className="crossfit-slider-effect effect-2">
          <div data-hover-only="true" className="scene">
            <span
              className="scene-item"
              data-depth="0.4"
              style={{ backgroundImage: "url(assets/img/effect-2.svg)" }}
            />
          </div>
        </div>
        <div
          className="crossfit-slide-bg"
          style={{ backgroundImage: "url(assets/img/slide-3.jpg)" }}
        />
        <div className="container">
          <div className="crossfit-slide-cover">
            <h2 className="title">
              push <span>yourself</span>
            </h2>
            <p>
              Maecenas consequat ex id lobortis venenatis. Mauris id erat enim.
              Morbi dolor dolor, auctor tincidunt lorem ut, venenatis dapibus
              mi. Nunc venenatis sollicitudin nisl vel auctor.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="slider-navigation">
      <div className="container">
        <div className="slider-navigation-cover" />
      </div>
    </div>
  </section>
  {/* ========== S-CROSSFIT-SLIDER END ========== */}
  {/* ================ S-CROSSFIT ================ */}
  <section className="s-crossfit">
    <div className="container">
      <img
        src="assets/img/placeholder-all.png"
        data-src="assets/img/group-circle-2.svg"
        alt="img"
        className="crossfit-icon-1 rx-lazy"
      />
      <img
        src="assets/img/placeholder-all.png"
        data-src="assets/img/line-red-1.svg"
        alt="img"
        className="crossfit-icon-2 rx-lazy"
      />
      <img
        src="assets/img/placeholder-all.png"
        data-src="assets/img/tringle-about-top.svg"
        alt="img"
        className="crossfit-icon-3 rx-lazy"
      />
      <h2 className="title-decor">
        Welcome To <span>Crossfit</span>
      </h2>
      <p className="slogan">
        Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi
        dolor dolor, auctor tincidunt lorem ut, venenatis dapibus miq.
      </p>
      <div className="row">
        <div className="col-md-4 crossfit-col">
          <div className="crossfit-item">
            <img
              className="rx-lazy"
              src="assets/img/placeholder-all.png"
              data-src="assets/img/serv-1.svg"
              alt="img"
            />
            <h3>body bulding</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <a className="btn" href="program.html">
              view Schedule
            </a>
          </div>
        </div>
        <div className="col-md-4 crossfit-col">
          <div className="crossfit-item">
            <img
              className="rx-lazy"
              src="assets/img/placeholder-all.png"
              data-src="assets/img/serv-2.svg"
              alt="img"
            />
            <h3>group workouts</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <a className="btn" href="program.html">
              view Schedule
            </a>
          </div>
        </div>
        <div className="col-md-4 crossfit-col">
          <div className="crossfit-item">
            <img
              className="rx-lazy"
              src="assets/img/placeholder-all.png"
              data-src="assets/img/serv-3.svg"
              alt="img"
            />
            <h3>boxing</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <a className="btn" href="program.html">
              view Schedule
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ============== S-CROSSFIT END ============== */}
  {/* ============== S-OUR-PROGRAMS ============== */}
  <section
    className="s-our-programs"
    style={{ backgroundImage: "url(assets/img/bg-programs.jpg)" }}
  >
    <div className="mask" />
    <div
      className="our-programs-effect"
      style={{ backgroundImage: "url(assets/img/bg-programs.svg)" }}
    />
    <div className="container">
      <h2 className="title-decor">
        Our <span>Programs</span>
      </h2>
      <p className="slogan">
        Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi
        dolor dolor, auctor tincidunt lorem ut, venenatis dapibus miq.
      </p>
      <div className="row">
        <div className="col-sm-6 col-md-3 program-col">
          <div className="program-item">
            <div
              className="program-item-front"
              style={{ backgroundImage: "url(assets/img/programs-1.jpg)" }}
            >
              <div className="program-item-inner">
                <h3>Personal trainer</h3>
              </div>
            </div>
            <div
              className="program-item-back"
              style={{ backgroundImage: "url(assets/img/programs-1.jpg)" }}
            >
              <div className="program-item-inner">
                <h3>Personal trainer</h3>
                <a href="program.html" className="btn">
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 program-col">
          <div className="program-item">
            <div
              className="program-item-front"
              style={{ backgroundImage: "url(assets/img/programs-2.jpg)" }}
            >
              <div className="program-item-inner">
                <h3>Free workout</h3>
              </div>
            </div>
            <div
              className="program-item-back"
              style={{ backgroundImage: "url(assets/img/programs-2.jpg)" }}
            >
              <div className="program-item-inner">
                <h3>Free workout</h3>
                <a href="program.html" className="btn">
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 program-col">
          <div className="program-item">
            <div
              className="program-item-front"
              style={{ backgroundImage: "url(assets/img/programs-3.jpg)" }}
            >
              <div className="program-item-inner">
                <h3>CrossFit</h3>
              </div>
            </div>
            <div
              className="program-item-back"
              style={{ backgroundImage: "url(assets/img/programs-3.jpg)" }}
            >
              <div className="program-item-inner">
                <h3>CrossFit</h3>
                <a href="program.html" className="btn">
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 program-col">
          <div className="program-item">
            <div
              className="program-item-front"
              style={{ backgroundImage: "url(assets/img/programs-4.jpg)" }}
            >
              <div className="program-item-inner">
                <h3>Martial Arts</h3>
              </div>
            </div>
            <div
              className="program-item-back"
              style={{ backgroundImage: "url(assets/img/programs-4.jpg)" }}
            >
              <div className="program-item-inner">
                <h3>Martial Arts</h3>
                <a href="program.html" className="btn">
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ============ S-OUR-PROGRAMS END ============ */}
  {/* =============== S-OUT-TRAINER =============== */}
  <section
    className="s-out-trainer"
    style={{ backgroundImage: "url(assets/img/bg-contacts.svg)" }}
  >
    <div className="container">
      <h2 className="title-decor">
        Our <span>Trainer</span>
      </h2>
      <p className="slogan">
        Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi
        dolor dolor, auctor tincidunt lorem ut, venenatis dapibus miq.
      </p>
      <div className="row">
        <div className="col-md-6 out-trainer-col">
          <div className="out-trainer-item">
            <a href="trainer.html" className="out-trainer-img">
              <img
                className="rx-lazy"
                src="assets/img/placeholder-all.png"
                data-src="assets/img/trainer-1.jpg"
                alt="img"
              />
            </a>
            <div className="out-trainer-info">
              <h3>
                <a href="trainer.html">Sam piters</a>
              </h3>
              <div className="prof">Weightlifting</div>
              <p>
                Maecenas consequat ex id lobortis venenatis. Mauris id erat
                enim. Morbi dolor dolor, auctor tincidunt lorem ut, venenatis
                dapibus miq.
              </p>
              <ul className="social-list">
                <li>
                  <a target="_blank" href="https://www.facebook.com/rovadex">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/RovadexStudio">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.youtube.com">
                    <i className="fa fa-youtube" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com/rovadex">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 out-trainer-col">
          <div className="out-trainer-item">
            <a href="trainer.html" className="out-trainer-img">
              <img
                className="rx-lazy"
                src="assets/img/placeholder-all.png"
                data-src="assets/img/trainer-2.jpg"
                alt="img"
              />
            </a>
            <div className="out-trainer-info">
              <h3>
                <a href="trainer.html">kim piters</a>
              </h3>
              <div className="prof">Weightlifting</div>
              <p>
                Maecenas consequat ex id lobortis venenatis. Mauris id erat
                enim. Morbi dolor dolor, auctor tincidunt lorem ut, venenatis
                dapibus miq.
              </p>
              <ul className="social-list">
                <li>
                  <a target="_blank" href="https://www.facebook.com/rovadex">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/RovadexStudio">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.youtube.com">
                    <i className="fa fa-youtube" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com/rovadex">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 out-trainer-col">
          <div className="out-trainer-item">
            <a href="trainer.html" className="out-trainer-img">
              <img
                className="rx-lazy"
                src="assets/img/placeholder-all.png"
                data-src="assets/img/trainer-3.jpg"
                alt="img"
              />
            </a>
            <div className="out-trainer-info">
              <h3>
                <a href="trainer.html">Samanta piters</a>
              </h3>
              <div className="prof">Weightlifting</div>
              <p>
                Maecenas consequat ex id lobortis venenatis. Mauris id erat
                enim. Morbi dolor dolor, auctor tincidunt lorem ut, venenatis
                dapibus miq.
              </p>
              <ul className="social-list">
                <li>
                  <a target="_blank" href="https://www.facebook.com/rovadex">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/RovadexStudio">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.youtube.com">
                    <i className="fa fa-youtube" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com/rovadex">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 out-trainer-col">
          <div className="out-trainer-item">
            <a href="trainer.html" className="out-trainer-img">
              <img
                className="rx-lazy"
                src="assets/img/placeholder-all.png"
                data-src="assets/img/trainer-4.jpg"
                alt="img"
              />
            </a>
            <div className="out-trainer-info">
              <h3>
                <a href="trainer.html">artur piters</a>
              </h3>
              <div className="prof">Weightlifting</div>
              <p>
                Maecenas consequat ex id lobortis venenatis. Mauris id erat
                enim. Morbi dolor dolor, auctor tincidunt lorem ut, venenatis
                dapibus miq.
              </p>
              <ul className="social-list">
                <li>
                  <a target="_blank" href="https://www.facebook.com/rovadex">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com/RovadexStudio">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.youtube.com">
                    <i className="fa fa-youtube" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com/rovadex">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ============= S-OUT-TRAINER END ============= */}
  {/* ============ S-CROSSFIT-BANNER ============ */}
  <section className="s-crossfit-banner">
    <div
      className="crossfit-banner-left"
      style={{ backgroundImage: "url(assets/img/crossmax-2.jpg)" }}
    />
    <div className="crossfit-banner-right">
      <div className="text-top">open</div>
      <h2>crossmax</h2>
      <div className="text-bottom">
        free open <a href="program.html">training</a>
      </div>
    </div>
  </section>
  {/* ========== S-CROSSFIT-BANNER END ========== */}
  {/* ============== S-CLUB-CARDS ============== */}
  <section className="s-club-cards">
    <div className="container">
      <h2 className="title-decor">
        Club <span>Cards</span>
      </h2>
      <p className="slogan">
        Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi
        dolor dolor, auctor tincidunt lorem ut, venenatis dapibus miq.
      </p>
      <div className="row">
        <div className="col-md-4 club-card-col">
          <div
            className="club-card-item"
            style={{ backgroundImage: "url(assets/img/bg-price-1.svg)" }}
          >
            <div className="price-cover">
              <div className="price">40</div>
              <div className="date">
                <span>99</span>3 months
              </div>
            </div>
            <ul className="list">
              <li>Maecenas consequat</li>
              <li>ex id lobortis venenatis</li>
              <li>Mauris id erat enim</li>
              <li className="item-excluded">Morbi dolor dolortin</li>
              <li className="item-excluded">lorem ut, venenatis dapibus mi</li>
            </ul>
            <a href="program.html" className="btn">
              order now
            </a>
          </div>
        </div>
        <div className="col-md-4 club-card-col">
          <div
            className="club-card-item"
            style={{ backgroundImage: "url(assets/img/bg-price-2.svg)" }}
          >
            <div className="price-cover">
              <div className="price">70</div>
              <div className="date">
                <span>99</span>6 months
              </div>
            </div>
            <ul className="list">
              <li>Maecenas consequat</li>
              <li>ex id lobortis venenatis</li>
              <li>Mauris id erat enim</li>
              <li>Morbi dolor dolortin</li>
              <li className="item-excluded">lorem ut, venenatis dapibus mi</li>
            </ul>
            <a href="program.html" className="btn">
              order now
            </a>
          </div>
        </div>
        <div className="col-md-4 club-card-col">
          <div
            className="club-card-item"
            style={{ backgroundImage: "url(assets/img/bg-price-3.svg)" }}
          >
            <div className="price-cover">
              <div className="price">120</div>
              <div className="date">
                <span>99</span>1 year
              </div>
            </div>
            <ul className="list">
              <li>Maecenas consequat</li>
              <li>ex id lobortis venenatis</li>
              <li>Mauris id erat enim</li>
              <li>Morbi dolor dolortin</li>
              <li>lorem ut, venenatis dapibus mi</li>
            </ul>
            <a href="program.html" className="btn">
              order now
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ============ S-CLUB-CARDS END ============ */}
  {/* ============== S-TESTIMONIALS ============== */}
  <section
    className="s-testimonials"
    style={{ backgroundImage: "url(assets/img/bg-testimonials.jpg)" }}
  >
    <div className="mask" />
    <img
      className="testimonials-effect"
      src="assets/img/bg-testimonials.svg"
      alt="effect"
    />
    <div className="container">
      <div className="testimonials-slider">
        <div className="testimonial-slide">
          <p>
            “Phasellus vestibulum nec dolor quis varius. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Phasellus gravida magna sit amet
            euismod lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit”
          </p>
          <img src="assets/img/testimonials-1.png" alt="img" />
          <h3 className="name">Anna Piters</h3>
          <div className="prof">our client</div>
        </div>
        <div className="testimonial-slide">
          <p>
            “Phasellus vestibulum nec dolor quis varius. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Phasellus gravida magna sit amet
            euismod lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit”
          </p>
          <img src="assets/img/testimonials-2.png" alt="img" />
          <h3 className="name">Mark Klark</h3>
          <div className="prof">our client</div>
        </div>
        <div className="testimonial-slide">
          <p>
            “Phasellus vestibulum nec dolor quis varius. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Phasellus gravida magna sit amet
            euismod lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit”
          </p>
          <img src="assets/img/testimonials-3.png" alt="img" />
          <h3 className="name">Kat Smith</h3>
          <div className="prof">our client</div>
        </div>
      </div>
    </div>
  </section>
  {/* ============ S-TESTIMONIALS END ============ */}
  {/*================ RELATED POSTS ================*/}
  <section className="s-related-posts home-related-posts">
    <div className="container">
      <h2 className="title-decor">
        Latest <span>News</span>
      </h2>
      <p className="slogan">
        Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi
        dolor dolor, auctor tincidunt lorem ut, venenatis dapibus miq.
      </p>
      <div className="row">
        <div className="col-md-6 related-post-col">
          <div className="post-item-cover">
            <div className="post-header">
              <div className="related-post-categ">fitness</div>
              <div className="post-thumbnail">
                <a href="single-blog.html">
                  <img
                    className="rx-lazy"
                    src="assets/img/placeholder-all.png"
                    data-src="assets/img/blog-4.jpg"
                    alt="img"
                  />
                </a>
              </div>
            </div>
            <div className="post-content">
              <div className="meta">
                <span className="post-date">
                  <i className="fa fa-calendar" aria-hidden="true" />
                  October 31, 2019
                </span>
              </div>
              <h3 className="title">
                <a href="single-blog.html">Sed ut perspiciatis unde omnis</a>
              </h3>
              <div className="text">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem...
                </p>
              </div>
            </div>
            <div className="post-footer">
              <div className="meta">
                <span className="post-by">
                  <i className="fa fa-user" aria-hidden="true" />
                  <a href="#">By Rovadex</a>
                </span>
                <span className="post-comment">
                  <i className="fa fa-comment" aria-hidden="true" />
                  <a href="#">2 Comments(s)</a>
                </span>
              </div>
              <a href="single-blog.html" className="btn">
                <span>read more</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 related-post-col">
          <div className="post-item-cover">
            <div className="post-header">
              <div className="related-post-categ">lifting</div>
              <div className="post-thumbnail">
                <a href="single-blog.html">
                  <img
                    className="rx-lazy"
                    src="assets/img/placeholder-all.png"
                    data-src="assets/img/blog-1.jpg"
                    alt="img"
                  />
                </a>
              </div>
            </div>
            <div className="post-content">
              <div className="meta">
                <span className="post-date">
                  <i className="fa fa-calendar" aria-hidden="true" />
                  October 31, 2019
                </span>
              </div>
              <h3 className="title">
                <a href="single-blog.html">Sed ut perspiciatis unde omnis</a>
              </h3>
              <div className="text">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem...
                </p>
              </div>
            </div>
            <div className="post-footer">
              <div className="meta">
                <span className="post-by">
                  <i className="fa fa-user" aria-hidden="true" />
                  <a href="#">By Rovadex</a>
                </span>
                <span className="post-comment">
                  <i className="fa fa-comment" aria-hidden="true" />
                  <a href="#">2 Comments(s)</a>
                </span>
              </div>
              <a href="single-blog.html" className="btn">
                <span>read more</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 related-post-col">
          <div className="post-item-cover">
            <div className="post-header">
              <div className="related-post-categ">fitness</div>
              <div className="post-thumbnail">
                <a href="single-blog.html">
                  <img
                    className="rx-lazy"
                    src="assets/img/placeholder-all.png"
                    data-src="assets/img/blog-3.jpg"
                    alt="img"
                  />
                </a>
              </div>
            </div>
            <div className="post-content">
              <div className="meta">
                <span className="post-date">
                  <i className="fa fa-calendar" aria-hidden="true" />
                  October 31, 2019
                </span>
              </div>
              <h3 className="title">
                <a href="single-blog.html">Sed ut perspiciatis unde omnis</a>
              </h3>
              <div className="text">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem...
                </p>
              </div>
            </div>
            <div className="post-footer">
              <div className="meta">
                <span className="post-by">
                  <i className="fa fa-user" aria-hidden="true" />
                  <a href="#">By Rovadex</a>
                </span>
                <span className="post-comment">
                  <i className="fa fa-comment" aria-hidden="true" />
                  <a href="#">2 Comments(s)</a>
                </span>
              </div>
              <a href="single-blog.html" className="btn">
                <span>read more</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 related-post-col">
          <div className="post-item-cover">
            <div className="post-header">
              <div className="related-post-categ">lifting</div>
              <div className="post-thumbnail">
                <a href="single-blog.html">
                  <img
                    className="rx-lazy"
                    src="assets/img/placeholder-all.png"
                    data-src="assets/img/blog-2.jpg"
                    alt="img"
                  />
                </a>
              </div>
            </div>
            <div className="post-content">
              <div className="meta">
                <span className="post-date">
                  <i className="fa fa-calendar" aria-hidden="true" />
                  October 31, 2019
                </span>
              </div>
              <h3 className="title">
                <a href="single-blog.html">Sed ut perspiciatis unde omnis</a>
              </h3>
              <div className="text">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem...
                </p>
              </div>
            </div>
            <div className="post-footer">
              <div className="meta">
                <span className="post-by">
                  <i className="fa fa-user" aria-hidden="true" />
                  <a href="#">By Rovadex</a>
                </span>
                <span className="post-comment">
                  <i className="fa fa-comment" aria-hidden="true" />
                  <a href="#">2 Comments(s)</a>
                </span>
              </div>
              <a href="single-blog.html" className="btn">
                <span>read more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*============== RELATED POSTS END ==============*/}
  {/* =========== S-TRAINING-SCHEDULE =========== */}
  <section
    className="s-training-schedule"
    style={{ backgroundImage: "url(assets/img/bg-table-1.svg)" }}
  >
    <div className="container">
      <h2 className="title-decor">
        Training <span>Schedule</span>
      </h2>
      <p className="slogan">
        Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi
        dolor dolor, auctor tincidunt lorem ut, venenatis dapibus miq.
      </p>
      <div className="training-schedule-cover">
        <h3 className="training-schedule-top">1-7 APRIL, 2019</h3>
        <div className="training-schedule-table">
          <table>
            <thead>
              <tr>
                <th />
                <th>monday</th>
                <th>tuesday</th>
                <th>wednesday</th>
                <th>thursday</th>
                <th>friday</th>
                <th>saturday</th>
                <th>sunday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9-00</td>
                <td>
                  <h4>body bulding</h4>
                  <div className="date">9-00 – 11:00</div>
                  <div className="name">Mark Klark</div>
                </td>
                <td />
                <td />
                <td>
                  <h4>boxing</h4>
                  <div className="date">9-00 – 11:00</div>
                  <div className="name">Mark Klark</div>
                </td>
                <td />
                <td />
                <td>
                  <h4>boxing</h4>
                  <div className="date">9-00 – 11:00</div>
                  <div className="name">Mark Klark</div>
                </td>
              </tr>
              <tr>
                <td>10-00</td>
                <td />
                <td>
                  <h4>yoga</h4>
                  <div className="date">10-00 – 12:00</div>
                  <div className="name">Mark Klark</div>
                </td>
                <td />
                <td />
                <td>
                  <h4>body bulding</h4>
                  <div className="date">10-00 – 12:00</div>
                  <div className="name">Mark Klark</div>
                </td>
                <td />
                <td />
              </tr>
              <tr>
                <td>11-00</td>
                <td />
                <td />
                <td />
                <td>
                  <h4>body bulding</h4>
                  <div className="date">11-00 – 12:00</div>
                  <div className="name">Mark Klark</div>
                </td>
                <td />
                <td>
                  <h4>body bulding</h4>
                  <div className="date">11-00 – 12:00</div>
                  <div className="name">Mark Klark</div>
                </td>
                <td />
              </tr>
              <tr>
                <td>12-00</td>
                <td>
                  <h4>body bulding</h4>
                  <div className="date">12-00 – 13:00</div>
                  <div className="name">Mark Klark</div>
                </td>
                <td />
                <td>
                  <h4>karate</h4>
                  <div className="date">12-00 – 13:00</div>
                  <div className="name">Mark Klark</div>
                </td>
                <td />
                <td />
                <td />
                <td>
                  <h4>karate</h4>
                  <div className="date">12-00 – 13:00</div>
                  <div className="name">Mark Klark</div>
                </td>
              </tr>
              <tr>
                <td>13-00</td>
                <td />
                <td>
                  <h4>body bulding</h4>
                  <div className="date">13-00 – 14:00</div>
                  <div className="name">Mark Klark</div>
                </td>
                <td />
                <td />
                <td>
                  <h4>body bulding</h4>
                  <div className="date">13-00 – 14:00</div>
                  <div className="name">Mark Klark</div>
                </td>
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
  {/* ========= S-TRAINING-SCHEDULE END ========= */}
  {/* ================== FOOTER ================== */}
  <section
    className="s-counter"
    style={{ backgroundImage: "url(assets/img/bg-2.jpg)" }}
  >
    <div className="mask" />
    <div className="container">
      <h2 className="title-decor">
        CrossFit <span>Competitions</span>
      </h2>
      <p className="slogan">
        Maecenas consequat ex id lobortis venenatis. Mauris id erat enim. Morbi
        dolor dolor, auctor tincidunt lorem ut, venenatis dapibus miq.
      </p>
      <div id="clockdiv">
        <div className="clock-item">
          <span className="days" />
          <div className="smalltext">Days</div>
        </div>
        <div className="clock-item">
          <span className="hours" />
          <div className="smalltext">Hours</div>
        </div>
        <div className="clock-item">
          <span className="minutes" />
          <div className="smalltext">Minutes</div>
        </div>
        <div className="clock-item">
          <span className="seconds" />
          <div className="smalltext">Seconds</div>
        </div>
      </div>
      <form className="subscribe-form">
        <input
          className="inp-form"
          type="email"
          name="subscribe"
          placeholder="Your E-mail"
        />
        <button type="submit" className="btn">
          Subscribe
        </button>
      </form>
    </div>
  </section>
  {/* ================== FOOTER ================== */}
  {/* ================== FOOTER ================== */}
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-lg-3 footer-item-logo">
          <a href="index.html" className="logo-footer">
            <img src="assets/img/footer-logo2.svg" alt="logo" />
          </a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          <ul className="social-list">
            <li>
              <a target="_blank" href="https://www.facebook.com/rovadex">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/RovadexStudio">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.youtube.com">
                <i className="fa fa-youtube" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/rovadex">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 footer-item footer-item-list">
          <h3>Links</h3>
          <ul className="footer-link">
            <li>
              <a href="#">Sed ut perspiciatis unde</a>
            </li>
            <li>
              <a href="#">Omnis iste natus error sit</a>
            </li>
            <li>
              <a href="#">Voluptatem accusantium</a>
            </li>
            <li>
              <a href="#">Doloremque laudantium</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 footer-item">
          <h3>Contact us</h3>
          <ul className="footer-cont">
            <li>
              <i className="fa fa-phone" aria-hidden="true" />
              <a href="tel:18004886040">1-800-488-6040</a>
            </li>
            <li>
              <i className="fa fa-envelope" aria-hidden="true" />
              <a href="mailto:crossFit@gmail.com">CrossFit@gmail.com</a>
            </li>
            <li>
              <i className="fa fa-map-marker" aria-hidden="true" />
              <a href="contacts.html">London,Street 225r.21</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 footer-item">
          <h3>Blog</h3>
          <ul className="footer-blog">
            <li>
              <a href="blog.html" className="img-cover">
                <img src="assets/img/footer-icon-1.jpg" alt="img" />
              </a>
              <div className="footer-blog-info">
                <div className="name">
                  <a href="blog.html">Sed ut perspiciatis</a>
                </div>
                <p>Omnis iste natus error sit voluptatem…</p>
              </div>
            </li>
            <li>
              <a href="blog.html" className="img-cover">
                <img src="assets/img/footer-icon-2.jpg" alt="img" />
              </a>
              <div className="footer-blog-info">
                <div className="name">
                  <a href="blog.html">Sed ut perspiciatis</a>
                </div>
                <p>Omnis iste natus error sit voluptatem…</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
          <a href="#" target="_blank">
            Rovadex
          </a>{" "}
          © 2019. Fitmax. All Rights Reserved.
        </div>
        <ul className="footer-menu">
          <li className="active">
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="services.html">Services</a>
          </li>
          <li>
            <a href="blog.html">News</a>
          </li>
          <li>
            <a href="contacts.html">Contacts</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  {/* ================ FOOTER END ================ */}
  {/*=================== TO TOP ===================*/}
  <a className="to-top" href="#home">
    <i className="fa fa-chevron-up" aria-hidden="true" />
  </a>
</>
  )
}
