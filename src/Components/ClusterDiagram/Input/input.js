import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.addClick = this.addClick.bind(this);
    this.textInput = React.createRef();
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      showModal: false,
      modalMessage: '',
    };
  }

  addClick() {
    if (this.textInput.current.value != '') {
      this.props.addInfo(this.textInput.current.value);
      this.textInput.current.value = '';
    } else {
      this.props.showModal('Please Enter a non empty value');
    }
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <InputGroup className='mb-1'>
          <InputGroup.Prepend>
            <InputGroup.Text id='inputGroup-sizing-default'>
              Enter {this.props.currentSelected === 'topic' ? 'Topic' : 'Idea'}
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label='Default'
            aria-describedby='inputGroup-sizing-default'
            ref={this.textInput}
          />
          <Button onClick={() => this.addClick()}>Add </Button>
        </InputGroup>
      </div>
    );
  }
}

export default Input;
