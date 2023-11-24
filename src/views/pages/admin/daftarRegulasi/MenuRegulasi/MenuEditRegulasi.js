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

function MenuEditRegulasi() {
  const [idJenisRegulasi, setIdJenisRegulasi] = useState();
  const [menuRegulasi, setMenuRegulasi] = useState("");
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [jenisRegulasi, setJenisRegulasi] = useState([]);
  const param = useParams();

  const getJenisRegulasi = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/jenis-regulasi/all`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setJenisRegulasi(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    axios
      .get(`${API_DUMMY}/bawaslu/api/menu-regulasi/get/` + param.id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((ress) => {
        const response = ress.data.data;
        setMenuRegulasi(response.menuRegulasi);
        setIdJenisRegulasi(response.jenisRegulasiId);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [param.id]);

  const update = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `${API_DUMMY}/bawaslu/api/menu-regulasi/put/${param.id}?idJenisRegulasi=${idJenisRegulasi}&menuRegulasi=${menuRegulasi}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
      );

      Swal.fire({
        icon: "success",
        title: "Berhasil Mengedit Data Pengumuman",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJenisRegulasi();
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
              <form onSubmit={update}>
                <div className="row">
                  <div class="mb-3 col-6">
                    <label for="exampleInputPassword1" class="form-label">
                      Jenis Regulasi
                    </label>
                    <select
                      class="form-select form-select-sm"
                      aria-label="Small select example"
                      onChange={(e) => setIdJenisRegulasi(e.target.value)}>
                      <option selected>PIlih Jenis Regulasi</option>
                      {jenisRegulasi.map((down) => {
                        return (
                          <option value={down.id}>{down.jenisRegulasi}</option>
                        );
                      })}
                    </select>
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

export default MenuEditRegulasi;
