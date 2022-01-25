module.exports = {
    app: {
        px: 'z.',
        token: process.env['TOKEN'],
        playing: 'z.help by Zero',
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 30,
        discordPlayer: {}

    }
}