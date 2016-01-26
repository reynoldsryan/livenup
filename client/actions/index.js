export const FETCH_USER_PLOTS = 'FETCH_USER_PLOTS';

export const ADD_PLOT = 'ADD_PLOT';
export const REMOVE_PLOT = 'REMOVE_PLOT';
export const RENAME_PLOT = 'RENAME_PLOT';

export const ADD_PLANT = 'ADD_PLANT';
export const REMOVE_PLANT = 'REMOVE_PLANT';

let dummyData = {
  plants: [],
  plots : [
    {
      name: 'Plot one',
      length : 4,
      width: 2,
      plants: [{name: 'sunflower', description: 'Meh, a flower.'}]
    }
  ]
}

export function fetchUserPlots() {
  console.log('fetching user data');
  const fakeRequest = new Promise(function(resolve, reject){
    setTimeout(function () {
      console.log('fetched user data!');
      resolve({data: dummyData});
    }, 500);
  });

  return {
    type: FETCH_USER_PLOTS,
    payload: fakeRequest
  }
}

export function addPlot(newPlot) {
  console.log('calling addPlot in actions/index.js with arg', newPlot);
  return {
    type: ADD_PLOT,
    payload: { newPlot }
  }
}

export function removePlot(plotName) {

  return {
    type: REMOVE_PLOT,
    payload: { plotName }
  }
}

export function renamePlot(targetPlot, newPlotName) {

  return {
    type: RENAME_PLOT,
    payload: {
      targetPlot: targetPlot,
      newPlotName: newPlotName
    }
  }
}

export function addPlant(plant, targetPlotName, plotSpace) {

  return {
    type: ADD_PLANT,
    payload: {
      targetPlotName: targetPlotName,
      plant: plant,
      plotSpace: plotSpace
    }
  }
}

export function removePlant(targetPlotName, plotSpace) {

  return {
    type: REMOVE_PLANT,
    payload: {
      targetPlotName: targetPlotName,
      plotSpace, plotSpace
    }
  }
}
