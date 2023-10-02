export function DanhGia(diemTongKet, hanhKiem) {
    let result                    //1
        if (diemTongKet >= 8.0 && hanhKiem == 'Tốt')         //2
            result = 'hocSinhGioi'                      //3
        else if (diemTongKet >= 6.5 && hanhKiem == 'Tốt')    //4
            result = 'hocSinhTienTien'                  //5
        else if (diemTongKet >= 6.5 && hanhKiem == 'Khá')    //6
            result = 'hocSinhTienTien'                  //7
        else result =  'hocSinhTrungBinh'               //8
    return result                                       //9
}
