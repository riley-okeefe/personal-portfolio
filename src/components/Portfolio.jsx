import ProceduralTerrains from '../assets/images/ProceduralTerrains.png'
import RayTracer from '../assets/images/RayTracer.png'
import WoodlandConservation from '../assets/images/WoodlandConservation.png'
import FlaskMySql from '../assets/images/FlaskMySQL.png'
import MountainBikeCentral from '../assets/images/MountainBikeCentral.png'
import StreetPursuit from '../assets/images/StreetPursuit.png'

export default function Portfolio() {
    return (
        <div id="portfolio" className="content-card" >
            <div className="content-body-portfolio">
                <h1>Check out some of my work</h1>
                <div className="content-portfolio">
                    <div className="content-project">
                        <div className="content-project-picture">
                            <img src={WoodlandConservation} />
                        </div>
                        <div className='content-project-description'>
                            <h2>Woodland Conservation Website</h2>
                            <p>
                                This project was a part of a software engineering experience gained through Saint Mary's University.
                                I collaborated in a team to develop a responive prototype website for the client, with a focus on maintaining
                                a clean design, and easy navigation. My contribution to the project included a responsive about page, along with
                                integrating an FAQ page. The FAQ page is connected to a Google App script and sends response data to the clients
                                Google sheet, allowing the client to recieve feedback from users.
                                <br /><br />
                                We utillized technologies such as HTML, CSS, JavaScript, Git for version control, GitHub for code management and reviews
                                Visual Studio Code for the development environment, and API's such as Cloudinary and FormSpree.
                            </p>
                            <h2><a href='https://github.com/riley-okeefe/woodland-conservation'>click here</a> to view on GitHub</h2>
                        </div>
                    </div>
                    <div className="content-project">
                        <div className="content-project-picture">
                            <img src={FlaskMySql} />
                        </div>
                        <div className='content-project-description'>
                            <h2>Flask MySQL Web Application</h2>
                            <p>
                                This project was a part of a Database Systems course taken at Saint Mary's University.
                                I collaborated in a team to develop a web application for a fictional company called MUC
                                specializing in used cars. The application aims to give the company a friendly way to interact
                                with their database to perform various operations, such as viewing table contents, adding new suppliers,
                                calculating annual expenses for parts, and predicting budget projections. For the database we were required
                                to create a relational database schema, along with normalizing the schema into 3NF (Third Normal Form), ensuring
                                data integrity through primary and foreign keys.
                                <br /><br />
                                We utillized technologies such as the Python web framework Flask, SQL, MySQL, HTML, CSS, Git for version control, GitHub for code management, Visual Studio Code for the
                                development environment.
                            </p>
                            <h2><a href='https://github.com/riley-okeefe/flask_mysql_app'>click here</a> to view on GitHub</h2>
                        </div>
                    </div>
                    <div className="content-project">
                        <div className="content-project-picture">
                            <img src={StreetPursuit} />
                        </div>
                        <div className='content-project-description'>
                            <h2>Street Pursuit Computer Game</h2>
                            <p>
                                This project was a part of a Computer Game Design and Development Course taken at Saint Mary's University.
                                I lead a team to develop an intense single player 3D street racing game called Street Pursuit. The game involves driving around
                                a city and trying to evade the pursuing police cars. This police cars use Unity's built-in NavMesh tools to act
                                as an AI for navigating each level in pursuit of the player. The player has a choice of 2 different levels and wide
                                selection of vehicles to choose from.
                                <br /><br />
                                We utillized technologies such as Unity's game engine, C# scripts to add functionality, Git for version control, GitHub
                                for code management, and Visual Studio as the devlopment environment for writing our C# scripts.
                            </p>
                            <h2><a href='https://github.com/riley-okeefe/Street-Pursuit'>click here</a> to view on GitHub</h2>
                        </div>
                    </div>
                    <div className="content-project">
                        <div className="content-project-picture">
                            <img src={MountainBikeCentral} />
                        </div>
                        <div className='content-project-description'>
                            <h2>Mountain Bike Central E-commerce Website</h2>
                            <p>
                                This project was a part of a Advanced Internet Technologies and Web Programming course taken at Saint Mary's University.
                                I developed a Comprehensive Full Stack E-commerce website for a fictional mountain bike company called Mountain Bike Central.
                                The website has fuctionality for user feedback, account creation, catalog browsing, the purchasing of products,
                                and database management to store data on users, invoices, and product inventory.
                                <br /><br />
                                This website utillizes HTML, CSS and JavaScript for the frontend of the website, PHP, SQL, MySQL, and MongoDB for the backend,
                                and Visual Studio Code for the development environment.
                            </p>
                            <h2><a href='https://github.com/riley-okeefe/Mountain-Bike-Central'>click here</a> to view on GitHub</h2>
                        </div>
                    </div>
                    <div className="content-project">
                        <div className="content-project-picture">
                            <img src={RayTracer} />
                        </div>
                        <div className='content-project-description'>
                            <h2>Backwards Ray Tracer</h2>
                            <p>
                                This project was developed as part of a Computer Graphics Course taken at Saint Mary's University.
                                Using fundamentals learned through course material I implemented a Backwards Ray Tracer. The project follows
                                the core requirements of writing a backwards ray tracer that renders a sphere from a fixed point of view,
                                models the perspective camera, shades the sphere using the Blinn-Phong illumination model, and includes a
                                single light source. Additional functionality was added for anti-aliasing and texture mapping using billinear
                                interpolation.
                                <br /><br />
                                I utillized technologies such as C++, Visual Studio for the development environment, CMake for building the project,
                                and GitHub for a repository to store my code.
                            </p>
                            <h2><a href='https://github.com/riley-okeefe/Ray-Tracer'>click here</a> to view on GitHub</h2>
                        </div>
                    </div>
                    <div className="content-project">
                        <div className="content-project-picture">
                            <img src={ProceduralTerrains} />
                        </div>
                        <div className='content-project-description'>
                            <h2>Procedural Terrains</h2>
                            <p>
                                This project was developed as part of a Computer Graphics Course taken at Saint Mary's University.
                                Using fundamentals learned through coursework I implemented a procedural terrain generator. The Project
                                follows the core requirements of producing procedural terrains using the requirements for geometry, rendering,
                                and animation along with the implmentation of additional functionality such as hybrid multifractal noise and 
                                infinite world generation.
                                <br /><br />
                                Technologies used include C++, OpenGL, Visual Studio for the development environment, CMake for building the project
                                and GitHub for a repository to store my code.
                            </p>
                            <h2><a href='https://github.com/riley-okeefe/Procedural-Terrains'>click here</a> to view on GitHub</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-body-portfolio-mobile">
                <h1>Check out some of my work</h1>
                <div className="content-portfolio-mobile">
                    <div className="content-project-mobile">
                        <div className="content-project-picture-mobile">
                            <img src={WoodlandConservation} />
                        </div>
                        <div className='content-project-description-mobile'>
                            <h2>Woodland Conservation</h2>
                            <p>
                                This project was a part of a software engineering experience gained through Saint Mary's University.
                                I collaborated in a team to develop a responive prototype website for the client, with a focus on maintaining
                                a clean design, and easy navigation. My contribution to the project included a responsive about page, along with
                                integrating an FAQ page. The FAQ page is connected to a Google App script and sends response data to the clients
                                Google sheet, allowing the client to recieve feedback from users.
                                <br /><br />
                                We utillized technologies such as HTML, CSS, JavaScript, Git for version control, GitHub for code management and reviews
                                Visual Studio Code for the development enviroment, and API's such as Cloudinary and FormSpree.
                            </p>
                            <h2><a href='https://github.com/riley-okeefe/woodland-conservation'>click here</a> to view on GitHub</h2>
                        </div>
                    </div>
                    <div className="content-project-mobile">
                        <div className="content-project-picture-mobile">
                            <img src={FlaskMySql} />
                        </div>
                        <div className='content-project-description-mobile'>
                            <h2>Flask MySQL Web Application</h2>
                            <p>
                                This project was a part of a Database Systems course taken at Saint Mary's University.
                                I collaborated in a team to develop a web application for a fictional company called MUC
                                specializing in used cars. The application aims to give the company a friendly way to interact
                                with their database to perform various operations, such as viewing table contents, adding new suppliers,
                                calculating annual expenses for parts, and predicting budget projections. For the database we were required
                                to create a relational database schema, along with normalizing the schema into 3NF (Third Normal Form), ensuring
                                data integrity through primary and foreign keys.
                                <br /><br />
                                We utillized technologies such as the Python web framework Flask, SQL, MySQL, HTML, CSS, Git for version control,
                                GitHub for code management, Visual Studio Code for the development environment.
                            </p>
                            <h2><a href='https://github.com/riley-okeefe/flask_mysql_app'>click here</a> to view on GitHub</h2>
                        </div>
                    </div>
                    <div className="content-project-mobile">
                        <div className="content-project-picture-mobile">
                            <img src={StreetPursuit} />
                        </div>
                        <div className='content-project-description-mobile'>
                            <h2>Street Pursuit Computer Game</h2>
                            <p>
                                This project was a part of a Computer Game Design and Development Course taken at Saint Mary's University.
                                I lead a team to develop an intense single player 3D street racing game called Street Pursuit. The game involves driving around
                                a city and trying to evade the pursuing police cars. This police cars use Unity's built-in NavMesh tools to act
                                as an AI for navigating each level in pursuit of the player. The player has a choice of 2 different levels and wide
                                selection of vehicles to choose from.
                                <br /><br />
                                We utillized technologies such as Unity's game engine, C# scripts to add functionality, Git for version control, GitHub
                                for code management, and Visual Studio as the devlopment environment for writing our C# scripts.
                            </p>
                            <h2><a href='https://github.com/riley-okeefe/Street-Pursuit'>click here</a> to view on GitHub</h2>
                        </div>
                    </div>
                    <div className="content-project-mobile">
                        <div className="content-project-picture-mobile">
                            <img src={MountainBikeCentral} />
                        </div>
                        <div className='content-project-description-mobile'>
                            <h2>Mountain Bike Central E-commerce Website</h2>
                            <p>
                                This project was a part of a Advanced Internet Technologies and Web Programming course taken at Saint Mary's University.
                                I developed a Comprehensive Full Stack E-commerce website for a fictional mountain bike company called Mountain Bike Central.
                                The website has fuctionality for user feedback, account creation, catalog browsing, the purchasing of products,
                                and database management to store data on users, invoices, and product inventory.
                                <br /><br />
                                This website utillizes HTML, CSS and JavaScript for the frontend of the website, PHP, SQL, MySQL, and MongoDB for the backend,
                                and Visual Studio Code for the development environment.
                            </p>
                            <h2><a href='https://github.com/riley-okeefe/Mountain-Bike-Central'>click here</a> to view on GitHub</h2>
                        </div>
                    </div>
                    <div className="content-project-mobile">
                        <div className="content-project-picture-mobile">
                            <img src={RayTracer} />
                        </div>
                        <div className='content-project-description-mobile'>
                            <h2>Backwards Ray Tracer</h2>
                            <p>
                                This project was developed as part of a Computer Graphics Course taken at Saint Mary's University.
                                Using fundamentals learned through course material I implemented a Backwards Ray Tracer. The project follows
                                the core requirements of writing a backwards ray tracer that renders a sphere from a fixed point of view,
                                models the perspective camera, shades the sphere using the Blinn-Phong illumination model, and includes a
                                single light source. Additional functionality was added for anti-aliasing and texture mapping using billinear
                                interpolation.
                                <br /><br />
                                I utillized technologies such as C++, Visual Studio for the development environment, CMake for building the project,
                                and GitHub for a repository to store my code.
                            </p>
                            <h2><a href='https://github.com/riley-okeefe/Ray-Tracer'>click here</a> to view on GitHub</h2>
                        </div>
                    </div>
                    <div className="content-project-mobile">
                        <div className="content-project-picture-mobile">
                            <img src={ProceduralTerrains} />
                        </div>
                        <div className='content-project-description-mobile'>
                            <h2>Procedural Terrains</h2>
                            <p>
                                This project was developed as part of a Computer Graphics Course taken at Saint Mary's University.
                                Using fundamentals learned through coursework I implemented a procedural terrain generator. The Project
                                follows the core requirements of producing procedural terrains using the requirements for geometry, rendering,
                                and animation along with the implmentation of additional functionality such as hybrid multifractal noise and 
                                infinite world generation.
                                <br /><br />
                                Technologies used include C++, OpenGL, Visual Studio for the development environment, CMake for building the project
                                and GitHub for a repository to store my code.
                            </p>
                            <h2><a href='https://github.com/riley-okeefe/Procedural-Terrains'>click here</a> to view on GitHub</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}