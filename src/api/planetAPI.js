class planetAPI {  
    static getAllPlanets() {
      return fetch('https://swapi.co/api/people/?format=json').then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
    }
}
  export default planetAPI;  