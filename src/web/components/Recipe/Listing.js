import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Error from '../UI/Error';

const RecipeListing = ({ error, loading, recipes }) => {
  // Error
  if (error) return <Error content={error} />;

  // Build Cards for Listing
  const cards = recipes.map(item => (
    <Card key={`${item.id}`}>
      <Link to={`/recipe/${item.id}`}>
      </Link>
      <CardBody>
        <CardTitle>{item.title}</CardTitle>
        <CardText>{item.body}</CardText>
        <Link className="btn btn-primary" to={`/recipe/${item.id}`}>
          Semak
          {' '}
          <i className="icon-arrow-right" />
        </Link>
      </CardBody>
    </Card>
  ));

  // Show Listing
  return (
    <div>
      <Row className="pt-4 pt-sm-0">
        <Col sm="12">
          <h1>Profil</h1>
          <p>Pengkalan Data Pengguna Sistem Smart Inisiatif Peduli Rakyat.</p>
        </Col>
      </Row>
      <Row className={loading ? 'content-loading' : ''}>
        <Col sm="12" className="card-columns"></Col>
      </Row>
    </div>
  );
};

RecipeListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

RecipeListing.defaultProps = {
  error: null,
};

export default RecipeListing;
