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
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

class Login extends React.Component {
  static propTypes = {
    member: PropTypes.shape({
      email: PropTypes.string,
    }),
    error: PropTypes.string,
    success: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    error: null,
    success: null,
    member: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      email: (props.member && props.member.email) ? props.member.email : '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { onFormSubmit, history } = this.props;

    return onFormSubmit(this.state)
      .then(() => setTimeout(() => history.push('/'), 1000))
      .catch(() => {});
  }

  render() {
    const { loading, success, error } = this.props;
    const { email, password } = this.state;

    return (
      <div>
        <Row>
          <Col lg={{ size: 6, offset: 3 }}>
            <Card>
              <CardHeader>Log Masuk</CardHeader>
              <CardBody>
                {!!success && <Alert color="success">{success}</Alert>}
                {!!error && <Alert color="danger">{error}</Alert>}

                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="email">No. Kad Pengenalan / No. Polis / No. Tentera </Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="**contoh_ 701207105467 atau e-mel"
                      disabled={loading}
                      value={email}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
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
                  <Button color="primary" disabled={loading}>
                    {loading ? 'Loading' : 'Log Masuk' }
                  </Button>
                </Form>

                <hr />

                <Row>

                <Col sm="6" className="text-leftx">
                  <Link to="/forgot-password">Terlupa Kata Laluan?</Link>
                </Col>
                  <Col sm="6">
                    {' '}
                    <Link to="/forgot-password">Hantar E-mel Pengesahan</Link>
                  </Col>
                </Row>
              <hr />
              <Link to="/forgot-passwordp">Atau</Link>
              <p></p>
              <Link to="/sign-up"><Button color="primary" disabled={loading}>
                {loading ? 'Loading' : 'Daftar Akaun' }
              </Button></Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(Login);
