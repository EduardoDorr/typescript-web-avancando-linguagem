import { View } from "./view.js";
export class TradingsView extends View {
    template(model) {
        return `
      <table class="table table-hover table-hovered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          ${this.populateList(model)}
        </tbody>
      </table>
    `;
    }
    populateList(model) {
        return model.getAll()
            .map(trading => this.createItem(trading))
            .join('');
    }
    createItem(trading) {
        return `
              <tr>
                <td>${this.formatDate(trading)}</td>
                <td>${trading.quantity}</td>
                <td>${trading.value}</td>
              </tr>
            `;
    }
    formatDate(trading) {
        return new Intl.DateTimeFormat().format(trading.date);
    }
}
