import ACTION_TYPES from '../../Actions/ActionsType';

const INITIAL_STATE = {
	projectNameRes : ''
}

export default 	(state = INITIAL_STATE, action) => {

	switch(action.type){

		case ACTION_TYPES.GET_PROJECT_NAME_RES:
			return {...state, projectNameRes: action.payload}

		case ACTION_TYPES.CLEAR_PROJECT_NAME_RES:
			return {...state, projectNameRes: ''}

		default:
			return state;
	}

};
