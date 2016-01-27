import { FETCH_USER_PLOTS } from '../actions/index';

import { ADD_PLOT, REMOVE_PLOT, RENAME_PLOT } from '../actions/index';
import { ADD_PLANT, REMOVE_PLANT } from '../actions/index';

export default function(state = null, action) {
  console.log('Redcer state:',state,'action',action);
  switch (action.type) {
    case FETCH_USER_PLOTS:
      console.log('Fetch user plots, payload:', action.paylaod);
      return action.payload.data;
      break;
    case ADD_PLOT:
      console.log('Add plot, payload:', action.payload);
      return {
        plants: [...state.plants],
        plots: [...state.plots, action.payload.newPlot]
      };
      break;
    case REMOVE_PLOT:
      console.log('Remove plot, payload:', action.payload);
      let plotIndex = null;
      state.plots.forEach((plot, i) => {
        console.error('plot',plot);
        if(plot.name === action.payload.plotName) {
          plotIndex = i;
        }
      });
      let plots = state.plots.slice();
      console.log('index of plot', plotIndex);
      plots.splice(plotIndex, 1);
      return {
        plants: state.plants.slice(),
        plots: plots
      };
      break;

    case RENAME_PLOT:
      console.log('Renaming plot, payload: ',action.payload);
      let updatedPlots = state.plots.slice();
      updatedPlots.forEach((v) => {
        if(v.name === action.payload.targetPlot) {
          const newName = action.payload.newPlotName;
          console.log('Renaiming plot:',v.name,'to', newName);
          v.name = newName;
        }
      });
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
