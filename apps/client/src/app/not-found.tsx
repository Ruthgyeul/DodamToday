import Link from "next/link";
import { NextPage } from "next";

const NotFound: NextPage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404 - Page Not Found</h1>
            <p style={styles.text}>
                Sorry, the page you are looking for does not exist.
            </p>
            <Link href="/" style={styles.link}>
                Go back home
            </Link>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center" as const,
        marginTop: "100px",
    },
    heading: {
        fontSize: "3rem",
        fontWeight: "bold",
    },
    text: {
        fontSize: "1.2rem",
        marginBottom: "20px",
    },
    link: {
        fontSize: "1rem",
        color: "blue",
        textDecoration: "underline",
        cursor: "pointer",
    },
};

export default NotFound;