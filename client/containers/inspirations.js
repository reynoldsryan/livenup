import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
//import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import { fetchInspirations } from '../actions/inspiration_actions';
import { selectedInspiration } from '../actions/inspiration_actions';
import routeActions, { push } from 'react-router-redux';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '80%',
    overflowY: 'auto',
    marginBottom: 24,
  },
};

class Inspirations extends Component {
  constructor (props) {
    super(props)
  }
  componentWillMount() {
    console.log('+++ line 30 inside inspirations.js this.props value => ', this.props);
    if(!this.props.selectedSpace) { return console.error('Selected Space is ', this.props.selectedSpace) };
    this.props.fetchInspirations(this.props.selectedSpace);
  }
   inspirationMaker (inspiration) {
    return (
      <GridTile
          key={inspiration.image_url}
          title={inspiration.category}
          actionPosition="left"
          titlePosition="bottom"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={ 1 }
          rows={ 1 }
          onClick={() => console.log('+++ containers/inspirations.js this.props.selectedInspiration(inspiration) value => ', this.props.selectedInspiration(inspiration)) }
        >
          <image style={
            {
              width: '100%'
            }
          }
          src={ inspiration.image_url } />
        </GridTile>
      )
  }
  render() {
    return (

      <div style={ styles.root }>
        <GridList
          cols={3}
          cellHeight={200}
          padding={1}
          style={styles.gridList}
        >
        { this.props.inspirations.map((i) => {
          return this.inspirationMaker(i);
        })
      }
        </ GridList>
      </div>

    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { fetchInspirations, bindActionCreators, push }, dispatch )
}

function mapStateToProps (state) {
  console.log("in inspirations.js state value => ", state);
  return {
      inspirations: state.inspirations || [],
      selectedSpace: state.selectedSpace || null,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inspirations)
