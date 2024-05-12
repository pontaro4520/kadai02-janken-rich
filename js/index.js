$(".selectForm").hide();

$('#set').on ('click', function(){
    // 選択されているvalue属性値を取り出す
    var mt = $('[name=material]:checked').val();
    console.log(mt)
    var mF = $('[name=materialForm]').val();
    console.log(mF); // 出力：ABC
    $(".selectForm").show();
  
    if(mF === "sheet"){
        
        $(".φ, .l").hide();
    }else if (mF === "squarePipe"){
       
        $(".φ").hide();
    }else if (mF === "roundPipe"){
        
        $(".x, .y").hide();
    }else if (mF === "flatBar"){
        
        $(".φ").hide();
    }else if (mF === "roundBar"){
        
        $(".x, .y").hide();
    }

})

// 計算結果の表示

$('#result') .on('click', function(){

    var mt = $('[name=material]:checked').val();
    console.log(mt)
    var mF = $('[name=materialForm]').val();
    console.log(mF); // 出力：ABC

    var t = $('[name=T]').val();
    var φ = $('[name=φ]').val();
    var x = $('[name=X]').val();
    var y = $('[name=Y]').val();
    var l = $('[name=L]').val();

    var result = 0 ;
    var sthiju = 7.85 ;
    var sshiju = 7.93 ;
    var alhiju = 2.70 ;
    var hiju = 1;

    if (mt === "st"){
        hiju = sthiju
    }else if (mt === "ss"){
        hiju = sshiju
    }else if (mt === "al"){
        hiju = alhiju
    }


    if(mF === "sheet"){
        result = t * x * y * hiju / 1000000
        
    }else if (mF === "squarePipe"){
       
        $(".φ").hide();
    }else if (mF === "roundPipe"){
        
        $(".x, .y").hide();
    }else if (mF === "flatBar"){
        
        $(".φ").hide();
    }else if (mF === "roundBar"){
        
        $(".x, .y").hide();
    }
    console.log(result)

    $('.result').html(result);

})   

    



// リセット(ページリロード）
$('#reset').on('click',function(){
    location.reload();
})

