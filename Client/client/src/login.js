import React from 'react';

class login extends React.Component {
  state = {
    username: '',
    password: '',
  }

  onChange = () => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

 

  render() {
    return (
      <div>
        <Input name='username' placeholder='Username' onChange={event => this.onChange(e)}  value={this.state.username} />
        <br />
        <Input name='password' placeholder='Password' type='password' onChange={event => this.onChange(e)} value={this.state.password} />
        <br />
        <Button onClick={() => this.onSubmit()} type="primary"> Login </Button>
      </div>
    );
  }
};

export default login;