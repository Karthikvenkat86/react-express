var React = require('react');


class GoogleComponent extends React.Component {
  constructor() {
      super();  
   }

	render() {
		var myStyle = {
         fontSize: 25,
         color: 'blue'
      	}
    return (
    	   <div>
            <h2 style={myStyle}>Please Fill your Google Account Details below</h2>
            <div>
            	<h5>Existing User</h5>
            	<form>
              	<div>
              		<label>Gmail Id</label>
	              	<input />
	             </div>
              	<div>
	              	<label>API Key</label>
	              	<input />
              	</div>
              </form>  
                                 
         </div>
   )}
};


module.exports = GoogleComponent;