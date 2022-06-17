import {Link} from 'react-router-dom'

function AdminUserLogin() {
  return (
    <>
      <h1>All Available Dashboard links</h1>
      <li>
          <Link to='/masterAdmin'>
            Master
          </Link>
      </li>
      <li>
          <Link to='/shopAdmin'>
            Shop
          </Link>
      </li>
      <li>
          <Link to='/frontDesk'>
            frontDesk
          </Link>
      </li>
      <li>
          <Link to='/transporter'>
            transporter
          </Link>
      </li>
      <li>
          <Link to='/worker'>
            worker
          </Link>
      </li>
      <li>
          <Link to='/homeService'>
            homeService
          </Link>
      </li>
    </>
  )
}

export default AdminUserLogin




// import { useState, useEffect } from 'react'
// import {FaSignInAlt} from 'react-icons/fa'
// import {useSelector, useDispatch} from 'react-redux'
// import {useNavigate} from 'react-router'
// import {toast} from 'react-toastify'
// import {login, reset} from '../features/users/userSlice'
// import Spinner from '../components/Spinner'

// function AdminUserLogin() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   })

//   const {email, password} = formData

//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const {users, isLoading, isError, isSuccess, message} = useSelector((state) => state.users)

//   // use effect function definition
//   useEffect(() => {
//     if(isError) {
//       toast.error(message)
//     }

//     // if(isSuccess || users) {
//     //   navigate('/dashboard')
//     // }

//     // dispatch(reset())

//   }, [users, isError, isSuccess, message, navigate, dispatch])

//   // on change function definition
//   const onChange = (e) => {
//     setFormData((previousState) => ({
//       ...previousState, 
//       [e.target.name]: e.target.value,
//     }))  // we want this to be an object , so paranthesis here
//   }

//   const onSubmit = (e) => {
//     e.preventDefault()
//     // console.log(formData);

//     const userData = {
//       email,
//       password
//     }

//     dispatch(login(userData))
//   }

//   if(isLoading) {
//     return <Spinner />
//   }

//   return (
//     <>
//       <section className="heading">
//         <h1>
//           <FaSignInAlt /> Login
//         </h1>
//         <p>Please enter your credentials</p>
//       </section>

//       <section className="form">
//         <form onSubmit={onSubmit}>
//           <div className="form-group">
//             <input 
//               type="email" 
//               className="form-control" 
//               id="email" 
//               name="email" 
//               value={email} 
//               placeholder="enter your email" 
//               onChange={onChange}
//             />
//           </div>
//           <div className="form-group">
//             <input 
//               type="password" 
//               className="form-control" 
//               id="password" 
//               name="password" 
//               value={password} 
//               placeholder="choose a password" 
//               onChange={onChange}
//             />
//           </div>
//           <div className="form-group">
//             <button type="submit" className='btn btn-block'>Submit</button>
//           </div>
//         </form>
//       </section>
//     </>
//   )
// }

// export default AdminUserLogin