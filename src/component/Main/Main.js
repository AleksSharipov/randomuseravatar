export default function Main({currentUser}) {
  return (
    <div className="card">
      <h3 className="card__name">{`${currentUser.name.first} ${currentUser.name.last}`}</h3>
      <img className="card__img" src={currentUser.picture.large} alt={`Аватар пользователя ${currentUser.name.first} ${currentUser.name.last}`}/>
    </div>
  )
}