import { DataPage } from "~/constants";
import ContainerTitle from "../generic/ContainerTitle";
import { Icons } from "~/helpers";
import ItemInfo from "../generic/ItemInfo";
import { v4 as uuidv4 } from "uuid";

const { Id, Title, SubTitle, Description } = DataPage.en.Contact;
const { Social, Info, Btn } = DataPage.en;

function Contact() {
	return (
		<>
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
						<div className="w-[60%] lg:w-2/3 lg:flex flex-wrap lg:order-3">
							{Info.map((item) => {
								return (
									<ItemInfo
										Width="xl:w-1/2"
										key={item.Title}
										Bg="bg-[#e0e0e0]"
										{...item}
									/>
								);
							})}
						</div>
						<div className="w-[40%] pl-3 lg:pl-8 lg:w-1/3 lg:order-2">
							<div className="mb-3 lg:mb-4">
								{Social.map((e) => {
									return (
										<a
											key={uuidv4()}
											href={e.Url}
											target="_blank"
											title={e.Url}
											className="inline-block mr-2 lg:mr-2 p-2 lg:p-3 bg-white rounded-full opacity-90 hover:opacity-100 text-base lg:text-2xl shadow-lg"
											style={{
												color: `#${e.Color}`,
											}}
										>
											{Icons[e.Name]()}
										</a>
									);
								})}
							</div>
							<div className="">
								{Btn.map((e) => {
									return (
										<a
											key={uuidv4()}
											href={e.Url}
											className="text-center text-sm lg:text-base inline-block py-3 mb-3 lg:mb-4 rounded shadow-xl w-full bg-white btn"
										>
											{e.Title}
										</a>
									);
								})}
							</div>
						</div>
						<div className="w-1/3 lg:order-4"></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
