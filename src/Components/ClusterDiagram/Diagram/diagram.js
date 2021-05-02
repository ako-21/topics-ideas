import './diagram.css';
import ReactFlow, { useStoreState } from 'react-flow-renderer';
import React from 'react';

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function chartData(props) {
  let chartData = [];
  if (props.clusterData) {
    var curItr = props.clusterData;
    chartData = [
      ...chartData,
      {
        id: '0',
        data: { label: curItr.topic, type: 'topic' },
        position: curItr.position,
        style: { 'border-radius': '30px' },
      },
    ];
    curItr.ideas.map((k, index) => {
      chartData = [
        ...chartData,
        {
          id: getRandomNumber(1, 1000).toString(),
          data: { label: k.name, type: 'idea' },
          position: k.position,
        },
      ];
    });
    const cDataLength = chartData.length;
    for (let index = 1; index < cDataLength; index++) {
      const element = chartData[index];
      chartData.push({
        id: getRandomNumber(1000, 100000).toString(),
        source: chartData[0].id,
        target: element.id,
        animated: true,
      });
    }
  }
  return chartData;
}

function Diagram(props) {
  const onNodeDragStop = (event, node, props) => {
    const positionChangePayload = {
      identifier: node.data.label,
      position: node.position,
      type: node.data.type,
    };

    props.onPositionChange(positionChangePayload);
  };

  return (
    <div className='diagram-container'>
      <ReactFlow
        elements={chartData(props)}
        onNodeDragStop={(e, node) => onNodeDragStop(e, node, props)}
      ></ReactFlow>
    </div>
  );
}

export default Diagram;
