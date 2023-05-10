import './SearchBox.scss'

type Props = {}

const SearchBox = (props: Props) => {
    return (
        <>
            <div className="search-box">
                <div className='search-box-buttons'>
                    <button className="add-new-note-button">+</button>
                    <button className="delete-note-button">&#128465;</button>
                    <button className="edit-note-button">Edit</button>
                </div>
                <div className="searchbox">
                    <input
                        className="search-field"
                        placeholder="&#128269; Search"
                    ></input>
                </div>
            </div>
        </>
    )
}

export default SearchBox
