
const Header = () => {

  return (
    <header className="header">
    <nav className="navbar">
      <h3 className="brand-logo">Where in the world?</h3>
      <div className="mode-switch">
        <i className="fa fa-moon-o" aria-hidden="true"></i>
        <i className="fa fa-lightbulb-o" aria-hidden="true"></i>

        <h4 className="mode-switch-text">Dark Mode</h4>
      </div>
    </nav>
  </header>
  )
}

export default Header
