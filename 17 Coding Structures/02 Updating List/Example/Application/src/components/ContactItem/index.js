/* -----> import styles <----- */
import './index.css'  //  // CSS File

/* -----> Creating Components <----- */

// Functional Component
const ContactItem = (props) => {
    console.log("ContactItem Component")
    console.log(props)
    // props object destructuring
    const {contactDetails, toggleIsFavorite} = props

    const {name, mobileNo, isFavorite, id} = contactDetails

    const starImgUrl = isFavorite
        ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

    // Event Handlers
    const onClickFavoriteIcon = () => {
        console.log("onClickFavoriteIcon Event Handler")
        toggleIsFavorite(id)
    }

    // Return JSX
    return (
        <li className="table-row">
            <div className="table-cell name-column">
                <p>{name}</p>
            </div>
            <hr className="separator" />
            <div className="table-cell mobile-no-column">
                <p className="mobile-no-value">{mobileNo}</p>
                <button
                    type="button"
                    className="favorite-icon-container"
                    onClick={onClickFavoriteIcon}
                >
                    <img src={starImgUrl} className="favorite-icon" alt="star" />
                </button>
            </div>
        </li>
    )
}



/* -----> Default Export <----- */
export default ContactItem


