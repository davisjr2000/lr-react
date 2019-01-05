export default function(state = null, action) {
  switch (action.type) {
    case 'EPISODE_SELECTED': {
      return action.payload;
    }
    default: {
      return { title: "Naul" , id: 'yy8NwjEtEkQ' , number: 1, descripton: "Luan acaba de descobrir que tem um irmão secreto, assim, o observa travando uma batalha com o poderoso Lord Frene e nem imagina como essa batalha irá acabar."};
    }
  }
}
