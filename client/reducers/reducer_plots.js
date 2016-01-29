import { FETCH_USER_PLOTS } from '../actions/index';

import { ADD_PLOT, REMOVE_PLOT, UPDATE_PLOT } from '../actions/index';
import { ADD_PLANT, REMOVE_PLANT } from '../actions/index';

export default function(state = null, action) {
  console.log('Redcer state:',state,'action',action);
  switch (action.type) {
    case FETCH_USER_PLOTS:
      console.log('Fetch user plots, payload:', action.payload);
      return {
        plots: action.payload.data,
        plants: []
      };
      break;
    case ADD_PLOT:
      console.log('Add plot, payload:', action.payload);
      if(action.payload.data) {
        return {
          plants: [...state.plants],
          plots: [...state.plots, action.payload.data.data]
        };
      }else {
      return {
          plants: [...state.plants],
          plots: [...state.plots]
        };
      }
      break;
    case REMOVE_PLOT:
      console.log('Remove plot, payload:', action.payload);
      let plotIndex = null;
      if(action.payload.data.data.message === "Successfully deleted plot") {
        state.plots.forEach((plot, i) => {
          console.error('plot',plot);
          if(plot._id === action.payload.data.data._id) {
            plotIndex = i;
          }
        });
      }
      // else {
      //   console.error('Error deleting plot id: ', action.payload.plotId);
      // }
      let plots = state.plots.slice();
      console.log('index of plot', plotIndex);
      if(plotIndex >= 0) {
        plots.splice(plotIndex, 1)
        return {
          plants: state.plants.slice(),
          plots: plots
        };
      }
      return state;
      break;

    case UPDATE_PLOT:
      console.log('Updating plot plot, payload: ',action.payload);
      let updatedPlots = state.plots.slice();;

      if(action.payload.data.message === "Successfully updated the plot") {

        state.plots.forEach((plot, i) => {
          console.error('plot',plot);
          if(plot._id === action.payload.data.data._id) {
            console.log('plot._id === action.payload.data.data._id',plot._id === action.payload.data.data._id);
            updatedPlots[i] = action.payload.data.data;
          }
        });
      }
      console.log('Updated Plots', updatedPlots);
      return {
        plants: state.plants.slice(),
        plots: updatedPlots
      }
      break;

    case ADD_PLANT:
      break;
    case REMOVE_PLANT:

  }
  return state
}
