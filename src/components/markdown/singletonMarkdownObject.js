import SimpleMDE from 'simplemde';

let instance = null;
const el = document.createElement('div');
el.innerHTML = '<textarea></textarea>';
const getInstance = () => {
  if (!instance) {
    instance = new SimpleMDE({
      autoDownloadFontAwesome: false,
      element: el.getElementsByTagName('textarea')[0],
      spellChecker: false,
      blockStyles: {
        bold: '**',
        italic: '*',
        code: '`',
      },
    });
  }
  return instance;
};

export const SingletonMarkdownObject = { getInstance };
