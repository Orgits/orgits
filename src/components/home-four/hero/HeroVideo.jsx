import CirclePlayImg from "../../../assets/images/v4/circle-play.png";
import PlayIconImg from "../../../assets/images/v4/play-icon.svg";
import ModalVideo from "react-modal-video";
import { useState } from "react";
function HeroVideo() {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className="orgits-hero-video-section">
			<ModalVideo
				channel="youtube"
				youtube={{ autoplay: 0 }}
				isOpen={isOpen}
				videoId="7e90gBu4pas"
				onClose={() => setOpen(false)}
			/>
			<button className="orgits-video-popup3 video-init" onClick={() => setOpen(true)}>
				<img className="orgits-video-circle" src={CirclePlayImg} alt="CirclePlayImg" />
				<img className="orgits-video-icon" src={PlayIconImg} alt="PlayIconImg" />
			</button>
		</div>
	);
}

export default HeroVideo;
