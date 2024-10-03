import { Btn } from '../btn/Btn';
import s from './Header.module.css';
export function Header() {
    return(
        <header className={s.header}>
            <div className="container">
                <div className={s.header__inner}>
                    <p className={s.logo}>LOGO</p>
                    <Btn/>
                </div>
            </div>
        </header>
    )
}