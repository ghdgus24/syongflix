import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import { media } from "../../Components/media";

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 50px);
	position: relative;
	padding: 50px;
	${media.mobile`
		height: auto;
	`}
`;

const Backdrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(${(props) => props.bgImage});
	background-position: center center;
	background-size: cover;
	filter: blur(3px);
	opacity: 0.5;
	z-index: 0;
`;

const Content = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	position: relative;
	border-radius: 5px;
	z-index: 1;
	${media.mobile`
		flex-direction: column;
	`}
`;

const Cover = styled.div`
	width: 30%;
	height: 100%;
	background-image: url(${(props) => props.bgImage});
	background-position: center center;
	background-size: cover;
	border-radius: 5px;
	${media.mobile`
		width: 100%;
		height: 109.33vw;
		margin-bottom: 4vw;
	`}
`;

const Data = styled.div`
	width: 70%;
	margin-left: 10px;
	${media.mobile`
		width: 100%;
	`}
`;

const Title = styled.h3`
	font-size: 32px;
`;

const ItemContainer = styled.div`
	margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
	margin: 0 10px;
`;

const Overview = styled.p`
	font-size: 12px;
	opacity: 0.7;
	line-height: 1.5;
	width: 50%;
	margin-bottom: 50px;
	${media.mobile`
		width: 73.33vw;
	`}
`;

const VideoContainer = styled.div`
	display: flex;
	overflow: scroll;
`;

const VideoItem = styled.div`
	/* width: 560px; */
	margin-right: 15px;
	${media.mobile`
		/* width: 35vw; */
	`}
`;

const DetailPresenter = ({ result, loading, error }) =>
	loading ? (
		<>
			<Helmet>
				<title>Loading | SYONGFLIX</title>
			</Helmet>
			<Loader />
		</>
	) : (
		<Container>
			<Helmet>
				<title>
					{result.original_title ? result.original_title : result.original_name}{" "}
					| SYONGFLIX
				</title>
			</Helmet>
			<Backdrop
				bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
			/>
			<Content>
				<Cover
					bgImage={
						result.poster_path
							? `https://image.tmdb.org/t/p/original${result.poster_path}`
							: require("../../assets/noPosterSmall.png")
					}
				/>
				<Data>
					<Title>
						{result.original_title
							? result.original_title
							: result.original_name}
					</Title>

					<ItemContainer>
						<Item>
							{result.release_date
								? result.release_date.substring(0, 4)
								: result.first_air_date.substring(0, 4)}
						</Item>

						<Divider>•</Divider>
						<Item>
							{result.runtime ? result.runtime : result.episode_run_time[0]} min
						</Item>

						<Divider>•</Divider>
						<Item>
							{result.genres &&
								result.genres.map((genre, index) =>
									index === result.genres.length - 1
										? genre.name
										: `${genre.name} / `
								)}
						</Item>
					</ItemContainer>
					<Overview>{result.overview}</Overview>

					<VideoContainer>
						{result.videos.results.map((video) => (
							<VideoItem key={video.id}>
								<iframe
									width="250"
									height="160"
									src={`https://www.youtube.com/embed/${video.key}`}
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
									title={video.original_title}
								></iframe>
							</VideoItem>
						))}
					</VideoContainer>
				</Data>
			</Content>
		</Container>
	);

DetailPresenter.propTypes = {
	result: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
};

export default DetailPresenter;
