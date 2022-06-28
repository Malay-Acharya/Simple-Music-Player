export const ADDSONG = (playlist, song) => {
    return {
        type: 'ADDSONG',
        payload: {playlist:playlist, song:song}
    }
}

export const CHANGESONG = (song) => {
    return {
        type: 'CHANGESONG',
        payload: {song:song}
    }
}
