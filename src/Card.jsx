function Card({ image, name, email }) {

    return(
        <div className = "card">
            <img className="card-image" src= { image } alt="profile picture"></img>
            <h2 className="card-name">{ name }</h2>
            <p className="card-email">{ email }</p>
        </div>
    );
}

export default Card