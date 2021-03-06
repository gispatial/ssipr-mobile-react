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

class ForgotPassword extends React.Component {
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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault();
    const { onFormSubmit, history } = this.props;

    return onFormSubmit(this.state)
      .then(() => setTimeout(() => history.push('/login'), 1000))
      .catch(() => {});
  }

  render() {
    const { loading, error, success } = this.props;
    const { email } = this.state;

    return (
      <div>
        <Row>
          <Col lg={{ size: 6, offset: 3 }}>
            <Card>
              <CardHeader>
                Terlupa Kata Laluan
              </CardHeader>
              <CardBody>
                {!!error && <Alert color="danger">{error}</Alert>}
                {!!success && <Alert color="success">{success}</Alert>}

                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="email">E-mel</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="*contoh_ abdullah@ssipr.sgor.gov.my"
                      value={email}
                      disabled={loading}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <Button color="primary" disabled={loading}>
                    {loading ? 'Loading' : 'Hantar'}
                  </Button>
                </Form>

                <hr />

                <Row>
                  <Col sm="6">
                    {' '}
                    <Link to="/sign-up">Daftar</Link>&nbsp;untuk akaun baru.
                  </Col>
                  <Col sm="6" className="text-left">
                    <Link to="/login">Log Masuk</Link>
                    {' '}
                    ke profil akaun anda.
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(ForgotPassword);
