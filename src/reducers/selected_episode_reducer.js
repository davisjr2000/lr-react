export default function(state = null, action) {
  switch (action.type) {
    case 'EPISODE_SELECTED': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
