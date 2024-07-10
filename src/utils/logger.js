const { log } = console;

module.exports = {
    info: (message) => log(`INFO: ${message}`),
    warn: (message) => log(`WARN: ${message}`),
    error: (message) => log(`ERROR: ${message}`)
};
