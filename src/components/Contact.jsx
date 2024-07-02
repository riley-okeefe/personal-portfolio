import "./contact.css";

export default function Contact() {
    return (
        <div id="contact" className="content-card">
            <div className="content-body-contact">
                <div className="content-contact">
                    <h1>Let's Connect</h1>
                </div>
                <div className="content-contact">
                    <a href="https://www.linkedin.com/in/riley-okeefe/"><i className="fa-brands fa-linkedin fa-xl" style={{ color: "#0072B1" }}></i></a>
                </div>
                <div className="content-contact">
                    <a href="https://github.com/riley-okeefe"><i className="fa-brands fa-github fa-xl" style={{ color: "black" }}></i></a>
                </div>
            </div>
        </div>
    )
}