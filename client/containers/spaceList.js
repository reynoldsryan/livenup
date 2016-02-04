import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import { selectSpace } from '../actions/index';
import routeActions, { push } from 'react-router-redux';


class SpaceList extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.listOfSpaces.map(space => {
      return (
        <GridTile
          key={space.title}
          title={space.title}
          titlePosition='top'
          className='grid-tile'
          onClick={() => this.props.selectSpace(space.title)}>
          <img src={space.img} />
        </GridTile>
      );
    });
  }

  render() {
    return (
      <div>
        <GridList cols={3} cellHeight={300} className='grid-list' onClick={() => this.props.push('/inspirations')}>
            {this.renderList()}
        </GridList>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    listOfSpaces: state.listOfSpaces,
    selectedSpace: state.selectedSpace
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { selectSpace, push }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceList);
