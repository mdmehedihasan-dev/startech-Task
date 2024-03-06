import Container from "./Container"
import headerItems from "./header"

const Header = () => {
  return (
    <div className="border-4 border-b border-solid shadow-md border-border">
       <Container>
       <div className="flex py-5 gap-x-4">
      {headerItems.map((items,i)=>(
        <p className="text-base font-bold cursor-pointer" key={i}>{items.item}</p>
      ))}
    </div>
       </Container>
    </div>
    
  )
}

export default Header