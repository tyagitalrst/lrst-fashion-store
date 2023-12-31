import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom"

import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'

import './navigation.styles.scss'

const Navagiation = () => {
  /**
   * Outlet: parent route elements to render their child route elements
   */
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navagiation