
export function info () {
    console.log(...arguments) // eslint-disable-line
}

export function verbose () {
    console.log(...arguments) // eslint-disable-line
}

export function error () {
    console.error(...arguments) // eslint-disable-line
}

export default { info, error, verbose }
