const flashData = $('.flashdata').data('flashdata');

if( flashData ){
    Swal.fire({
        title: 'Data Mahasiswa',
        text: 'Berhasil ' + flashData,
        icon: 'success'
    });
}

$('.tombol-hapus').on('click', function(e){
    const href = $(this).attr('href');
    e.preventDefault();
    Swal.fire({
        title: 'Apakah anda yakin?',
        text: "Data Mahasiswa Akan Dihapus !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Hapus'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            document.location.href = href
          )
        }
    })
})