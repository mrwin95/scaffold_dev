import User, {IUser} from '../models/user.model';

interface ICreateUserDTO {
    email: IUser['email'];
    firstName: IUser['firstName'];
    lastName: IUser['lastName']
}

async function createUser({
    email,
    firstName,
    lastName
}: ICreateUserDTO): Promise<IUser>{
    return User.create({
        email,
        firstName,
        lastName
    }).then((data: IUser) => {
        return data;
    }).catch((err: Error) => {
        throw err;
    })
}

export default {
    createUser
}