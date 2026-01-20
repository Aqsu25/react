import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <>
            <h4 style={{
                fontSize: "26px",
                color: "#6d28d9",
                marginBottom: "20px",
                fontFamily: "Arial"
            }}>React + Vite</h4>
        </>
    )
}
const anotherElement = (
    <a href='https://google.com' target='_blank' style={{
        display: "inline-block",
        margin: "10px",
        padding: "10px 18px",
        backgroundColor: "#22c55e",
        color: "white",
        textDecoration: "none",
        borderRadius: "6px",
        fontWeight: "bold"
    }}>Visit Google</a>
)
const username = 'AS'

const reactElement = React.createElement(
    'a',
    {
        href: 'https://www.youtube.com/', target: '_blank', style: {
            display: "inline-block",
            margin: "10px",
            padding: "10px 18px",
            backgroundColor: "#ef4444",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "bold"
        }
    },
    'Click me to visit the Youtube',
    username
)
createRoot(document.getElementById('root')).render(

    <StrictMode>
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f3f4f6"
            }}
        >
            <App />
            <MyApp />
            {anotherElement}
            {reactElement}
        </div>
    </StrictMode>
)