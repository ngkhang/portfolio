interface ItemProps {
  data: {
    Timeline: string;
    Title: string;
    NameCompany: string;
    Position: string;
    Description: string[];
  }[];
}

function ItemExpEdu({ data }: ItemProps) {
  return (
    <div>
      {data.map((item) => (
        <div className="mb-4 lg:mb-6">
          <span className="bg-[#d82d8b] text-[#fff]/90 px-5 py-1 text-xs lg:text-sm rounded-e-sm">
            {item.Timeline}
          </span>
          <div className="pl-5 border-l-2 pb-2 border-[#d82d8b]">
            <p className="pt-2 lg:pt-3 lg:mb-1 text-lg lg:text-xl font-medium ">
              {
                item.NameCompany
                  ? (
                    <>
                      <span className="font-medium text-lg lg:text-xl">
                        {item.Title}
                      </span>
                      {` - ${item.NameCompany}`}
                    </>
                  )
                  : item.Title
              }
            </p>
            <div className="ml-2 lg:ml-4 tracking-wide text-sm leading-6 lg:text-base">
              <p>{`Position: ${item.Position}`}</p>
              <p>Description:</p>
              <ul className="list-disc list-inside">
                {item.Description.map((e) => <li>{e}</li>)}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemExpEdu;
