import logo from './logo.svg';
import './App.css';
import { Parent } from './Parent';
import { UserProvider } from './UserContext';
import { ThemeContext } from './ThemeContext';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useContext } from 'react';


function App() {

  const { isDarkMode } = useContext(ThemeContext);

  return(
    // <UserProvider>
    //   <Parent /> {/* -> children으로 넘어간다 */}
    // </UserProvider>
    //   <div style = {{
    //     backgroundColor: isDarkMode ? '#333' : '#fff',
    //     color: isDarkMode ? '#fff' : '#000',
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // }}>
    //       <h2>{ isDarkMode ? 'Dark Mode' : 'Light Mode' }</h2>
    //       <ThemeSwitcher />
    //   </div>
    <div>
      
    </div>
  )
}

export default App;
