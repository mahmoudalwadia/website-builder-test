import React from 'react';
import { htmlPageContent, saveAsHtml, isImage } from '../utils';
import {
  EMPTY_INPUT_MESSAGE,
  VALID_IMAGE_MESSAGE
} from '../constants/messages';
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
      saveAsHtml(htmlPageContent(this.state));
    } else {
      alert(EMPTY_INPUT_MESSAGE);
    }
  };

  handleFileChange = e => {
    const file = e.target.files[0];
    const fileType = file.type.split('/')[1];

    if (isImage(fileType)) {
      const fileReader = new FileReader();
      const { changeImage } = this;
      fileReader.onload = function() {
        changeImage(this.result);
      };

      if (file) fileReader.readAsDataURL(file);
    } else {
      alert(VALID_IMAGE_MESSAGE);
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
