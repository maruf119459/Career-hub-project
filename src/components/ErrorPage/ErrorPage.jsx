import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center pt-48">
      <Helmet>
        <title>Career Hub | {error.statusText || error.message}</title>
      </Helmet>
      <h1 className="text-4xl mb-2">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="mt-2 mb-2">
        <i>{error.statusText || error.message}</i>
      </p>
    <Link to="/">Go Back Home</Link>
    </div>
  );
}