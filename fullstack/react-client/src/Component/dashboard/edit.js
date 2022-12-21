import {Form, Button} from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

const Edit = ({title}) => {

    const [nama, setNama] = useState("")
    const [passwordBaru, setPasswordBaru] = useState("")
    const [password, setPassword] = useState("")

    const updateProfile= () =>{
        const requestingData ={
          nip: localStorage.getItem("nip"),
          passwordBaru: passwordBaru,
          password: password,
          nama: nama
        }
        axios({
          method:"PUT",
          url:"http://localhost:3200/users",
          data: requestingData
        }).then((result)=> console.log(result))
      }

    return(
        <div>
            <h3>{title}</h3>
            <Form className='my-4'>
                <Form.Group>
                    <Form.Label>Nama</Form.Label>
                    <Form.Control onChange={(event) => setNama(event.target.value)} defaultValue={localStorage.getItem("nama")}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password Baru</Form.Label>
                    <Form.Control onChange={(event) => setPasswordBaru(event.target.value)}/>
                </Form.Group>
                <hr/>
                <Form.Group>
                    <Form.Label>Password Lama</Form.Label>
                    <Form.Control onChange={(event) => setPassword(event.target.value)}/>
                <Form.Text className='text-muted'>Masukan Password lama anda. Anda akan login ulang setelah update password</Form.Text>
                </Form.Group>
                <Button className='w-100' onClick={() => updateProfile()}>Update Profile</Button>
            </Form>
        </div>
    )
}

export default Edit