const NavItem = ({ children }) => (
  <span style={{ marginRight: 10 }}>{children}</span>
);

const NavBar = () => (
  <div style={{ borderBottom: "1px solid black", padding: 10 }}>
    <NavItem>
      <a href="">Home</a>
    </NavItem>
    <div style={{ float: "right" }}>
      <NavItem>
        <a href="">Discover</a>
      </NavItem>
      <NavItem>
        <a href="">Some other link</a>
      </NavItem>
    </div>
  </div>
);

export default NavBar;
