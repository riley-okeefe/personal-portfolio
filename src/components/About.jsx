import "./about.css";

export default function About() {
    return (
        <div id="about" className="content-card">
            <div className="content-body-about">
                <div className="content-about">
                    <h1>Get to know me</h1>
                    <p>
                    A Computer Science Graduate from Saint Mary's University, 
                    posessing multiple skills and certifications in this field, such as AI For 
                    Everyone from Coursera, Fundamentals of Accelerated Computing with CUDA C/C++ 
                    from NVIDIA, Neural Networks and Deep Learning from DeepLearning AI on Coursera,
                    and Intro to DevOps from IBM on Coursera. In addition I have received a Co-Curricular 
                    Experience Record from Saint Mary's University in which I gained valuable practical 
                    experience in the areas of Software Engineering and Web Development, along with 
                    experience using various programming languages.
                    <br/><br/>
                    Whether it's a new programming language, AI/ML tool, library or framework, I'm 
                    always eager to expand my knowledge and I thrive on exploring and learning about 
                    new technologies.
                    <br/><br/>
                    Currently I am utilizing my problem solving and analytical thinking skills gained from my Computer Science 
                    degree working as an IT Analyst. 
                    <br/><br/>
                    Through these experiences, I have developed strong competencies in timeline management, 
                    problem solving, communication, and teamwork which I aim to further enhance and utilize 
                    in my future career.
                    </p>
                </div>
                <div className="content-skills">
                    <h1>Technical skills</h1>
                    <p>
                        <strong>Programming languages I have experience using:</strong> Python, C, C++, C#, Java, JavaScript,
                        PHP, SQL, CUDA, HTML, and CSS.
                        <br/><br/>
                        <strong>Frameworks/libraries I have experience using:</strong> Flask, Numpy, React.
                        <br/><br/>
                        <strong>Tools I have experience using:</strong> GitHub, Git, Microsoft 365, Visual Studio, 
                        Visual Studio Code, MySQL, Active Directory, BMC Remedy SmartIT ticketing system, Beyond Trust 
                        secure remote support, ConnectWise (PSA, Automate, ScreenConnect)
                        <br/><br/>
                        <strong>Game engines I have experience using:</strong> Unity.
                    </p>
                </div>
            </div>
        </div>
    )
}