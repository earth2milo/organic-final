
const CreatePostForm = ({createPostFunction}) => {
    return (
        <div>
            <h2>Create Post Form</h2>
            <form className={styles.Form} onSubmit={(e) => createPostFunction(e)}>
            <label htmlFor="postContent">Post Content</label>
            <input type text="text" id="postContent" name="postContent" />

            </form>
        </div>
    );
};

export default CreatePostForm