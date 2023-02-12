import { NavDropdown } from "react-bootstrap";
import "./App.css";

export const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid mb-5">
        <div className="d-flex justify-content-center">
          <a className="navbar-brand" href="#">
            <img
              className="img-fluid"
              width="40"
              src="https://assets.website-files.com/62b94e6b19cb4487d4ca3d43/62c34c43823219cb54a56164_icon.svg"
              alt="humankind logo"
            />
            <span className="fs-5 fw-bold ms-2">humankind</span>
          </a>
        </div>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold gap-3 nav-font">
            <li className="nav-item">
              <a class="nav-link" href="#">
                Collectibles
              </a>
            </li>
            <li className="nav-item">
              <a class="nav-link" href="#">
                Art
              </a>
            </li>
            <li className="nav-item">
              <a class="nav-link" href="#">
                Studios
              </a>
            </li>
            <li className="nav-item">
              <a class="nav-link" href="#">
                Careers
              </a>
            </li>
            <li className="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Community"
                menuVariant="light"
              >
                <NavDropdown.Item href="#action/3.1">Fund</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Daily Doodles
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Discord</NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className="nav-item">
              <button className="btn-custom fw-bold ms-4 me-2">
                Burn a Lunchbox
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
