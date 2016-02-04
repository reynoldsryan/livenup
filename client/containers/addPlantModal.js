import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Modal, Grid, Row, Button, ButtonInput, Well, Col, Input, ListGroup, ListGroupItem} from 'react-bootstrap';

import { plantSearch } from '../actions/index';

class AddPlantModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPlantsToAdd: true,
      plantSearchTerm: '',
      plants: [],
      counter: 0,
      selectedPlant: null
    }
    let uniqCounter = 0;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createPlantList = this.createPlantList.bind(this);
    this.addedPlants = this.addedPlants.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.plantSearch();
  }
  createPlantList(plant) {
    let copy = this.state.plants.slice();
    copy.push({name:plant, description:"desc"} );
    return <ListGroupItem key={plant+Date.now()} onClick={() => this.setState({plants: copy, id: Date.now()}) }>{plant}</ListGroupItem>
  }

  addedPlants(plant) {
    return<ListGroupItem key={plant.id}>{plant.name}</ListGroupItem>
  }

  render() {
    return (
      <Modal bsSize="large" show={this.props.show} onHide={this.props.closeModal}>
        <Modal.Body>
          <Grid>
            <Row>
              <Col md={6}>
                <form onSubmit={this.handleSubmit}>
                  <Input type="text" buttonAfter={<ButtonInput type="submit" value="Search"></ButtonInput>} />
                </form>
              </Col>
              <Col md={6}>Plants to add</Col>
            </Row>
            <Row>
              <Col md={6}><ListGroup>{this.props.plants.map(this.createPlantList)}</ListGroup></Col>
              <Col md={6}><ListGroup>{this.state.plants.map(this.addedPlants)}</ListGroup></Col>
            </Row>
          </Grid>
        </Modal.Body>
        <Modal.Footer>
          Buttons
        </Modal.Footer>
      </Modal>
    );
  }
}

function mapStateToProps({ plants }) {
  console.log('Plants', plants);
  return {
    plants: plants || []
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ plantSearch }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlantModal);
