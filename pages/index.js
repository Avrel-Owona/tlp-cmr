import ActualitiesSlider from "../app/components/ActualitiesSlider"
import HeaderAbout from "../app/components/HeaderAbout"
import { Slider } from "../app/components/Slider"
import { FiArrowRight } from "react-icons/fi"
import Link from "next/link"
import { useRouter } from "next/router"
import HeadSeo from "../app/components/HeadSeo"
import VideosSlider from "../app/components/VideosSlider"

export default function Home() {
	const router = useRouter()
	return (
		<>
			<HeadSeo
				currentURL={router.asPath}
				pageTitle={"TOURNONS LA PAGE CAMEROUN | ACCEUIL"}
				description={
					"Nous sommes un mouvement citoyen international qui agit pour la promotion de l’alternance démocratique en Afrique subsaharienne."
				}
				previewImage={
					"/2e_assemblee_generale_ordinaire/IMG_2CE9185DEAF3-1.jpeg"
				}
			/>
			<Slider />
			<ActualitiesSlider />
			<section className="sm:p-20 p-7 border">
				<div className="flex lg:bg-default w-full flex-wrap sm:justify-between lg:justify-center items-center lg:py-20">
					<div className="w-full text-left mt-10 lg:mt-0 sm:w-72 lg:w-3/6 xl:mr-10 flex flex-col justify-center">
						<p className="bg-white lg:p-14 lg:pb-20 text-gray-800  font-extralight text-base lg:text-xl">
							<span className="text-orange-500 text-xl uppercase">
								Tournons La Page
							</span>
							<br className="xl:pb-5" />
							Est un mouvement citoyen international qui agit pour la promotion
							de l’alternance démocratique en Afrique subsaharienne. Il s’agit
							d’une alliance non-partisane et pacifique de 200 organisations de
							défense des droits humains, de mouvements de jeunes, de syndicats,
							d’associations non confessionnelles, d’intellectuels et d’artistes
							regroupés en dix coalitions nationales : Burundi, Cameroun, Congo,
							Côte-d’Ivoire, Gabon, Guinée, Niger, République Démocratique du
							Congo, Tchad et Togo ainsi qu’une coalition européenne. La
							coordination internationale de TLP est basée à Paris.
						</p>
						<Link href="/actualites">
							<button className="mt-10 border-0.5 lg:border-orange-400 w-max border-gray-500 text-sm lg:bg-white lg:text-orange-500 lg:bg-white-500 lg:text-base flex lg:-mt-10 lg:-ml-12 items-center px-5 py-2 lg:py-6 sm:px-12 sm:py-4 text-gray-700 font-light uppercase ease-in duration-100 hover:text-white hover:bg-orange-500 hover:border-orange-500 button-carte">
								Devenir membre
							</button>
						</Link>
					</div>
					<img
						src="/afrique-cartee.png"
						className="sm:mt-0 sm:w-3/6 mt-10 lg:w-3/6 xl:w-2/6 h-full object-cover z-0"
						alt="carte"
					/>
				</div>
			</section>
			<HeaderAbout />
			<VideosSlider />
			<div className="w-full flex flex-col justify-center items-center pt-10 lg:pt-20 pb-10 sm:py-20 lg:py-0 lg:pb-32">
				<h1 className="text-orange-500 text-center text-xl sm:text-2xl pb-10 lg:mb-10 font-extralight lg:text-3xl px-7 lg:p-10 lg:px-20 uppercase w-5/6 sm:w-4/6 xl:w-3/6">
					Ensemble pour la libération de nos camarades
				</h1>
				<video
					src="/2e_assemblee_generale_ordinaire/video-output-2D42A3CB-0F34-446D-B60C-364B14BC8BDC.mov"
					className="w-full lg:w-4/6"
					controls
				></video>
				<Link href="/camarades_detenus">
					<button className="mt-10 sm:mt-16 border-0.5 border-orange-500 bg-orange-500 text-sm flex lg:mt-20 items-center px-5 py-1 sm:px-12 sm:py-4 text-white font-light uppercase sm:ml-0  button-video hover:lg:border-orange-300 hover:lg:text-orange-500 hover:lg:bg-transparent ease-in duration-100">
						Camarades déténus <FiArrowRight className="pl-3 text-3xl" />
					</button>
				</Link>
			</div>
		</>
	)
}
