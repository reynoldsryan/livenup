import React , { Component } from 'react';

import GridTile from 'material-ui/lib/grid-list/grid-tile';

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
        title={plant.name}
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
