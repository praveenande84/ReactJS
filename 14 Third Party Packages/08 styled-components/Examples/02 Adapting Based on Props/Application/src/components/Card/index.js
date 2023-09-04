
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
                    <Paragraph>Button Elements Adapting based on props</Paragraph>
                    <CustomButton type="button" color="#ffffff" bgcolor="#0070c1">Click</CustomButton>
                    <CustomButton type="button" color="#0070c1" bgcolor="#ffffff">Click</CustomButton>
                </Container>
            </div>
        </div>
    )
}



/* -----> Default Export <----- */
export default Card
