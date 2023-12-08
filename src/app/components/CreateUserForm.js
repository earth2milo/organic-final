const CreateUserForm = ({createUser}) => {
    return (
        <div>
            <h2>Create User</h2>
            <form onSubmit={(e) => createUser(e)}>
            <label htmlFor= "name">Username</label>
                <input type="name" name="name" />

                <label htmlFor= "email">Email</label>
                <input type="email" name="email" />

                <label htmlFor= "password">Password</label>
                <input type="password" name="password" />

                <button type= "submit">Create User</button>            
            </form>
        </div>
    )
}

export default CreateUserForm;