import { DataPage } from "~/constants";
import { Icons, Images } from "~/helpers";
import getCertificate from "~/utils/getCertificate";
import SliderCustom from "../generic/SliderCustom";
import ContainerTitle from "../generic/ContainerTitle";
import ItemInfo from "../generic/ItemInfo";

const {
	Certificates,
	Activities,
	Experiences,
	Knowledges,
	Title,
	SubTitle,
	...InfoPage
} = DataPage.en.About;
const { Info, Social } = DataPage.en;

const CertificateList = Certificates.codeVerify.map((ele) =>
	getCertificate(ele)
);
function About() {
	return (
		<div id={InfoPage.Id} className="lg:bg-[#fafafa]">
			<div className="lg:flex justify-center pt-12 mb-7 lg:pt-16 lg:mb-10">
				<div className="bg-white rounded-lg border-gray-200 shadow-xl box-border px-8 pb-8 lg:rounded-xl lg:px-10 lg:w-4/5">
					<ContainerTitle {...{ Title, SubTitle }} />

					<div className="flex flex-wrap items-start mb-6 lg:mb-10">
						<div className="w-full mb-4 flex flex-col items-center box-border lg:w-[40%]">
							<div className="mb-2 w-2/5 bg-white lg:mr-2">
								<img
									src={Images[InfoPage.Avatar]}
									alt="Avatar"
									className="w-full"
								/>
							</div>
							<div className="">
								{Social.map((e) => {
									return (
										<>
											<a
												href={e.Url}
												target="_blank"
												title={e.Url}
												className="inline-block mx-2 p-3 bg-[#fafafa] rounded shadow-lg opacity-90 hover:opacity-100 text-base lg:text-xl"
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
						</div>
						<div className="w-full lg:w-[60%]">
							<p className="mb-3 text-sm leading-5 lg:mb-3 lg:text-base">
								{InfoPage.Description}
							</p>
							<div className="w-full flex flex-wrap">
								{Info.map((ele) => {
									return <ItemInfo {...ele} />;
								})}
							</div>
						</div>
					</div>

					<div className="flex flex-col lg:flex-row">
						<div className="mb-3 lg:w-2/3 lg:pr-10 lg:mb-0">
							<h3>{Experiences.Title}</h3>
							<div>
								{Experiences.List.map((item) => {
									return (
										<>
											<div key={item.Id} className="mb-3">
												<span className="bg-[#d82d8b] text-[#fff]/90 px-5 py-1 text-xs lg:text-sm">
													{item.Timeline}
												</span>
												<div className="pl-5 border-l pb-2 border-[#d82d8b]">
													<p className="my-1 lg:mb-2 lg:text-xl">
														<span className="font-medium text-lg lg:text-xl">
															{item.Title}
														</span>
														{` - ${item.Company}`}
													</p>
													<p className="ml-2 text-sm tracking-wide lg:text-base">
														{`Position: ${item.Position}`}
													</p>
													<p className="ml-2 text-sm tracking-wide lg:text-base">
														Description:
													</p>
													<ul className="ml-3 list-disc list-inside text-sm lg:text-base">
														{item.Description.map(
															(e) => (
																<li>{e}</li>
															)
														)}
													</ul>
												</div>
											</div>
										</>
									);
								})}
							</div>
						</div>

						<div className="lg:w-1/3">
							<div className="mb-6">
								<h3>{Knowledges.Title}</h3>
								<h4 className="mb-1 ml-4 lg:text-xl lg:ml-0 lg:m-2">
									{Knowledges.Tech.Title}
								</h4>
								<div className="flex flex-wrap ml-5 mb-2 lg:mb-3 lg:ml-0">
									{Knowledges.Tech.List.map((item, index) => {
										return (
											<>
												<span
													key={index}
													className="inline-block rounded px-3 py-1 mr-1 mb-1 text-xs bg-slate-200 lg:px-6 lg:py-2 lg:mr-2 lg:mb-2 lg:text-base"
												>
													{item.Title}
												</span>
											</>
										);
									})}
								</div>
								<h4 className="mb-1 ml-4 lg:text-xl lg:ml-0 lg:mb-2">
									{Knowledges.Other.Title}
								</h4>
								<ul className="pl-5 list-disc list-inside">
									{Knowledges.Other.List.map((item) => {
										return (
											<>
												<li className="text-sm lg:text-lg">
													<span className="font-medium">
														{`${item.Title}: `}
													</span>
													{item.Description}
												</li>
											</>
										);
									})}
								</ul>
							</div>
							<div className="mb-4">
								<h3>{Activities.Title}</h3>
								<div className="">
									{Activities.List.map((ele) => {
										return (
											<>
												<div className="ml-2 mb-2 lg:ml-0">
													<p className="text-base font-medium lg:text-xl">
														&#x2022; {ele.Title}
													</p>
													<div className="ml-3">
														<p className="text-xs italic lg:text-base">
															{`${ele.Position} - ${ele.Timeline}`}
														</p>
														<p className="text-sm lg:text-lg">
															{ele.Location}
														</p>
													</div>
												</div>
											</>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="pb-10 flex flex-col items-center">
				<h3>Certificates</h3>
				<div className="w-[82%]">
					<SliderCustom>
						{CertificateList.map((item) => {
							return (
								<>
									<div
										key={item.Id}
										className="text-center rounded shadow-lg shadow-gray-300 mb-2 mx-1 lg:mb-4 lg:mx-2 overflow-hidden"
									>
										<div className="bg-white transition-all hover:scale-110">
											<div className="overflow-hidden p-2 ">
												<img
													src={item.Data}
													alt="certificate"
													className="w-full rounded"
												/>
											</div>
											<p className="py-2 font-medium text-sm tracking-wider lg:py-4 lg:text-base ">
												Cetificate Name
											</p>
										</div>
									</div>
								</>
							);
						})}
					</SliderCustom>
				</div>
			</div>
		</div>
	);
}

export default About;
