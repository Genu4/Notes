import SearchBox from '../SearchBox/SearchBox'
import SideBar from '../SideBar/SideBar'
import WorkSpace from '../WorkSpace/WorkSpace'
import './App.scss'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <SearchBox />
            <WorkSpace />
        </>
    )
}
export default App
