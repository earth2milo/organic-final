import Link from "next/link";
import styles from "./components.module.css";


const Header = ({isLoggedIn, logoutUser}) => {
    return ( 

        <header className={styles.Header}>
            <nav className={styles.HeaderNav}>
                <img src="https://i.ibb.co/bQqqycY/Open-Art-Logo1.png" alt="Logo" className={styles.Logo}/>
              
            { isLoggedIn && (
                <>

    
                <Link href="/">Dashboard</Link>
                 <Link href="/profile">User Profile</Link>
                 <Link href="/createPost">Create Post</Link>
                 <a onClick={logoutUser}>Log Out</a>
                
                </>
            )}
            {!isLoggedIn && (
                <>
                <Link href="/login">Login User</Link>
                <Link href="/createUser">Create Profile </Link> 
                </>
            )}
                </nav>
        </header>
    );
};

export default Header;