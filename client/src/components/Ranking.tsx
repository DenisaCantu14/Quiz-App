import React from 'react'
import Axios from 'axios'

interface usersList { username: [string], score: [number] }
class rank extends React.Component<usersList, any>{
  constructor(props: usersList) {
    super(props);
    this.state = {
      users: [],

    }
    this.getUsers = this.getUsers.bind(this);
  }

  getUsers = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/usersList",
    }).then((res) => {
      let u: string[] = [];

      (res.data).map((user: string) => u.push(user))

      this.setState({ users: u })


    });
  };
  componentDidMount() {
    this.getUsers();
  }
  render() {
    this.getUsers();
    return (
      <div className="navigation">
        <ul>
          {this.state.users.map((user: any) =>
            (<li key={user.id}>{user.username} : {user.score}</li>))}



        </ul>
      </div>
    );
  }
}


export default rank