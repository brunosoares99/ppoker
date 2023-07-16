import Button from "@/components/Button";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import Link from "next/link";

const HomePage = ()=> {
  return (
    <main className="w-full h-full">
      <section className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex items-center flex-col">
          <div className="text-center mb-4">
            <Title title="Scrum Poker" />
            <SubTitle subTitle="para times de desenvolvimento ágil" />
          </div>
          <Link href="new-game">
            <Button className="w-96" type="button" color="primary">Criar novo jogo</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
export default HomePage;
