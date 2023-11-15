import React from "react";
import Header from "../../../../../component/Header";
import Sidebar from "../../../../../component/Sidebar";
import Footer from "../../../../../component/Footer";
import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";
import { API_DUMMY } from "../../../../../utils/base_URL";
import axios from "axios";
import Swal from "sweetalert2";

function DetailPermohonanInformasi() {
  const [nama, setNama] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [pendidikan, setPendidikan] = useState("");
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");
  const [noHp, setNoHp] = useState("");
  const [tujuanInformasi, setTujuanInformasi] = useState("");
  const [rincianInformasi, setRincianInformasi] = useState("");
  const [diTunjukanKepada, setDiTunjukanKepada] = useState("");
  const [caraMemperolahInformasi, setCaraMemperolehInformasi] = useState("");
  const [caraCaraMendapatkanInformasi, setCaraMendapatkanInformasi] =
    useState("");
  const [file, setFile] = useState("");
  const param = useParams();

  useEffect(() => {
    axios
      .get(`${API_DUMMY}/bawaslu/api/permohonan-informasi/get/` + param.id, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
      })
      .then((res) => {
        const list_data = res.data.data;
        setNama(list_data.nama);
        setEmail(list_data.email);
        setPendidikan(list_data.pendidikan);
        setPekerjaan(list_data.pekerjaan);
        setNoHp(list_data.noHp);
        setAlamat(list_data.alamat);
        setDiTunjukanKepada(list_data.ditujukanKepada);
        setRincianInformasi(list_data.rincianInformasi);
        setTujuanInformasi(list_data.tujuanInformasi);
        setNoHp(list_data.noHp);
        setFile(list_data.tandaPengenal);
        console.log(res);
      })
      .catch((error) => {
        alert("Terjadi Kesalahan " + error);
      });
  }, [param.id]);


  return (
    <div>
      <Header />
      <div className="app-main">
        <Sidebar />
        <div
          className="container mt-3 mb-3 overflow-y-scroll"
          style={{ height: "100vh" }}>
          <div className="d-lg-flex gap-5">
            <div className="d-block">
              <form className="card card-body shadow p-2 w-100">
                {/* {file != null ? (
                    <img
                    className="rounded-circle"
                    src={file}
                  />  
                ):( */}
                  <img
                  className="rounded-circle w-75 mr-auto ml-auto"
                  src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
                />   
                {/* )} */}
                <p className="text-center">Fatiya salsabila</p>
              </form>
              <form className="card card-body shadow p-2 mt-3">
                <div class="mb-3">
                  <label class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    disabled
                    value={email}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Alamat</label>
                  <input
                    type="text"
                    class="form-control"
                    disabled
                    value={alamat}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">No Handphone</label>
                  <input
                    type="number"
                    class="form-control"
                    disabled
                    value={noHp}
                  />
                </div>
              </form>
            </div>
            <form className="card card-body p-2" style={{ width: "100%" }}>
              <div class="mb-3">
                <label class="form-label">Pekerjaan</label>
                <input
                  type="text"
                  class="form-control"
                  disabled
                  value={pekerjaan}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Rincian Informasi</label>
                <input
                  type="text"
                  class="form-control"
                  disabled
                  value={rincianInformasi}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Tujuan Informasi</label>
                <input
                  type="text"
                  class="form-control"
                  disabled
                  value={tujuanInformasi}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Cara Memperoleh Informasi</label>
                <input
                  type="text"
                  class="form-control"
                  disabled
                  value={caraMemperolahInformasi}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Cara Mendapatkan Informasi</label>
                <input
                  type="text"
                  class="form-control"
                  disabled
                  value={caraCaraMendapatkanInformasi}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Di Tunjukan Kepada</label>
                <input
                  type="text"
                  class="form-control"
                  disabled
                  value={diTunjukanKepada}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailPermohonanInformasi;
