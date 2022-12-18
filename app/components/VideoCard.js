import { useRouter } from "next/router"
import { FaPlay } from "react-icons/fa"
import { FiArrowRight } from "react-icons/fi"

const VideoCard = ({ cover, title, link }) => {
	const router = useRouter()
	return (
		<div
			className={`h-full w-full object-cover ${
				router.asPath === "/" ? "card-video-slide" : "card-video"
			} shadow-xl bg-white`}
		>
			<div className="p-3 h-72 relative">
				<img
					src={cover}
					className="h-full w-full object-cover"
					alt="img-cover"
				/>
				<a
					href={link}
					target="_blank"
					className="absolute h-12 shadow-lg bg-orange-500 w-12 rounded-full text-white flex items-center justify-center cursor-pointer z-30 bottom-8 left-8 hover:text-white"
				>
					<FaPlay className="text-xs" />
				</a>
			</div>
			<div className="flex items-end absolute top-0 w-full h-full">
				<div className="flex flex-col justify-between p-8 text-white w-full">
					<h3 className="bg-orange-500 absolute bottom-60 right-0 h-9 text-xs flex items-center text-white justify-center font-light px-12 uppercase shadow-lg">
						nouveau
					</h3>
					<>
						<h3 className="font-semibold text-base text-gray-500">{title}</h3>
						<div className="flex items-baseline justify-between">
							<a
								href={link}
								target="_blank"
								className="flex text-sm items-center mt-3 text-gray-500 font-extralight cursor-pointer"
							>
								Voir la vidéo{" "}
								<FiArrowRight className="text-3xl pl-3 text-orange-500" />
							</a>
							{/* <span className='date-card-news hidden'>{actuality.date}</span> */}
						</div>
					</>
				</div>
			</div>
		</div>
	)
}

export default VideoCard
