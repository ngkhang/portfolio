import helpers from '~/utils/helpers';

interface TypeBtnSocial {
  ClassName: string;
  Name: string;
  Url: string;
  Color: string;
}

const { Icons } = helpers;

function BtnSocial({
  ClassName = '', Name, Url, Color,
}: TypeBtnSocial) {
  return (
    <a
      href={Url}
      target="_blank"
      className={`inline-block bg-white opacity-90 hover:opacity-100 text-base lg:text-2xl ${ClassName}`}
      style={{ color: `#${Color}` }}
      rel="noreferrer"
    >
      {Icons[Name]()}
    </a>
  );
}

export default BtnSocial;
