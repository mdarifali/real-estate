/* eslint-disable react/prop-types */
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './../../firebaseAuthToken';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return (
          <div>
            <p>Loading ...</p>
          </div>
        );
      }

      if (error) {
        return (
          <div>
            <p>Error: {error}</p>
          </div>
        );
      }

      if (user) {
        return children;
    }

    else {
        return <Navigate to='/login' state={{form: location}} replace/>
    }
    
};

export default PrivateRoute;