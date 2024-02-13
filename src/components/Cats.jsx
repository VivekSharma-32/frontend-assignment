import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import CatCard from "./CatCard";

const Cats = () => {
  const [cats, setCats] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const maximumCatsPerPage = 12;

  const apiURL = `https://api.thecatapi.com/v1/images/search?breed_ids=beng&limit=${maximumCatsPerPage}`;
  const apiKey = process.env.REACT_APP_CAT_API_KEY;

  const requestCats = async () => {
    setIsLoading(true);
    try {
      const headers = {
        "Content-type": "application/json",
        "x-api-key": apiKey,
      };
      const response = await fetch(apiURL, { headers });
      const result = await response.json();
      setCats(result);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    requestCats();

    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Row className="justify-content-center my-5 g-2">
        {isLoading ? (
          <Row className="d-flex justify-content-center align-items-center m-auto">
            <Spinner size="lg" animation="grow" />
          </Row>
        ) : (
          <>
            {Object.values(cats)?.map((cat) => (
              <Col key={cat?.id} md={3}>
                <CatCard cat={cat} />
              </Col>
            ))}
          </>
        )}
      </Row>
    </Container>
  );
};

export default Cats;
