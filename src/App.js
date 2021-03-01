import React, {useState} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import Main from './components/Main.jsx'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Former from './components/Form.jsx'


const AppWrapper = styled.div`

`

const App = () => {
    const [theme, setTheme] = useState({
        colors: {
            primary: '#ffd6e7',
            secondary: '#a8071a',
            tertiary: '#ffbb96'
        },
        media: {
            phone: '(max-width: 425px)',
            tablet: '(max-width: 768px) and (min-width: 425px)'
        }
    })
    const items = [{value: 'Главная', href: '/main', icon: 'anchor'}, {
        value: 'Услуги',
        href: '/service',
        icon: 'anchor'
    }, {value: 'Магазин', href: '/shop', icon: 'anchor'}]

    const [menuIsActive, setMenuIsActive] = useState(false)


    return (
        <ThemeProvider theme={theme}>
            <AppWrapper>
                <Header setMenuIsActive={setMenuIsActive} menuIsActive={menuIsActive}/>
               {/*<Main/>*/}
                <Navbar setMenuIsActive={setMenuIsActive} menuIsActive={menuIsActive} header={'Бургер-меню'} items={items}/>
               <Former/>
            </AppWrapper>

        </ThemeProvider>
    )
}

export default App