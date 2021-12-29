const NavBar = () => {
  return (
    <nav className='navbar'>
      <h1>Fortune Blog</h1>
      <div className='links'>
        <a href='/'>Home</a>
        <a
          href='/create'
          // inline styling
          style={{ color: 'white', backgroundColor: '#f1356d',borderRadius:'8px', fontSize: 30 }}
        >
          New Blog
        </a>
        <a href='/about'>About</a>
      </div>
    </nav>
  );
}
 
export default NavBar;