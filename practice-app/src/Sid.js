import React from 'react';

class Sid extends React.Component {
    render() {
        return (

            <div>
                專輯: {this.props.name}
                <br />

                <a href={this.props.website} ><img src={this.props.icon} /></a>
            </div>
        );
    }
}
export default Sid;