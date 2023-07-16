const HomePage = ()=> {
  return (
    <main className="w-full h-full">
      <section className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex items-center flex-col -translate-y-2/4">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Scrum Poker</h1>
            <h2 className="text-gray-500">para times de desenvolvimento ágil</h2>
          </div>
          <button className="rounded-lg font-semibold text-gray-50 px-14 py-2 bg-blue-800">Criar novo jogo</button>
        </div>
      </section>
    </main>
  )
}
export default HomePage;
