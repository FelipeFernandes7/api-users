import remove from'../controller/userController';

interface UserRepository {
    getById:(id:number) =>{
        
    }
}

 class UserRepository implements UserRepository {


}

export {UserRepository}