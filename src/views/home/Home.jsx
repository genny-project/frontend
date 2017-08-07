import React, { Component } from 'react';
import { Grid, Row, Col } from 'flex-react';

class Home extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={6}>Testing</Col>
          <Col sm={6}>Testing</Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
