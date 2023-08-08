import { DataPage } from "~/constants";
import { Icons } from "~/helpers";
import ContainerTitle from "../generic/ContainerTitle";

const { Id, Title, SubTitle, ProjectList } = DataPage.en.Project;

function Projects() {
	return (
		<>
			<div id={Id} className="md:flex justify-center bg-white">
				<div className="md:w-3/40 py-5">
					<ContainerTitle {...{ Title, SubTitle }} />
					<div className="md:w-full box-border mx-4">
						{ProjectList.map((item) => {
							return (
								<>
									<div
										key={item.Id}
										className="md:text-[#eae7ea] mb-4 p-3 rounded-md bg-slate-200 md:flex items-center w-full relative"
									>
										<div className="md:p-3 flex justify-center mb-2 overflow-hidden">
											<a
												href={item.Url[1].Url}
												className="inline-block hover:scale-105 transition-all"
											>
												<img
													src={item.Thumbnail}
													alt="Thumbnail project"
													className="w-full rounded"
												/>
											</a>
										</div>
										<div className="md:bg-[#484747] md:p-3 box-border md:rounded-md md:shadow-md">
											<div className="flex justify-between items-center mb-1">
												<span className="text-lg tracking-wide font-medium">
													{item.Name}
												</span>
												<div className="flex items-center">
													{item.Url.map((url) => {
														return (
															<>
																<a
																	href={
																		url.Url
																	}
																	className="inline-block ml-2 text-xl p-1 rounded-full hover:bg-white"
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
											<p className="text-xs leading-5 tracking-wide mb-2">
												{item.Description}
											</p>
											<span className="text-xs italic">
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
