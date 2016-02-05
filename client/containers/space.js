import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updatedSpace } from '../actions/creator_actions.js';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import TextField from 'material-ui/lib/text-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Paper from 'material-ui/lib/paper';

import Login from './login';

class Space extends Component {
  constructor(props) {
    super(props);
    if(!this.props.fetchedSpace) {
      this.state = {
        editMode: false,
          image_url: this.props.selectedInspiration.image_url,
          space_name: this.props.selectedInspiration.category,
          category: this.props.selectedInspiration.category,
          light: 'medium',
          humidityLevel: 'medium',
          temperature: 'high',
          space_plants: [],
        availablePlants: this.props.selectedInspiration.plantsArray
      };
    }else {
      this.state = {
        editMode: false,
          image_url: this.props.fetchedSpace.space_image,
          space_name: this.props.fetchedSpace.space_name,
          category: this.props.fetchedSpace.category,
          light: this.props.fetchedSpace.light,
          humidity: this.props.fetchedSpace.humidity,
          temperature: this.props.fetchedSpace.temperature,
          space_plants: this.props.fetchedSpace.space_plants,
        availablePlants: this.props.fetchedSpace.space_plants
    }

      this.renderPlants.bind(this);
      this.getHeaderButton.bind(this);
      this.displayEditMode.bind(this);
    }

  }

  renderPlants() {
    let counter = 100;
    const listItems = this.state.space_plants.map((plant) => {
      return  (<ListItem key={counter++} primaryText={plant} />);
    });
    console.log('-------listItems',listItems);
    return listItems;
  }

  //Display the edit mode
  displayEditMode() {
    let counter = 0;
    console.log('---------------space ', this.state);
    return (
      <Card>
        <TextField value={this.state.space_name} onChange={(e) => {
            this.setState({space_name: e.target.value})
          }
        } />
      <List subheader={<h4>Click a plant to add it to your space</h4>}>
          {this.state.availablePlants.map((plant) => {
            console.log('Mapping :', plant);
            return (<ListItem key={counter++} primaryText={plant} onTouchTap={() => {

                this.setState({space_plants: [...this.state.space_plants, plant]});
              }}/>);
          })}
        </List>
      </Card>
    );
  }

  handleSave() {
    const space = {
      image_url: this.state.image_url,
      space_name: this.state.space_name,
      category: this.state.category,
      light: this.state.light,
      humidity: this.state.humidity,
      temperature: this.state.temperature,
      space_plants: this.state.space_plants,
    };

    if(!this.props.selectedInspiration) {
      return this.props.updatedSpace(space);
    }
    console.log('creating space: ', space);
    this.props.create(space);
  }

  //display edit or save button depending on current editMode state
  getHeaderButton() {
    // if(!this.state.editMode){
    //   return (
    //     <FlatButton label="Save" onTouchTap={() => this.handleSave} />
    //   );
    // }
    let saveBtn;
    if(!this.props.auth) {
      saveBtn = <Login />
    }else {
      saveBtn = <FlatButton label="Save" onTouchTap={() => this.handleSave()} />
    }
    return (
      <div>
        {saveBtn}
        <FlatButton label="Edit" onTouchTap={() => this.setState({editMode: !this.state.editMode})} />
      </div>

    );
  }

  render() {
    return (
      <Card>
        <CardHeader title={this.state.space_name} actAsExpander={true} children={this.getHeaderButton()}>
        </CardHeader>
        <CardText>
          <div>
            <div style={{display:'inline-block', margin: '20px', width: '200px', height: '200px'}}>
              <image style={{width: '100%'}} src={this.state.image_url}/>
            </div>
            <div style={{display:'inline-block', margin: '20px'}}>
              <Paper children={<h4>Light: {this.state.light}</h4>}/>
              <Paper children={<h4>Humidity: {this.state.humidity}</h4>}/>
              <Paper children={<h4>temperture: {this.state.temperature}</h4>}/>
            </div>
          </div>
          <List subheader={<h4>{this.state.space_name}</h4>}>
            {this.renderPlants()}
            <ListItem primaryText='Test items' />
          </List>
        </CardText>
        <CardActions>
          {this.state.editMode ? this.displayEditMode(): null}
        </CardActions>
      </Card>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updatedSpace }, dispatch);
}

function mapStateToProps(state) {
  console.log('mapping state to props in space.js', state);
  return {
    auth : state.isAuthorized.token || null
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Space);
