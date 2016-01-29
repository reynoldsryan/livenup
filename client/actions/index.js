import axios from 'axios';

export const FETCH_USER_PLOTS = 'FETCH_USER_PLOTS';
export const PLANT_SEARCH = 'PLANT_SEARCH';

export const ADD_PLOT = 'ADD_PLOT';
export const REMOVE_PLOT = 'REMOVE_PLOT';
export const UPDATE_PLOT = 'UPDATE_PLOT';

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
  // const fakeRequest = new Promise(function(resolve, reject){
  //   setTimeout(function () {
  //     console.log('fetched user data!');
  //     resolve({data: dummyData});
  //   }, 500);
  // });
  const request = axios.get('/plot', {params: {user: 'oliver'}})
                  .catch((response) => {
                    if(response  instanceof Error) {
                      console.error('GET | Error sending reponse',response);
                    }else {
                      console.log('GET | error from server', response);
                    }
                  });

  // return {
  //   type: FETCH_USER_PLOTS,
  //   payload: fakeRequest
  // }
  return {
    type: FETCH_USER_PLOTS,
    payload: request
  }
}

export function plantSearch(plant) {
  console.log('Searching for plants matching:',plant);
  const requestResults = new Promise(function(resolve, reject) {
    setTimeout(function () {
      resolve(['sunflower', 'daisy', 'carrot', 'potato']);
    }, 300);
  });

  return {
    type: PLANT_SEARCH,
    payload: requestResults
  }
}

export function addPlot(newPlot) {
  console.log('calling addPlot in actions/index.js with arg', newPlot);
  const request = axios.post('/plot', {
    data: {
      user: 'Oliver',
      plot: newPlot
    }
  }).catch((response) => {
    if(response  instanceof Error) {
      console.error('POST | Error sending reponse',response);
    }else {
      console.log('POST | error from server', response);
    }
  });

  // return {
  //   type: ADD_PLOT,
  //   payload: { newPlot }
  // }
  return {
    type: ADD_PLOT,
    payload: request
  }
}

export function removePlot(plotId) {
  const request = axios.delete('/plot', {params: {id: plotId}})
                  .catch((response) => {
                    if(response  instanceof Error) {
                      console.error('DELETE | Error sending reponse',response);
                    }else {
                      console.log('DELETE | error from server', response);
                    }
                  });
  // return {
  //   type: REMOVE_PLOT,
  //   payload: { plotId }
  // }
  return {
    type: REMOVE_PLOT,
    payload: request
  }
}

export function updatePlot(updatedPlot) {
  console.log('TRYING TO UPDATE PLOT',updatePlot);
  const request = axios.put('/plot', {
                    data: {
                      plot: updatedPlot
                    }
                  })
                  .catch((response) => {
                    if(response  instanceof Error) {
                      console.error('DELETE | Error sending reponse',response);
                    }else {
                      console.log('DELETE | error from server', response);
                    }
                  });

  return {
    type: UPDATE_PLOT,
    payload: request
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
