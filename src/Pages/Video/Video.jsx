import React from "react";
import "./Video.css";
import PLayVideo from "../../Components/PlayVideo/PLayVideo";
import Recommended from "../../Components/Recommended/Recommended";
import { useParams } from "react-router-dom";
const Video = () => {
	const { videoId, categoryId } = useParams();

	return (
		<div className="play-container">
			<PLayVideo videoId={videoId} />
			<Recommended categoryId={categoryId} />
		</div>
	);
};

export default Video;
