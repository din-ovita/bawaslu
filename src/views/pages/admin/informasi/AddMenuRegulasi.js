import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import Footer from "../../../../component/Footer";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";
import Swal from "sweetalert2";
import { API_DUMMY } from "../../../../utils/base_URL";
import axios from "axios";

function AddMenuRegulasi() {

  const [idJenisRegulasi, setIdJenisRegulasi] = useState();
  const [menuRegulasi, setMenuRegulasi] = useState("");
   const history = useHistory();
  const [show, setShow] = useState(false);

  const addData = async (e) => {
    e.preventDefault();
    e.persist();

    const formData = new FormData();
    formData.append("idJenisRegulasi", idJenisRegulasi);
    formData.append("menuRegulasi", menuRegulasi);
  
    try {
      await axios.post(`${API_DUMMY}/bawaslu/api/menu-regulasi/add`, {
        menuRegulasi: menuRegulasi,
        idJenisRegulasi: idJenisRegulasi,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // //console.log(unique_id);
      setShow(false);
      Swal.fire({
        icon: "success",
        title: "Data Berhasil DiTambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
      // //console.log(data);
      history.push("/index ");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };
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
                    Id Jenis Regulas
                    </label>
                    <input
                      value={idJenisRegulasi}
                      onChange={(e) => setIdJenisRegulasi(e.target.value)}
                      type="number"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                
                  <div class="mb-3 col-6">
                    <label for="exampleInputPassword1" class="form-label">
                  Menu Regulasi
                    </label>
                    <input
                      value={menuRegulasi}
                      onChange={(e) => setMenuRegulasi(e.target.value)}
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                </div>
                <button type="submit" class="btn-danger mt-3 mr-3">
                  <a
                    href=""
                    style={{ color: "white", textDecoration: "none" }}>
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

export default AddMenuRegulasi;
