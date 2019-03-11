import React from 'react'
import JoinedCourses from './JoinedCourses';


const Dashboard = () => {
    const getCurrentUserFromStorage = localStorage.getItem('CurrentUser');
    const user = JSON.parse(getCurrentUserFromStorage);
    return(
        <div className="ui container" >
            <h1 className="user-title">Welcome {user.username}</h1>
            <JoinedCourses />
            {/* <AllCourses {...props}/> */}
        </div>
    );
}

export default Dashboard