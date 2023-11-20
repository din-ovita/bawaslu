import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import info from "../../../aset/undraw_settings_tab_mgiw.svg";
import RI from "../../../aset/Bawaslu-RI-300x73-1.png";
import jateng from "../../../aset/bawaslu-jateng-300x73-1.png";
import dkpp from "../../../aset/dkpp-300x73-1.png";
import KPU from "../../../aset/KPU-300x73-1.png";
import MAHKAMAH from "../../../aset/MAHKAMAKONSTITUSI-300x73-1.png";
import "../../../css/OSDMdanDiklat.css"


const OSDMdanDiklat = () => {



    return (
        <div>
            <Navbar />
            <div style={{
                backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover"
            }}>
                <div className="pmbngks-img">
                    <a href="https://boyolali.bawaslu.go.id/dialog-interaktif-isu-pemilu-di-sosial-media/#">
                        <div className="wrapper1">
                            <div className="wrap-img1">
                                <div className="wrap-opacity1">
                                    <div className="wrap-text1">
                                        Bawaslu Boyolali Bersama UNS Lakukan Penandatanganan MoU<br /> {" "}
                                        <span>by </span> <span>BAWASLU BOYOLALI</span>
                                        <p className="span-txt" style={{ color: "white" }}>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                                </svg>
                                            </span> {"  "}
                                            18 juli 2023</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </a>
                    <a href="https://boyolali.bawaslu.go.id/pesta-demokrasi-semakin-dekat-bawaslu-diminta-menjadi-narasumber-sosialisasi-pemilu-2024/"> <div className="wrapper2">
                        <div className="wrap-img2">
                            <div className="wrap-opacity2">
                                <div className="wrap-text2">

                                </div>
                            </div>
                        </div>
                    </div></a>

                    <div className="wrapper3">
                        <div className="pmbngks-img2">
                            <a href=""> <div className="wrap-img3">
                                <div className="wrap-opacity3">
                                    <div className="wrap-text3">

                                    </div>
                                </div>
                            </div></a>

                            <div>
                                <a href="">
                                    <div className="wrap-img4">
                                        <div className="wrap-opacity3">
                                            <div className="wrap-text3">

                                            </div>
                                        </div>
                                    </div>
                                </a>

                            </div>

                        </div>

                    </div>



                </div>
                <div className="a-href">
                    <div >
                        <a href="/">Home  </a>
                    </div>
                    <div>
                        <a href="">Category  </a>
                    </div>
                    <div>
                        <a href="/OSDM-dan-Diklat">OSDM & Diklat  </a>
                    </div>
                </div>
                <div className="pmbngks-txt-logo">
                    <div className="txt-kehumasan">
                        <div>
                            <h1>OSDM & Diklat</h1>
                            <p>Artikel mengenai kegiatan divi Organisasi, Sumberdaya Manusia, & Diklat</p>

                            <div className="bg-gray">
                                <div className="txt-gray">
                                    No Content Available
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="logo">
                        <div className="h3">
                            <h3>
                                TAUTAN <span className="span" >LEMBAGA</span>
                            </h3>
                            <hr />
                            <div className="img-logo">
                                <div>
                                    <a href="">
                                        <img className="img-src" src={RI} />
                                    </a>
                                </div>
                                <div>
                                    {" "}
                                    <a href="">
                                        <img className="img-src" src={dkpp} />
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <img className="img-src" src={MAHKAMAH} />
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <img className="img-src" src={KPU} />
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <img className="img-src" src={jateng} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default OSDMdanDiklat;