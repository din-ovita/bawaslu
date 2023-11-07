import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./views/pages/Home";
import SertaMerta from "./views/pages/informasi/SertaMerta";
import "./css/style.css";
import "./css/owl.css";

import PermintaanInformasi from "./views/prosedur/PermintaanInformasi";
import PermohonanKeberatan from "./views/prosedur/PermohonanKeberatan";
import WaktuLayanan from "./views/prosedur/WaktuLayanan";
import Kanal from "./views/pages/informasi/Kanal";
import Regulasi from "./views/pages/informasi/Regulasi";
import Profil from "./views/pages/Profil";
import BiayaLayanan from "./views/prosedur/BiayaLayanan";
import Dikecualikan from "./views/pages/informasi/Dikecualikan";
import PenyelesaianSengketa from "./views/prosedur/PenyelesaianSengketa";
import Pengumuman from "./views/pages/pengumuman/Pengumuman";
import eLibrary from "./views/pages/eLibrary";
import CalonAnggotaBawaslu from "./views/pages/pengumuman/CalonAnggotaBawaslu";
import Berita from "./views/pages/Berita";
import Login from "./views/pages/auth/Login";
import Register from "./views/pages/auth/Register";
// import PermohonanInformasi from "./views/pages/FormPermohonanInformasi";
import Maklumat from "./views/pages/Maklumat";
import Dip from "./views/pages/informasi/Dip";

// import Maklumat from "./views/pages/Maklumat";
// import Dikecualikan from "./views/pages/informasi/Dikecualikan";
// import Kanal from "./views/pages/informasi/Kanal";
import PermohonanInformasi from "./views/pages/FormPermohonanInformasi";

import OwlCarousel from "react-owl-carousel2";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/" component={Home} exact />
          <Route path="/profil" component={Profil} exact />
          <Route path="/serta-merta" component={SertaMerta} exact />
          <Route path="/permintaan" component={PermintaanInformasi} exact />
          <Route path="/permohonan" component={PermohonanKeberatan} exact />
          <Route path="/waktu" component={WaktuLayanan} exact />
          <Route path="/biaya" component={BiayaLayanan} exact />
          <Route path="/penyelesaian" component={PenyelesaianSengketa} exact />
          <Route path="/pengumuman" component={Pengumuman} exact />
          <Route path="/library" component={eLibrary} exact />
          <Route path="/kanal" component={Kanal} exact />
          <Route path="/regulasi" component={Regulasi} exact />
          <Route path="/dikecualikan" component={Dikecualikan} exact />
          {/* <Route path="/dikecualikan" component={Dikecualikan} exact /> */}
          {/* <Route path="/kanal" component={Kanal} exact /> */}
          <Route
            path="/pengumuman-calon-anggota-bawaslu-kabupaten-kota-terpilih-provinsi-jawa-tengah"
            component={CalonAnggotaBawaslu}
            exact
          />
          <Route path="/berita" component={Berita} exact />
          <Route path="/maklumat" component={Maklumat} exact />
          <Route path="/dip" component={Dip} exact />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
