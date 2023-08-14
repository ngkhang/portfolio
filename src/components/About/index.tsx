import { DataPage } from "~/constants";
import { Images } from "~/helpers";
import SliderCustom from "../generic/SliderCustom";
import ContainerTitle from "../generic/ContainerTitle";
import { v4 as uuidv4 } from "uuid";
import BtnSocial from "../generic/Btn/Social";
import ContainerInfo from "../generic/Container/Info";
import ItemExpEdu from "./ItemExpEdu";

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
									alt="Avatar"
									className="w-full aspect-square hover:scale-125 object-cover avatarAnimation"
								/>
							</div>
							<div className="">
								{Social.map((e) => {
									return (
										<BtnSocial
											key={uuidv4()}
											ClassName="rounded lg:rounded-lg mx-2 lg:mx-3 p-2 lg:p-3"
											{...e}
										/>
									);
								})}
							</div>
						</div>
						<div className="w-full lg:w-[60%]">
							<p className="mb-4 lg:mb-6 text-sm lg:text-base leading-6 lg:leading-8">
								{InfoPage.Description}
							</p>
							<ContainerInfo
								StyleParent="w-full flex flex-wrap"
								StyleChildren="w-full md:w-1/2 xl:w-1/2"
								data={Info}
							/>
						</div>
					</div>

					<div className="flex flex-col lg:flex-row">
						<div className="mb-6 lg:mb-0 lg:w-7/12 lg:pr-10 ">
							<h3>{ExpEdu.Title}</h3>
							<ItemExpEdu data={ExpEdu.Experience} />
							<ItemExpEdu data={ExpEdu.Education} />
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
											<li
												key={uuidv4()}
												className="text-sm lg:text-lg"
											>
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
											<div
												key={uuidv4()}
												className="mb-2 lg:mb-4 ml-2 lg:ml-0"
											>
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
					<SliderCustom data={Certificates.List} />
				</div>
			</div>
		</div>
	);
}

export default About;
