import { Client, Databases, Storage, ID } from 'appwrite';
import { conf } from '../conf/conf';

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImg, active, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImg, active, userId }
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllPosts() {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        []
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  async getPostBySlug(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  async updatePost({ title, slug, featuredImg, content, active }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        conf.appwriteDatabaseId,
        slug,
        { title, featuredImg, content, active }
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      throw new Error(error);
    }
  }
  
  async deleteFile(fileId){
    try {
      return await this.storage.deleteFile(conf.appwriteBucketId, fileId)
    } catch (error) {
      throw new Error(error)
    }
  }

  async getFilePreview(fileId){
    return await this.storage.getFilePreview(conf.appwriteBucketId, fileId)
  }
}

const service = new Service();

export default service;