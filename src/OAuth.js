// 카카오 로그인

const REST_API_KEY = process.env.REACT_APP_KAKAO;
const REDIRECT_URI = "http://localhost:3000/mycalendar";
export const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
