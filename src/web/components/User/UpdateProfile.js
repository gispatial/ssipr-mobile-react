import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  Form,
  Label,
  Alert,
  Input,
  Button,
  CardBody,
  FormGroup,
  CardHeader,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

class UpdateProfile extends React.Component {
  static propTypes = {
    error: PropTypes.string,
    success: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    member: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
    }).isRequired,
  }

  static defaultProps = {
    error: null,
    success: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: props.member.firstName || '',
      lastName: props.member.lastName || '',
      email: props.member.email || '',
      password: '',
      password2: '',
      changeEmail: false,
      changePassword: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({ [e.target.name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { onFormSubmit } = this.props;

    onFormSubmit(this.state).catch(() => {});
  }

  render() {
    const { loading, success, error } = this.props;
    const {
      firstName, lastName, changeEmail, email, changePassword, password, password2,
    } = this.state;

    return (
      <div>
        <Row>
          <Col lg={{ size: 6, offset: 3 }}>
            <Card>
              <CardHeader>MATLUMAT PERIBADI</CardHeader>
              <CardBody>
                {!!error && <Alert color="danger">{error}</Alert>}
                {!!success && <Alert color="success">{success}</Alert>}

                <p>Jantina</p>
                <p>
                  <FormGroup check style={{ marginTop: 20 }}>
                    <Label check>
                      <Input
                        type="checkbox"
                      />
                      {' '}
                      Lelaki
                    </Label>
                  </FormGroup>
                  <FormGroup check style={{ marginTop: 20 }}>
                    <Label check>
                      <Input
                        type="checkbox"
                      />
                      {' '}
                      Perempuan
                    </Label>
                  </FormGroup>
                  </p>
                  <hr />
                  <label>Status Perkahwinan
                  <p></p>
                <select value={this.state.value} onChange={this.handleChange}>
                 <option value="grapefruit">Bujang</option>
                 <option value="lime">Berkahwin</option>
                 <option value="coconut">Duda / Janda</option>
                </select>
                </label>
                <hr />
                <label>Agama
                <p></p>
              <select value={this.state.value} onChange={this.handleChange}>
               <option value="grapefruit">Islam</option>
               <option value="lime">Kristian</option>
               <option value="coconut">Hindu</option>
               <option value="lime">Buddha</option>
               <option value="coconut">Lain-lain</option>
              </select>
              </label>
              <hr />
              <label>Taraf Pendidikan
              <p></p>
            <select value={this.state.value} onChange={this.handleChange}>
             <option value="grapefruit">Rendah</option>
             <option value="lime">Menengah</option>
             <option value="coconut">Universiti</option>
             <option value="coconut">Lain-lain</option>
            </select>
            </label>
            <hr />
                  <FormGroup>
                    <Label for="text">Tarikh Lahir</Label>
                    <Input placeholder="** contoh 24/08/1996" />
                  </FormGroup>
                  <hr />
                  <FormGroup>
                    <Label for="text">Tempat Lahir</Label>
                    <Input placeholder="** contoh Jeram, Kuala Selangor" />
                  </FormGroup>
                  <hr />
                  <FormGroup>
                    <Label for="text">Tempoh Mastautin (Tahun)</Label>
                    <Input
                      type="text"
                      />
                  </FormGroup>
                  <hr />
                  <FormGroup>
                    <Label for="text">Pendapatan Bulanan (RM)</Label>
                    <Input
                      type="text"
                      />
                  </FormGroup>
                  <hr />
                  <FormGroup>
                    <Label for="text">No Telefon Bimbit</Label>
                    <Input
                      type="text"
                      />
                  </FormGroup>
                  <hr />
                  <FormGroup>
                    <Label for="text">No Telefon Rumah</Label>
                    <Input
                      type="text"
                      />
                  </FormGroup>
                  <hr />
                  <CardHeader>MATLUMAT TEMPAT TINGGAL</CardHeader>
                  <hr />
                  <FormGroup>
                    <Label for="text">Alamat 1</Label>
                    <Input
                      type="text"
                      />
                  </FormGroup>
                  <FormGroup>
                    <Label for="text">Alamat 2</Label>
                    <Input
                      type="text"
                      />
                  </FormGroup>
                  <FormGroup>
                    <Label for="text">Alamat 3</Label>
                    <Input
                      type="text"
                      />
                  </FormGroup>
                  <hr />
                  <FormGroup>
                    <Label for="text">Poskod</Label>
                    <Input
                      type="text"
                      />
                  </FormGroup>
                  <hr />
                  <label>Daerah
                  <p></p>
                <select value={this.state.value} onChange={this.handleChange}>
                 <option value="grapefruit">Gombak</option>
                 <option value="lime">Hulu Langat</option>
                 <option value="coconut">Hulu Selangor</option>
                 <option value="coconut">Klang</option>
                  <option value="grapefruit">Kuala Langat</option>
                  <option value="lime">Kuala Selangor</option>
                  <option value="coconut">Petaling</option>
                  <option value="coconut">Sabak Bernam</option>
                  <option value="coconut">Sepang</option>
                  <option value="coconut">Lain-lain</option>
                </select>
                </label>
                <hr />
                <label>Negeri
                <p></p>
              <select value={this.state.value} onChange={this.handleChange}>
               <option value="grapefruit">Selangor</option>
               <option value="lime">Johor</option>
               <option value="coconut">Kedah</option>
               <option value="coconut">Kelantan</option>
                <option value="grapefruit">Melaka</option>
                <option value="lime">Negeri Sembilan</option>
                <option value="coconut">Pahang</option>
                <option value="coconut">Perak</option>
                <option value="coconut">Perlis</option>
                <option value="coconut">Pulau Pinang</option>
                 <option value="grapefruit">Sabah</option>
                 <option value="lime">Sarawak</option>
                 <option value="coconut">Terengganu</option>
                 <option value="coconut">Wilayah Persekutuan Kuala Lumpur</option>
                 <option value="coconut">Wilayah Persekutuan Labuan</option>
                 <option value="coconut">Wilayah Persekutuan Putrajaya</option>
              </select>
              </label>
              <hr />
                  <CardHeader>MATLUMAT ANAK / JAGAAN</CardHeader>
                  <p>(+) Tambah</p>
                  <hr />

                  <FormGroup>
                    <Label for="text">No. Kad Pengenalan / No. Polis / No. Tentera</Label>
                    <Input
                      type="text"
                      />
                  </FormGroup>
                  <hr />
                  <FormGroup>
                    <Label for="text">Nama</Label>
                    <Input
                      type="text"
                      />
                  </FormGroup>
                  <hr />
                  <FormGroup>
                    <Label for="text">Tarikh Lahir</Label>
                    <Input
                      type="text"
                      />
                  </FormGroup>
                  <hr />
                  <FormGroup>
                    <Label for="text">Tempat Lahir</Label>
                    <Input
                      type="text"
                      />
                  </FormGroup>
                  <hr />
                  <CardHeader>MATLUMAT AKAUN</CardHeader>
                  <p></p>
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <Label for="firstName">Nama</Label>
                      <Input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Johan"
                        disabled={loading}
                        value={firstName}
                        onChange={this.handleChange}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="lastName">No Kad Pengenalan | E-mel</Label>
                      <Input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Abdullah"
                        disabled={loading}
                        value={lastName}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <hr />
                  <FormGroup check style={{ marginTop: 20 }}>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="changeEmail"
                        checked={changeEmail}
                        onChange={this.handleChange}
                      />
                      {' '}
                      Tukar E-mel
                    </Label>
                  </FormGroup>
                  {changeEmail && (
                    <FormGroup>
                      <Label for="email">E-mel</Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="abdullah@ssipr.selangor.gov.my"
                        disabled={loading}
                        value={email}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                  )}

                  <FormGroup check style={{ marginTop: 20 }}>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="changePassword"
                        checked={changePassword}
                        onChange={this.handleChange}
                      />
                      {' '}
                      Tukar Kata Laluan
                    </Label>
                  </FormGroup>
                  {changePassword && (
                    <div>
                      <FormGroup>
                        <Label for="password">Kata Laluan</Label>
                        <Input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          disabled={loading}
                          value={password}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="password2">Sahkan Kata Laluan</Label>
                        <Input
                          type="password"
                          name="password2"
                          id="password2"
                          placeholder="••••••••"
                          disabled={loading}
                          value={password2}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </div>
                  )}
                  <Button style={{ marginTop: 20 }} color="primary" disabled={loading}>
                    {loading ? 'Loading' : 'Simpan'}
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UpdateProfile;
