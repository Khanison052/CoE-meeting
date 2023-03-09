import { useState, useEffect, ChangeEvent } from "react";
import Form from "../Component/form";
import Storycard from "../Component/storycard";
import UserResult from '../model/meeting';
import './main.css';
import Repo from "../Repo";
import { useParams } from "react-router-dom";
import Userrole from "../model/role";
function Story() {
  const [userResultList, setUserResultList] = useState<UserResult[]>([]);
  const [UserRole, setUserRole] = useState<Userrole[]>([])
  const [isAdmin, setIsAdmin] = useState(false);
  const { id } = useParams<{ id: string }>();

  const fetchUserResultList = async () => {
    const result = await Repo.UserResults.get(id ?? '');
    if (result) {
      setUserResultList([result]);
    }
  };
  const fetchUserRole = async () => {
    const result = await Repo.UserRole.getuser()
    console.log(result)
    if (result) {
      let isAdmin = false;
      if (result.role.type === 'admin'){
        isAdmin = true;
      }
      console.log(isAdmin)
      setIsAdmin(isAdmin);
      setUserRole([result]);
    }
  }

  useEffect(() => {
    fetchUserResultList();
    fetchUserRole();
  }, []);



  return (
    <>{UserRole.map((UserRole) => (
      <Form userRole={UserRole}></Form>
    ))}

      {userResultList.map((userResult) => (
        <Storycard key={userResult.id} userResult={userResult} isadmin={isAdmin}></Storycard>
      ))}
    </>
  );
}

export default Story;
