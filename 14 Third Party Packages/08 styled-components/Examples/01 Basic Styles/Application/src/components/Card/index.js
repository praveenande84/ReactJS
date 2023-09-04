
/* -----> import styles <----- */
import './index.css'  // CSS File
import {Container, Heading, Paragraph} from './styledComponents'  // CSS-in JS

/* -----> Creating Components <----- */

// Functional Component
const Card = () => {
    console.log("Card Component")
    return (
        <div className="card-component">
            <div className="card-container">
                <Container>
                    <Heading>Heading</Heading>
                    <Paragraph>I am a paragraph.</Paragraph>
                </Container>
            </div>
        </div>
    )
}



/* -----> Default Export <----- */
export default Card
