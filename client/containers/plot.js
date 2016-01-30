import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table, Panel, Button, ButtonGroup } from 'react-bootstrap';

import { addPlant, removePlant } from '../actions/index';
import { removePlot, updatePlot } from '../actions/index';

import { bindActionCreators } from 'redux';

import EditPlotModal from '../components/editPlotModal';
import AddPlantModal from './addPlantModal';

class Plot extends Component {
  constructor(props) {
    super(props);
    console.log('Plot Props', props);
    this.state = {
      listView: true,
      open: true,
      showEditPlotModal: false,
      showAddPlantModal: false
    };

    this.listView = this.listView.bind(this);
    this.gridView = this.gridView.bind(this);
    this.renderView = this.renderView.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.showEditPlotModal = this.showEditPlotModal.bind(this);
    this.showAddPlantModal = this.showAddPlantModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  toggleView() {
    console.log('toggling view');
    this.setState({listView: !this.state.listView})
    console.log(this.state.listView);
  }

  listView() {
    const plants = this.props.plot.plants.map((plant) => {
      return (
        <tr key={plant.name}>
          <td>{plant.name}</td>
          <td>{plant.description || 'Default plant description'}</td>
          <td>something</td>
          <td>something else</td>
          <td>something again</td>
          <td>another something</td>
        </tr>);
    });

    return (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>etc</th>
            <th>etc.</th>
            <th>etc..</th>
            <th>etc...</th>
          </tr>
        </thead>
        <tbody>
          {plants}
        </tbody>
      </Table>
    );
  }

  gridView() {
    return <div>Plot Grid View</div>;
  }

  renderView() {
    if(this.state.listView) {
      return listView();
    }
    return gridView();
  }

  handleUpdate(updatedPlot) {
    this.props.updatePlot(updatedPlot);
    this.closeModal();
  }

  handleRemove() {
    this.props.removePlot(this.props.plot._id);
    this.closeModal();
  }

  showEditPlotModal() {
    this.setState({showEditPlotModal: true});
  }

  showAddPlantModal() {
    this.setState({showAddPlantModal: true});
  }

  closeModal() {
    this.setState({showEditPlotModal: false});
    this.setState({showAddPlantModal: false});
  }


  render() {
    const header = (
      <div>
        <h3><span>{this.props.plot.name} | Size(ft): {this.props.plot.length} X {this.props.plot.width}</span>
          <ButtonGroup style={{float: 'right'}}>
            <Button bsStyle="info" onClick={this.showAddPlantModal}>Add Plant</Button>
            <Button bsStyle="primary" onClick={this.toggleView}>Toggle View</Button>
            <Button bsStyle="info" onClick={this.showEditPlotModal}>Edit Plot</Button>
          </ButtonGroup>
        </h3>
      </div>
      );

    return (
      <Panel collapsible expanded={this.state.open} header={header}>
        <EditPlotModal
          plot={this.props.plot}
          show={this.state.showEditPlotModal}
          closeModal={this.closeModal}
          update={this.handleUpdate}
          remove={this.handleRemove} />
        <AddPlantModal show={this.state.showAddPlantModal} closeModal={this.closeModal}/>
        {this.state.listView ? this.listView() : this.gridView()}
      </Panel>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // console.log('state in planner.js from fn()mapDispatchTopProps', dispatch);
  return bindActionCreators({ addPlant, removePlant, removePlot, updatePlot }, dispatch);
}

function mapStateToProps({ userPlots }) {
  return { userPlots };
}
export default connect(null, mapDispatchToProps)(Plot);
// export default connect(mapStateToProps, mapDispatchToProps)(Planner);
