import s from "./Footer.module.scss";

export default function Footer() {
    return (
        <div className={s.Footer}>
            <p className={s.text}>&copy; 2025 DodamToday. All rights reserved.</p>
        </div>
    );
}
