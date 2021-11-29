export const START_SCREEN = 'START_SCREEN';
export const PLAYING = 'PLAYING';
export const GAME_OVER = 'GAME_OVER';

export const startScreenAction = () => ({
    type: START_SCREEN,
});
export const playingAction = () => ({
    type: PLAYING,
});
export const gameOverAction = () => ({
    type: GAME_OVER,
});

const initialState = {
    type: 'START_SCREEN',
  };

const gameOnReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_SCREEN :
        return { type: 'START_SCREEN'};
        case PLAYING :
        return { type: 'PLAYING'};
        case GAME_OVER :
        return { type: 'GAME_OVER'};
        default:
            return state;
    }
}

export default gameOnReducer;