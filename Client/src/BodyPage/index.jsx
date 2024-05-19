import "./index.scss";

const BodyPage = () => {
  return (
    <div>
      <section id="bodybirpage">
        <div className="bodybirpage">
          <div className="bodyleft">
            <img
              src="https://preview.colorlib.com/theme/shop/img/header-img.png"
              alt=""
            />
          </div>

          <div className="bodyright">
            <div className="qarisiqh3">
              <h3 className="birh3">Flat</h3> <h3 className="ikih3">75%Off</h3>
            </div>
            <h1>IT’S HAPPENING</h1>
            <h1>THIS SEASON!</h1>
            <button className="btnnow">PURCHASE NOW</button>
          </div>
        </div>
      </section>

      {/* .....................BODYIKINCIPAGE............. */}

      <section id="bodyikipage">
        <div className="container">
          <div className="bodyikipage">
            <div className="Bodyikitop">
              <h1>Shop for Different Categories</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>

            <div className="bodyikibottom">
              <div className="imgs">
                <img className="img1"
                  src="https://preview.colorlib.com/theme/shop/img/c1.jpg"
                  alt=""
                />
                <img className="img1"
                  src="https://preview.colorlib.com/theme/shop/img/c2.jpg"
                  alt=""
                />
                <img className="img3"
                  src="https://preview.colorlib.com/theme/shop/img/c4.jpg"
                  alt=""
                />
                <img className="img4" src="https://preview.colorlib.com/theme/shop/img/c3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BodyPage;
