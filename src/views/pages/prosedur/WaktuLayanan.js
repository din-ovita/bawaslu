import React from "react";
import waktu from "../../../aset/Time management-rafiki.png";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";

function WaktuLayanan() {
  return (
    <div>
      <Navbar />
      <div
        className="why-choose pd-top-100 pd-bottom-100 service-area bg-relative pd-top-60 pd-bottom-90"
        style={{
          backgroundImage: `url('https://www.imageshine.in/uploads/gallery/Free-vector-hand-painted-watercolor-abstract-watercolor-background.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <img
          className="shape-left-top top_image_bounce"
          src="https://www.solverwp.com/demo/html/itechie/assets/img/shape/3.webp"
          alt="img"
        />
        <img
          className="shape-right-top top_image_bounce"
          src="https://www.solverwp.com/demo/html/itechie/assets/img/shape/4.webp"
          alt="img"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 order-lg-last">
              <div className="thumb">
                <img
                  src={waktu}
                  alt="img"
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-first align-self-center">
              <div className="section-title px-lg-5 mb-0 text-center">
                <h5 id="text1-gabung" className="sub-title double-line">Bawaslu Boyolali</h5>
                <h2 id="text2-gabung" className="title">Waktu Pelayanan Informasi</h2>
                <div className="choose-wrap mt-4">
                  <div className="media single-choose-inner">
                    <div className="media-left">
                      <div className="icon">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                    </div>
                    <div className="media-body" style={{textAlign:"justify"}}>
                      <h4>Nomer Hp</h4>
                      <p>(0276)320420</p>
                    </div>
                  </div>
                  <div className="media single-choose-inner mb-3">
                    <div className="media-left">
                      <div className="icon">
                        <i className="fa-solid fa-clock"></i>
                      </div>
                    </div>
                    <div className="media-body" style={{textAlign:"justify"}}>
                      <h4>Jam Kerja</h4>
                      <p>Dari jam 08.00 - 15.00</p>
                    </div>
                  </div>
                  <div className="media single-choose-inner mb-3">
                    <div className="media-left">
                      <div className="icon">
                        <i className="fa-solid fa-calendar-days"></i>
                      </div>
                    </div>
                    <div className="media-body" style={{textAlign:"justify"}}>
                      <h4>Hari Kerja</h4>
                      <p>Senin s.d Jum'at</p>
                    </div>
                  </div>
                  <div className="media single-choose-inner mb-3">
                    <div className="media-left">
                      <div className="icon">
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                    </div>
                    <div className="media-body" style={{textAlign:"justify"}}>
                      <h4>Email</h4>
                      <p>panwaskabboyolali05@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WaktuLayanan;
