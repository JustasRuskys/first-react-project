import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
        <section className="error-page">
            <div className="container">
                <h2 className="title">Error 404</h2>
                <p className="text">Page is not found.</p>
                <Link className="button" to='/first-react-project'>Return to the main page</Link>
            </div>
        </section>
        </>
    )
}

export default ErrorPage;