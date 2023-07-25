import { useState, useReducer } from 'react'
import './App.css'
import formReducer from './reducer/formReducer'

const defaultState = {
  firstName: "",
  lastName: "",
  Mail: "",
  password: ""
}

function App() {
  const [state, dispatch] = useReducer(formReducer, defaultState);
  const [currentPage, setCurrentPage] = useState(1);

  function changeFirstName(e) {
    dispatch({ type: "CHANGE_FIRST", payload: e.target.value });
  }

  function changeLastName(e) {
    dispatch({ type: "CHANGE_LAST", payload: e.target.value });
  }

  function changeMail(e) {
    dispatch({ type: "CHANGE_MAIL", payload: e.target.value });
  }

  function changePassword(e) {
    dispatch({ type: "CHANGE_PASSWORD", payload: e.target.value });
  }

  return (
    <>
      <div className="app">
        <form>
          <div className="firstPage" style={{ display: currentPage === 1 ? "block" : "none" }}>
            <div>
              <label>First Name</label>
              <input onInput={changeFirstName} value={state.firstName} />
            </div>
            <div>
              <label> Last Name</label>
              <input onInput={changeLastName} value={state.lastName} />
            </div>
            <button
              type="button"
              className="next"
              onClick={() => setCurrentPage((prev)=>prev + 1)}
            >
              NEXT
            </button>
            
          </div>

          <div className="secondPage" style={{ display: currentPage === 2 ? "block" : "none" }}>
            <div>
              <label> Email </label>
              <input
                type="email"
                onInput={changeMail}
                value={state.Mail}
              />
            </div>
            <div>
              <label> Password </label>
              <input
                onInput={changePassword}
                value={state.password}
              />
            </div>
            
            <button
              type="button"
              className="previous"
              onClick={() => setCurrentPage((prev)=>prev - 1)}
            >
              Previous
            </button>
            <button
              type="button"
              className="next2"
              onClick={() => setCurrentPage((prev)=> prev + 1)}
            >
              NEXT
            </button>
          </div>

          <div className="lastPage" style={{ display: currentPage === 3 ? "block" : "none" }}>
            <p className="name">{state.firstName}</p>
            <p className="surname">{state.lastName}</p>
            <p className="email">{state.Mail}</p>
            <p className="password">{state.password}</p>
            <button
              type="button"
              className="previous"
              onClick={() => setCurrentPage((prev)=>prev - 1)}
            >
              Previous
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
