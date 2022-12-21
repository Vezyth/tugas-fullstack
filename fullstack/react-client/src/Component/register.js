import { Button, Container, Form } from "react-bootstrap";
import ReactTypingEffect from "react-typing-effect";
import { useState } from "react";
import axios from "axios";

function Register({ title, description }) {

  const [NIP, setNIP] =useState('')
  const [nama, setNama] =useState('')
  const [password, setPassword] =useState('')
  
  const  handleNIP = (inputNIP) => {
    console.log(inputNIP)
    setNIP(inputNIP)
  }
  const  handleNama = (inputNama) => {
    console.log(inputNama)
    setNama(inputNama)
  }

  const  handlePassword = (inputPassword) => {
    console.log(inputPassword)
    setPassword(inputPassword)
  }

  const userLogin = () =>{
    
   // nip 1 password 123
    const requestingData={
      nip: NIP, 
      nama : nama,
      password:password
    }
    axios({
      method: "POST",
      url: "http://localhost:3200/users",
      data: requestingData
    }).then((result) => {
      if(result.data.registered){
        alert("pendaftaran berhasil")
        window.location.replace("/login")
      }else{
        alert("gagal daftar")
      }
    } ).catch((e)=> alert('e'))
  }


  
  return (
    <Container>
      <div className="d-flex justify-content-center fw-bold h3 my-4">
        <ReactTypingEffect
          text={[title, description]}
          speed={100}
          eraseDelay={800}
          eraseSpeed={100}
          typingDelay={100}
        />
      </div>
      <Form className="w-50 mx-auto">
        <Form.Group>
            <Form.Label className="fw-bold">NIP</Form.Label>
            <Form.Control type='number' placeholder="masukan NIP anda" required onChange={(event) => handleNIP(event.target.value)}/>
        </Form.Group>
        <Form.Group>
            <Form.Label className="fw-bold">Nama</Form.Label>
            <Form.Control type='text' placeholder="masukan nama anda" required onChange={(event) => handleNama(event.target.value)}/>
        </Form.Group>
        <Form.Group>
            <Form.Label className="fw-bold">Password</Form.Label>
            <Form.Control type='password' placeholder="*******" required onChange={(event) => handlePassword(event.target.value)}/>
        </Form.Group>
        <Button className="mt-4 w-100" onClick={() => userLogin()}>Login Sekarang</Button>
      </Form>
    </Container>
  );
}

export default Register;
