import React , { Component } from 'react';

import GridTile from 'material-ui/lib/grid-list/grid-tile';

const styles = {
  imagetile: {
    'position': 'relative',
    'zIndex': -1
  },
  gridtitle: {
    'textAlign': 'center',
    'fontSize': '15px',
    'fontWeight': 'bold',
    'position': 'absolute',
    'top': '150%',
    'left': '50%',
    'transform': 'translate(-50%, -50%)',
    'zIndex': 1
  }
};

export default class Plants extends Component {
  constructor(props) {
    super(props)
  }

  handleClick(e) {

  }

  render() {
    const plant = this.props.plant

    return (

      <GridTile
        key={plant.name}
        titleBackground='false'
        titlePosition='top'
        title={<span style={styles.gridtitle}>{plant.name}</span>}
        onClick={(e) => this.handleClick(e)}
        >
        <img src={plant.thumbnail} alt={`Thumbnail image of a ${plant.name}`}/>
      </GridTile>
    );
  }
}

/*
<GridTile
  key={space.title}
  titleBackground={false}
  title={space.title}
  className='grid-tile'
  styles={{'font-size': '50px'}}
  onClick={() => this.props.selectSpace(space.title)}>
  <img styles={ styles.imagetile } src={space.img} />
</GridTile>
*/
