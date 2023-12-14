import styles from "./components.module.css"; 

const UserProfileCard = ({user}) => {
    return (
        <div className={styles.UserProfile}>
            <h2> User Profile </h2>
            <h2>Name: {user.name}</h2>
            <h2>Email: {user.email}</h2>
        </div>
    ); 
}; 

export default UserProfileCard