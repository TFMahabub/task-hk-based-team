import { UserInfo } from '../components/globalTypes/userType';

const FindUserById = (id:number, userDatas:UserInfo[]) => {
  const findedUser = userDatas?.find((user: UserInfo) => user.id === id);
  return findedUser;
};

export default FindUserById;
