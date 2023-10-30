import DeleteBlock from "./DeleteBlock"
import PriorityDisplay from "./PriorityDisplay"
import ProgressBar from "./ProgressBar"
import StatusDisplay from "./StatusDisplay"

const TickedCard = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">
        This is the ticket description, please do ticket things here
      </p>
      <ProgressBar />
      <StatusDisplay />
    </div>
  )
}

export default TickedCard
