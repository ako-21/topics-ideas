import React from 'react';
import Input from './Input/input';
import Diagram from './Diagram/diagram';
import Navigation from './Navigation/navigation';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './cluster-diagram-container.css';

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class ClusterDiagramContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      clusterData: [],
      active: '',
      showModal: false,
      modalMessage: '',
    };
    this.navBarClick = this.navBarClick.bind(this);
    this.addInfo = this.addInfo.bind(this);
    this.onPositionChange = this.onPositionChange.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  navBarData() {
    return this.state.clusterData.map((x) => x.topic);
  }

  inputType() {
    return this.state.active === '' ? 'topic' : 'idea';
  }

  navBarClick(value) {
    this.setState({
      active: value,
    });
  }

  addInfo(value) {
    if (this.inputType() === 'topic') {
      let exists = this.state.clusterData.find((x) => x.topic === value);
      if (!exists) {
        let clusterData = [
          ...this.state.clusterData,
          { topic: value, position: { x: 600, y: 200 }, ideas: [] },
        ];
        this.setState({ clusterData: clusterData });
        this.setState({ active: value });
      } else {
        this.showModal('A topic with the same name already exists');
      }
    } else if (this.inputType() === 'idea') {
      let clusterData = this.state.clusterData;
      let curClusterData = clusterData.find(
        (x) => x.topic === this.state.active
      );

      let exists = curClusterData.ideas.find((x) => x.name === value);
      if (!exists) {
        clusterData
          .find((x) => x.topic === this.state.active)
          .ideas.push({
            name: value,
            position: {
              x: getRandomNumber(0, 1000),
              y: getRandomNumber(0, 200),
            },
          });
        this.setState({
          clusterData: clusterData,
        });
      } else {
        this.showModal('An idea with the same name already exists');
      }
    }
  }

  onPositionChange(positionData) {
    let clusterData = this.state.clusterData;
    if (positionData.type === 'topic') {
      clusterData.find((x) => x.topic === positionData.identifier).position =
        positionData.position;
    } else {
      clusterData
        .find((k) => k.topic === this.state.active)
        .ideas.find((x) => x.name === positionData.identifier).position =
        positionData.position;
    }
    this.setState({
      clusterData: clusterData,
    });
  }

  showModal(msg) {
    this.setState({ showModal: true, modalMessage: msg });
  }

  hideModal() {
    this.setState({ showModal: false, modalMessage: '' });
  }

  render() {
    return (
      <Container fluid>
        <Navigation
          clusterData={this.navBarData()}
          active={this.state.active}
          navBarClick={this.navBarClick}
        ></Navigation>
        <Diagram
          clusterData={this.state.clusterData.find(
            (x) => x.topic === this.state.active
          )}
          onPositionChange={this.onPositionChange}
        ></Diagram>
        <Input
          currentSelected={this.inputType()}
          addInfo={this.addInfo}
          showModal={this.showModal}
          hideModal={this.hideModal}
        ></Input>
        <Modal show={this.state.showModal} onHide={this.hideModal}>
          <Modal.Header>Message</Modal.Header>
          <Modal.Body>{this.state.modalMessage}</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.hideModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default ClusterDiagramContainer;
