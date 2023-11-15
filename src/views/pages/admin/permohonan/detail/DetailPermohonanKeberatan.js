import React from "react";
import Sidebar from "../../../../../component/Sidebar";
import Header from "../../../../../component/Header";
import Footer from "../../../../../component/Footer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { API_DUMMY } from "../../../../../utils/base_URL";
import { useParams } from "react-router-dom/cjs/react-router-dom";

function DetailPermohonanKeberatan() {
    const [list, setList] = useState([]);
    const [showEdit, setShowEdit] = useState(false);
    const [id, setId] = useState(0);
    const [email, setEmail] = useState("");
    const [nama, setNama] = useState("");
    const [alamat, setAlamat] = useState("");
    const [noTelp, setNoTelp] = useState("");
    const [nomorIdentitas, setNomorIdentitas] = useState("");
    const [jenisIdentitas, setJenisIdentitas] = useState("");
    const [kasusPosisi, setKasusPosisi] = useState("");
    const [tujuanPenggunaanInformasi, setTujuanPenggunaanInformasi] =
      useState("");
    const [alasan, setAlasan] = useState("");
    const [tandaPengenal, setTandaPengenal] = useState("");
    const param = useParams();

    useEffect(() =>{
         axios
          .get(`${API_DUMMY}/bawaslu/api/permohonan-keberatan/get/` + param.id, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          })
          .then((res) => {
            setId(res.data.data.id);
            setEmail(res.data.data.email);
            setNama(res.data.data.nama);
            setAlamat(res.data.data.alamat);
            setNoTelp(res.data.data.noTelp);
            setNomorIdentitas(res.data.data.nomorIndentitas);
            setJenisIdentitas(res.data.data.jenisIdentitas);
            setKasusPosisi(res.data.data.kasusPosisi);
            setTujuanPenggunaanInformasi(res.data.data.tujuanPenggunaanInformasi);
            setAlasan(res.data.data.alasan);
            setTandaPengenal(res.data.data.tandaPengenal);

            console.log(res.data.data);
          })
          .catch((error) => {
            alert("Terjadi Keslahan" + error);
          });
        }, param.id)
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
                  <img
                  className="rounded-circle w-75 mr-auto ml-auto"
                  src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
                />
                <p className="text-center">{nama}</p>
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
                    value={noTelp}
                  />
                </div>
              </form>
            </div>
            <form className="card card-body p-2" style={{ width: "100%" }}>
              <div class="mb-3">
                <label class="form-label">Nomor Identitas</label>
                <input
                  type="text"
                  class="form-control"
                  disabled
                  value={nomorIdentitas}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Tujuan Pengguna Informasi</label>
                <input
                  type="text"
                  class="form-control"
                  disabled
                  value={tujuanPenggunaanInformasi}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Jenis Indentitas</label>
                <input
                  type="text"
                  class="form-control"
                  disabled
                  value={jenisIdentitas}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Kasus Posisi</label>
                <input
                  type="text"
                  class="form-control"
                  disabled
                  value={kasusPosisi}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Alasan</label>
                <input
                  type="text"
                  class="form-control"
                  disabled
                  value={alasan}
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

export default DetailPermohonanKeberatan;
