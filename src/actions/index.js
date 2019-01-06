// TODO: add and export your own actions
export default function selectEpisode(episode) {
  var id = episode.id
  player.loadVideoById(id);

  return {
    type: 'EPISODE_SELECTED',
    payload: episode
  };
}
