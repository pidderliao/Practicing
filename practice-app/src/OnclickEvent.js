import React from 'react';


class OnclickEvent extends React.Component {
    constructor(props) {
        super(props);
        this.onClickEnter = this.onClickEnter.bind(this);
        this.onClickLeave = this.onClickLeave.bind(this);
        this.state = { isOnclick: false };
    }

    onClickEnter() {
        this.setState({ isOnclick: true });
    }

    onClickLeave() {
        this.setState({ isOnclick: false });
    }

    render() {
        const isOnclick = this.state.isOnclick;
        let text;

        if (isOnclick) {
            text = <onClickLeave onClick={this.onClickLeave} />;
        } else {
            text = <onClickEnter onClick={this.onClickEnter} />;
        }
        return (
            <a { text }
        );
    }
}
function onClickEnter(props) {
    return (
        <div>
            Album Icon: <img src={props.icon} />
            <br />
            Album Name: {props.name}
        </div>
    );
}

function onClickLeave(props) {
    return (
        <div>
            專輯: {props.name}
            <br />

            <a href="" ><img src={props.icon} /></a>
        </div>
    );

}
export default OnclickEvent;