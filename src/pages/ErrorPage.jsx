import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center text-white bg-primary">
      <div className="flex flex-col gap-4 text-center">
      <h1 className="text-4xl">
        Ooops! Page not found!
      </h1>
      <p>Click <Link to="/" className="text-link font-medium cursor-pointer">here</Link> to return to homepage</p>
      </div>
    </div>
  )
}

export default ErrorPage;