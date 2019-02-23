import { saveAs } from 'file-saver';

export default byteData => {
  var blob = new Blob([byteData], {
    type: 'text/plain;charset=utf-8;'
  });
  var fileName = 'generated-page.html';
  saveAs(blob, fileName);
};
