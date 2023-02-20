import User from "../Entity/user";
import RepositoryInterface from "./repository-interface";

export default interface UserRepositoryInterface extends RepositoryInterface<User> {}