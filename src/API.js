import axios from "axios";

const api = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	params: {
		api_key: "03a54f3ae96468f924f336a50c028fb2",
		language: "ko-KR",
	},
});

export const moviesApi = {
	// 이건 function이고 암묵적으로 return 을 할건데, url이 "now playing"인 api.get()을 리턴
	nowPlaying: () => api.get("movie/now_playing"),
	upcoming: () => api.get("movie/upcoming"),
	popular: () => api.get("movie/popular"),
	movieDetail: (id) =>
		api.get(`movie/${id}`, {
			params: {
				append_to_response: "videos",
			},
		}),
	search: (term) =>
		api.get("search/movie", {
			params: {
				// term으로 검색어가 공백이나 특수문자가 들어왔을때, url 인코딩을 해줘서 검색할 수 있게 만들어주는 기능
				query: encodeURIComponent(term),
			},
		}),
};

export const tvApi = {
	topRated: () => api.get("tv/top_rated"),
	popular: () => api.get("tv/popular"),
	airingToday: () => api.get("tv/airing_today"),
	showDetail: (id) =>
		api.get(`tv/${id}`, {
			params: {
				append_to_response: "videos",
			},
		}),
	search: (term) =>
		api.get("search/tv", {
			params: {
				query: encodeURIComponent(term),
			},
		}),
};
