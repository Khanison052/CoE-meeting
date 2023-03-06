import {UserResultRepository} from "./User";
import {UserRoleRepository} from "./Userrole";
const repositories = {
    UserResults: new UserResultRepository(),
    UserRole: new UserRoleRepository()
}

export default repositories