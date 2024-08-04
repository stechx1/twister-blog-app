import { conf } from '../conf/conf';
import { Client, Account, ID, OAuthProvider } from 'appwrite';

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async googleSignIn() {
    try {
      return await this.account.createOAuth2Session(
        OAuthProvider.Google,
        conf.success_url,
        conf.failure_url
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

const authService = new AuthService();

export default authService;
