
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API,
//     authDomain: process.env.REACT_APP_AUTHDOMAIN,
//     projectId: process.env.REACT_APP_PROJECTID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_SENDERID,
//     appId: process.env.REACT_APP_APPID,
// };

// const   firebaseConfig = {
//     apiKey: "AIzaSyANYAnKkbu0qu-GpSpOI7rYjMEU8cwviNs",
//     authDomain: "college-management-syste-daee0.firebaseapp.com",
//     projectId: "college-management-syste-daee0",
//     storageBucket: "college-management-syste-daee0.appspot.com",
//     messagingSenderId: "103163072068",
//     appId: "1:103163072068:web:863bb5fce5a2f18555b611",
//     measurementId: "G-2KQ50MSWEQ"
//   };


// export const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);

// export { app, storage };
// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";

const   firebaseConfig = {
        apiKey: "AIzaSyANYAnKkbu0qu-GpSpOI7rYjMEU8cwviNs",
        authDomain: "college-management-syste-daee0.firebaseapp.com",
        projectId: "college-management-syste-daee0",
        storageBucket: "college-management-syste-daee0.appspot.com",
        messagingSenderId: "103163072068",
        appId: "1:103163072068:web:863bb5fce5a2f18555b611",
        measurementId: "G-2KQ50MSWEQ"
      };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };
