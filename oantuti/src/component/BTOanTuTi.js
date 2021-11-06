import React, { Component } from 'react'
import '../component/BTOanTuTi.css'
import ComputerPlayer from './ComputerPlayer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'
import { connect } from 'react-redux'

class BTOanTuTi extends Component {
    render() {

        return (
            <div className="gameOTT">
                <div className="row" >
                    <div className="col-4">
                        <Player />
                    </div>

                    <div className="col-4">
                        <KetQuaTroChoi />
                        <button className=" btn btn-success p-2" onClick={()=>{
                            this.props.playGame()
                        }}>PLAY GAME</button>
                    </div>

                    <div className="col-4">
                        <ComputerPlayer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        playGame: () =>{
            let count = 0;
            let randomComputerItem = setInterval(()=>{
                dispatch({
                    type: 'RAN_DOM'
                })
                count++;
                if(count > 10){
                    clearInterval(randomComputerItem);
                    dispatch({
                        type: 'END_GAME'
                    })
                }
            }, 100)
        }
    }
}

export default connect(null, mapDispatchToProps)(BTOanTuTi)