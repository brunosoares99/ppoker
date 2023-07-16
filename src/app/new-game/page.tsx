"use client";
import Button from "@/components/Button";
import Input from "@/components/Input"
import SubTitle from "@/components/SubTitle"
import Title from "@/components/Title"
import { useState } from "react"

const NewGame = () => {
  const [gameName, setGameName] = useState<string>('')

  const handleGameName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGameName(event.target.value)
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="text-center mb-4">
        <Title title="Criar um novo jogo" />
        <SubTitle subTitle="Escolha um nome e o tipo de sistema de votação para o seu jogo" />
      </div>
      <div className="flex flex-col w-96">
        <Input className="mb-4" onChange={handleGameName} value={gameName} type="text" placeholder="Nome do jogo" />
        <Button type="button" color="primary">Criar novo jogo</Button>
      </div>
    </div>
  )
}
export default NewGame;