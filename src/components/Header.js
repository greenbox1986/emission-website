import propTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

// const headingStyle = {
//     color:'red', 
//     backgroundColor:'black'
// }

Header.defaultProps = {
    title: "Emission Dataset!", // will use this if Header in App.js does not have any props
}

Header.propTypes = {
    title: propTypes.string.isRequired,
}
export default Header
