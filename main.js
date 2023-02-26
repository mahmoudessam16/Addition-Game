function App() {
    const [state, setState] = React.useState({
        num1: Math.floor(Math.random() * 10),
        num2: Math.floor(Math.random() * 10),
        response: "",
        score: 0,
        incorrect: false
    });
    function inputKeyPress(event) {
        if (event.key === "Enter") {
            const answer = parseInt(state.response);
            if ((state.num1 + state.num2) === answer) {
                setState({
                    ...state,
                    num1: Math.floor(Math.random() * 10),
                    num2: Math.floor(Math.random() * 10),
                    score: state.score + 1,
                    response: "",
                    incorrect: false
                })
            } else {
                setState({
                    ...state,
                    score: state.score - 1,
                    response: "",
                    incorrect: true
                })
            }
        }
    }
    function updateState(event) {
        setState({
            ...state,
            response: event.target.value
        })
    }

    if (state.score === 10) {
        return (
            <div id="winner">
                You Won!
            </div>
        )
    }

    return (
        <div>
            <div className={state.incorrect ? "incorrect" : ""} id="problem">{state.num1} + {state.num2}</div>
            <input id="input" autoFocus={true} onKeyPress={inputKeyPress} onChange={updateState} value={state.response} />
            <div id="score">Score: <span>{state.score}</span></div>
            <div id="note">if you answer 10 times correctly, you win🤩</div>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
