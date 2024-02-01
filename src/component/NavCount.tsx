interface Props {
    countItems: Number;
}
const NavCount = ({countItems}:Props) => {
  return (
    <div>
        {countItems}
    </div>
  )
}

export default NavCount