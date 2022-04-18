import { useEffect, useId } from 'react';
import Icons from './Icons/_index';

function Contact() {
    const id = useId();
    const getId = (subfix: string) => `${id}-${subfix}`;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                id="contact-svg"
            >
                <path
                    fill="var(--contact-me-background)"
                    fillOpacity="1"
                    d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,160C672,149,768,171,864,186.7C960,203,1056,213,1152,213.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
            <section className="contact" id="contact">
                <div className="contact__container">
                    <div className="contact__container-start">
                        <h2 className="contact__title">Contact Me</h2>
                    </div>
                    <div className="contact__container-end">
                        <form className="contact__form" onSubmit={handleSubmit}>
                            <div className="contact__form-group">
                                <label htmlFor={getId('name')}>Name</label>
                                <input type="text" id={getId('name')} />
                            </div>
                            <div className="contact__form-group">
                                <label htmlFor={getId('company')}>
                                    Company
                                </label>
                                <input type="text" id={getId('company')} />
                            </div>
                            <div className="contact__form-group">
                                <label htmlFor={getId('email')}>Email</label>
                                <input type="email" id={getId('email')} />
                            </div>
                            <div className="contact__form-group">
                                <label htmlFor={getId('message')}>
                                    Message
                                </label>
                                <textarea id={getId('message')} />
                            </div>
                            <div className="contact__form-group">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
