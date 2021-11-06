import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
    render() {
        return (
            <div className="mt-1">
                <div className =" display-4" style={{color: 'red'}}>{this.props.ketQua}</div>
                <div className =" display-4 text-success">Số bàn thắng: <span className="text-success">{this.props.soBanThang}</span></div>
                <div className =" display-4 text-success">Số bàn đã chơi: <span className="text-success">{this.props.soBanChoi}</span></div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        ketQua: state.BTOanTuTiReducer.ketQua,
        soBanThang: state.BTOanTuTiReducer.soBanThang,
        soBanChoi: state.BTOanTuTiReducer.soBanChoi,
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi)