import React, { useEffect, useRef, useState } from "react";
import Footer from "../../../component/Footer";
import Navbar from "../../../component/Navbar";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import gambar from "../../../asset/img/bawaslu(berita).jpeg";
import axios from "axios";
import { API_DUMMY } from "../../../utils/base_URL";
import PutusanPelanggaran from "./tabs/SertaMerta/PutusanPelanggaran";
import ProfileBawaslu from "./tabs/Berkala/kelembagaan/ProfileBawaslu";
import LayananPublikKhusus from "./tabs/Berkala/kelembagaan/LayananPublikKhusus";
import ProgramKerja from "./tabs/Berkala/kelembagaan/ProgramKerja";
import RingkasanKegiatan from "./tabs/Berkala/kelembagaan/RingkasanKegiatan";
import SumberDanAnggaranKegiatan from "./tabs/Berkala/kelembagaan/SumberDanAnggaranKegiatan";
import Keuanganbawaslu from "./tabs/Berkala/kelembagaan/Keuanganbawaslu";
import LayananInformasiPublik from "./tabs/Berkala/kelembagaan/LayananInformasiPublik";
import Sosialisasi from "./tabs/Berkala/kelembagaan/Sosialisasi";
import SDM from "./tabs/Berkala/kelembagaan/SDM";
import LaporanBarangNegara from "./tabs/Berkala/kelembagaan/LaporanBarangNegara";
import NaskahPerjanjianHibahDaerah from "./tabs/Berkala/kepemiluan/NaskahPerjanjianHibahDaerah";
import PiagamPenghargaaan from "./tabs/Berkala/kelembagaan/PiagamPenghargaaan";
import LaporanRealisasi from "./tabs/Berkala/kelembagaan/LaporanRealisasi";
import PerjanjianKinerja from "./tabs/Berkala/kelembagaan/PerjanjianKinerja";
import RencanaKerjaAnggaran from "./tabs/Berkala/kelembagaan/RencanaKerjaAnggaran";
import Tapkin from "./tabs/Berkala/kelembagaan/Tapkin";
import PengadaanBarang from "./tabs/Berkala/kelembagaan/PengadaanBarang";

function InformasiBerkalaKelembagaan() {
  return (
    <div>
      <Navbar />

      {/* <!-- project area start --> */}
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="project-area pd-top-115 pd-bottom-90"
      >
        <div
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp') `,
          }}
        >
          <section>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div
                    className="nav flex-column nav-pills nav-pills-custom"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link mb-3 p-3 shadow active"
                      id="v-pills-home-tab"
                      data-toggle="pill"
                      href="#v-pills-home"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        Profile Bawaslu
                      </span>
                    </a>

                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-profile-tab"
                      data-toggle="pill"
                      href="#v-pills-profile"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        Layanan Publik Khusus
                      </span>
                    </a>

                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-messages-tab"
                      data-toggle="pill"
                      href="#v-pills-messages"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        Program Kerja
                      </span>
                    </a>

                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        Ringkasan Kegiatan
                      </span>
                    </a>

                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        Ringkasan & Anggaran Kegiatan
                      </span>
                    </a>

                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        Keuangan Bawaslu
                      </span>
                    </a>

                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        Layanan Informasi Publik
                      </span>
                    </a>
                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        Sosialisasi
                      </span>
                    </a>
                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        SDM, Organisasi, & Adminsitrasi
                      </span>
                    </a>
                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        Laporan Barang Milik Negara
                      </span>
                    </a>
                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        Perjanjian Kinerja
                      </span>
                    </a>
                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        TAPKIN
                      </span>
                    </a>
                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        Pengadaan Barang & Jasa
                      </span>
                    </a>
                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        Laporan Realisasi Anggaran
                      </span>
                    </a>
                    <a
                      className="nav-link mb-3 p-3 shadow"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <span className="font-weight-bold small text-uppercase">
                        Piagam Penghargaan
                      </span>
                    </a>
                  </div>
                </div>

                <div className="col-md-9">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div className="card-header bg-primary text-light">
                      <div style={{ display: "flex" }}>
                        <div className="px-3">
                          <h4>Informasi Berkala Kelembagaan</h4>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white show active p-3"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <ProfileBawaslu />
                    </div>

                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <LayananPublikKhusus />
                    </div>

                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      <ProgramKerja />
                    </div>

                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <RingkasanKegiatan />
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <SumberDanAnggaranKegiatan />
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <Keuanganbawaslu />
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <LayananInformasiPublik />
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <Sosialisasi />
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <SDM />
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <LaporanBarangNegara />
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <NaskahPerjanjianHibahDaerah />
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <PiagamPenghargaaan />
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <LaporanRealisasi />
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <PerjanjianKinerja />
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <RingkasanKegiatan />
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <RencanaKerjaAnggaran />
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <Tapkin />
                    </div>
                    <div
                      className="tab-pane fade shadow rounded bg-white p-5"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <PengadaanBarang />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default InformasiBerkalaKelembagaan;
