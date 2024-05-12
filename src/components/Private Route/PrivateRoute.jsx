/* eslint-disable react/prop-types */
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './../../firebaseAuthToken';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading';
import Swal from 'sweetalert2';

const PrivateRoute = ({children}) => {

    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loading />
      }

      if (error) {
        Swal.fire({
          title: "Oops...",
          text: (error),
          icon: "error"
        });
      }

      if (user) {
        return children;
    }

    else {
        return <Navigate to='/login' state={{form: location}} replace/>
    }
    
};

export default PrivateRoute;