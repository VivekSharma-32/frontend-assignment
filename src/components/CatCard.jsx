import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const CatCard = ({ cat }) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title className="mt-2">{cat?.breeds[0]?.name}</Card.Title>
          <p>{cat?.breeds[0]?.description}</p>
          <Card.Header className="fw-bold">Information</Card.Header>

          <ListGroup variant="flush" className="my-2">
            <ListGroup.Item>{cat?.breeds[0]?.life_span}</ListGroup.Item>
            <ListGroup.Item>{cat?.breeds[0]?.origin}</ListGroup.Item>
            <ListGroup.Item>{cat?.breeds[0]?.temperament}</ListGroup.Item>
          </ListGroup>
          <Card.Img
            className="rounded"
            src={cat?.url}
            alt={`Cat photo, breed, ${cat?.breeds[0]?.name}`}
            width={cat?.width}
            height={240}
          />

          {cat.breeds.length > 0 && (
            <p className="text-center mt-2">
              <Link
                className="text-muted fw-bold"
                to={cat?.breeds[0]?.wikipedia_url}
                target="_blank"
              >
                Wikipedia Url
              </Link>
            </p>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CatCard;
