import React, { Component } from "react";

import TextField from 'material-ui/lib/text-field';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Checkbox from 'material-ui/lib/checkbox';
import Slider from 'material-ui/lib/slider';
import Paper from 'material-ui/lib/paper';
import FlatButton from 'material-ui/lib/flat-button';
import Done  from 'material-ui/lib/svg-icons/action/done';


import routeActions, { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const style = {
  height: 200,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const availabilePlants = [
  {name: 'Firn', otherData: {}},
  {name: 'Daisy', otherData: {}},
  {name: 'Pine Tree', otherData: {}},
  {name: 'Beats', otherData: {}},
  {name: 'Carrots', otherData: {}},
  {name: 'Shrubs', otherData: {}}
];
const sunLevels = [
  'shade Tolerant'
];

const humidityLevels = [
  'high'
];

const tempLevels = [
  'medium'
];

export default class SpaceCreator extends Component {
  constructor(props) {
    super(props);
    console.log('...................>>>error');
    this.state = {
      spaceName: 'Default Name',
      category: 'Some Category',
      sunLevel: 0,
      humidityLevel: 0,
      tempLevel: 0,
      selectedPlants: []
    }
  }

  componentWillMount() {
    if(!this.props.selectedSpace) {
      console.error('Error, no selected space!!, redirecting to homepage');

      // this.props.push('/'); //uncomment to add security
    }
    //If a space is already being 'made', load and use it
    // if(this.props.spaceCreating !== null) {
    //
    // }
  }
  handleSunLevelChangeSelect(sunLevel) {
    console.log(arguments);
    this.setState({'sunLevel': sunLevel });
  }
  handleHumidityLevelChangeSelect(humidityLevel) {
    console.log(arguments);
    this.setState({'humidityLevel': humidityLevel });
  }
  handleTempLevelChangeSelect(tempLevel) {
    console.log(arguments);
    this.setState({'tempLevel': tempLevel });
  }
  createMenuItems(level, i) {
    // return <MenuItem key={level+i} value={i} primaryText={level}/>
    console.log('Menu item', level, i);
    return <MenuItem key={level+i} value={i}  primaryText={level}/>;
    // return <li></li>
  }

  createAvailablePlantItems(plant, i) {
    return <ListItem key={plant+i} onTouchTap={() => this.handlePlantSelection(plant)} primaryText={plant.name} leftCheckBox={<Checkbox />}/>;
    // return <li></li>
  }

  handlePlantSelection(plant) {
    this.setState({selectedPlants: [...this.state.selectedPlants, plant]});
  }

  handleHunidityChange(e) {

  }


  handleTempChange(e) {
    console.log('handleTemp Change',e);
  }

  onSpaceNameChange(e) {
    this.setState({spaceName: e.target.value});
  }

  handleSave() {
    const createdSpaceToSave = {
      user: 'userId',
      name: this.state.spaceName,
      category: this.state.category,
      sunLevel: this.state.sunLevel,
      humidityLevel: this.state.humidityLevel,
      tempLevel: this.state.tempLevel,
      plants: this.state.selectedPlants
    }

    console.log('-----SAVING+SPACE------');
    console.log(JSON.stringify(createdSpaceToSave, null, '\t'));
    console.log('-----------------------');
  }

  render() {

    let counter = 0;
    const sunLevelMenuItems = sunLevels.map((level) => this.createMenuItems(level, counter++));
    counter = 0;
    const humidityLevelMenuItems = humidityLevels.map((level) => {
      return <MenuItem  value={counter++}  key={level+counter} primaryText={level}/>;
    });
    counter = 0;
    const tempLevelMenuItems = tempLevels.map((level) => {
      return <MenuItem  value={counter++}  key={level+counter} primaryText={level}/>;
    });
    counter = 0;
    const availabilePlantsListItems = availabilePlants.map((plant) => this.createAvailablePlantItems(plant, counter++));

    return (
      <Paper style={{'marginLeft': 'auto','marginRight': 'auto', display: 'inline-block'}}>
        <div>
            <Paper style={style} children={<image style={{'width': '100%', 'height': '100%', 'backgroundColor': '#ddd'}}/>} />
            <div style={{display:'inline-block'}}>
              <TextField style={{display: 'block'}} value={this.state.spaceName} onChange={(e) => this.onSpaceNameChange(e)}/>
              <SelectField style={{display: 'block'}} value={this.state.sunLevel}  disabled={true} onChange={(e, i, v) => this.handleSunLevelChangeSelect(v)}>
                {sunLevelMenuItems}
              </SelectField>
              <SelectField style={{display: 'block'}} value={this.state.humidityLevel}  disabled={true} onChange={(e, i, v) => this.handleHumidityLevelChangeSelect(v)}>
                {humidityLevelMenuItems}
              </SelectField>
              <SelectField style={{display: 'block'}} value={this.state.sunLevel}  disabled={true} onChange={(e, i, v) => this.handleTempLevelChangeSelect(v)}>
                {tempLevelMenuItems}
              </SelectField>
            </div>
        </div>

        <div>
          <Paper style={style} children={(<List subHeader="InSpIrAtIoN PlAnTs">
            {availabilePlantsListItems}
          </List>)} />

        </div>
        <FlatButton primary={true} label="Save" labelPostition="before" icon={<Done />} onTouchTap={() => this.handleSave()}/>
        {JSON.stringify(this.state.selectedPlants, null, '\t')}
      </Paper>
    );
  }
}

function mapStateToProps({ selectedInspiration } ) {
  return {
    selectedInspiration
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ push }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceCreator)
