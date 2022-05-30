class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seconds: 0};
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                {/* component state 변경되면, 
                render() 다시 호출되어 마크업 갱신 */}
                Seconds: {this.state.seconds}
            </div>
        );
    }
}

ReactDOM.render(
    <Timer/>,
    document.getElementById('timer-example')
)