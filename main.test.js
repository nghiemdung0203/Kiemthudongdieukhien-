import { XepLoaiSanPham } from './main.js'
const expect = chai.expect;

describe('Kiem thu dong dieu khien cho do do C2: function danhHieu()', () => {
    it('1. Test case: 600000, Tốt', () => {
        const result = XepLoaiSanPham(600000, 'Tốt');
        expect(result).to.equal('sanPhamCaoCap');
    });

    it('2. Test case: 300000, Rất Tốt', () => {
        const result = XepLoaiSanPham(300000, "Rất Tốt");
        expect(result).to.equal('sanPhamTrungBinh');
    });

    it('3. Test case: 200000, Trung bình', () => {
        const result = XepLoaiSanPham(200000, 'Trung bình');
        expect(result).to.equal('sanPhamGiaRe');
    });

    it('4. Test case: 100000, Trung bình', () => {
        const result = XepLoaiSanPham(100000, 'Trung bình');
        expect(result).to.equal('sanPhamKhongDuocDanhGiaCao');
    });

});