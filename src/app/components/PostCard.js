import styles from "./components.module.css"; 

const PostCard = ({ post, user}) => {
    return (
        <div className={styles.PostCardContainer}>
        <div className={styles.PostCard}>
            <div className={styles.ImageContainer}>
                 <img src={post.imageURL} alt="" />
            </div>
            <p className={styles.PostContent}>{post.postContent}</p>
        </div>
        </div>

    ); 
}; 

export default PostCard;