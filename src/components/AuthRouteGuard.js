import {useAuth} from "../contexts/AuthContext";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";

const AuthRouteGuard = ({children, invert = false, route = '/'}) => {
  const {currentUser} = useAuth();

  if (!!(!currentUser) !== invert) return <Redirect to={route}/>

  return children
}

AuthRouteGuard.propTypes = {
  children: PropTypes.node.isRequired,
  invert: PropTypes.bool,
  route: PropTypes.string
}

export default AuthRouteGuard