export const ADDSONG = (playlist, song) => {
    return {
        type: 'ADDSONG',
        payload: {playlist:playlist, song:song}
    }
}
