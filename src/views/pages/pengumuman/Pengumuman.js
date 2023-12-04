import React, { useEffect, useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import axios from "axios";
import { API_DUMMY } from "../../../utils/base_URL";
import { Pagination } from "@mui/material";

function Pengumuman() {
  const [pengumuman, setPengumuman] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState({
    totalPages: 1,
    totalElements: 0,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const getAll = async () => {
    await axios
      .get(`${API_DUMMY}/bawaslu/api/pengumuman?page=0&size=10&sortBy=id&sortOrder=asc`)
      .then((res) => {
        setPengumuman(res.data.data.content);
        setPaginationInfo({
          totalPages: res.data.data.totalPages,
          totalElements: res.data.data.totalElements,
        });
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  useEffect(() => {
    //mengambil data, memperbarui DOM secara langsung,
    getAll(currentPage);
  }, [currentPage, rowsPerPage]);

  const filteredList = pengumuman.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredList.length / rowsPerPage);
  return (
    <div>
      <Navbar />
      {/* <!-- page title start --> */}

      {/* <!-- page title end --> */}
      {/* <!-- blog area start --> */}
      <div
        className="blog-area pd-top-115 pd-bottom-60"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="section-title text-center">
                <h5 className="sub-title double-line">Bawaslu Boyolali</h5>
                <h2 className="title">Pengumuman</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {filteredList.map((isi) => {
              return (
                <div className="col-lg-4 col-md-6">
                  <div className="single-blog-inner style-2" style={{maxHeight:"800px", minHeight:"300px"}}>
                    <div className="thumb">
                      <img style={{maxHeight:"400px", minHeight:"100px"}} src={isi.image} alt="img" />
                    </div>
                    <div className="details">
                        <h4 className="titleee" style={{cursor:"pointer"}}>
                        <a style={{color:"black", textDecoration:"none"}} href={`/pengumuman/${isi.judulPengumuman}/${isi.id}`}>{isi.judulPengumuman}</a>
                      </h4>
                      <ul className="blog-meta">
                        <li>
                          <i className="far fa-user"></i> {isi.author}
                        </li>
                        <li>
                          <i className="far fa-calendar-alt"></i> {isi.createdDate}
                        </li>
                      </ul>
                      <p className="isiPengumuman">{isi.isiPengumuman}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
      {/* <!-- blog area end --> */}
      <Footer />
    </div>
  );
}

export default Pengumuman;
