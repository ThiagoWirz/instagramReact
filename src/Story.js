export default function Story(){

    const users = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"]

    return(
        users.map((user) => <div class="story">
            <div class="imagem">
                <img src={`./assets/img/${user}.svg`} alt = "" />
            </div>
            <div class="usuario">
                {user}
            </div>
        </div>)
    )
}