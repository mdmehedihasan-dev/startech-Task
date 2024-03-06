import Container from "./Container"
import Pagination from "./Pagination"

const Product = () => {
  return (
    <div>
        <Container>
            
                <div>
                    <Pagination itemsPerPage={20}  />
                </div>
         
        </Container>
    </div>
  )
}

export default Product