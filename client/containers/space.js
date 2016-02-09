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
import Divider from 'material-ui/lib/divider';

import Colors from 'material-ui/lib/styles/colors';
import Sun from 'material-ui/lib/svg-icons/image/brightness-5';
import Water from 'material-ui/lib/svg-icons/action/invert-colors';
import Temp from 'material-ui/lib/svg-icons/social/whatshot';
import Flower from 'material-ui/lib/svg-icons/maps/local-florist';

import LeftNav from 'material-ui/lib/left-nav';
// import MenuItem from 'material-ui/lib/menus/menu-item';

import Login from './login';

import GridList from 'material-ui/lib/grid-list/grid-list';

import Plant from '../components/plant';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const iconStyles = {
  margin: '24px',
  float: 'right'
};

const buttonStyles = {
  float: 'right'
};

const whiteButtonStyles = {
  float: 'right',
  color: 'white'
};

class Space extends Component {
  constructor(props) {
    super(props);
    if(!this.props.fetchedSpace) {
      this.state = {
        expanded: false,
        editMode: true,
          image_url: this.props.selectedInspiration.image_url,
          space_name: this.props.selectedInspiration.category,
          category: this.props.selectedInspiration.category,
          light: 'medium',
          humidityLevel: 'medium',
          temperature: 'high',
          space_plants: [],
        inspiried_plants: this.props.selectedInspiration.plantsArray
      };
    }else {
      this.state = {
        expanded:false,
        editMode: false,
          image_url: this.props.fetchedSpace.space_image,
          space_name: this.props.fetchedSpace.space_name,
          category: this.props.fetchedSpace.category,
          light: this.props.fetchedSpace.light,
          humidity: this.props.fetchedSpace.humidity,
          temperature: this.props.fetchedSpace.temperature,
          space_plants: this.props.fetchedSpace.space_plants,
        inspiried_plants: this.props.fetchedSpace.space_plants
    }

      this.renderPlants.bind(this);
      this.getHeaderButton.bind(this);
      this.displayEditMode.bind(this);
    }

  }

  renderPlants() {
    let counter = 100;
    const listItems = this.state.space_plants.map((plant) => {
      if(typeof plant === 'object') {
        plant.name = plant.name.charAt(0).toUpperCase() + plant.name.slice(1);
      }
      if(typeof plant === 'string') {

        plant = {name: plant.charAt(0).toUpperCase() + plant.slice(1), thumbnail: ''};
      }
      return  (<Plant key={counter++} plant={plant}/>);
    });
    console.log('-------listItems',listItems);
    return listItems;
  }


  displayEditMode() {
    let counter = 0;

    return (this.state.inspiried_plants.map((plant) => {
      if(typeof plant === 'object') {
        plant.name = plant.name.charAt(0).toUpperCase() + plant.name.slice(1);
      }
      if(typeof plant === 'string') {

        plant = {name: plant.charAt(0).toUpperCase() + plant.slice(1), thumbnail: ''};
      }
      console.log('Mapping :', plant);
      return (<MenuItem key={counter++} primaryText={plant.name} onTouchTap={() => {
          this.setState({space_plants: [plant, ...this.state.space_plants]});
        }}/>);
    }));
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
      inspiried_plants: this.state.inspiried_plants
    };

    if(!this.props.selectedInspiration) {
      return this.props.updatedSpace(space);
    }
    console.log('creating space: ', space);
    this.props.create(space);
  }

  getHeaderButton() {
    let saveBtn;
    if(!this.props.auth) {
      saveBtn = <Login />
    }else {
      if(!this.props.selectedInspiration){
        saveBtn = <FlatButton style={whiteButtonStyles} label="Update" onTouchTap={() => this.handleSave()} />
      } else {
        saveBtn = <FlatButton style={whiteButtonStyles} label="Save" onTouchTap={() => this.handleSave()} />
    }
    return (
      <div style={{color: Colors.green50}}>
        <h4 style={{display: 'inline-block'}}>{this.state.space_name}</h4>
        {saveBtn}
        <FlatButton style={whiteButtonStyles} label="Edit" onTouchTap={() => this.setState({editMode: !this.state.editMode})} />
      </div>

    );
  }
}

  render() {
    return (
      <div>
        <Card
          style={{border: '2px solid black', boxShadow: 'none'}}
          onExpandChange={() => this.setState({expanded: !this.state.expanded})}
          initiallyExpanded={(this.state.editMode || !!this.props.create)}>
          <CardHeader
            style={{backgroundColor: Colors.green900, border: 'solid black', borderWidth: '0px 0px 2px 0px', color: 'white'}}
            actAsExpander={true}
            showExpandableButton={true}
            children={this.getHeaderButton()}>
          </CardHeader>
          <CardText
            expandable={true}
            style={{margin: 'auto 0', display: 'flex'}}>
            <LeftNav
              open={this.state.editMode}
              openRight={true}
              onRequestChange={() => this.setState({editMode: false})}>
              <FlatButton
                style={buttonStyles}
                label="Done"
                onTouchTap={() => this.setState({editMode: !this.state.editMode})} />
              <TextField
                value={this.state.space_name}
                onChange={(e) => {this.setState({space_name: e.target.value})}}/>
              {this.state.editMode ? this.displayEditMode(): null}
            </LeftNav>
            <Divider />
              <div
                style={{flex: '1', width: '100%', height: '100%'}}>
                <image
                  style={{width: '100%'}} src={this.state.image_url}/>
              </div>
              <div
                style={{flex: '2', paddingLeft: '10px'}}>
                <GridList
                  style={{width: '100%'}}
                  cols={3}
                  padding={10}
                  cellHeight={150}>
                    {this.renderPlants()}
                </GridList>
              </div>
          </CardText>
        </Card>
      <div style={{marginBottom: '20px'}}></div>
    </div>);
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
