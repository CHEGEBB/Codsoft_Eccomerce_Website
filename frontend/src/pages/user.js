
const user = () => {

    const getLoggedInEmail = () => {

        const email = localStorage.getItem('email');
        return email;
    
    }
    return ( 
        <div className="user-account">
            <h1>User Account</h1>
            <div className="user-email">
                <h3>Email: {getLoggedInEmail()}</h3>
                <Link to="/user/logout">Logout</Link>
            </div>

        </div>
     );
}
 
export default user;