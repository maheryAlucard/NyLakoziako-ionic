const getContrastBg = (bg: number) => {
    const ref: any = {
        40: 37,
        41: 37,
        42: 37,
        43: 30,
        44: 37,
        45: 30,
        46: 30,
        47: 30,
    }
    return ref[bg] ?? 37
}
const setLogColor = (color: number) => 
((...all: any[]) => console.log(`${color > 37 ? `\x1b[${getContrastBg(color)}m` : ''}\x1b[${color}m%s\x1b[0m`, ...all));

export const _log = {
    FgBlack: setLogColor(30),
    FgRed: setLogColor(31),
    FgGreen: setLogColor(32),
    FgYellow: setLogColor(33),
    FgBlue: setLogColor(34),
    FgMagenta: setLogColor(35),
    FgCyan: setLogColor(36),
    FgWhite: setLogColor(37),
    BgBlack: setLogColor(40),
    BgRed: setLogColor(41),
    BgGreen: setLogColor(42),
    BgYellow: setLogColor(43),
    BgBlue: setLogColor(44),
    BgMagenta: setLogColor(45),
    BgCyan: setLogColor(46),
    BgWhite: setLogColor(47),
}