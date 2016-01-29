import React, { Component } from 'react';
import { Modal, Input, Button } from 'react-bootstrap';

export default class EditPlotModal extends Component {
  constructor(props) {
    super(props);
    //expected props
    //--------------
    //show
    //close
    //plotToEdit
    //updatePlot
    console.log('Props in Edit plot modal', props);
    this.state  = {
      newName : this.props.plot.name,
      newLength : this.props.plot.length,
      newWidth : this.props.plot.width
    }
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.cancelModal = this.cancelModal.bind(this);

    this.handleLengthChange = this.handleLengthChange.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
  }

  handleUpdate() {
    var updatedPlot = {
      _id: this.props.plot._id,
      name: this.state.newName,
      length: this.state.newLength,
      width: this.state.newWidth,
      user: this.props.user,
      plants: []
    }
    this.props.update(updatedPlot);
    this.setState({newName: ''});
  }

  handleRemove() {
    this.props.remove(this.props.plot.name);
    this.setState({newName: ''});
  }

  cancelModal() {
    this.setState({newName: this.props.plot.name});
    this.props.closeModal();
  }

  handleLengthChange(e) {
    var num = Number.parseInt(e.target.value);
    console.log('length change:',e.target.value);
    if(e.target.value === '' || (num > 0 && num < 100)) {
      this.setState({newLength : e.target.value});
    }
  }

  handleWidthChange(e) {
    var num = Number.parseInt(e.target.value);
    console.log('width change:',e.target.value);
    if(e.target.value === '' || (num > 0 && num < 100)) {
      this.setState({newWidth : e.target.value});
    }
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.cancelModal}>
        <Modal.Header>
          <h3>Edit Plot: {this.props.plot.name}</h3>
        </Modal.Header>
        <Modal.Body>
          <Input
            autofocus="true"
            type="text"
            label="Edit Name:"
            value={this.state.newName}
            onChange={e => this.setState({newName: e.target.value})} />
          <Input
            type="number"
            label="Edit Length:"
            value={this.state.newLength}
            onChange={this.handleLengthChange} />
          <Input
            type="number"
            label="Edit Width:"
            value={this.state.newWidth}
            onChange={this.handleWidthChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.handleUpdate}>Update Plot</Button>
          <Button bsStyle="link" onClick={this.cancelModal}>Cancel</Button>
          <Button bsStyle="danger" onClick={this.handleRemove}>Remove Plot</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
