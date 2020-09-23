import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
	padding: 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
	loading ? (
		<Loader />
	) : (
		<Container>
			{nowPlaying && nowPlaying.length > 0 && (
				<Section title="Now Playing">
					{nowPlaying.map((movie) => (
						<Poster
							key={movie.id}
							id={movie.id}
							imageUrl={movie.poster_path}
							title={movie.original_title}
							rating={movie.vote_average}
							// substring 은 문자열을 잘라주는 역할을 함.
							// release_date가 2020-12-12 형식으로 나오기 때문에 연도만 얻기위해 잘라줌
							// 앞에 조건을 달아준 이유는 substring을 사용했기 때문에 만약에 release_date가
							// 존재하지않을 경우에 substring is not a function 오류가 발생하기 때문에
							// release_date가 존재할때만 리턴하는 조건을 넣어준 것. 없으면 null 리턴
							year={movie.release_date && movie.release_date.substring(0, 4)}
							isMovie={true}
						/>
					))}
				</Section>
			)}

			{upcoming && upcoming.length > 0 && (
				<Section title="Upcoming Movies">
					{upcoming.map((movie) => (
						<Poster
							key={movie.id}
							id={movie.id}
							imageUrl={movie.poster_path}
							title={movie.original_title}
							rating={movie.vote_average}
							year={movie.release_date && movie.release_date.substring(0, 4)}
							isMovie={true}
						/>
					))}
				</Section>
			)}

			{popular && popular.length > 0 && (
				<Section title="Popular Movies">
					{popular.map((movie) => (
						<Poster
							key={movie.id}
							id={movie.id}
							imageUrl={movie.poster_path}
							title={movie.original_title}
							rating={movie.vote_average}
							year={movie.release_date && movie.release_date.substring(0, 4)}
							isMovie={true}
						/>
					))}
				</Section>
			)}
			{error && <Message text={error} color="#e74c3c" />}
		</Container>
	);

HomePresenter.propTypes = {
	nowPlaying: PropTypes.array,
	upcoming: PropTypes.array,
	popular: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string,
};

export default HomePresenter;
