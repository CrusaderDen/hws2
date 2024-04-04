import React from 'react'
import HW6 from "../../hw06/HW6";
// import HW6 from '../../hw06/HW6'
// import HW7 from '../../hw07/HW7'
// import HW8 from '../../hw08/HW8'
// import HW9 from '../../hw09/HW9'

function Junior() {
    const emptyPageInlineStyles = {
        minHeight: '100dvh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '100px'
    }

    return (
        <div id={'hw5-page-junior'}>
            {/*<div style={emptyPageInlineStyles}>На этой странице пока ничего нет</div>*/}
            <HW6/>
            {/*<HW7 />*/}
            {/*<HW8 />*/}
            {/*<HW9 />*/}
        </div>
    )
}

export default Junior
