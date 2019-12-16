import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';
import Popup from "reactjs-popup";

const About = () => (
  <div>
    <Row>
      <Jumbotron className="bg-primary text-white">
        <Row className="pt-md-2">
          <Col xs="4" md="3" className="pt-1 pt-md-0">
              <i className="" />
              {' '}
            <h5>👐 8 IPR Ditawarkan</h5>
          </Col>
          <Col xs="4" md="3" className="pt-1 pt-md-0">
              <i className="" />
              {' '}
            <h5>  ✎ 0 IPR Dimohon</h5>
          </Col>
          <Col xs="4" md="3" className="pt-1 pt-md-0">
              <i className="e" />
              {' '}
            <h5>😊 0 IPR Lulus</h5>
          </Col>
        </Row>
        <Row className="pt-md-2">
          <Col xs="4" md="3" className="pt-1 pt-md-0">
              <i className="" />
              {' '}
            <h5>😞 0 IPR Ditolak</h5>
          </Col>
          <Col xs="4" md="3" className="pt-2 pt-md-0">
              <i className="" />
              {' '}
          <h5>🔔 0 Notifikasi</h5>
          </Col>
        </Row>
      </Jumbotron>
    </Row>
    <Row className="pt-md-2">
    &nbsp;&nbsp;SENARAI PROGRAM LAYAK DIMOHON

    <hr />
        <p><a target="_blank" rel="noopener noreferrer" className="btn btn-warning">
            <h6>⌂ 8 IPR Ditawarkan</h6>
            </a></p>
    <hr />
    &nbsp;&nbsp;SENARAI PROGRAM DIMOHON
    <hr />
    <p></p>
        <p><a target="_blank" rel="noopener noreferrer" className="btn btn-warning">
            <h6>⌂ Tiada&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
            </a></p>
    <hr />
      <Col xs="12" md="4" className="pt- pt-md-0">
          <i className="" />
          {' '}
      </Col>
      <p><a target="_blank" rel="noopener noreferrer" className="btn btn-warning">
            <h6>⌂ Skim Peduli Sihat</h6>
          </a></p>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Popup trigger={<button>Semak</button>} position="middle right">
    {close => (
      <div>
      <p></p>
      <p className="lead">SYARAT PERMOHONAN</p>
      <p>✓ Warganegara Malaysia.</p>
      <p>✓ Lahir di Negeri Selangor atau telah mentap di Selangor melebihi 10 tahun.</p>
      <p>✓ Pendapatan bulanan isi rumah tidak melebehi RM2,000.00 (Keluarga) atau RM1,500.00 (Individu).</p>
      <p>✓ Telah berdaftar dengan eKasih dan Bantuan Sara Hidup.</p>
      <a target="_blank" rel="noopener noreferrer" href="https://www.pedulisihat.com/pendaftaran.html"><button>Mohon</button></a>
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
  <hr />
      <Col xs="12" md="4" className="pt-3 pt-md-0">
          <i className="" />
          {' '}
      </Col>
      <p><a target="_blank" rel="noopener noreferrer" className="btn btn-warning">
            <h6>⌂ Skim Rumah Selangorku</h6>
          </a></p>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Popup trigger={<button>Semak</button>} position="bottom right">
    {close => (
      <div>
      <p></p>
      <p className="lead">SYARAT PERMOHONAN</p>
      <p>✓ Warga Selangor yang layak boleh memohon untuk memiliki sebuah rumah sendiri bernilai tidak melebihi RM250,000 melalui Skim Rumah Selangorku.</p>
      <p>✓ Warganegara Malaysia berumur 18 tahun ke atas.</p>
      <p>✓ Pendapatan minimum bagi permohonan Rumah Selangorku Jenis B, C dan D ditetapkan RM3001.00 sebulan.</p>
      <p>✓ Pendapatan isi rumah (suami dan isteri):</p>
      <p>* Tidak melebihi RM3,000 sebulan dibenarkan permohonan Jenis A.</p>
      <p>* Pendapatan isi rumah diantara RM3,001 sehingga RM10,000 sebulan dibenarkan permohonan Jenis B, C dan D</p>
      <p>* Sekiranya pendapatan isi rumah tidak melebihi RM3,000 sebulan adalah dibenarkan juga membuat pilihan Jenis B, C atau D. Bagi pendapatan isi rumah melebihi RM 3,001 sebulan, permohonan Jenis A tidak dibenarkan.</p>
      <p>✓ Pemohon hanya dibenarkan membuat pilihan 1 jenis rumah sahaja sama ada jenis A, B, C, atau D semasa membuat permohonan.</p>
      <p>✓ Pemohon atau pasangan belum memiliki rumah sama ada melalui projek kerajaan atau swasta di Selangor.</p>
      <p>✓ Permohonan pindah-milik hanya dibenarkan memohon selepas 5 tahun dari Perjanjian Jual-Beli dengan kebenaran Pihak Berkuasa Negeri.</p>
      <p>✓ Pembelian rumah untuk didiami dan bukan untuk disewa.</p>
      <p>✓ Tempoh sah laku bagi setiap permohonan yang didaftarkan adalah selama 2 tahun. Selepas tempoh tersebut data permohonan yang masih didalam SENARAI MENUNGGU akan dikeluarkan dari sistem dan pemohon perlu membuat permohonan baru sekiranya masih berminat untuk memohon.</p>
      <a target="_blank" rel="noopener noreferrer" href="https://ehartanah.lphs.gov.my/index.php?opt=newuser_new"><button>Mohon</button></a>
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
  <hr />
    <Col xs="12" md="4" className="pt- pt-md-0">
        <i className="" />
        {' '}
    </Col>
      <p><a target="_blank" rel="noopener noreferrer" className="btn btn-warning">
          <h6>⌂ Bantuan Sihat Selangor</h6>
          </a></p>
          <p></p>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Popup trigger={<button>Semak</button>} position="middle right">
    {close => (
      <div>
      <p></p>
      <p className="lead">SYARAT PERMOHONAN</p>
      <p>✓ Rakyat Negeri Selangor ATAU.</p>
      <p>✓ Bermastautin di Negeri Selangor melebihi 10 tahun dengan pengesahan daripada Ahli Parlimen/ADUN/Penghulu/Ketua Kampung/ JKKK Kampung/Ketua Penduduk/Ketua Komuniti.</p>
      <p>✓ Pendapatan isi rumah RM3,000.00 ke bawah.</p>

      <a target="_blank" rel="noopener noreferrer" href="http://bantuansihat.selangor.gov.my/"><button>Mohon</button></a>
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
  <hr />
      <p><a target="_blank" rel="noopener noreferrer" className="btn btn-warning">
          <h6>⌂ Skim Kesihatan Wanita</h6>
          </a></p>
          <p></p>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Popup trigger={<button>Semak</button>} position="middle right">
    {close => (
      <div>
      <p></p>
      <p className="lead">SYARAT PERMOHONAN</p>
      <p>✓ Wanita yang layak adalah mereka berumur 35 tahun ke atas yang lahir dan sedang menetap di Selangor.</p>
      <p>✓ Mereka yang bukan kelahiran Selangor mestilah telah menetap di Selangor sekurang-kurangnya 10 tahun.</p>

      <a target="_blank" rel="noopener noreferrer" href="#"><button>Tutup</button></a>
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
  <hr />
      <p><a target="_blank" rel="noopener noreferrer" className="btn btn-warning">
          <h6>⌂ Skim Mesra Usia Emas</h6>
          </a></p>
          <p></p>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Popup trigger={<button>Semak</button>} position="middle right">
    {close => (
      <div>
      <p></p>
      <p className="lead">SYARAT PERMOHONAN</p>
      <p>✓ Warga emas yang layak mendaftar ialah:</p>
      <p>✓ Seorang warganegara Malaysia berumur 60 tahun dan ke atas.</p>
      <p>✓ Lahir di WP Kuala Lumpur sebelum 1 Februari 1974 dan sedang menetap negeri Selangor atau di WP Kuala Lumpur atau</p>
      <p>✓ Bermastautin di Negeri Selangor secara sah sekurang-kurangnya 15 tahun.</p>

      <a target="_blank" rel="noopener noreferrer" href="#"><button>Tutup</button></a>
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
  <hr />
      <p><a target="_blank" rel="noopener noreferrer" className="btn btn-warning">
          <h6>⌂ Tabung Warisan Anak Selangor</h6>
          </a></p>
          <p></p>
  &nbsp;&nbsp;<Popup trigger={<button>Semak</button>} position="middle right">
    {close => (
      <div>
      <p></p>
      <p className="lead">SYARAT PERMOHONAN</p>
      <p>Permohonan baru TAWAS akan ditutup sepenuhnya berkuatkuasa mulai 1 Februari 2019. Permohonan ini hanya tertakluk untuk anak di bawah usia 3 tahun sahaja dan merujuk kepada kelahiran sehingga tahun 2018 sahaja. Untuk lebih lanjut layari laman web www.tawas.org.my/</p>

      <a target="_blank" rel="noopener noreferrer" href="#"><button>Tutup</button></a>
        <a className="close" onClick={close}>
          &times;
        </a>
      </div>
    )}
  </Popup>
  <hr />
  <p><a target="_blank" rel="noopener noreferrer" className="btn btn-warning">
      <h6>⌂ Kasih Ibu Smart Selangor</h6>
      </a></p>
      <p></p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Popup trigger={<button>Semak</button>} position="middle right">
{close => (
  <div>
  <p></p>
  <p className="lead">SYARAT PERMOHONAN</p>
  <p>✓ Warganegara Malaysia.</p>
  <p>✓ Lahir di Negeri Selangor atau telah menetap di Selangor melebihi 10 tahun.</p>
  <p>✓ Pemilih berdaftar di Negeri Selangor.</p>
  <p>✓ Wanita berkeluarga (berkahwin atau ibu tunggal) yang mempunyai anak/tanggungan di bawah umur 21 tahun.</p>
  <p>✓ Pendapatan bulanan isi rumah tidak melebihi RM2,000.00.</p>
  <p>Berdaftar sebagai pemohon BSH di bawah kategori pendapatan bawah RM2,000.00 atau tersenarai sebagai golongan miskin atau miskin tegar di pengkalan data eKasih.</p>

  <a target="_blank" rel="noopener noreferrer" href="http://ssipr-rakyat-web-dev.ap-southeast-1.elasticbeanstalk.com/ipr/KISS"><button>Mohon</button></a>
    <a className="close" onClick={close}>
      &times;
    </a>
  </div>
)}
</Popup>
<p><a target="_blank" rel="noopener noreferrer" className="btn btn-warning">
    <h6>⌂ Skim Air Darul Ehsan</h6>
    </a></p>
    <p></p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Popup trigger={<button>Semak</button>} position="middle right">
{close => (
<div>
<p></p>
<p className="lead">SYARAT PERMOHONAN</p>
<p>✓ Pemohon mestilah warganegara Malaysia dan menetap di Negeri Selangor.</p>
<p>✓ Pendapatan bulanan isi rumah RM4,000.00 dan ke bawah (pendapatan suami dan isteri, tiada pasangan, atau bujang).</p>
<p>✓ Premis kediaman adalah meter individu dan meter pukal (Pangsapuri Kos Rendah)</p>
<p>✓ Penghuni Pangsapuri Kos Rendah yang menerima bekalan air melalui meter pukal perlu mendapat pengesahan Badan Pengurusan Bersama (JMB) / Perbadanan Pengurusan (MC)</p>
<p>✓ Pemohon hanya layak memohon satu akaun/premis sahaja.</p>

<a target="_blank" rel="noopener noreferrer" href="https://ehartanah.lphs.gov.my/index.php?opt=newuser_new"><button>Mohon</button></a>
  <a className="close" onClick={close}>
    &times;
  </a>
</div>
)}
</Popup>
        <p></p>
    </Row>
  </div>
);


export default About;
