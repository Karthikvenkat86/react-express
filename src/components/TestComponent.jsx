var React = require('react');


class TestComponent extends React.Component {
  constructor() {
      super();
    
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Sales",
               "count":"180" 
            },
        
            {
               "id":2,
               "name":"Marketing",
               "count":"100"
            },
        
            {
               "id":3,
               "name":"Finance",
               "count":"150"
            }
         ]
      }

   }

	render() {
    return (
    	   <div>
            <h2>Data Visualization</h2>
               <table>
                   <tbody>
                      {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)} 
                   </tbody>
                </table>            
         </div>
   )}
};


class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td> 
            <td>{this.props.data.name}</td>
            <td>{this.props.data.count}</td>
         </tr>
      );
   }
}

module.exports = TestComponent;