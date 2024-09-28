class ExpressError extends Error {
    constructor(message, status) {
        super();  // Pass the message to the parent Error class
        this.message=message;
        this.status = status;
    }
}

module.exports = ExpressError;
