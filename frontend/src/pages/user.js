
const user = () => {

    const getLoggedInEmail = () => {

        const email = localStorage.getItem('email');
        return email;
    
    }
    return ( 
        <div className="user-account">
            <h1>User Account</h1>
            


        </div>
     );
}
 
export default user;