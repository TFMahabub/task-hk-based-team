import { UserInfo } from '../components/globalTypes/userType';

const FindUserById = (id:number | undefined | string, userDatas:UserInfo[]) => {
  const findedUser = userDatas.find((user: UserInfo) => user.id === id);
  return findedUser;
};

export default FindUserById;
