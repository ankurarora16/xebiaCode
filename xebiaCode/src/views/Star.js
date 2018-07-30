import React from 'react';
import PropTypes from "prop-types";

class Star extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    render() {
        let fontSize = 0;
        if(this.props.rowData.population >= 10000000){
            fontSize = 100;
        }else{
            fontSize = 50;
        }
        return (
            <td height={fontSize}>
                {this.props.rowData.name}
            </td>
        );
    };
}

Star.propTypes = {
    rowData: PropTypes.object,
};

export default Star;