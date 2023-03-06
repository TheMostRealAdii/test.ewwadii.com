const Menu = () => {
  return (
    <>
      <div className="menucontainer">
        <input className="input" type="checkbox" id="active" />
        <label htmlFor="active" className="menubtn">
          <span></span>
        </label>
        <label htmlFor="active" className="close"></label>
        <div className="wrapper">
          <ul>
            <li>
              <a className="underline" href="#">
                HOME
              </a>
            </li>
            <li>
              <a className="underline" href="#">
                ABOUT
              </a>
            </li>
            <li>
              <a className="underline" href="#">
                DESIGNS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
