import ListItem from "../ListItem/ListItem"
import SideBar from "../SideBar/SideBar"
import './WorkSpace.scss'

type Props = {}
const WorkSpace = (props: Props) => {
  return (
    <div className="workspace-main">
    <SideBar />
    <ListItem />
    </div>
  )
}
export default WorkSpace