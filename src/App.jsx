import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { useOnClickOutside } from './hooks';
import { Burger, Menu } from './components';

function App() {
    
    const [open, setOpen] = React.useState(false);

    const node = React.useRef();
    useOnClickOutside(node, () => setOpen(false));
    
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <div>
                    <h1>Hello. This is a burger menu tutorial</h1>
                    <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
                    <small>Icon made by Freepik from www.flaticon.com</small>
                </div>
                <div ref={node}>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                </div>
            </>
        </ThemeProvider>
    );
}

export default App;