import {useState} from 'react';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {

  const [loginType, setLoginType] = useState('login');
  const [userCred, setUserCred] = useState('')
  const [error, setError] = useState('')

  function handleCred(e){
    setUserCred({...userCred, [e.target.name]: e.target.value})

    // console.log(userCred)
  }

    function handleCriar(e){
      e.preventDefault()

      createUserWithEmailAndPassword(auth, userCred.email, userCred.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message)        
          // ..
      });
    }

    function handleEntrar(e){
      e.preventDefault()

      signInWithEmailAndPassword(auth, userCred.email, userCred.password)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      
      // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message)        
      });
    }
    return (
      <>
        <div className="container login-page">
          <section>
            <h1>Etec Albert Einstein</h1>
            <p>Entre ou crie uma conta para continuar.</p>
            <div className="login-type">
              <button 
                className={`btn ${loginType == 'login' ? 'selected' : ''}`}
                onClick={()=>setLoginType('login')}>
                  Entrar
              </button>
              <button 
                className={`btn ${loginType == 'signup' ? 'selected' : ''}`}
                onClick={()=>setLoginType('signup')}>
                  Criar Conta
              </button>
            </div>
            <form className="add-form login">
                  <div className="form-control">
                      <label>E-mail *</label>
                      <input onChange={(e)=> {handleCred(e)}} type="text" name="email" placeholder="Informe seu email" />
                  </div>
                  <div className="form-control">
                      <label>Senha *</label>
                      <input onChange={(e)=> {handleCred(e)}} type="password" name="password" placeholder="Informe a senha" />
                  </div>
                  {
                    loginType == 'login' ?
                    <button onClick={(e)=>{handleEntrar(e)}} className="active btn btn-block">Entrar</button>
                    : 
                    <button onClick={(e)=>{handleCriar(e)}} className="active btn btn-block">Criar Conta</button>
                  }

                  {
                    error &&
                    <div className='error'>
                      {error}
                    </div>
                  }

                  <p className="forgot-password">Esqueci minha senha.</p>
                  
              </form>
          </section>
        </div>
      </>
    )
  }
  
  export default LoginPage
  