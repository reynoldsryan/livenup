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

export function fetchInspirations(room) {
  console.log("+++ inspiration_actions.js value of passed arg room", room);
const request = axios.post('/inspirations', {
    inspirations: {
      category: room
    }
  })
  .catch((response) => {
    if (response instanceof Error) {
      console.error('GET | Error sending reponse', response);
    } else {
      console.log('GET | error from server', response);
    }
  })
return {
  type: FETCH_SPACE_INSPIRATIONS,
  payload: request
}
}

//////////////////
//end fetch
////////////////
