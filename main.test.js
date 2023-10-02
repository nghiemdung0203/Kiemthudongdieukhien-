import { DanhGia } from './main.js'
const expect = chai.expect;

describe('Kiem thu dong dieu khien cho do do C2: function danhHieu()', () => {
    it('1. Test case: 9.0, Tốt', () => {
        const result = DanhGia(9.0, 'Tốt');
        expect(result).to.equal('hocSinhGioi');
    });

    it('2. Test case: 7.0, Khá', () => {
        const result = DanhGia(7.0, 'Khá');
        expect(result).to.equal('hocSinhTienTien');
    });

    it('3. Test case: 5.0, Yếu', () => {
        const result = DanhGia(5.0, 'Yếu');
        expect(result).to.equal('hocSinhTrungBinh');
    });

});