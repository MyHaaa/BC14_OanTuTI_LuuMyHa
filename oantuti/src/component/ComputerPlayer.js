import React, { Component } from 'react';
import { connect } from 'react-redux';

class ComputerPlayer extends Component {
	render() {

		let keyframe = `@keyframes randomItem${Date.now()}{
			0% {top : -50px}
			25% {top: 100px}
			50% {top: -50px}
			75% {top: 100px}
			100% {top: 0px}
		}`

		return (
			<div>
				<div className="character">
					<style>
						{keyframe}
					</style>
					<div className="speech" style={{position: 'relative'}}>
						<img src={this.props.computer.hinhAnh} className="mt-3" width={80} height={70} 
						style={{
							position: 'absolute',
							left: '20%',
							animation: `randomItem${Date.now()} 0.5s`,
						}}/>

					</div>
					<div className="speech-bubble" />
					<img style={{ width: 180, height: 180 }} src="./img/playerComputer.png" alt="playerComputer" />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		computer: state.BTOanTuTiReducer.computer,
	}
}



export default connect(mapStateToProps)(ComputerPlayer)