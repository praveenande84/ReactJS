
/* -----> import styles <----- */
import './index.css'  // CSS File
import {Container, Heading, Paragraph, CustomButton} from './styledComponents'  // CSS-in JS

/* -----> Creating Components <----- */

// Functional Component
const Card = () => {
    console.log("Card Component")
    return (
        <div className="card-component">
            <div className="card-container">
                <Container>
                    <Heading>Heading</Heading>
                    <Paragraph>Button Elements displayed</Paragraph>
                    <CustomButton type="button" outline={false}>Button</CustomButton>
                    <CustomButton as="a" href="#" type="button" outline={false}>Link</CustomButton>
                </Container>
            </div>
        </div>
    )
}



/* -----> Default Export <----- */
export default Card
