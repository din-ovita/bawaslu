import React from "react";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";
import Footer from "../../../../component/Footer";
import { useState } from "react";
import { API_DUMMY } from "../../../../utils/base_URL";
import axios from "axios";
import { useEffect } from "react";
import "../../../../../src/css/adminBerita.css";
import { Pagination } from "@mui/material";
import Swal from "sweetalert2";

function AdminPermohonanKeberatan() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState({
    totalPages: 1,
    totalElements: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");

  const getAll = async (page) => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/permohonan-keberatan?page=${
          page - 1
        }&size=${rowsPerPage}&sortBy=id&sortOrder=desc`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setList(response.data.data);
      setPaginationInfo({
        totalPages: response.data.data.totalPages,
        totalElements: response.data.data.totalElements,
      });
      console.log(response.data.data);
    } catch (error) {
      console.error("terjadi kesalahan", error);
    }
  };

  useEffect(() => {
    getAll(currentPage);
  }, [currentPage, rowsPerPage]);

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
    setCurrentPage(1);
  };

  const filteredList = list.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredList.length / rowsPerPage);

  const deleteData = async (id) => {
    Swal.fire({
      title: "Anda Ingin Menghapus Data ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
      cancelButtonText: "Cencel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${API_DUMMY}/bawaslu/api/permohonan-keberatan/` + id, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        Swal.fire({
          icon: "success",
          title: "Dihapus!",
          showConfirmButton: false,
        });
      }
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    });
  };

  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3 app-main__outer">
          <div class="ml-2 row g-3 align-items-center d-lg-none d-md-flex">
            <div class="col-auto">
              <label className="form-label mt-2">Rows per page:</label>
            </div>
            <div class="col-auto">
              <select
                className="form-select form-select-xl w-auto"
                onChange={handleRowsPerPageChange}
                value={rowsPerPage}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
            </div>
          </div>
          <input
            type="search"
            className="form-control widget-content-right w-100 mt-2 md-2 d-lg-none d-md-block"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div class="main-card mb-3 card">
            <div class="card-header">
              <p className="mt-3">Permohonan Keberatan</p>
              <div class="ml-2 row g-3 align-items-center d-lg-flex d-none d-md-none">
                <div class="col-auto">
                  <label className="form-label mt-2">Rows per page:</label>
                </div>
                <div class="col-auto">
                  <select
                    className="form-select form-select-sm"
                    onChange={handleRowsPerPageChange}
                    value={rowsPerPage}
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                  </select>
                </div>
              </div>
              <div className="d-flex ml-auto gap-3">
                <input
                  type="search"
                  className="form-control widget-content-right w-75 d-lg-block d-none d-md-none"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <div className="btn-actions-pane-right"></div>
              </div>
            </div>
            <div class="table-responsive overflow-x-scroll">
              <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col" className="text-left">
                      No
                    </th>
                    <th scope="col" className="text-left">
                      Nama
                    </th>
                    <th scope="col" className="text-left">
                      Email
                    </th>
                    <th scope="col" className="text-left">
                      Alamat
                    </th>
                    <th scope="col" className="text-left">
                      No Telp
                    </th>
                    <th scope="col" className="text-left">
                      Kasus Posisi
                    </th>
                    <th scope="col" className="text-left">
                      Nomor identitas
                    </th>
                    <th scope="col" className="text-left">
                      Jenis identitas
                    </th>
                    <th scope="col" className="text-left">
                      Alasan Pengajuan
                    </th>
                    <th scope="col" className="text-left">
                      Tujuan Penggunaan Informasi
                    </th>
                    <th scope="col" className="text-left">
                      Foto Identitas{" "}
                    </th>
                    <th scope="col" className="text-left">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredList.map((informasi, index) => {
                    return (
                      <tr key={index}>
                        <td data-label="No : " className="text-llef">
                          {index + 1}
                        </td>
                        <td data-label="email : " className="text-llef">
                          {informasi.namaPemohon}
                        </td>
                        <td data-label="nama : " className="text-llef">
                          {informasi.email}
                        </td>
                        <td data-label="nama : " className="text-llef">
                          {informasi.alamatPemohon}
                        </td>

                        <td data-label="alamat : " className="text-llef">
                          {informasi.noTlp}
                        </td>
                        <td data-label="no telp : " className="text-llef">
                          {informasi.kasusPosisi}
                        </td>

                        <td
                          data-label="Nomor identitas : "
                          className="text-llef"
                        >
                          {informasi.nomorIdentitasPemohon}
                        </td>
                        <td
                          data-label="jenis identitas : "
                          className="text-llef"
                        >
                          {informasi.jenisIdentitas}
                        </td>
                        <td
                          data-label="jenis identitas : "
                          className="text-llef"
                        >
                          {informasi.alasanPengajuanKeberatan}
                        </td>
                        <td
                          data-label="jenis identitas : "
                          className="text-llef"
                        >
                          {informasi.tujuanPenggunaanInformasi}
                        </td>
                        <td
                          data-label="jenis identitas : "
                          className="text-llef"
                        >
                          {informasi.fotoIdentitas}
                        </td>
                        <td data-label="Aksi : " class="text-center">
                          <button type="button" class="btn-warning mr-2 btn-sm">
                            <a
                              className="text-light"
                              href={
                                "/detail-permohonan-keberatan/" + informasi.id
                              }
                            >
                              <i class="fas fa-info-circle"></i>
                            </a>
                          </button>
                          <button
                            onClick={() => deleteData(informasi.id)}
                            type="button"
                            className="bg-danger btn-sm text-light"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="card-header mt-3 d-flex justify-content-center">
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={(event, value) => setCurrentPage(value)}
                  showFirstButton
                  showLastButton
                  color="primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPermohonanKeberatan;
