/* eslint-disable max-lines */
// eslint-disable-next-line import/no-named-as-default
import PrimaryInputField from '../../components/shared/inputField/PrimaryInputField';
import ButtonPrimary from '../../components/utils/ReUse/ButtonPrimary';
import TextPageHeader from '../../components/utils/ReUse/TextPageHeader';

function UserCreate() {
  return (
    <section>
      <form action="" className="mt-sectionGap p-8 space-y-6">
        <TextPageHeader>Add User Info</TextPageHeader>
        <div className="flex items-center gap-6 ">
          {/* -----------First-Name----------- */}
          <div className="w-full">
            <PrimaryInputField
              htmlForm="First Name"
              type="text"
              id="First-Name"
              placeholder="Fist Name"
              labelName="First Name"
            />
          </div>
          {/* -----------Last-Name----------- */}
          <div className="w-full">
            <PrimaryInputField
              htmlForm="Last Name"
              type="text"
              id="Last-Name"
              placeholder="Last Name"
              labelName="Last Name"
            />
          </div>
        </div>
        <div className="flex items-center gap-6 ">
          {/* -----------Email----------- */}
          <div className="w-full">
            <PrimaryInputField
              htmlForm="Email"
              type="email"
              id="Email"
              placeholder="Email"
              labelName="Email"
            />
          </div>
          {/* -----------Phone-number----------- */}
          <div className="w-full">
            <PrimaryInputField
              htmlForm="Phone-Number"
              type="number"
              id="Phone Number"
              placeholder="Phone Number"
              labelName="Phone Number"
            />
          </div>
        </div>
        {/* -----------Address----------- */}
        <div className="w-full">
          <PrimaryInputField
            htmlForm="Address"
            type="text"
            id="Address"
            placeholder="Address"
            labelName="Address"
          />
        </div>
        <div className="flex items-center gap-6 ">
          {/* -----------City----------- */}
          <div className="w-full">
            <PrimaryInputField
              htmlForm="Email"
              type="email"
              id="Email"
              placeholder="Email"
              labelName="Email"
            />
          </div>
          {/* -----------State / Province----------- */}
          <div className="w-full">
            <PrimaryInputField
              htmlForm="state"
              type="text"
              id="state"
              placeholder="State / Province"
              labelName="State / Province"
            />
          </div>
          {/* -----------State / Province----------- */}
          <div className="w-full">
            <PrimaryInputField
              htmlForm="zip"
              type="text"
              id="zip"
              placeholder="ZIP / Postal"
              labelName="ZIP / Postal"
            />
          </div>
        </div>
        <ButtonPrimary buttonType="submit">Submit</ButtonPrimary>
      </form>
    </section>
  );
}

export default UserCreate;
