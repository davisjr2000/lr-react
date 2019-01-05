// TODO: add and export your own actions
export default function selectEpisode(episode) {
  return {
    type: 'EPISODE_SELECTED',
    payload: episode
  };
}
