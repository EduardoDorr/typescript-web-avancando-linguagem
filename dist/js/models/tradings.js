export class Tradings {
    constructor() {
        this._tradings = [];
    }
    add(trading) {
        this._tradings.push(trading);
    }
    getAll() {
        return this._tradings;
    }
}
