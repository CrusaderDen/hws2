import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'
import HW1 from "../hw01/HW1";
import HW2 from "../hw02/HW2";
import HW4 from "../hw04/HW4";
import HW3 from "../hw03/HW3";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    ERROR: 'Error404'
}

const emptyPageInlineStyles = {
    minHeight: '100dvh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '100px'
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                {/*роуты для /pre-junior, /junior, /junior-plus*/}
                <Route path={PATH.PRE_JUNIOR} element={<div><HW1/><HW2/><HW3/><HW4/></div>}/>
                <Route path={PATH.JUNIOR} element={<div style={emptyPageInlineStyles}>На этой странице пока ничего нет</div>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<div style={emptyPageInlineStyles}>И на этой тоже, не так быстро дружок)</div>}/>

                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                <Route path={PATH.ERROR} element={<Error404/>}/>
                <Route path={'/*'} element={<Navigate to={PATH.ERROR}/>}/>
            </Routes>
        </div>
    )
}

export default Pages
