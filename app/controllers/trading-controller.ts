import { Trading } from "../models/trading.js";
import { Tradings } from "../models/tradings.js";
import { DayOfWeek } from "../enums/day-of-week.js";
import { MessageView } from "../views/message-view.js";
import { TradingsView } from "../views/tradings-view.js";

export class TradingController {
  private _inputDate: HTMLInputElement;
  private _inputQuantity: HTMLInputElement;
  private _inputValue: HTMLInputElement;
  private _tradings = new Tradings();
  private _tradingsView = new TradingsView('#negociacoesView', true);
  private _messageView = new MessageView('#mensagemView');

  constructor() {
    this._inputDate = document.querySelector('#data') as HTMLInputElement;
    this._inputQuantity = document.querySelector('#quantidade') as HTMLInputElement;
    this._inputValue = document.querySelector('#valor') as HTMLInputElement;
    this._tradingsView.update(this._tradings);
  }

  public addTrading(): void {
    const trading = Trading.createTrading(this._inputDate.value,
                                          this._inputQuantity.value,
                                          this._inputValue.value);

    if (!this.isWeekDay(trading.date)) {
      this._messageView.update("Somente negociações em dias úteis são permitidas!");

      return;
    }

    this._tradings.add(trading);
    this.updateView();
    this.clearForm();
  }
  
  private updateView() {
    this._tradingsView.update(this._tradings);
    this._messageView.update("Negociação adicionada com sucesso!");
  }

  private isWeekDay(date: Date) {
    return date.getDay() > DayOfWeek.SUNDAY &&
           date.getDay() < DayOfWeek.SATURDAY;
  }
  
  private clearForm(): void {
    this._inputDate.value = '';
    this._inputQuantity.value = '';
    this._inputValue.value = '';
    this._inputDate.focus();
  }
}