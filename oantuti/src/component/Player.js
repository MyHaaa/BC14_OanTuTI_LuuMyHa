import React, { Component } from 'react'
import {connect} from 'react-redux'

class Player extends Component {
    render() {
        return (
            <div className="character">
                <div className="speech">
                    <img src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}  className="mt-3" width={80} height={70} />  
                </div>
                <div  className="speech-bubble"></div>
                <img style={{width: 180, height: 180}} src="./img/player.png" alt="player" />

                <div className="row">
                    {this.props.mangDatCuoc.map((item, index)=>{
                        
                        let border = {}
                        if(item.datCuoc){
                            border = {border: '3px solid orange'}
                        }

                        return <div className="col-4">
                        <button style={{width: '45px', height: '45px'}, border} onClick={() =>{
                            this.props.datCuoc(item.ma)
                        }}>
                            <img width={30} height={30} src={item.hinhAnh}/>
                        </button>
                    </div>
                    })}
                    
                   
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BTOanTuTiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = dispatch =>{
	return {
		datCuoc: (maCuoc) => {
			dispatch({
				type: 'CHON_KEO_BUA_BAO',
				maCuoc
			})
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)