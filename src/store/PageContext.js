import React from 'react';
import { HtmlPageContent, saveAsHtml } from '../utils';

const { Provider, Consumer } = React.createContext();

class PageProvider extends React.Component {
  state = {
    imgLink: null,
    bannerText: 'Banner Heading Text',
    actionText: 'Call To Action Text'
  };

  handleChange = evt => {
    evt.preventDefault();
    const { value, name } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { actionText, bannerText, imgLink } = this.state;
    if (actionText && bannerText && imgLink) {
      saveAsHtml(HtmlPageContent(this.state));
    } else {
      alert(
        'Please Choose banner photo ,Banner Heading Text and Call To Action Text!'
      );
    }
  };

  handleFileChange = e => {
    const file = e.target.files[0];
    const fileType = file.type.split('/')[1];

    if (fileType === 'png' || fileType === 'jpg' || fileType === 'jpeg') {
      const fileReader = new FileReader();
      const { changeImage } = this;
      fileReader.onload = function() {
        changeImage(this.result);
      };

      if (file) fileReader.readAsDataURL(file);
    } else {
      alert('Uploaded file is not a valid image!');
    }
  };

  changeImage = imgLink => this.setState({ imgLink });

  render() {
    return (
      <Provider
        value={{
          page: this.state,
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit,
          handleFileChange: this.handleFileChange
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { PageProvider, Consumer as PageConsumer };
