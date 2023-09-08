export abstract class View<T> {
  protected _element: HTMLElement
  private _escape: boolean = false;

  constructor(selector: string, escape?: boolean) {
    const element = document.querySelector(selector);

    if (element) {
      this._element = element as HTMLElement;
    }
    else {
      throw new Error(`O seletor ${selector} não existe no DOM.`);
    }

    if (escape != undefined) {
      this._escape = escape;
    }
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    let template = this.template(model);

    // gordo

    if (this._escape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }

    this._element.innerHTML = template;
  }
}