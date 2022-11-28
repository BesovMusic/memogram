import { createContext, useState } from "react";

export const MemeContext = createContext({ cardsArray: [] });

export const MemeProvider = ({ children }) => {

    const [memesArray, setMemesArray] = useState([
        '/assets/memes/1.jpg',
        '/assets/memes/2.jpg',
        '/assets/memes/3.jpg',
        '/assets/memes/4.jpg',
        '/assets/memes/5.jpg',
        '/assets/memes/6.jpg',
        '/assets/memes/7.jpg',
        '/assets/memes/8.jpg',
        '/assets/memes/9.jpg',
    ]);

    return (
        <MemeContext.Provider
            value={{ cardsArray: memesArray, setMemesArray: setMemesArray }}
        >
            {children}
        </MemeContext.Provider>
    )
}

