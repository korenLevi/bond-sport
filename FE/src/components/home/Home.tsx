import React, { useEffect } from "react";
import { PlayersList } from "../PlayersList";
// import { usePlayers } from "../../hooks/usePlayers";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { FavoritePlayers } from "../FavioritePlayers";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
export const Home = () => {
  useEffect(() => {}, []);
  const favorites = useSelector((state: RootState) => state.players.favorites);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card body>
              <PlayersList></PlayersList>
            </Card>
          </Col>
          {!!favorites.length && (
            <Col>
              <Card>
                <FavoritePlayers favorites={favorites} />
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};
