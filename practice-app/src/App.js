import React from 'react';
import ReactDOM from 'react-dom';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;


    return (
      <div>

        {isLoggedIn
          ? <LogoutButton onClick={this.handleLogoutClick} />
          : <LoginButton onClick={this.handleLoginClick} />
        }

      </div>
    );
  }
}

class AlbumInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = 'name';
    this.state = 'icon';
  }
  render() {
    const name = this.state.name;
    const icon = this.state.icon;
    return (
      <div>
        AlbumName: {this.props.name}
        <br />
        AlbumIcon: <img src={this.props.icon} />
      </div>
    );
  }
}

function LoginButton(props) {
  return (
    <div>
      <a onClick={props.onClick}>
        <img src="https://i.kfs.io/album/global/67775917,0v1/fit/300x300.jpg"></img>
      </a>
      <a>專輯名稱: 溫柔</a>
      <a onClick={props.onClick}>
        <img src="https://i.kfs.io/album/global/60046786,2v1/fit/300x300.jpg"></img>
      </a>
      <a>專輯名稱: 玫瑰少年</a>
    </div>


  );
}

function LogoutButton(props) {
  return (
    <a onClick={props.onClick} >
      <AlbumInfo name="溫柔" icon="https://i.kfs.io/album/global/67775917,0v1/fit/300x300.jpg" />
    </a>
  );
}

ReactDOM.render(
  <LoginControl />,

  document.getElementById('root')
);