import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/Firebase.init";


const provider = new GoogleAuthProvider();

const gitprovider = new GithubAuthProvider();

const Login = () => {
    const handleGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithub = () => {
        signInWithPopup(auth, gitprovider)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-4xl font-bold">
                Please Login Here
            </h1>
            <div className="flex gap-4">
                <button
                    onClick={handleGoogle}
                    className="bg-blue-500 py-2 px-4 text-white font-semibold rounded-md mt-5">
                    Login with google
                </button>
                <button
                    onClick={handleGithub}
                    className="bg-blue-500 py-2 px-4 text-white font-semibold rounded-md mt-5">
                    Login with github
                </button>
            </div>
        </div>
    );
};

export default Login;