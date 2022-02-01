
function fecthSimpsons() {
   
  
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data; // response.data instead of response.json() with fetch
      })
      .then(function(simpsons) {
        console.log('data decoded from JSON:', simpsons);
  
        // Build a block of HTML
        const simpsonsHtml = `
          <p><strong>${simpsons.character}</strong></p>
          <img src="${simpsons.image}" />
          <p>${simpsons.quote}</p>
        `;
        document.querySelector('#simpsonsDiv').innerHTML = simpsonsHtml;
      });
  }
  
  fecthSimpsons();
  