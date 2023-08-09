import { DataPage } from "~/constants";
import { Icons } from "~/helpers";
import ContainerTitle from "../generic/ContainerTitle";

const { Id, Title, SubTitle, ProjectList } = DataPage.en.Project;

function Projects() {
	return (
		<>
			<div id={Id} className="lg:flex justify-center bg-white">
				<div className="lg:w-4/5 pt-5 lg:pt-10">
					<ContainerTitle {...{ Title, SubTitle }} />
					<div className="lg:w-full box-border px-4 lg:bg-[#484747] lg:p-10 lg:pt-5">
						{ProjectList.map((item, index) => {
							return (
								<>
									<div
										key={item.Id}
										className={`text-[#eae7ea] mt-5 p-3 rounded-md items-center w-full relative bg-[#484747] lg:flex lg:mt-10 lg:rounded-lg ${
											index % 2 !== 0
												? "justify-end"
												: "justify-start"
										}
										}`}
									>
										<div
											className={`flex justify-center mb-2 overflow-hidden rounded-md lg:m-0 lg:w-2/3 lg:mb-0 lg:rounded-lg`}
										>
											<a
												href={item.Url[1].Url}
												className="inline-block hover:scale-105 transition-all"
											>
												<img
													src={item.Thumbnail}
													alt="Thumbnail project"
													className="w-full"
												/>
											</a>
										</div>
										<div
											className={`box-border lg:absolute lg:p-4 lg:rounded-md lg:shadow-md lg:bg-white/50 lg:backdrop-blur-sm ${
												index % 2 !== 0
													? "left-0"
													: "right-0"
											}`}
										>
											<div className="flex justify-between items-center mb-1 lg:mb-2">
												<span className="text-lg tracking-wide font-medium lg:text-xl">
													{item.Name}
												</span>
												<div className="flex items-center">
													{item.Url.map((url) => {
														return (
															<>
																<a
																	key={
																		url.Icon
																	}
																	href={
																		url.Url
																	}
																	className="inline-block ml-2 text-xl p-1 rounded-full hover:bg-white hover:text-[#484747] lg:text-2xl"
																>
																	{Icons[
																		url.Icon
																	]()}
																</a>
															</>
														);
													})}
												</div>
											</div>
											<p className="text-sm leading-5 tracking-wide mb-2 lg:mb-4">
												{item.Description}
											</p>
											<span className="text-xs italic lg:text-sm">
												{`#${[...item.Techs].join(
													" #"
												)}`}
											</span>
										</div>
									</div>
								</>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default Projects;
