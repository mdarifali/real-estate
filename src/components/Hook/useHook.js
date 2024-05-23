import { useState, useEffect } from "react";


const useHook = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

 
    useEffect(() => {
        const url = `http://localhost:5000/user`;
        setLoading(true)
        fetch(url)
        
            .then(res => res.json())
            .then(data => {
                setUser(data)
                setLoading(false)
            })
    }, []);
    
    return (
        [user, loading, setUser]);
    
};

export default useHook;