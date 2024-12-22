import { Autocomplete, Button, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'


const Form = () => {

    // States to hold values
    const [nameUser,setNameUser] = useState("")
    const [email,setEmail] = useState("")
    const [phoneNo,setPhoneNo] = useState("")
    const [address,setAddress] = useState("")
    const [phoneCode,setPhoneCode] = useState("")
    const [gender,setGender] = useState("")
    const [dob,setDOB] = useState("")
    const [course,setCourse] = useState("")
    
    // for Validation
    const [invalidName,setInvalidName] = useState(false)
    const [invalidEmail,setInvalidEmail] = useState(false)
    const [invalidPhoneNo,setInvalidPhoneNo] = useState(false)
    const [invalidAddress,setInvalidAddress] = useState(false)
    const [invalidPhoneCode,setInvalidPhoneCode] = useState(false)
    const [invalidGender,setInvalidGender] = useState(false)
    const [invalidDOB,setInvalidDOB] = useState(false)
    const [invalidCourse,setInvalidCourse] = useState(false)

    // Validating all States
    const [masterValidation, setMasterValidation] = useState(false)

    
    // attributes with data
    const option = ["Biology", "Computer Science", "Commerce", "Humanities"]
    const phoneCodes = ["+91","+971","+1","+880","+44","+94","+966","+49"]

    // Validtion Functions
    const validateInputs = (userInput) => {
        const { name, value } = userInput;
        // console.log(name,value);
        if(name == "Name"){
            setNameUser(value)
            if(value.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/)){
                console.log(nameUser);
                setInvalidName(false)
            }
            else{
                setInvalidName(true)
            }
        }
        else if(name == "email"){
            setEmail(value)
            if(value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
                console.log(email);
                setInvalidEmail(false);
            }else{
                setInvalidEmail(true)
            }
        }
        else if(name == "address"){
            setAddress(value)
            if(value){
                console.log(address);
                setInvalidAddress(false)
            }else{
                setInvalidAddress(true)
            }
        }
        else if(name == "phoneno"){
            setPhoneNo(value)
            if(value.match(/^[0]?[6789]\d{9}$/)){
                console.log(address);
                setInvalidPhoneNo(false)
            }else{
                setInvalidPhoneNo(true)
            }
        }
        else if(name == "row-radio-buttons-group"){
            setGender(value)
            if(value){
                setInvalidGender(false)
            }else{
                setInvalidGender(true)
            }
        }
        else if(name == "dob"){
            setDOB(value)
            if(value){
                console.log(dob);
                setInvalidDOB(false)
            }else{
                setInvalidDOB(true)
            }
        }
        else if(name == ""){

        }
        else{
            console.log("error");  
        }
        
    }

    // handle Register Function
    const handleRegister = (e) => {
        e.preventDefault()
        if(nameUser&&email&&phoneNo&&phoneCode&&address&&gender&&dob&&course){
            alert(`Data Entered Successfully!\n-----------------------------------------------\nName: ${nameUser}\nEmail: ${email}\nAddress: ${address}\nPhone: ${phoneCode} ${phoneNo}\nGender: ${gender}\nDate of Birth: ${dob}\nCourse: ${course}`)
        }else{
            // alert("Please fill every field!!")
            if(!nameUser) setInvalidName(true)
            if(!email) setInvalidEmail(true)
            if(!address) setInvalidAddress(true)
            if(!phoneNo) setInvalidPhoneNo(true)
            if(!phoneCode) setInvalidPhoneCode(true)
            if(!gender) setInvalidGender(true)
            if(!dob) setInvalidDOB(true)
            if(!course) setInvalidCourse(true)
        }
    }

    // handle cancel
    const handleReset = () => {
        setNameUser("")
        setEmail("")
        setAddress("")
        setPhoneCode("")
        setPhoneNo("")
        setGender("")
        setDOB("")
        setCourse("")
    }

    // validating all InvalidStates on each state change
    useEffect(()=>{
       setMasterValidation(invalidName || invalidEmail || invalidAddress || invalidPhoneNo || invalidPhoneCode || invalidGender || invalidDOB || invalidCourse) 
    },[invalidName,invalidEmail,invalidAddress,invalidPhoneCode,invalidPhoneCode,invalidGender,invalidDOB,invalidCourse])   



    console.log(masterValidation);
    // console.log(invalidName,invalidEmail,invalidAddress,invalidPhoneCode,invalidPhoneCode,invalidGender,invalidDOB,invalidCourse);
    

    return (
        <div style={{ width: "100%", height: "100dvh", overflow: "scroll" }} className='container-fluid bg-dark-subtle mb-3'>
            <div style={{ minHeight: "50px", width: "100%" }} className=" p-3 bg-primary mx-0 rounded-bottom ">
                <h1 style={{ fontSize: "3rem" }} className='my-4 fw-bold text-light text-center text-uppercase'>Student Registration</h1>
            </div>

            <form className=' w-100 rounded-3 mt-5 py-5 ps-md-5 bg-light d-sm-flex d-md-block flex-column justify-content-center align-items-center'>
                {/* please fill form */}
                <div className='w-100'>
                    <h3 className='mb-4 fw-semibold text-sm-center text-md-start'>Please Fill the Form</h3>
                </div>

                {/* Name */}
                <div style={{ width: "400px" }} className=' my-3 d-block border border-2 p-2 rounded '>
                    {/* <label className='d-block mb-2'>Name</label> */}
                    <TextField onChange={(e)=>validateInputs(e.target)} error={invalidName} helperText={invalidName && "Incorrect Entry"} name='Name' className='form-control form-control-sm bg-transparent text-dark' id="filledName" label="Name" variant="standard" color="secondary" value={ nameUser || "" } />
                </div>

                {/* Email */}
                <div style={{ width: "400px" }} className=' my-3 d-block border border-2 p-2 rounded'>
                    {/* <label className='d-block mb-2'>Name</label> */}
                    <TextField onChange={(e)=>validateInputs(e.target)} error={invalidEmail} helperText={invalidEmail && "Incorrect Entry"}  name='email' className='form-control form-control-sm bg-transparent' type='email' id="filledPhone" label="Email" variant="standard" color="secondary" value={email || ""} />
                </div>

                {/* Address */}
                <div style={{ width: "400px" }} className="form-floating my-3">
                    <textarea onChange={(e)=>validateInputs(e.target)} name='address' className="form-control bg-transparent" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px", width: "400px" }} value={address || ""} ></textarea>
                    <label style={{ color: "grey" }} className='' htmlFor="floatingTextarea2">Address</label>
                    {invalidAddress &&
                        <p style={{fontSize:"12px"}} className='text-danger ms-2'>Incorrect Entry</p>
                    }
                </div>

                {/* Phone */}
                <div style={{ width: "400px" }} className=' my-3 d-block border border-2 p-2 py-3 rounded d-flex gap-3'>
                    {/* <label className='d-block mb-2'>Name</label> */}
                    <Autocomplete disablePortal onChange={(e,value)=>{setPhoneCode(value);{value ? setInvalidPhoneCode(false):setInvalidPhoneCode(true)}}} name='phonecode' options={phoneCodes} sx={{ width: "30%" }} value={phoneCode || ""} renderInput={(params) => <TextField className='ms-2' error={invalidPhoneCode} helperText={invalidPhoneCode && "Incorrect"} {...params}  label="Code" variant='standard' value={phoneCode || ""} />}/>
                    <TextField onChange={(e)=>validateInputs(e.target)} error={invalidPhoneNo} helperText={invalidPhoneNo && "Incorrect Entry"} name='phoneno' style={{width:"60%"}} className='form-control form-control-sm bg-transparent' id="filledPhone" label="Phone" variant="standard" color="secondary" value={phoneNo || ""}/>
                </div>

                {/* Gender */}
                <div style={{ width: "400px" }} className=' my-3 d-block bg-transparent border border-2 p-2 rounded'>
                    {/* <label className='d-block mb-2'>Name</label> */}
                    <FormLabel className='text-secondary mb-2' id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup value={gender || ""} onChange={(e)=>validateInputs(e.target)} error={invalidGender} row className='ms-1 ' name="row-radio-buttons-group">
                        <FormControlLabel className='ms-3' value="Male" control={<Radio color='primary' />} label="Male" />
                        <FormControlLabel className='ms-3' value="Female" control={<Radio color='secondary' />} label="Female" />
                        <FormControlLabel className='ms-3' value="Other" control={<Radio color='tertiary' />} label="Other" />
                    </RadioGroup>
                    {invalidGender &&
                        <p style={{fontSize:"12px"}} className='text-danger ms-2'>Incorrect Entry</p>
                    }
                </div>

                {/* DOB */}
                <div style={{ width: "400px" }} className=' my-3 d-block border border-2 p-2 py-3 rounded'>
                    {/* <label className='d-block mb-2'>Name</label> */}
                    <TextField onChange={(e)=>validateInputs(e.target)} error={invalidDOB} helperText={invalidDOB && "Incorrect Entry"} name='dob' className='form-control form-control-sm bg-transparent' type='date' id="filledPhone" label="" variant="standard" color="secondary" value={dob || ""}/>
                </div>

                {/* Course */}
                <div style={{ width: "400px" }} className=' my-3 d-block border border-2 p-2 rounded'>
                    <Autocomplete onChange={(e,value)=>{setCourse(value);{value ? setInvalidCourse(false):setInvalidCourse(true)}}} className='bg-transparent rounded-top-2' disablePortal options={option} sx={{ width: '100%' }} value={course || ""} renderInput={(params) => <TextField error={invalidCourse} helperText={invalidCourse && "Incorrect"} {...params} name='course' label="Course" variant='standard' color='secondary' value={course || ""} />} />
                </div>

                {/* Buttons */}
                <Stack className='my-md-5 my-sm-3' style={{ width: "400px" }} direction="row" spacing={3} >
                    <Button onClick={handleRegister} type='submit' disabled={masterValidation} style={{ width: "65%", height: "70px" }} className=' bg-black' variant='contained' size='large'>Register</Button>
                    <Button onClick={handleReset} style={{ width: "35%", height: "70px" }} className=' border border-black text-black' variant='outlined' size='large'>Cancel</Button>

                </Stack>
            </form>

            {/* Footer */}
            <div className='bg-black mt-5 rounded-top-3'>
                <br /><br /><br /><br /><br /><br /><br /><br />
            </div>

        </div>
    )
}

export default Form