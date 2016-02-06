import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import { selectSpace } from '../actions/index';
import routeActions, { push } from 'react-router-redux';

const styles = {
  imagetile: {
    width: '100%',
    height: '100%'
  }
};

class SpaceList extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.listOfSpaces.map(space => {
      return (
          <GridTile
            key={space.title}
            titleBackground={false}
            title={space.title}
            className='grid-tile'
            styles={{'font-size': '50px'}}
            onClick={() => this.props.selectSpace(space.title)}>
            <img styles={ styles.imagetile } src={space.img} />
          </GridTile>
      );
    });
  }

  render() {
    return (
      <div>
        <div className='sixteen column row'>
          <div className='two wide column'></div>
          <h2 className='twelve wide column, space-heading'>
            Pick a space - Find your inspiration - Bring it to life
          </h2>
          <div className='two wide column'></div>
        </div>
        <div className='ui relaxed grid'>
          <div className='two wide column'></div>
          <div className='twelve wide column'>
            <GridList cols={3} cellHeight={200} className='grid-list' onClick={() => this.props.push('/inspirations')}>
                {this.renderList()}
            </GridList>
          </div>
          <div className='two wide column'></div>
        </div>
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
