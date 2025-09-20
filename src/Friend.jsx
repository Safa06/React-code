import { use } from "react"
import F from './F'

export default function Friend({ friendsPromise }) {
    const friend = use(friendsPromise);
    return (
        <div className="card divs">
            <h3>Friends: {friend.length} </h3>
            {
                friend.map(f=><F f={f}></F>)
            }
        </div>
    )
}