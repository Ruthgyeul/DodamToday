import { NextPage } from "next";

interface ErrorProps {
    statusCode?: number;
}

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>
                {statusCode ? `Error ${statusCode}` : "An error occurred"}
            </h1>
            <p style={styles.text}>
                {statusCode === 404
                    ? "The page you are looking for was not found."
                    : "Something went wrong. Please try again later."}
            </p>
        </div>
    );
};

ErrorPage.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 500;
    return { statusCode };
};

const styles = {
    container: { textAlign: "center" as const, marginTop: "100px" },
    heading: { fontSize: "3rem", fontWeight: "bold" },
    text: { fontSize: "1.2rem", marginBottom: "20px" },
};

export default ErrorPage;