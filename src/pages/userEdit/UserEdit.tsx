import PrimaryInputField from '../../components/shared/inputField/PrimaryInputField';
import ButtonPrimary from '../../components/utils/ReUse/ButtonPrimary';
import TextPageHeader from '../../components/utils/ReUse/TextPageHeader';

function UserEdit() {
  return (
    <section>
      <form action="" className="mt-sectionGap p-8 space-y-6">
        <TextPageHeader>Edit User Info</TextPageHeader>
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
              // eslint-disable-next-line max-lines
              value="ami"
              placeholder="State / Province"
              labelName="State / Province"
            />
          </div>
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
        <div className="flex items-center gap-6">
          <ButtonPrimary
            buttonType="submit"
            color="bg-primary"
            onClick={() => alert('ami aci')}
          >
            Submit
          </ButtonPrimary>
          <ButtonPrimary
            buttonType="submit"
            color="bg-error"
            onClick={() => alert('ami aci')}
          >
            Reset
          </ButtonPrimary>
        </div>
      </form>
    </section>
  );
}

export default UserEdit;
