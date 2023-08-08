import { DataPage } from "~/constants";
import { Icons, Images } from "~/helpers";
import getCertificate from "~/utils/getCertificate";
import SliderCustom from "../generic/SliderCustom";
import ContainerTitle from "../generic/ContainerTitle";

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
		<div id={InfoPage.Id} className="bg-[#fafafa]">
			<div className="flex justify-center flex-wrap pt-12 mb-7">
				<div className="bg-white rounded-lg border-gray-200 shadow-xl w-[90%] box-border px-3">
					<ContainerTitle {...{ Title, SubTitle }} />

					<div className="flex flex-wrap items-start mb-4">
						<div className="w-1/3 p-2 box-border">
							<img
								src={Images[InfoPage.Avatar]}
								alt="Avatar"
								className="w-full"
							/>
						</div>
						<div className="w-2/3">
							<p className="mb-2 text-xs">
								{InfoPage.Description}
							</p>
							<div className="">
								{Social.map((ele) => {
									return (
										<>
											<a
												key={ele.Name}
												href={ele.Url}
												className={`inline-block shadow-sm bg-slate-200 rounded-full p-2 mr-2 text-sm`}
												style={{
													color: `#${ele.Color}`,
												}}
											>
												{Icons[ele.Name]()}
											</a>
										</>
									);
								})}
							</div>
						</div>
						<div className="w-full flex flex-wrap">
							{Info.map((ele, index) => {
								return (
									<>
										<div
											key={ele.Title}
											className={`${
												index % 2 !== 0
													? "w-2/5"
													: "w-3/5"
											} flex items-center mb-2`}
										>
											<span className="inline-block mr-2 p-2 rounded shadow-xl bg-white text-lg ">
												{Icons[`${ele.Title}`](
													`text-lg`
												)}
											</span>
											<p className="text-[11px] font-medium">
												{ele.Content}
											</p>
										</div>
									</>
								);
							})}
						</div>
					</div>

					<div className="flex flex-col md:flex-row mb-4">
						<div className="md:w-2/3 mb-4">
							<h3>{Experiences.Title}</h3>
							<div>
								{Experiences.List.map((item) => {
									return (
										<>
											<div key={item.Id} className="mb-4">
												<span className="bg-[#d82d8b] text-[#fff]/90 px-5 py-1 text-xs">
													{item.Timeline}
												</span>
												<div className="pl-5 border-l border-[#d82d8b]">
													<p className="mt-1">
														<span className="mr-2 font-medium text-lg">
															{item.Title}
														</span>
														{`- ${item.Company}`}
													</p>
													<p className="text-sm tracking-wide leading-5">
														{item.Position}
													</p>
													<ul className="list-disc list-inside text-sm tracking-wide leading-5">
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

						<div className="md:w-1/3">
							{/* <div className="flex flex-col"> */}
							<div className="mb-4">
								<h3>{Knowledges.Title}</h3>
								<h4 className="mb-1">
									{Knowledges.Tech.Title}
								</h4>
								<div className="flex flex-wrap pl-5 mb-2">
									{Knowledges.Tech.List.map((item, index) => {
										return (
											<>
												<span
													key={index}
													className="inline-block md:px-8 md:py-2 rounded px-3 py-1 mr-1 mb-1 md:mr-2 md:mb-2 text-xs md:text-sm bg-slate-200"
												>
													{item.Title}
												</span>
											</>
										);
									})}
								</div>
								<h4 className="mb-1">
									{Knowledges.Other.Title}
								</h4>
								<ul className="pl-5 list-disc list-inside">
									{Knowledges.Other.List.map((item) => {
										return (
											<>
												<li className="text-sm">
													<span className="font-medium">
														{item.Title}:{" "}
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
								<ul className="pl-5 list-disc list-inside">
									{Activities.List.map((ele) => {
										return (
											<>
												<li className="">
													<div className="inline-block">
														<p className="text-xs font-medium">
															{ele.Title}
														</p>
														<p className="text-[10px] italic">
															{ele.Position} -{" "}
															{ele.Timeline}
														</p>
														<p className="text-sm">
															{ele.Location}
														</p>
													</div>
												</li>
											</>
										);
									})}
								</ul>
							</div>

							{/* </div> */}
						</div>
					</div>
				</div>
			</div>

			<div className="pb-10">
				<h3 className="text-center">Certificates</h3>
				<div className="px-8">
					<SliderCustom>
						{CertificateList.map((item) => {
							return (
								<>
									<div
										key={item.Id}
										className="text-center rounded bg-white shadow-lg shadow-gray-200 pt-2 m-2"
									>
										<div>
											<img
												src={item.Data}
												alt="certificate"
												className="w-full"
											/>
										</div>
										<p className="py-2 font-medium text-sm tracking-wider">
											Cetificate Name
										</p>
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
