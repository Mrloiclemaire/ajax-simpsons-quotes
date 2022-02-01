
function fecthSimpsons() {
   
  
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data; // response.data instead of response.json() with fetch
      })
      .then(function(simpsonsQuote) {
        console.log('data decoded from JSON:', simpsonsQuote[0]);
  
        // Build a block of HTML
        const simpsonsHtml = `
          <p><strong>${simpsonsQuote[0].character}</strong></p>
          <img src="${simpsonsQuote[0].image}" />
          <p>${simpsonsQuote[0].quote}</p>
        `;
        document.querySelector('#simpsonsDiv').innerHTML = simpsonsHtml;
      });
  }
  
  fecthSimpsons();
  