import { DataPage } from "~/constants";
import ContainerTitle from "../generic/ContainerTitle";
import { Icons } from "~/helpers";

const { Id, Title, SubTitle, Description } = DataPage.en.Contact;
const { Social, Info, Btn } = DataPage.en;

function Contact() {
	return (
		<>
			<div id={Id} className="bg-slate-100/80">
				<div className="md:w-3/4 py-5">
					<ContainerTitle {...{ Title, SubTitle }} />
					<div className="md:flex flex-wrap justify-between px-5 box-border">
						<div className="md:w-1/2 text-[14px] leading-6">
							<p>{Description}</p>
						</div>
						<div className="flex my-4">
							<div className="min-w-max mr-5">
								{Info.slice(0, Info.length - 1).map((item) => {
									return (
										<>
											<div
												key={item.Title}
												className="box-border mb-2 pr-2 rounded bg-pink-300"
											>
												<div className="flex items-center">
													<span className="inline-block mr-2 p-2 rounded shadow-xl bg-white text-lg">
														{Icons[item.Title]()}
													</span>
													<div className="flex-grow py-1 ">
														<span className="text-xs tracking-wide uppercase">
															{item.Title}
														</span>
														<p className="text-[12px] font-medium  tracking-wide">
															{item.Content}
														</p>
													</div>
												</div>
											</div>
										</>
									);
								})}
							</div>
							<div className="flex-grow">
								<div className="">
									{Social.map((e) => {
										return (
											<>
												<a
													href={e.Url}
													target="_blank"
													title={e.Url}
													className="inline-block mr-2 p-2 bg-white rounded-full"
													style={{
														color: `#${e.Color}`,
													}}
												>
													{Icons[e.Name]("text-xl")}
												</a>
											</>
										);
									})}
								</div>
								<div className="">
									{Btn.map((e) => {
										return (
											<>
												<a
													key={e.Title}
													href={e.Url}
													className="text-center text-sm inline-block py-2 mb-2 rounded shadow-lg w-full bg-white"
												>
													{e.Title}
												</a>
											</>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
