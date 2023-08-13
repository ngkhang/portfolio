import { DataPage } from "~/constants";
import { Icons, Images } from "~/helpers";
import getCertificate from "~/utils/getCertificate";
import SliderCustom from "../generic/SliderCustom";
import ContainerTitle from "../generic/ContainerTitle";
import ItemInfo from "../generic/ItemInfo";
import { v4 as uuidv4 } from "uuid";

const {
	Certificates,
	Activities,
	ExpEdu,
	Knowledges,
	Title,
	SubTitle,
	...InfoPage
} = DataPage.en.About;
const { Info, Social } = DataPage.en;

function About() {
	return (
		<div id={InfoPage.Id} className="bg-[#fafafa]">
			<div className="flex justify-center pt-10 lg:pt-20 mb-7 lg:mb-14">
				<div className="w-[90%] lg:w-4/5 px-6 lg:px-12 pb-8 rounded-lg lg:rounded-xl border-gray-200 shadow-xl box-border bg-white">
					<ContainerTitle {...{ Title, SubTitle }} />

					<div className="mb-10 lg:mb-16 flex flex-wrap items-center">
						<div className="w-full lg:w-[40%] mb-4 lg:mb-0 flex flex-col items-center box-border">
							<div className="mb-2 lg:mb-6 w-3/5 lg:w-3/4 bg-white">
								<img
									src={Images[`${InfoPage.Avatar}2`]}
									// src="/images/Avatar(2).jpg"
									alt="Avatar"
									className="w-full aspect-square hover:scale-125 object-cover avatarAnimation"
								/>
							</div>
							<div className="">
								{Social.map((e) => {
									return (
										<a
											key={uuidv4()}
											href={e.Url}
											target="_blank"
											title={e.Url}
											className={`text-base lg:text-xl inline-block mx-2 lg:mx-3 p-3 bg-[#fafafa] rounded lg:rounded-lg shadow-lg lg:shadow-xl opacity-100`}
											style={{
												color: `#${e.Color}`,
											}}
										>
											{Icons[e.Name]()}
										</a>
									);
								})}
							</div>
						</div>
						<div className="w-full lg:w-[60%]">
							<p className="mb-4 lg:mb-6 text-sm lg:text-base leading-6 lg:leading-8">
								{InfoPage.Description}
							</p>
							<div className="w-full flex flex-wrap">
								{Info.map((ele) => {
									return (
										<ItemInfo
											Width="w-full md:w-1/2 xl:w-1/2"
											{...ele}
										/>
									);
								})}
							</div>
						</div>
					</div>

					<div className="flex flex-col lg:flex-row">
						<div className="mb-6 lg:mb-0 lg:w-7/12 lg:pr-10 ">
							<h3>{ExpEdu.Title}</h3>
							<div>
								{ExpEdu.Experience.map((item) => {
									return (
										<div
											key={uuidv4()}
											className="mb-4 lg:mb-6"
										>
											<span className="bg-[#d82d8b] text-[#fff]/90 px-5 py-1 text-xs lg:text-sm rounded-e-sm">
												{item.Timeline}
											</span>
											<div className="pl-5 border-l-2 pb-2 border-[#d82d8b]">
												<p className="pt-2 lg:pt-3 lg:mb-1 lg:text-xl">
													<span className="font-medium text-lg lg:text-xl">
														{item.Title}
													</span>
													{` - ${item.NameCompany}`}
												</p>
												<div className="ml-2 lg:ml-4 tracking-wide text-sm leading-6 lg:text-base">
													<p>{`Position: ${item.Position}`}</p>
													<p>Description:</p>
													<ul className="list-disc list-inside">
														{item.Description.map(
															(e) => (
																<li>{e}</li>
															)
														)}
													</ul>
												</div>
											</div>
										</div>
									);
								})}
							</div>
							<div>
								{ExpEdu.Education.map((item) => {
									return (
										<div
											key={uuidv4()}
											className="mb-4 lg:mb-6"
										>
											<span className="bg-[#d82d8b] text-[#fff]/90 px-5 py-1 text-xs lg:text-sm rounded-e-sm">
												{item.Timeline}
											</span>
											<div className="pl-5 border-l-2 pb-2 border-[#d82d8b]">
												<p className="text-lg lg:text-xl my-1 font-medium pt-2 lg:pt-3 lg:mb-1">
													{item.OrgName}
												</p>
												<div className="ml-2 lg:ml-4 tracking-wide text-sm leading-6 lg:text-base">
													<p>{`Position: ${item.Position}`}</p>
													<p>Description:</p>
													<ul className="list-disc list-inside">
														{item.Description.map(
															(e) => (
																<li>{e}</li>
															)
														)}
													</ul>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>

						<div className="lg:w-5/12">
							<div className="mb-6 lg:mb-10">
								<h3>{Knowledges.Title}</h3>
								<h4 className="mb-1 lg:mb-2 lg:text-xl ml-4 lg:ml-0">
									{Knowledges.Tech.Title}
								</h4>
								<div className="flex flex-wrap mb-2 lg:mb-6 ml-5 lg:ml-0">
									{Knowledges.Tech.List.map((e) => {
										return (
											<span
												key={uuidv4()}
												className="inline-block rounded px-3 lg:px-6 py-1 lg:py-2 mr-1 lg:mr-2 mb-1 lg:mb-2 text-xs lg:text-base bg-slate-200"
											>
												{e.Title}
											</span>
										);
									})}
								</div>
								<h4 className="mb-1 lg:mb-2 lg:text-xl ml-4 lg:ml-0">
									{Knowledges.Other.Title}
								</h4>
								<ul className="ml-5 lg:mb-6 list-disc list-inside">
									{Knowledges.Other.List.map((e) => {
										return (
											<li className="text-sm lg:text-lg">
												<span className="font-medium">
													{`${e.Title}: `}
												</span>
												{e.Description}
											</li>
										);
									})}
								</ul>
							</div>
							<div className="mb-6">
								<h3>{Activities.Title}</h3>
								<div className="">
									{Activities.List.map((ele) => {
										return (
											<div className="mb-2 lg:mb-4 ml-2 lg:ml-0">
												<p className="font-medium text-base lg:text-xl lg:mb-2">
													&#x2022; {ele.Title}
												</p>
												<div className="ml-3 lg:ml-4">
													<p className="italic text-xs lg:text-sm">
														{`${ele.Position} - ${ele.Timeline}`}
													</p>
													<p className="text-sm lg:text-base">
														{ele.Location}
													</p>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="pb-10 flex flex-col items-center">
				<h3>{Certificates.Title}</h3>
				<div className="w-[82%]">
					<SliderCustom>
						{Certificates.List.map((e) => {
							return (
								<div className="itemCard rounded-xl shadow-lg bg-white shadow-gray-300 lg:p-4 h-full items-stretch flex-col">
									<div className="mb-2 lg:mb-6">
										<a
											href={e.Url}
											target="_blank"
											className="block rounded aspect-[3/2] overflow-hidden lg:mb-3"
										>
											<img
												alt="certificate"
												className="w-full h-full object-cover bg-center hover:scale-110 transition-all"
												src={
													e.Thumbnail
														? Images[e.Thumbnail]
														: getCertificate(e.Code)
												}
											/>
										</a>
										<a
											href={e.Url}
											target="_blank"
											className="block text-center font-medium tracking-wider text-sm lg:text-base py-2 lg:py-0 lg:px-3 whitespace-break-spaces"
										>
											{e.Name}
										</a>
									</div>
									<div className="px-2 lg:px-3 mb-3 lg:mb-4">
										<p className="flex items-center text-base font-medium">
											{Icons["Organization"](
												"text-2xl mr-2"
											)}
											<span>{e.Organization}</span>
										</p>
										<p className="flex items-center text-sm italic lg:my-1">
											{Icons["Schedule"]("text-2xl mr-2")}
											<span>
												{e.EndDate
													? `${e.StartDate} - ${e.EndDate}`
													: e.StartDate}
											</span>
										</p>
										<p className="flex items-center text-base">
											{Icons["Verified"]("text-2xl mr-2")}
											Code:
											<span className="ml-2 font-medium">
												{`${e.Code}`}
											</span>
										</p>
									</div>
								</div>
							);
						})}
					</SliderCustom>
				</div>
			</div>
		</div>
	);
}

export default About;
