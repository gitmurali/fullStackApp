import * as React from "react";

// reusable header component..
const h1Style = {
    color: 'blue',
    textAlign: 'center'
};

const Header = ({message}) => {
    return (
        <h1 style={h1Style}>
            {message}
        </h1>
    )
}

Header.propTypes = {
    message: React.PropTypes.string
}

export default Header;