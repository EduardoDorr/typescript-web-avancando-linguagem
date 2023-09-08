export class View {
    constructor(selector, escape) {
        this._escape = false;
        const element = document.querySelector(selector);
        if (element) {
            this._element = element;
        }
        else {
            throw new Error(`O seletor ${selector} não existe no DOM.`);
        }
        if (escape != undefined) {
            this._escape = escape;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this._escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._element.innerHTML = template;
    }
}
