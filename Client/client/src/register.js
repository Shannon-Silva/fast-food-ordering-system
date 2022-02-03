import React from 'react';

class register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
  }

  onChange = () => {
        this.setState({[event.target.name]: event.target.value}); 
  }

 

  render() {
    return (
      <div>
        <Input  name='username' placeholder='Username' onChange={event => this.onChange(event)} value={this.state.username} />
        <br/>
        
        <Input name='email' placeholder='Email' onChange={event => this.onChange(event)} value={this.state.email} />
        <br />
        
        <Input name='password'  placeholder='Password'  type='password' onChange={event => this.onChange(event)} value={this.state.password} />
        <br />
        
        <Button onClick={() => this.onSubmit()} type="primary"> Register </Button>
      </div>
    );
  }
};

export default register;