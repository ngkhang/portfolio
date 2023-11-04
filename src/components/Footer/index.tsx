import constants from '~/utils/constants';

const content = constants.DataPage.en.Footer;
function Footer() {
  return (
    <div className="text-center bg-[#171717] text-[#fff]/50 hover:text-[#fff] justify-self-end p-3 lg:p-6">
      <p className="mb-2 leading-5 text-sm lg:text-base">
        &copy;
        <em id="date">
          {new Date().getFullYear()}
          {' '}
        </em>
        {content.Title}
      </p>
      <p className="text-xs lg:text-sm tracking-wider">
        {content.Description}
      </p>
    </div>
  );
}

export default Footer;
