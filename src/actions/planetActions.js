import * as types from './actionTypes';
import planetAPI from '../api/planetAPI';

export function loadPlanets() {  
  return function(dispatch) {
    return planetAPI.getAllPlanets().then(planets => {
      dispatch(loadPlanetsSuccess(planets));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadPlanetsSuccess(planets) {  
    return {type: types.LOAD_PLANETS_SUCCESS, planets};
  }

/* export function loginAction(planets) {  
    return {type: types.LOGIN_USING_PLANET, planets};
  } */