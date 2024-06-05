/** @format */
import { ProgressBar } from "react-loader-spinner";
export default function Loader() {
	return (
		<div>
			<ProgressBar
				visible={true}
				height="120"
				width="720"
				wrapperClass=""
				wrapperStyle={{}}
				ariaLabel="progress-bar-loading"
				borderColor="#F4442E"
				barColor="#51E5FF"
			/>
		</div>
	);
}
