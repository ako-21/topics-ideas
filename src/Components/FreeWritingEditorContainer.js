import React from 'react'
import Container from 'react-bootstrap/Container'
import FreeWritingEditorNavigation from './FreeWritingEditorNavigation'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import FreeWritingEditor from './FreeWritingEditor'

class FreeWritingEditorContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      data: [],
      active: 'topicInstruction',
      showModal: false,
      modalMessage: ''
    }
    this.textInput = React.createRef()
    this.navBarClick = this.navBarClick.bind(this)
    this.addClick = this.addClick.bind(this)
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.currentData = this.currentData.bind(this)
    this.addData = this.addData.bind(this)
    this.addTopic = this.addTopic.bind(this)
  }

  navBarData () {
    return this.state.data.map((x) => x.topic)
  }

  navBarClick (event) {
    this.setState({
      active: event.target.dataset.name
    })
  }

  showModal (msg) {
    this.setState({ showModal: true, modalMessage: msg })
  }

  hideModal () {
    this.setState({ showModal: false, modalMessage: '' })
  }

  currentData () {
    return this.state.data.find((x) => x.topic === this.state.active)
  }

  addClick () {
    if (this.textInput.current.value !== '') {
      const value = this.textInput.current.value
      this.textInput.current.value = ''
      const exists = this.state.data.find((x) => x.topic === value)
      if (!exists) {
        const dataInsert = [...this.state.data, { topic: value, ideas: [] }]
        this.setState({ data: dataInsert })
        this.setState({ active: value })
      } else {
        this.showModal('A topic with the same name already exists')
      }
    } else {
      this.showModal('Please Enter a non empty value')
    }
  }

  addData (topic) {
    const stateData = this.state.data
    stateData.find((x) => x.topic === topic.topic).ideas = topic.ideas
    this.setState({ data: stateData })
  }

  addTopic (value) {
    const exists = this.state.data.find((x) => x.topic === value)
    if (!exists) {
      const dataInsert = [...this.state.data, { topic: value, ideas: [] }]
      this.setState({ data: dataInsert })
      this.setState({ active: value })
    } else {
      this.showModal('A topic with the same name already exists')
    }
  }

  render () {
    const isEntry = this.state.active === ''
    const topicInstruction = this.state.active === 'topicInstruction'
    return (
      <Container fluid>
      {topicInstruction && (
        <div>
          <p style={{ textAlign: 'center' }}>Now it&apos;s your turn! Add a topic you want to free write. After you click Submit, you&apos;ll be taken to your free writing session!</p>
          <Form className="mt-5" onSubmit={this.addClick}>
            <Form.Row className="mt-1 col-12">
              <Col className="col-10">
                <Form.Control
                  ref={this.textInput}
                  as="input"
                  required
                  placeholder='Topic' />
              </Col>
              <Col className="col-2">
                <Button type="submit" variant="dark" size="small">Submit</Button>
              </Col>
            </Form.Row>
          </Form>
        </div>
      )}
        {!isEntry && !topicInstruction && (
          <div>
            <FreeWritingEditorNavigation
            data={this.navBarData()}
            active={this.state.active}
            navBarClick={this.navBarClick}
          ></FreeWritingEditorNavigation>
            <FreeWritingEditor
              data={this.currentData()}
              addData={this.addData}
              addTopic={this.addTopic}
            ></FreeWritingEditor>
          </div>
        )}
        {isEntry && (
          <div>
            <FreeWritingEditorNavigation
            data={this.navBarData()}
            active={this.state.active}
            navBarClick={this.navBarClick}
          ></FreeWritingEditorNavigation>
            <Form className="mt-5" onSubmit={this.addClick}>
              <Form.Row className="mt-1 col-12">
                <Col className="col-10">
                  <Form.Control
                    ref={this.textInput}
                    as="input"
                    required
                    placeholder='Topic' />
                </Col>
                <Col className="col-2">
                  <Button type="submit" variant="dark" size="small">Submit</Button>
                </Col>
              </Form.Row>
            </Form>
          </div>
          // <InputGroup className="mt-5">
          //   <InputGroup.Prepend>
          //     <InputGroup.Text id="inputGroup-sizing-default">
          //       Enter Topic
          //     </InputGroup.Text>
          //   </InputGroup.Prepend>
          //   <FormControl
          //     aria-label="Default"
          //     aria-describedby="inputGroup-sizing-default"
          //     ref={this.textInput}
          //   />
          //   <Button onClick={() => this.addClick()}>Add </Button>
          // </InputGroup>
        )}
        <Modal
          show={this.state.showModal}
          onHide={this.hideModal}
          animation={false}
        >
          <Modal.Header>Message</Modal.Header>
          <Modal.Body>{this.state.modalMessage}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    )
  }
}

export default FreeWritingEditorContainer
