import React from 'react'
// import Tabs from 'react-bootstrap/Tabs'
// import Tab from 'react-bootstrap/Tab'
import Col from 'react-bootstrap/Col'
import { GrAddCircle } from 'react-icons/gr'
import Pagination from 'react-bootstrap/Pagination'

class FreeWritingEditorNavigation extends React.Component {
    limit = (str, length) => {
      if (str.length <= length) {
        return str
      } else {
        return str.substring(0, length) + '...'
      }
    }
    render () {
      return (
        <div className="navigation-container">
          <Col lg={12}>
            <Pagination
              id="tabs"
              activekey={this.props.active}
              onClick={(k) => this.props.navBarClick(k)}
              style={{ 'maxWidth': '100%', 'overflowX': 'scroll', 'whiteSpace': 'nowrap' }}
            >
              <Pagination.Item data-name='' eventkey='' title='+' value=''><GrAddCircle className="cluster-add" style={{ 'pointerEvents': 'none' }}></GrAddCircle></Pagination.Item>
              {this.props.data.map((x) => (
                <Pagination.Item active={this.props.active === x} className="pagnation" data-name={x} eventkey={x} title={x} key={x}>{this.limit(x, 10)}</Pagination.Item>
              ))}
            </Pagination>
          </Col>
        </div>
      )
    }
}

// import React from 'react'
// // import Tabs from 'react-bootstrap/Tabs'
// // import Tab from 'react-bootstrap/Tab'
// import Col from 'react-bootstrap/Col'
// import Pagination from 'react-bootstrap/Pagination'
// import { GrAddCircle } from 'react-icons/gr'
//
// class ClusteringNavigation extends React.Component {
//   limit = (str, length) => {
//     if (str.length <= length) {
//       return str
//     } else {
//       return str.substring(0, length) + '...'
//     }
//   }
//   render () {
//     return (
//       <div className='cluster-navigation-container' >
//         <Col lg={12}>
//           <Pagination
//             size="sm" className="pagnation" style={{ 'maxWidth': '100%', 'overflowX': 'scroll', 'whiteSpace': 'nowrap' }}
//             id='tabs'
//             onClick={(k) => this.props.navBarClick(k)}
//           >
//             <Pagination.Item data-name='' eventkey='' title='+' value=''><GrAddCircle className="cluster-add" style={{ 'pointerEvents': 'none' }}></GrAddCircle></Pagination.Item>
//             {this.props.clusterData.map((x) => (
//               <Pagination.Item active={this.props.clusternavactive === x} className="pagnation" key={x} data-name={x} eventkey={x} title={x}>{this.limit(x, 10)}</Pagination.Item>
//             ))}
//           </Pagination>
//         </Col>
//       </div>
//     )
//   }
// }
//
// export default ClusteringNavigation

export default FreeWritingEditorNavigation
