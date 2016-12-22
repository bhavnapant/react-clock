import React, {Component} from "react";

class Time extends Component {
    constructor(props) {
        super(props);

        const currentTime = new Date();
        this.state = {
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
            ampm: currentTime.getHours() >= 12
                ? "pm"
                : "am"

        };

        this.setTimer();

    }

    setTimer() {
        setTimeout(this.updateClock.bind(this), 1000)

    }

componentDidMount(){

    console.log(this.refs.secondsContainer.style)
    this.refs.secondsContainer.style.transform = 'rotateZ('+ this.state.seconds*6 +'deg)'
    this.refs.minutesContainer.style.transform = 'rotateZ('+ this.state.minutes*6 +'deg)'

}


    updateClock() {
        const currentTime = new Date();
        this.setState({

            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
            ampm: currentTime.getHours() >= 12
                ? "pm"
                : "am"
        }, this.setTimer);
        this.refs.secondsContainer.style.transform = 'rotateZ('+ this.state.seconds*6 +'deg)'
        this.refs.minutesContainer.style.transform = 'rotateZ('+ this.state.minutes*6 +'deg)'
        this.refs.hoursContainer.style.transform = 'rotateZ('+ this.state.hours*30 +'deg)'

    }
    render() {
        const {hours, minutes, seconds, ampm} = this.state;
        return (
            <div className="clock">
                <div ref="hoursContainer" className="hours-container">
                    <div className="hours">
                        {hours == 0
                            ? 12
                            : (hours > 12)
                                ? hours - 12
                                : hours}
                    </div>
                </div>
                <div ref="minutesContainer" className="minutes-container">
                    <div className="minutes">
                        {minutes > 9
                            ? minutes
                            : `0${minutes}`}
                    </div>
                </div>
                <div ref="secondsContainer" className="seconds-container">
                    <div className="seconds">
                        {seconds > 9
                            ? seconds
                            : `0${seconds}`}
                    </div>
                </div>
            </div>
        )
    }
}

export default Time;
