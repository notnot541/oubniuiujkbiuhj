import './App.css';
import logo from './LOGO.png'
import Records from './Records';
function App() {
  return (
    <div className="App">
     <div className='GreenTech'>
      <div className='notnot'>
        <div className='back'>
      <img src={logo} className='logo'/>
      <div className='text'>
      <h2>
      GreenTech Solutions
      </h2>
      </div>
      </div>
      </div>
<div className='Submenus' >
  <div className='Sub' >
    Records
  </div>
  <div className='Sub'>
    Approval
  </div>
  <div className='Sub'>
    Products
  </div>
  <div className='Sub'> 
    Accounts
  </div>
  <div className='Sub'>
    Reports
  </div>
</div>
       

     </div>
     <div className='content'>
        <Records/>
     </div>
    </div>
  );
}

export default App;
