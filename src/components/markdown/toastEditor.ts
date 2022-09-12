import { uploadImage } from '@/apis/uploadApi';

export default class {
  editor;
  constructor(
    private el: HTMLDivElement,
    height: string,
    initialValue: string
  ) {
    this.editor = new toastui.Editor({
      el,
      previewStyle: 'vertical',
      initialEditType: 'markdown',
      height,
      initialValue,
      hideModeSwitch: true,
      toolbarItems: this.toolbar() as [],
    });
    document.documentElement.addEventListener('keyup', (event) => {
      if (event.key == 'Escape') {
        el.classList.remove('fullscreen');
        this.editor.focus();
      }
    });
    this.ImageHook();
  }
  private toolbar() {
    return [
      ['heading', 'bold', 'italic', 'strike'],
      ['hr', 'quote'],
      ['ul', 'ol', 'task', 'indent', 'outdent'],
      ['table', 'image', 'link'],
      ['code', 'codeblock'],
      [
        {
          el: this.fullscreen(),
          command: 'fullscreen',
          tooltip: 'fullscreen',
        },
      ],
    ];
  }

  private fullscreen() {
    const button = document.createElement('button');
    button.innerHTML = '全屏';
    button.style.margin = '0';
    button.addEventListener('click', () => {
      this.el.classList.toggle('fullscreen');
    });
    return button;
  }

  private ImageHook() {
    this.editor.removeHook('addImageBlobHook');
    this.editor.addHook(
      'addImageBlobHook',
      async (blob: any, callback: Function) => {
        const form = new FormData();
        form.append('file', blob, blob.name);
        const response = await uploadImage(form);
        callback(response.data.url, blob.name);
      }
    );
  }
}
