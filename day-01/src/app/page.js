import Footer from '@/components/footer';
import style from '@/styles/home.module.css';

export default function Home() {
    return (
        <div className={style.main}>
            <div className={style.heading}>
                <h2>Welcome To Hunting Coder's Blog Page</h2>
            </div>
            <Footer />
        </div>
    );
}
