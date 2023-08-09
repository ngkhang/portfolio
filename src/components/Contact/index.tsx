import { DataPage } from "~/constants";
import ContainerTitle from "../generic/ContainerTitle";
import { Icons } from "~/helpers";
import ItemInfo from "../generic/ItemInfo";

const { Id, Title, SubTitle, Description } = DataPage.en.Contact;
const { Social, Info, Btn } = DataPage.en;

function Contact() {
	return (
		<>
			<div id={Id} className="flex justify-center">
				<div className="lg:w-4/5">
					<div className="mt-14 pb-10 rounded-t-3xl bg-[#c3e9fa] lg:mt-20">
						<ContainerTitle
							Color="text-white/50"
							{...{ Title, SubTitle }}
						/>
						<div className="flex flex-wrap px-4 lg:px-10">
							<div className="w-full lg:w-2/3 lg:order-1">
								<p className="text-[14px] mb-4 leading-6 lg:text-lg">
									{Description}
								</p>
							</div>
							<div className="w-[60%] lg:w-2/3 lg:flex flex-wrap lg:order-3">
								{Info.map((item) => {
									return (
										<ItemInfo
											key={item.Title}
											Bg="bg-white"
											{...item}
										/>
									);
								})}
							</div>
							<div className="w-[40%] pl-3 lg:w-1/3 lg:order-2">
								<div className="mb-3">
									{Social.map((e) => {
										return (
											<>
												<a
													key={e.Name}
													href={e.Url}
													target="_blank"
													title={e.Url}
													className="inline-block mr-2 p-2 bg-white rounded-full opacity-90 hover:opacity-100 text-base lg:text-xl"
													style={{
														color: `#${e.Color}`,
													}}
												>
													{Icons[e.Name]()}
												</a>
											</>
										);
									})}
								</div>
								<div className="lg:mx-4">
									{Btn.map((e) => {
										return (
											<>
												<a
													key={e.Title}
													href={e.Url}
													className="text-center text-sm inline-block py-3 mb-5 rounded shadow-xl w-full bg-white lg:text-base lg:mb-4"
												>
													{e.Title}
												</a>
											</>
										);
									})}
								</div>
							</div>
							<div className="w-1/3 lg:order-4"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
