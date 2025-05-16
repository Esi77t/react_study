import { createContext, useState } from "react";
import { mockData } from "../mockData";

export const BoardContext = createContext(null);

const BoardProvider = ({ children }) => {

    const [boardList, setBoardList] = useState([]);
    
    return(
        <BoardContext.Provider value={{ boardList, setBoardList }}>
            { children }
        </BoardContext.Provider>
    )
}

export default BoardProvider;