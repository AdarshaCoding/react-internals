import "./Header.css";

const Title = () => {
  return <h1 className="title">Title</h1>;
};

const Header = () => {
  return (
    <header className="header">
      <Title />
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
