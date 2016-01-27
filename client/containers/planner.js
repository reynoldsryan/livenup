import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchUserPlots, addPlot } from '../actions/index';

import Plot from './plot';

class Planner extends Component {
  constructor(props) {
    super(props);
    console.log('props in planner', props);
    this.state = {
      counter: 1
    };

    this.handleAddPlot = this.handleAddPlot.bind(this);
    this.renderPlots = this.renderPlots.bind(this);
  }

  componentWillMount() {
      if(!this.props.fetched) {
        this.props.fetchUserPlots();
      }
    console.log('component will mount');
  }

  renderPlots(plot) {
    console.warn('Rendering plots');
    console.log('plot in planner',plot)
    return <Plot key={plot.name} plot={plot} />;
  }

  handleAddPlot(e) {
    this.props.addPlot({
      name: `Plot${this.state.counter}`,
      length: 4,
      width: 2,
      plants: []
    });
    this.setState({counter: this.state.counter + 1});
    console.log('add plot clicked');
  }

  render() {

    return (
      <div>
        This is the planner view
        <button onClick={this.handleAddPlot}>Add Plot</button>
        {this.props.plots.map(this.renderPlots)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // console.log('state in planner.js from fn()mapDispatchTopProps', dispatch);
  return bindActionCreators({ fetchUserPlots, addPlot}, dispatch);
}

function mapStateToProps({ userPlots }) {
  if(userPlots) {
    return { plots: userPlots.plots, fetched: true };
  }
  // console.log('plots state', userPlots)
  return { plots: []  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
