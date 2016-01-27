import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table, Panel } from 'react-bootstrap';

import { addPlant, removePlant } from '../actions/index';
import { removePlot, renamePlot } from '../actions/index';

import { bindActionCreators } from 'redux';

class Plot extends Component {
  constructor(props) {
    super(props);
    console.log('Plot Props', props);
    this.state = {
      listView: true,
      open: true
    };

    this.listView = this.listView.bind(this);
    this.gridView = this.gridView.bind(this);
    this.renderView = this.renderView.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.handleRename = this.handleRename.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
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

  handleRename() {
    this.props.renamePlot(this.props.plot.name, "new "+this.props.plot.name+" Name");
  }

  handleRemove() {
    this.props.removePlot(this.props.plot.name);
  }


  render() {
    const header = (
      <span>
        <h3>{this.props.plot.name}</h3>
        <button onClick={this.toggleView}>Toggle View</button>
        <button onClick={this.handleRename}>Rename Plot</button>
        <button onClick={this.handleRemove}>Remove Plot</button>
      </span>);
    return (
      <Panel collapsible expanded={this.state.open} header={header}>
        {this.state.listView ? this.listView() : this.gridView()}
      </Panel>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // console.log('state in planner.js from fn()mapDispatchTopProps', dispatch);
  return bindActionCreators({ addPlant, removePlant, removePlot, renamePlot }, dispatch);
}

function mapStateToProps({ userPlots }) {
  return { userPlots };
}
export default connect(null, mapDispatchToProps)(Plot);
// export default connect(mapStateToProps, mapDispatchToProps)(Planner);
