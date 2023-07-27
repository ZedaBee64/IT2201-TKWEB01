function validate(ele) {
    if (ele.value ==="") {
        ele.classList.remove("error");
        setTimeout(() => ele.classList.add("error"), 5);
        return true;
    }
    return false;
}


function giaiBac2() {
    let a = document.getElementById("aId");
    let b = document.getElementById("bId");
    let c = document.getElementById("cId");

    if(a!==null&&b!==null&&c!=null){
        if(validate(a)===true||validate(b)===true||validate(c)===true)
            return;

        a = parseFloat(a.value);
        b = parseFloat(b.value);
        c = parseFloat(c.value);

        //Biện luận 
        let m = "Kết quả tại đây...";
        let delta = b*b -4*a*c;
        if (a===0) {
            //Biện luận bx + c = 0
            if (b==0){
                if(c==0){
                    m="Phương trình vô số nghiệm.";
                } else {
                    m="Phương trình vô nghiệm.";
                }
            }
            else {
                let x = -c/b;
                m=`Phương trình có một nghiệm: x = ${x}.`;
            }
        }else {
            //Tính delta
            if (delta > 0){
                let x1= (-b + Math.sqrt(delta))/(2*a);
                let x2= (-b + Math.sqrt(delta))/(2*a);
                m=`Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
            } else if(delta===0){
                let x = -b/(2*a);
                m=`Phương trình có nghiệm kép: x1 = x2 = ${x}`;
            } else {
                m = "Phương trình vô nghiệm.";
            }
        }

        //Hiện kết quả
        let k = document.getElementById("kq");
        if(k!==null){
            k.innerHTML = `<h2 style="color:red;">${m}</h2>`;
        }else 
            alert("Vui lòng nhập giá trị");
    }
}

function doiTienTe() {
    let st = document.getElementById("stId");
    let dv = document.getElementById("dvId");
        
    if(st!==null&& dv!==null){
        if(validate(st)=== true||validate(dv)===true)
        return;

        st = parseFloat(st.value);
        dv = dv.value;

        let k;
        switch(dv){
            case "usd":
                k = st/22000;
                break;
            case "eur":
                k = st/26000;
                break;
            case "aud":
                k = st/16000;
                break;
        }
        
        let result = document.getElementById("result");
        result.innerHTML = `${st} VNĐ = ${k.toFixed(2)} ${dv.toUpperCase()}`;
    }
}