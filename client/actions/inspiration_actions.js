export const FETCH_SPACE_INSPIRATIONS = "FETCH_SPACE_INSPIRATIONS";

export const fetchInspirations = () => {
  let request = new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log('+++ inspiration_actions.js about to resolve');
        resolve ({
              message: "Successfully returned faked data",
              data: [{
                imageUrl: 'http://www.lovethispic.com/uploaded_images/120311-Pretty-Flowers.jpg',
                category: 'bathroom',
                plants: ['flower1', 'flower2', 'flower3']
              }]
          })
      }, 300);
  });

  return {
    type: FETCH_SPACE_INSPIRATIONS,
    payload: request
  }
}
