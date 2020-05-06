import React from 'react';

class Sid extends React.Component {
    render() {
        return (

            <div>
                Hello {this.props.name}
                <br />
                我的學號:{this.props.snumber}
                <br />
                <a href={this.props.website} > Web </a>
            </div>
        );
    }
}
export default Sid;