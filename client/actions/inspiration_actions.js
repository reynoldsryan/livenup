//////////////
//imports
//////////////
import axios from 'axios'; // to handle http requests to api

//////////////
//end imports
//////////////

/////////////////
//Fetch inspirations based on space selected in previous page
/////////////////

export const FETCH_SPACE_INSPIRATIONS = "FETCH_SPACE_INSPIRATIONS";
//TODO replace hardcoded setTimeout with api call

const request = axios.get('/inspirations', {
    inspirations: {
      category: bathroom
    }
  })
  .catch((response) => {
    if (response instanceof Error) {
      console.error('GET | Error sending reponse', response);
    } else {
      console.log('GET | error from server', response);
    }
  });

return {
  type: FETCH_SPACE_INSPIRATIONS,
  payload: request
}
}

//////////////////
//end fetch
////////////////
