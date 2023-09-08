import { Trading } from "../models/trading.js";
import { Tradings } from "../models/tradings.js";
import { DayOfWeek } from "../enums/day-of-week.js";
import { MessageView } from "../views/message-view.js";
import { TradingsView } from "../views/tradings-view.js";
export class TradingController {
    constructor() {
        this._tradings = new Tradings();
        this._tradingsView = new TradingsView('#negociacoesView', true);
        this._messageView = new MessageView('#mensagemView');
        this._inputDate = document.querySelector('#data');
        this._inputQuantity = document.querySelector('#quantidade');
        this._inputValue = document.querySelector('#valor');
        this._tradingsView.update(this._tradings);
    }
    addTrading() {
        const trading = Trading.createTrading(this._inputDate.value, this._inputQuantity.value, this._inputValue.value);
        if (!this.isWeekDay(trading.date)) {
            this._messageView.update("Somente negociações em dias úteis são permitidas!");
            return;
        }
        this._tradings.add(trading);
        this.updateView();
        this.clearForm();
    }
    updateView() {
        this._tradingsView.update(this._tradings);
        this._messageView.update("Negociação adicionada com sucesso!");
    }
    isWeekDay(date) {
        return date.getDay() > DayOfWeek.SUNDAY &&
            date.getDay() < DayOfWeek.SATURDAY;
    }
    clearForm() {
        this._inputDate.value = '';
        this._inputQuantity.value = '';
        this._inputValue.value = '';
        this._inputDate.focus();
    }
}
