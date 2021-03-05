import React from 'react'
import Axios from 'axios'
import './CSS/Ranking.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons'

 

interface usersList { username: [string], score: [number] }
class rank extends React.Component<usersList, any>{
  constructor(props: usersList) {
    super(props);
    this.state = {
      users: [],
      currentUser : ''

    }
    this.getUsers = this.getUsers.bind(this);
    this.getUser = this.getUser.bind(this);
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

  getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      this.setState({ currentUser: res.data.username })
      console.log(res.data.username)
    });
  };
  
  componentDidMount() {
    this.getUsers();
    this.getUser();
  }
  render() {
    
    return (
      <div className="navigation">
         <Link to={'/MyProfile'} id="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </Link>
            <br /> <br />
        <img id = 'trofee'src='https://icon-library.com/images/badges05-512.png' alt='trofee'></img>
        <ul>
          {this.state.users.map((user: any) =>
            (<li className = "user-score" key={user.id} style={ this.state.currentUser === user.username ? { color: '#2a2973', borderColor: '#2a2973'} : { color: '#0971a4' } }>
              <p>{user.id + 1}.</p> 
              <p>{user.username}</p>
              <p> {user.score} <span><FontAwesomeIcon icon={faCoins} /></span></p>
              </li>
))}
        </ul>
      </div>
    );
  }
}


export default rank