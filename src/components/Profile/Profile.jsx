import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = ()=> {
    return (
        <div>
            <div>

                <img className={classes.coverImage} alt='' src='https://images.unsplash.com/photo-1657127791271-d5a722d331d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80' />
            </div>
            <div>
                Ava + Description
            </div>

            <MyPosts />
        </div>
    )
}

export default Profile