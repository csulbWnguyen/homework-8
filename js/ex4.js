const traveler = {
    name: "Sam",
    countries: [
      {
        name: "Ecuador",
        year: 2005
      },
      {
        model: "Portugal",
        color: 2004
      },
      {
        model: "Russia",
        color: 2016
      }
    ]
  };
  
fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(traveler)
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err.message);
  }); 