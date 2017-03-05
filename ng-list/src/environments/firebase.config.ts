import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig: any = [{
  apiKey: "AIzaSyBDQ0nM2cJFSYmHbYPx4j90-RacHnYA5PU",
  authDomain: "ngfirebase-ebc9d.firebaseapp.com",
  databaseURL: "https://ngfirebase-ebc9d.firebaseio.com",
  storageBucket: "ngfirebase-ebc9d.appspot.com",
  messagingSenderId: "1006700743662"
}];

export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
