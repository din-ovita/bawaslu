import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../../../../component/Footer";
import Header from "../../../../../component/Header";
import Sidebar from "../../../../../component/Sidebar";
import Swal from "sweetalert2";
import { API_DUMMY } from "../../../../../utils/base_URL";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function AddRegulasi() {
  const [idMenuRegulasi, setIdMenuRegulasi] = useState(0);
  const [dokumen, setDokumen] = useState("");
  const [pdfDokumen, setPdfDokumen] = useState("");
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [regulasi, setRegulasi] = useState([]);
  const param = useParams();


  const getByMenuRegulasi = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/get-by-menu-regulasi?id-menu-regulasi=` + param.id,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setRegulasi(response.data.data);
    //   console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  }


  const addData = async (e) => {
    e.preventDefault();
    e.persist();

    const formData = new FormData();
    formData.append("idMenuRegulasi", idMenuRegulasi);
    formData.append("dokumen", dokumen);
    formData.append("upload", pdfDokumen);

    try {
      await axios.post(
        `${API_DUMMY}/bawaslu/api/regulasi/add`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // //console.log(unique_id);
      setShow(false);
      Swal.fire({
        icon: "success",
        title: "Data Berhasil DiTambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
      // //console.log(data);
      history.push("/admin/ ");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getByMenuRegulasi();
  }, []);
  return (
    <div>
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="fs-4">Form Tambah Data</h1>
              <hr />
              <form onSubmit={addData}>
                <div className="row">
                  <div class="mb-3 col-6">
                    <label for="exampleInputPassword1" class="form-label">
                      Jenis Regulas
                    </label>
                    <select
                      class="form-select form-select-sm"
                      aria-label="Small select example"
                      onChange={(e) => setIdMenuRegulasi(e.target.value)}>
                      <option selected>PIlih Jenis Regulasi</option>
                      {regulasi.map((down) => {
                        return (
                          <option value={down.id}>{down.MenuRegulasi}</option>
                        );
                      })}
                    </select>
                  </div>

                  <div class="mb-3 col-6">
                    <label for="exampleInputPassword1" class="form-label">
                      Dokumen
                    </label>
                    <input
                      value={dokumen}
                      onChange={(e) => setDokumen(e.target.value)}
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="mb-3 col-6">
                    <label for="exampleInputPassword1" class="form-label">
                      Gambar Dokumen
                    </label>
                    <input
                      onChange={(e) => setPdfDokumen(e.target.files[0])}
                      type="file"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                </div>
                <button type="submit" class="btn-danger mt-3 mr-3">
                  <a href="" style={{ color: "white", textDecoration: "none" }}>
                    {" "}
                    Batal
                  </a>
                </button>
                <button type="submit" class="btn-primary mt-3">
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddRegulasi;