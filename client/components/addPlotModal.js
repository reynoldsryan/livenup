import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';



export default class AddPlotModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPlotName: '',
      newPlotLength: 1,
      newPlotWidth: 1
    };
    this.handleAddPlot = this.handleAddPlot.bind(this);
  }

  handleAddPlot() {
    const newPlot = {
      name: this.state.newPlotName,
      length: Number.parseInt(this.state.newPlotLength),
      width: Number.parseInt(this.state.newPlotWidth),
      plants: []
    };
    this.props.addPlot(newPlot);

    this.setState({
      newPlotName: '',
      newPlotLength: 1,
      newPlotWidth: 1
    });

  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.closeModal}>
        <Modal.Header>
          <h3>Add New Plot</h3>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor="newPlotName">Plot Name:</label>
            <input type="text" name="newPlotName"
              value={this.state.newPlotName}
              onChange={e => this.setState({newPlotName: e.target.value})} />
            <label htmlFor="newPlotLength">Length(ft)</label>
            <input type="number" name="newPlotLength" min="1" maxLength="3"
              value={this.state.newPlotLength}
              onChange={e => this.setState({newPlotLength: e.target.value})}/>
            <label htmlFor="newPlotWidth">Width(ft)</label>
            <input type="number" name="newPlotWidth" min="1" maxLength="3"
              value={this.state.newPlotWidth}
              onChange={e => this.setState({newPlotWidth: e.target.value})}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closeModal}>Close</Button>
          <Button bsStyle="primary" onClick={this.handleAddPlot}>Add Plot!</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
