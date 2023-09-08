import { Trading } from "./trading.js";

export class Tradings {
  private _tradings: Trading[] = [];

  public add(trading: Trading): void {
    this._tradings.push(trading);
  }

  public getAll(): readonly Trading[] {
    return this._tradings;
  }
}