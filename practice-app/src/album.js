import React from 'react';


class Album extends React.Component {



    render() {
        return (

            <div>
                Album Icon: <img src={this.props.icon} />
                <br />
                Album Name: {this.props.name}
            </div>
        );
    }
}
export default Album;