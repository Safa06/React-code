export default function F({ f }) {
    console.log(f);
    const { name, email, phone } = f;
    return (
        <div className="card divs">
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
            <h4>Phone: {phone}</h4>
        </div>
    )
}