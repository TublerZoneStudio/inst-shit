import { useState } from "react"
import Footer from "../components/Footer/Index";
import UserService from "../services/UserService";
import Input from "../UI/Input/Index"

const LoginPage = () => {

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    const [contact, setContact] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)
    const [windowSize, setWindowSize] = useState(getWindowSize())

    const clickHandler = () => {
        console.log(contact, password)
        UserService.login(contact!, password!)
    }

    return (
        <>
            <section className="section_container login">
                <main style={{minHeight: `${windowSize.innerHeight}px`}}>
                    <article className="artcl">
                        <div className="pre_action_container">
                            <div className="action_container">
                                <div className="section_wordmark">
                                    <img style={{display: "block"}} src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"/>
                                </div>
                                <div className="section_action">
                                    <form className="section_action-form" method="post">
                                        <div className="section_action-content">
                                            <div className="inst-btn-container">
                                                <button type="button">
                                                    <span className="facebook-ic">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="16" height="16" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                                                    </span>
                                                    <span>
                                                        Продолжить с Facebook
                                                    </span>
                                                </button>
                                            </div>
                                            <div className="or_spacer">
                                                <div className="or_spacer-element"> 
                                                </div>
                                                <div className="or_spacer-word">
                                                    ИЛИ 
                                                </div>
                                                <div className="or_spacer-element">
                                                    
                                                </div>
                                            </div>
                                            <Input
                                                placeholder="Телефон, имя пользователя или эл. адрес" 
                                                onChange={e => setContact(e.target.value)}
                                            />
                                            <Input 
                                                type="password" 
                                                placeholder="Пароль" 
                                                onChange={e => setPassword(e.target.value)}
                                            />
                                            <div className="forgot_password-container">
                                                <a href="https://www.instagram.com/accounts/password/reset/" tabIndex={0}>
                                                    <div className="styled_link">
                                                        Забыли пароль?
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="inst-btn-container">
                                                <button onClick={() => clickHandler()} type="button" disabled={contact && password ? false : true}>
                                                    <span>
                                                        Войти
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="redir_container">
                                            <div className="redir_inner">
                                                <p>
                                                    {"У вас еще нет аккаунта? "}   
                                                    <a href="/emailsignup" className="styled_link">
                                                        Зарегистрироваться
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </article>
                    <div className="meta_promo">
                        <span className="meta_promo-img">
                        </span>
                    </div>
                </main>
            </section> 
            <Footer/>
        </>
    )
}

export default LoginPage