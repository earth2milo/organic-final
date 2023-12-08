import styles from "./components.module.css"; 

const UserProfileCard = ({user}) => {
    return (
        <div className={styles.UserProfile}>
            <h2>User Profile</h2>
            <h2>Name: {user?.name}</h2>
            <p>Password: {user?.email}</p>
        </div>
    ); 
}; 

export default UserProfileCard