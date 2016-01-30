import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button } from 'react-bootstrap';

import { fetchUserPlots, addPlot , plantSearch } from '../actions/index';

import Plot from './plot';
import AddPlotModal from '../components/addPlotModal';

class Planner extends Component {
  constructor(props) {
    super(props);
    // console.log('props in planner', props);
    this.state = {
      counter: 1,
      showAddPlotModal: false,
      addPlotName: '',
      addPlotLength: 0,
      addPlotWidth: 0
    };

    this.handleAddPlot = this.handleAddPlot.bind(this);
    this.renderPlots = this.renderPlots.bind(this);
    this.displayAddPlotModal = this.displayAddPlotModal.bind(this);
    this.closeAddPlotModal = this.closeAddPlotModal.bind(this);
  }

  componentWillMount() {
      if(!this.props.plots ||!this.props.fetched) {
        this.props.fetchUserPlots();
      }
      // this.props.plantSearch('sun');

    console.log('component will mount');
  }

  renderPlots(plot) {
    console.warn('Rendering plots');
    // console.log('plot in planner',plot)
    plot.plants = plot.plants || [];
    return <Plot key={plot._id} plot={plot} />;
  }

  handleAddPlot(newPlot) {
    // this.props.addPlot({
    //   name: `${this.state.addPlotName}-${this.state.counter}`,
    //   length: 4,
    //   width: 2,
    //   plants: []
    // });
    // this.setState({addPlotName: ''});
    this.setState({counter: this.state.counter + 1});
    this.props.addPlot(newPlot);
    console.log('add plot clicked');
    this.closeAddPlotModal();
  }

  displayAddPlotModal(e) {
    this.setState({ showAddPlotModal: true })
  }

  closeAddPlotModal(e) {
    this.setState({ showAddPlotModal: false })
  }

  render() {

    return (
      <div>

        <button onClick={this.displayAddPlotModal}>Add Plot</button>
        <AddPlotModal showModal={this.state.showAddPlotModal} closeModal={this.closeAddPlotModal} addPlot={this.handleAddPlot}/>


        {!this.props.plots ? <h2>Loading Plots...</h2> : this.props.plots.map(this.renderPlots)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // console.log('state in planner.js from fn()mapDispatchTopProps', dispatch);
  return bindActionCreators({ fetchUserPlots, addPlot, plantSearch}, dispatch);
}

function mapStateToProps({ userPlots }) {
  if(userPlots) {
    return { plots: userPlots.plots, fetched: true };
  }
  // console.log('plots state', userPlots)
  return { plots: false  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
