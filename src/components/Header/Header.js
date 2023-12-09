
import './Header.css';
import '../../App.css';
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Header() {

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Check if the page is loaded externally (direct URL access)
        const isExternalNavigation = !location.state || !location.state.fromReactRouter;
        console.log(location.state);
        if (document.referrer && document.referrer.length > 0 && document.referrer.startsWith('https://yoursite.com')) {
            // user came from an internal link
            console.log("Internal")
        }
        else {
            // user came from a bookmark or an external link
            console.log(document.referrer);
            console.log("External")
        }
    }, [location]);

    function clickHome(event, color, url) {
        let clicked = event.target;
        if (clicked.classList.contains('clicked')) {
            return;
        }
        let elem = document.getElementById('App-coverbar');
        elem.classList.add("resumeClicked");
        let rect = elem.getBoundingClientRect();
        let x = event.clientX - rect.x;
        let y = event.clientY - rect.y;
        elem.style.background = `radial-gradient(circle at ${x}px ${y}px, ${color} var(--pos, 0%), #333 0)`
        elem.style.animation = 'none';
        let a = elem.offsetHeight;
        elem.style.animation = null;
        elem.style.animation = `colorbar 0.6s ease-in-out forwards`
        navigate(url);
    }
    return (
        <header className="App-header">
            <div id="App-coverbar">

            </div>
            <div className="App-clickables">
                <div onClick={(event) => clickHome(event, '#ffa500', '/')} className="App-navbox" id="App-homebox">
                    Home
                </div>
                <div onClick={(event) => clickHome(event, '#43a5ff', '/resume')} className="App-navbox" id="App-resumebox">
                    Resume
                </div>
                <div onClick={(event) => clickHome(event, '#b42fc9', '/projects')} className="App-navbox" id="App-projectsbox">
                    Projects
                </div>
                <div onClick={(event) => clickHome(event, '#299b29', '/contact')} className="App-navbox" id="App-contactbox">
                    Contact
                </div>
            </div>
            <div className="App-colorbar">

            </div>

        </header>
    );
}

export default Header;
