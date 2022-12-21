import { useEffect, useState } from "react";
import {
  
  Table,
  
  Badge
} from "react-bootstrap";
import Navbar from './navbar'
import axios from "axios";
import Edit from "./edit";

function Dashboard({ title }) {
  const [absensiList, setAbsensiList] = useState([])
  const [absenNotif, setAbsenNotif] =useState(false)
  
  useEffect(() => {
    /*if(!localStorage.getItem("nama") && !localStorage.getItem('nip')){
  console.log('belom  login')
  window.location.replace("/login")
  }*/

    axios({
      method: "GET",
      url: "http://localhost:3200/absensi",
    }).then((result) => setAbsensiList.log(result.data.absensi));
  }, [absenNotif]);

  

  const absen = (params) =>{
    const requestingData={
        nip: localStorage.getItem("nip")
    }
    axios({
        method:"POST",
        url:`http://localhost:3200/absensi/${params}`,
        data: requestingData
    }).then((result) => {
        if(result.data){
            alert(`${params} suskes!`)
            setAbsenNotif(!absenNotif)
        }
    })
  }

  



  return (
    <div className="w-75 mx-auto">
      <Navbar/>
      <Edit title="Edit Profile"/>
      <div>
        <h2>{title}</h2>
        <p>Hello {localStorage.getItem("nama")} !</p>
        <p>NIP {localStorage.getItem("nip")}</p>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>no.</th>
            <th>NIP</th>
            <th>Status</th>
            <th>Tanggal</th>
          </tr>
        </thead>
        <tbody>
          {absensiList.map((absensi, i) => {
            const { users_nip, status, createdAt } = absensi;
            return (
              <tr key={i}>
                <td>{i+1}</td>
                <td>{users_nip}</td>
                <td>{status}</td>
                <td>{createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center gap-2">
      <Badge pill bg="primary" style={{cursor:"pointer"}} onClick={() => absen("checkin")}>
        Checkin
      </Badge>
      <Badge pill bg="danger" style={{cursor:"pointer"}} onClick={() => absen("checkout")}>
        Checkout
      </Badge>
      </div>
    </div>
  );
}

export default Dashboard;
