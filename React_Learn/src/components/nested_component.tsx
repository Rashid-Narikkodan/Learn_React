// - place a component inside a component is nested components
// or component composition
function Logo(){
    return <img src='/react.svg' alt="logo" />
}

export default function Header(){
    return (
        <div>
            <Logo/> {/*here we just nested a component inside header(another component)*/}
            <h4>that logo is nested inside Header</h4>
        </div>
    )
}