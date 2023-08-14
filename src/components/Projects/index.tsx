import { DataPage } from "~/constants";
import { Icons, Images } from "~/helpers";
import ContainerTitle from "../generic/ContainerTitle";
import { v4 as uuidv4 } from "uuid";
const { Id, Title, SubTitle, ProjectList } = DataPage.en.Project;

function Projects() {
	return (
		<>
			<div id={Id} className="lg:flex flex-col items-center">
				<div className="lg:w-4/5 pt-5 lg:pt-12">
					<ContainerTitle {...{ Title, SubTitle }} />
				</div>
				<div className="box-border lg:bg-[#484747] px-4 lg:px-24 lg:w-full">
					{ProjectList.map((e, index) => {
						return (
							<div
								key={uuidv4()}
								className={`text-[#eae7ea] bg-[#484747] w-full my-5 lg:my-10 p-3 lg:p-4 rounded-md lg:rounded-lg lg:relative lg:flex items-center ${
									index % 2 !== 0
										? "justify-end"
										: "justify-start"
								}`}
							>
								<div
									className={`flex justify-center overflow-hidden rounded-md lg:rounded-lg mb-2 lg:m-0 lg:w-[60%]`}
								>
									<a
										href={e.Url[1].Url}
										className="inline-block hover:scale-105 transition-all"
									>
										<img
											src={
												e.Thumbnail
													? Images[e.Thumbnail]
													: "https://sainath055.github.io/assets/final.png"
											}
											alt="Thumbnail project"
											className="w-full aspect-video object-cover"
										/>
									</a>
								</div>
								<div
									className={`box-border lg:w-[50%] lg:absolute lg:p-5 lg:rounded-md lg:shadow-md lg:bg-slate-500/60 backdrop-blur-sm hover:backdrop-blur-lg hover:lg:bg-slate-500/80 transition-all ${
										index % 2 !== 0 ? "left-0" : "right-0"
									}`}
								>
									<div className="flex justify-between items-center mb-2 lg:mb-4">
										<span className="tracking-wide font-medium text-lg lg:text-2xl lg:tracking-wider">
											{e.Name}
										</span>
										<div className="flex items-center">
											{e.Url.map((e) => {
												return (
													e.Url && (
														<a
															key={e.Icon}
															href={e.Url}
															className="inline-block ml-2 p-1 lg:p-2 rounded-full hover:bg-white hover:text-[#484747] text-xl lg:text-2xl"
														>
															{Icons[e.Icon]()}
														</a>
													)
												);
											})}
										</div>
									</div>
									<p className="text-sm lg:text-base leading-5 lg:leading-7 tracking-wide mb-5 lg:mb-7 whitespace-break-spaces">
										{e.ShortDescription}
									</p>
									<span className="text-xs lg:text-sm tracking-normal lg:tracking-wide lg:font-medium">
										{`${[...e.Techs].join(" | ")}`}
									</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Projects;
