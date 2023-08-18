import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';
// import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBInput, MDBIcon, MDBCheckbox } from 'mdb-react-ui-kit';


function RegisterScreen(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  }
  return(
   <div className="form1">
    <form onSubmit={submitHandler} >
      <ul className="form1-container">
        <li>
          <h2>Create Account</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor="name">
            Name
          </label>
          <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="rePassword">Re-Enter Password</label>
          <input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Register</button>
        </li>
        <li id='already'>
          Already have an account?
          <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect} className="button secondaryyy text-center" >Login to your account</Link>

        </li>

      </ul>
    </form>
  </div>
//     <div>
//   <MDBContainer fluid>
//   <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
//     <MDBCardBody>
//       <MDBRow>
//         <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
//           <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

//           {/* Your form content using MDB components */}
//           <div className="d-flex flex-row align-items-center mb-4">
//             <MDBIcon fas icon="user me-3" size='lg' />
//             <MDBInput label='Your Name' id='form1' type='text' className='w-100' />
//           </div>

//           <div className="d-flex flex-row align-items-center mb-4">
//             <MDBIcon fas icon="envelope me-3" size='lg' />
//             <MDBInput label='Your Email' id='form2' type='email' />
//           </div>

//           {/* More form inputs here... */}

//           <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>

//         </MDBCol>

//         <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
//           <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
//         </MDBCol>

//       </MDBRow>
//     </MDBCardBody>
//   </MDBCard>
// </MDBContainer>
// </div>
  )
}
export default RegisterScreen;