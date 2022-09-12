export default class {
  editor: wangEditor
  constructor(el: string,  config: {[key:string]:any}) {
    this.editor = new wangEditor(el);
    this.editor.config.height = 500;
    this.editor.create();
  }
}
