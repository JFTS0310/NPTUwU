const TIME_MAPPING = {
  "M": "07:30 ~ 07:50",
  "1": "08:00 ~ 08:50",
  "2": "09:00 ~ 09:50",
  "3": "10:10 ~ 11:00",
  "4": "11:10 ~ 12:00",
  "N": "12:10 ~ 13:00",
  "5": "13:30 ~ 14:20",
  "6": "14:30 ~ 15:20",
  "7": "15:40 ~ 16:30",
  "8": "16:40 ~ 17:30",
  "9": "17:35 ~ 18:25",
  "A": "18:30 ~ 19:20",
  "B": "19:25 ~ 20:15",
  "C": "20:20 ~ 21:10",
  "D": "21:15 ~ 22:05"
};

const COURSE_TYPE = ['選修', '必修', '通識', '體育', '軍訓', '外語'];
const BERIEF_CODE = {
  'A501': '核心(人文)',
  'A502': '核心(社會)',
  'A503': '核心(自然)',
  'A504': '跨院',
  'A505': '校基本'
}
const YEAR = '114', SEMESTER = '2';
const APP_URL = `${location.protocol}//${location.host}${location.pathname}`;

const DEV = location.hostname === '127.0.0.1';

const OAUTH_CLIENT_ID = DEV ? "nVua1wBnhGZW9Y1UVVfNNkrreVCY31LvJnRoHGG4" : "3VH1pFMqlVR9RHlfyk83q2tqOnT3zaIL0k0ZyPcz";
const OAUTH_ORIGIN = DEV ? "http://127.0.0.1:5001" : "https://us-central1-nctuwu-9d0d4.cloudfunctions.net";

const firebaseConfig = {
  apiKey: "AIzaSyCf-vB0ZWg02Xua06yEbVBXYK0-KkuHNaw",
  authDomain: "nctuwu-9d0d4.firebaseapp.com",
  databaseURL: "https://nctuwu-9d0d4.firebaseio.com",
  projectId: "nctuwu-9d0d4",
  storageBucket: "nctuwu-9d0d4.appspot.com",
  messagingSenderId: "915718818939",
  appId: "1:915718818939:web:1a1d4e295e6685914ba6de",
  measurementId: "G-2RS0C00B4C"
};