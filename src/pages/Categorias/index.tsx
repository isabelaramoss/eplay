import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categorias = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSports } =
    useGetSportGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        isLoading={isLoadingAction}
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
      />
      <ProductsList
        isLoading={isLoadingSports}
        games={sportGames}
        title="Esportes"
        background="gray"
        id="sports"
      />
      <ProductsList
        isLoading={isLoadingSimulation}
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
      />
      <ProductsList
        isLoading={isLoadingFight}
        games={fightGames}
        title="Luta"
        background="gray"
        id="fight"
      />
      <ProductsList
        isLoading={isLoadingRPG}
        games={rpgGames}
        title="RPG"
        background="black"
        id="rpg"
      />
    </>
  )
}

export default Categorias
