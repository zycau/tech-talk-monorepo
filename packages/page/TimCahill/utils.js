import {useState, useEffect} from 'react';

export const scrollToAnchor = (id) => {
    const elmnt = document.getElementById(id);
    elmnt.scrollIntoView({behavior: "smooth"});
};

export const getUrl = (path) => {
    // const str = window.location.href;
    // const urlArray = str.split("/");
    // return `${location.protocol}//${window.location.hostname}/${urlArray[3] && urlArray[3]}/${path}`
    return `https://www.${process.env.REACT_APP_WEBSITE}.com/${process.env.REACT_APP_LANG}-int/${path}`
};



function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}