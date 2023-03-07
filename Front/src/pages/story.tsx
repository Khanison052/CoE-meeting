import { useState, useEffect, ChangeEvent } from "react";
import Form from "../Component/form";
import Storycard from "../Component/storycard";
import UserResult from '../model/User';
import './main.css';
import Repo from "../Repo";
import { useParams } from "react-router-dom";
import Userrole from "../model/role";
function Story() {
    const [userResultList, setUserResultList] = useState<UserResult[]>([]);
    const [UserRole, setUserrole] = useState<Userrole[]>([])
    const { id } = useParams<{ id: string }>();
  
    const fetchUserResultList = async () => {
      const result = await Repo.UserResults.get(id ?? '');
      if (result) {
        setUserResultList([result]);
      }
    };
    const fetchUserRole = async() => {
      const result = await Repo.UserRole.getuser()
      if (result) {
          if (UserRole.length) {
              setUserrole([])
          }
          setUserrole(result)
      }
  }
  useEffect(() => {
    fetchUserResultList();
    fetchUserRole();
  }, []);


  
    return (
      <>
        <Form userRole={UserRole}></Form>
        {userResultList.map((userResult) => (
          <Storycard key={userResult.id} userResult={userResult}></Storycard>
        ))}
      </>
    );
  }
  
  export default Story;
  