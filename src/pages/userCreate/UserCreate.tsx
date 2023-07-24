/* eslint-disable max-lines */
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import toast from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { RootState } from '../../app/store';
import { UserInfo } from '../../components/globalTypes/userType';
import SvgSpinners180RingWithBg from '../../components/utils/ReUse/SpinnerLoading';
import TextPageHeader from '../../components/utils/ReUse/TextPageHeader';
import { setUserInfo } from '../../feauters/UserForm/userFormSlice';

function UserCreate() {
  // redux
  const { userDatas } = useAppSelector((state: RootState) => state.userInfo);
  const dispatch = useAppDispatch();
  // states--------------------------------------
  const [loading, setLoading] = useState(false);

  // allValidation react-hook-form----------------------
  const {
    register, handleSubmit, formState: { errors },
  } = useForm<UserInfo>();

  // onSubmitFunction--------------------------------
  const onSubmit: SubmitHandler<UserInfo> = (data) => {
    setLoading(true);
    setTimeout(() => {
      dispatch(setUserInfo(
        { ...data, id: userDatas.length + 1 },
      ));
      setLoading(false);
      toast.success('User Added Successfully.');
    }, 1000);
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} className="mt-sectionGap p-8 space-y-6">
      <TextPageHeader>Add User Info</TextPageHeader>
      <div className="flex items-center gap-6 ">
        {/* -----------First-Name----------- */}
        <label htmlFor="firstName" className="defaultInputLableStyle">
          First Name:
          <input
            id="firstName"
            {...register('firstName', { required: true, maxLength: 20 })}
            placeholder="First Name"
            className={`defaultInputStyle ${errors.firstName ? 'border-error focus:border-error' : 'border-gray/30 focus:border-primary'}`}
          />
          {
            errors.firstName
          && <small className="text-error">This field is required</small>
          }
        </label>
        {/* -----------First-Name----------- */}
        <label htmlFor="lastName" className="defaultInputLableStyle">
          Last Name:
          <input
            id="lastName"
            {...register('lastName', { required: true, maxLength: 20 })}
            placeholder="Last Name"
            className={`defaultInputStyle ${errors.lastName ? 'border-error focus:border-error' : 'border-gray/30 focus:border-primary'}`}
          />
          {
            errors.lastName
          && <small className="text-error">This field is required</small>
          }
        </label>
      </div>
      <div className="flex items-center gap-6 ">
        {/* -----------Email----------- */}
        <label htmlFor="email" className="defaultInputLableStyle">
          Email:
          <input
            id="email"
            {...register('email', { required: true, maxLength: 25 })}
            placeholder="Email"
            className={`defaultInputStyle ${errors.email ? 'border-error focus:border-error' : 'border-gray/30 focus:border-primary'}`}
          />
          {
            errors.email
          && <small className="text-error">This field is required</small>
          }
        </label>
        {/* -----------Phone-number----------- */}
        <label htmlFor="phoneNumber" className="defaultInputLableStyle">
          Phone Number:
          <input
            id="phoneNumber"
            {...register('phoneNumber', { required: true, maxLength: 14 })}
            placeholder="Phone Number"
            className={`defaultInputStyle ${errors.phoneNumber ? 'border-error focus:border-error' : 'border-gray/30 focus:border-primary'}`}
          />
          {
            errors.phoneNumber
          && <small className="text-error">This field is required</small>
          }
        </label>
      </div>
      {/* -----------Address----------- */}
      <label htmlFor="address" className="defaultInputLableStyle">
        Address:
        <input
          id="address"
          {...register('address', { required: true, maxLength: 60 })}
          placeholder="Address"
          className={`defaultInputStyle ${errors.address ? 'border-error focus:border-error' : 'border-gray/30 focus:border-primary'}`}
        />
        {
            errors.address
          && <small className="text-error">This field is required</small>
          }
      </label>
      <div className="flex items-center gap-6 ">
        {/* -----------City----------- */}
        <label htmlFor="city" className="defaultInputLableStyle">
          City:
          <input
            id="city"
            {...register('city', { required: true, maxLength: 20 })}
            placeholder="City"
            className={`defaultInputStyle ${errors.city ? 'border-error focus:border-error' : 'border-gray/30 focus:border-primary'}`}
          />
          {
            errors.city
          && <small className="text-error">This field is required</small>
          }
        </label>
        {/* -----------State / Province----------- */}
        <label htmlFor="state" className="defaultInputLableStyle">
          State:
          <input
            id="state"
            {...register('state', { required: true, maxLength: 20 })}
            placeholder="State"
            className={`defaultInputStyle ${errors.state ? 'border-error focus:border-error' : 'border-gray/30 focus:border-primary'}`}
          />
          {
            errors.state
          && <small className="text-error">This field is required</small>
          }
        </label>
        {/* -----------State / Province----------- */}
        <label htmlFor="postalCode" className="defaultInputLableStyle">
          Postal Code:
          <input
            id="postalCode"
            {...register('postalCode', { required: true, maxLength: 20 })}
            placeholder="Postal Code"
            className={`defaultInputStyle ${errors.postalCode ? 'border-error focus:border-error' : 'border-gray/30 focus:border-primary'}`}
          />
          {
            errors.postalCode
          && <small className="text-error">This field is required</small>
          }
        </label>
      </div>
      <div className="flex items-center gap-common">
        <button type="submit" className="primarySubmitButton bg-primary w-24">
          { loading && <SvgSpinners180RingWithBg className="fill-gray/40 w-[22px] h-[22px]" />}
          { !loading && 'Submit'}
        </button>
        {/* eslint-disable-next-line react/button-has-type */}
        <button type="reset" className="primarySubmitButton bg-error w-24">
          Reset
        </button>
      </div>
    </form>
  );
}

export default UserCreate;
