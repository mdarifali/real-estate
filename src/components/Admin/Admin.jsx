import SubHeader from "../Header/SubHeader";


const Admin = () => {
    return (
        <>  <SubHeader />
            <div className="h-screen flex items-center justify-center">
                <div className="p-5 bg-red-600">
                    <h1 className="text-3xl text-white text-center">Wellcome to Admin Page</h1>
                </div>
            </div>
        </>
    );
};

export default Admin;