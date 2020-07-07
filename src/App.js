import React from 'react';
import './App.css';
import axios from "axios"
import UserTable from "./UserTable/UserTable"


class App extends React.Component {
  state = {
    employees: []
  }
  componentDidMount() {
    this.getEmployees()
  }
  getEmployees = async (type, gender) => {
    const response = await  axios.get("https://randomuser.me/api/?results=100")
    console.log(response)
    this.setState({
      employees: response.data.results

    })
    if (type === "filter") {
     const filteredEmployees =  response.data.results.filter(employee => employee.gender === gender)
     this.setState({employees: filteredEmployees})
    }
 }

  handleChange = event => {
  this.getEmployees("filter", event.target.value)
    console.log(event.target.value)
  }
  render() {
    return (
      <div className="App">
      <UserTable 
       employees = {this.state.employees}
      />
      <select onChange={this.handleChange} name="gender" id="gender">
       <option value="male">Male</option>
        <option value="female">Female</option>
       </select>
     </div>
    )
  }

}

export default App;
