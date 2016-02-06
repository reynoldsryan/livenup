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

const iconStyles = {
  margin: '24px',
  float: 'right'
};

const buttonStyles = {
  float: 'right'
};

class Space extends Component {
  constructor(props) {
    super(props);
    if(!this.props.fetchedSpace) {
      this.state = {
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
      return  (<Paper key={counter++} children={<h4><Flower color={Colors.greenA400}/>
      <strong>  {plant.toUpperCase()}  </strong>
      <span style={{float: 'right'}}><Sun color={Colors.yellowA400}/><Water color={Colors.blueA400}/><Temp color={Colors.deepOrangeA400}/></span></h4>}>

        </Paper>);
    });
    console.log('-------listItems',listItems);
    return listItems;
  }

  //Display the edit mode
  displayEditMode() {
    let counter = 0;
    console.log('---------------space ', this.state);
    // return (
    //   <Card>
    //     <TextField value={this.state.space_name} onChange={(e) => {
    //         this.setState({space_name: e.target.value})
    //       }
    //     } />
    //   <List subheader={<h4>Click a plant to add it to your space</h4>}>
    //       {this.state.inspiried_plants.map((plant) => {
    //         console.log('Mapping :', plant);
    //         return (<ListItem key={counter++} primaryText={plant} onTouchTap={() => {
    //
    //             this.setState({space_plants: [plant, ...this.state.space_plants,]});
    //           }}/>);
    //       })}
    //     </List>
    //   </Card>
    // );
    return (this.state.inspiried_plants.map((plant) => {
      console.log('Mapping :', plant);
      return (<MenuItem key={counter++} primaryText={plant} onTouchTap={() => {

          this.setState({space_plants: [plant, ...this.state.space_plants,]});
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
      saveBtn = <FlatButton style={buttonStyles} label="Save" onTouchTap={() => this.handleSave()} />
    }
    return (
      <div>
        <h4 style={{display: 'inline-block'}}>{this.state.space_name}</h4>
        {saveBtn}
        <FlatButton style={buttonStyles} label="Edit" onTouchTap={() => this.setState({editMode: !this.state.editMode})} />
      </div>

    );
  }


  render() {
    return (
      <Card  initiallyExpanded={!!this.props.create} onExpandChange={() => {}}>
        <CardHeader  style={{backgroundColor: Colors.green300}} avatar={this.state.image_url} showExpandableButton={true} children={this.getHeaderButton()}>

        </CardHeader>
        <CardText expandable={true} style={{margin: 'auto 0', display: 'flex'}}  >

          <Divider />
            <LeftNav open={this.state.editMode}  onRequestChange={() => this.setState({editMode: false})}>
              <FlatButton style={buttonStyles} label="Done Adding Plants" onTouchTap={() => this.setState({editMode: !this.state.editMode})} />
              <TextField value={this.state.space_name} onChange={(e) => {this.setState({space_name: e.target.value})}}/>
              {this.state.editMode ? this.displayEditMode(): null}
            </LeftNav>
            <LeftNav  open={this.state.editMode} openRight={true} onRequestChange={() => this.setState({editMode: false})}>
              <List subheader={<h4>{this.state.space_name}</h4>}>
                {this.renderPlants()}
              </List>
            </LeftNav>


            <div style={{flex: '1', width: '100%', height: '100%'}}>
              <image style={{width: '100%'}} src={this.state.image_url}/>
                <Paper children={<h4><Sun style={{marginRight: '20px'}} color={Colors.yellowA400}/>Light: {this.state.light}</h4>}/>
                <Paper children={<h4><Water style={{marginRight: '20px'}} color={Colors.blueA400}/>Humidity: {this.state.humidity}</h4>}/>
                <Paper children={<h4><Temp style={{marginRight: '20px'}} color={Colors.deepOrangeA400}/>temperture: {this.state.temperature}</h4>}/>
            </div>
            <div style={{flex: '2'}}>
              <Paper style={{width: '100%'}}>
                    {this.renderPlants()}
              </Paper>
            </div>
        </CardText>
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
