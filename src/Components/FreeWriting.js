import React from 'react'
// import axios from 'axios'
// import apiUrl from './../../apiConfig'
// import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Button from 'react-bootstrap/Button'
// import ListGroup from 'react-bootstrap/ListGroup'
// import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
// import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import Figure from 'react-bootstrap/Figure'
import ExampleImage1 from './../../../images/freewriting-1.jpg'
import ExampleImage2 from './../../../images/freewriting-2.jpg'
import FreeWritingEditorContainer from './FreeWritingEditorContainer'

class FreeWriting extends React.Component {
  state = {
    explanation: {
      view: 'one'
    },
    example: {
      view: 'one'
    }
  }

  render () {
    const heading = <h2 style={{ textAlign: 'center' }}>Free Writing Explanation</h2>
    let jsx
    if (this.props.freeWriting.pagnation === 'explanation') {
      if (this.state.explanation.view === 'one') {
        jsx =
            <div className="mt-5">
              {heading}
              <p style={{ textAlign: 'center' }}>
                Free writing is the technique of writing your ideas as they flow. If you come to a point where you don’t have more to say, keep repeating a word or phrase until a new idea occurs to you.  Just keep writing.               </p>
              <div className="d-flex justify-content-end">
                <Button className="mr-5" variant="outline-dark" onClick={() => this.setState({ explanation: { view: 'two' } })}><BsArrowRight></BsArrowRight></Button>
              </div>
            </div>
      } else if (this.state.explanation.view === 'two') {
        jsx =
            <div className="mt-5">
              {heading}
              <p style={{ textAlign: 'center' }}>
                One of the problems students encounter with free writing is that when you stop, the text you produce looks a lot like an essay, and it is tempting to think you are done.  You are not.               </p>
              <div className="d-flex justify-content-end">
                <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ explanation: { view: 'one' } })}><BsArrowLeft></BsArrowLeft></Button>
                <Button className="mr-5" variant="outline-dark" onClick={() => this.setState({ explanation: { view: 'three' } })}><BsArrowRight></BsArrowRight></Button>
              </div>
            </div>
      } else if (this.state.explanation.view === 'three') {
        jsx =
                <div className="mt-5">
                  {heading}
                  <p style={{ textAlign: 'center' }}>
                  After your first free writing, review your text and highlight key ideas.  Take each of those ideas and put them at the top of a new page and free write for 10 minutes on each.  Then use color coding to highlight related ideas.  Group the related ideas and develop topic sentences that will correspond to the points in your outline.                  </p>
                  <div className="d-flex justify-content-end">
                    <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ explanation: { view: 'two' } })}><BsArrowLeft></BsArrowLeft></Button>
                    <Button className="mr-5" variant="dark" data-key="freeWriting" onClick={this.props.toExample}>To Example&nbsp;&#8594;</Button>
                  </div>
                </div>
      }
    } else if (this.props.freeWriting.pagnation === 'example') {
      const heading = <h2 style={{ textAlign: 'center' }}>Free Writing Example</h2>
      if (this.state.example.view === 'one') {
        jsx =
                <div className="mt-5">
                  {heading}
                  <p style={{ textAlign: 'center' }}>
                  In the next example, the writer considers many ideas relating to heroism.  The writing is mainly in sentence form, but many ideas are jumbled together and are not developed fully.
                  </p>
                  <div className="d-flex justify-content-end">
                    <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ example: { view: 'two' } })}><BsArrowRight></BsArrowRight></Button>
                  </div>
                </div>
      } else if (this.state.example.view === 'two') {
        jsx =
                <div className="mt-5">
                  {heading}
                  <p style={{ textAlign: 'center' }}>
                  During free writing, there is no need to be concerned with correctness, because the goal is to develop ideas which will be shaped later. The student in the example probably needs to do research to get more specific information and answers to the questions posed. Points worth pursuing would be developed into topic sentences and paragraphs in the drafting stage.
                  </p>
                  <div className="d-flex justify-content-end">
                    <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ example: { view: 'one' } })}><BsArrowLeft></BsArrowLeft></Button>
                    <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ example: { view: 'three' } })}><BsArrowRight></BsArrowRight></Button>
                  </div>
                </div>
      } else if (this.state.example.view === 'three') {
        jsx =
        <div className="mt-5">
          {heading}
          <div className="d-flex justify-content-center">
            <Col>
              <Figure>
                <Figure.Image
                  src={ExampleImage1}
                />
              </Figure>
            </Col>
          </div>
          <div className="d-flex justify-content-end">
            <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ example: { view: 'two' } })}><BsArrowLeft></BsArrowLeft></Button>
            <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ example: { view: 'four' } })}><BsArrowRight></BsArrowRight></Button>
          </div>
        </div>
      } else if (this.state.example.view === 'four') {
        jsx =
        <div className="mt-5">
          {heading}
          <div className="d-flex justify-content-center">
            <Col>
              <Figure>
                <Figure.Image
                  src={ExampleImage2}
                />
              </Figure>
            </Col>
          </div>
          <div className="d-flex justify-content-end">
            <Button className="mr-2" variant="outline-dark" onClick={() => this.setState({ example: { view: 'three' } })}><BsArrowLeft></BsArrowLeft></Button>
          </div>
        </div>
      }
    } else if (this.props.freeWriting.pagnation === 'worksheet') {
      jsx = <FreeWritingEditorContainer></FreeWritingEditorContainer>
    }
    return (
      <div>{jsx}</div>
    )
  }
}

export default FreeWriting
