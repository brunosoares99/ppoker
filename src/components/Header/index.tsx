import Button from "../Button";
import Title from "../Title";

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center w-full text-gray-900">
      <Title title="Scrum Poker" />
      <Button type="button" color="primary">Juntar-se</Button>
    </header>
  )
}
export default Header;