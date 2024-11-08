import { Client, Account, ID } from "appwrite"
import Conf_Env from "../Conf_Env/Conf_Env"
class Authentication {
    Client = new Client()
    Account;
    constructor() {
        this.Client.setEndpoint(Conf_Env.APPWRITE_ENDPOINT_ID)
        this.Client.setProject(Conf_Env.APPWRITE_PROJECT_ID)
        this.Account = new Account(this.Client)
    }
    // Adding Sign In Methos 

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.Account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return await this.login({ email, password })
            }
        } catch (error) {
            console.log(error.message);
            throw error

        }
    }
    // Add Log In Method 
    async login({ email, password }) {
        try {
            const session = await this.Account.createEmailPasswordSession(email, password)
            return session
        } catch (error) {
            console.log(error.message);
            throw error

        }
    }
    // getCurrentUser: Fetches the currently logged-in user's details
    // Returns: User object if logged in, throws error if not authenticated
    // Use this method to check authentication status and get user info
    async getCurrentUser() {
        try {
            return await this.Account.get()
        } catch (error) {
            console.log(error.message);
            throw error
        }
    }
    // logOut: Ends the current user session
    // Deletes the session token and logs out the user from the current device
    // Returns: Success response if logout successful, throws error if failed
    async logOut() {
        try {
            const sessionDelete = await this.Account.deleteSessions("current")
            return sessionDelete
        } catch (error) {
            console.log(error.message);
            throw error
        }
    }

}

const AuthenticationService = new Authentication()
export default AuthenticationService;