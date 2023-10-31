import TickedCard from "./(components)/TickedCard"

const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <TickedCard />
        <TickedCard />
        <TickedCard />
        <TickedCard />
      </div>
    </div>
  )
}

export default Dashboard
