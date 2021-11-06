const stateDefault = {
	mangDatCuoc: [
		{ ma: 'keo', hinhAnh: './img/keo.png', datCuoc: true },
		{ ma: 'bua', hinhAnh: './img/bua.png', datCuoc: false },
		{ ma: 'bao', hinhAnh: './img/bao.png', datCuoc: false }
	],
	ketQua: 'Bạn thắng rồi!!!',
	soBanChoi: 0,
	soBanThang: 0,
	computer: { ma: 'keo', hinhAnh: './img/keo.png' }
};

const BTOanTuTiReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case 'CHON_KEO_BUA_BAO': {
			let mangDatCuocUpdate = [ ...state.mangDatCuoc ];
			mangDatCuocUpdate = mangDatCuocUpdate.map((item, index) => {
				if (item.ma === action.maCuoc) {
					return { ...item, datCuoc: true };
				}
				return { ...item, datCuoc: false };
			});
			state.mangDatCuoc = mangDatCuocUpdate;
			return { ...state };
		}
		case 'RAN_DOM': {
			let soNgauNhien = Math.floor(Math.random() * 3);
			let quanDatCuocNN = state.mangDatCuoc[soNgauNhien];
			state.computer = quanDatCuocNN;
			return { ...state };
		}
		case 'END_GAME': {
			let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
			let computer = state.computer;

			switch (player.ma) {
				case 'keo':
					if (computer.ma === 'keo') {
						state.ketQua = 'Hoà nhau rồi!!!';
					} else if (computer.ma === 'bua') {
						state.ketQua = 'Bạn thua mất rồi!!!';
					} else {
                        state.soBanThang +=1;
						state.ketQua = 'Bạn thắng rồi nè!!!';
					}
					break;
				case 'bua':
					if (computer.ma === 'keo') {
                        state.soBanThang +=1;
						state.ketQua = 'Bạn thắng rồi nè!!!';
					} else if (computer.ma === 'bua') {
						state.ketQua = 'Hoà nhau rồi!!!';
					} else {
						state.ketQua = 'Bạn thua mất rồi!!!';
					}
					break;
				case 'bao':
					if (computer.ma === 'keo') {
						state.ketQua = 'Bạn thua mất rồi!!!';
					} else if (computer.ma === 'bua') {
                        state.soBanThang +=1;
						state.ketQua = 'Bạn thắng rồi nè!!!';
					} else {
						state.ketQua = 'Hoà nhau rồi!!!';
					}
					break;
                default: 
                    state.soBanThang +=1;
                    state.ketQua = 'Bạn thắng rồi nè!!!';
			}
            state.soBanChoi+=1;
			return { ...state };
		}

		default:
			return { ...state };
	}
};
export default BTOanTuTiReducer;
