export default function Navbar(props) {
  console.log(props);
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className='navbar-brand' href='/'>
        Fibonacci Spiral Matrix
      </a>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <a className='nav-link' href='/dashboard'>
              Dashboard <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/logout'>
              logout
            </a>
          </li>
        </ul>
      </div>
      <span className='col-4'>{props.user ? `Welcome ${props.user.name}` : ''}</span>
    </nav>
  );
}
