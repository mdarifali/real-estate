import Swal from "sweetalert2";
import SubHeader from "../Header/SubHeader";
import { useEffect, useState } from "react";


const Admin = () => {

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
    }, [user, loading]);


    const userDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your User has been deleted.',
                    'success'
                )
                const url = `http://localhost:5000/user/${id}`
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
            }
        })
    }

    return (
        <>  <SubHeader />
            <div className="">
                <div className="h-[150px] sm:h-[250px] flex items-center justify-center bg-slate-700">
                    <h2 className="tracking-wider uppercase text-xl sm:text-3xl text-white font-bold">Wellcome to <span className="bg-red-500">Admin Dashbord</span></h2>
                </div>
                <div className="container mx-auto w-[85%] sm:w-3/4 py-20">
                    <div className='mb-10'>
                        <h2 className='tracking-wide text-2xl sm:text-3xl font-bold text-start text-black pb-5'>All Users List</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table text-black font-semibold">
                            {/* head */}
                            <thead>
                                <tr className="text-black">
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map((element, index) => {
                                        return (
                                            <tr key={element._id}>
                                                <th>{index + 1}</th>
                                                <td>{element.name}</td>
                                                <td>{element.email}</td>
                                                <td>{element.phone}</td>
                                                <td><button onClick={() => userDelete(element._id)} className="btn btn-xs btn-outline btn-error">Delete</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;