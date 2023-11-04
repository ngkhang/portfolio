import ContainerTitle from '../generic/ContainerTitle';
import BtnSocial from '../generic/Btn/Social';
import ContainerInfo from '../generic/Container/Info';
import constants from '~/utils/constants';

const {
  Id, Title, SubTitle, Description,
} = constants.DataPage.en.Contact;
const { Social, Info, Btn } = constants.DataPage.en;

function Contact() {
  return (
    <div id={Id}>
      <div className="py-10 lg:py-14 bg-no-repeat bg-cover bg-center flex flex-col items-center bg-contact-texture">
        <ContainerTitle
          Color="text-slate-400/40"
          {...{ Title, SubTitle }}
        />
        <div className="flex flex-wrap px-4 lg:w-4/5">
          <div className="w-full lg:w-2/3 lg:order-1">
            <p className="mb-4 lg:mb-6 text-sm lg:text-lg leading-6 lg:leading-8 whitespace-break-spaces">
              {Description}
            </p>
          </div>
          <ContainerInfo
            StyleParent="w-[60%] lg:w-2/3 md:flex flex-wrap lg:order-3"
            StyleChildren="w-full lg:w-1/2"
            data={Info}
          />
          <div className="w-[40%] pl-3 lg:pl-8 lg:w-1/3 lg:order-2">
            <div className="mb-3 lg:mb-4">
              {Social.map((e) => (
                <BtnSocial
                  ClassName="rounded-full mr-2 lg:mr-2 p-2 lg:p-3"
                  {...e}
                />
              ))}
            </div>
            <div className="">
              {Btn.map((e) => (
                <a
                  href={e.Url}
                  className="text-center text-sm lg:text-base inline-block py-3 mb-3 lg:mb-4 rounded shadow-xl w-full bg-white btn"
                >
                  {e.Title}
                </a>
              ))}
            </div>
          </div>
          <div className="w-1/3 lg:order-4" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
