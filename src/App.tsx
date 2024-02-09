import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './styles/GlobalStyle';
import theme from "./styles/theme";
import Router from "./Router";

const App:React.FC = () => {
    return (
        <div className="App">
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Router />
            </ThemeProvider>
        </div>
    )
}

export default App;