// eslint-disable-next-line react-refresh/only-export-components
export default function ({ singer }) {
    return (
        < div className="divs" >
            <h3>Name: {singer.name}</h3>
            <p>Id: {singer.id}</p>
            <p>Age: {singer.age}</p>
        </div >
    
    )
}