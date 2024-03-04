    /*Change Ability*/
    const abilities = {
    "p" : ["ability_0266_P", "NỘI TẠI", "ĐƯỜNG KIẾM TUYỆT DIỆT", "Theo chu kỳ, đòn đánh kế tiếp của Aatrox gây thêm sát thương vật lý và hồi máu, dựa theo máu tối đa của mục tiêu."],
    "q" : ["ability_0266_Q", "Q", "QUỶ KIẾM DARKIN", "Aatrox đập kiếm xuống đất, gây sát thương vật lý. Có thể chém ba lần, mỗi lần có một diện tác dụng khác nhau."],
    "w" : ["ability_0266_W", "W", "XIỀNG XÍCH ĐỊA NGỤC", "Aatrox đập kiếm xuống đất, gây sát thương lên kẻ địch đầu tiên trúng phải. Tướng và quái to phải nhanh rời vùng tác động nếu không muốn bị kéo về tâm và chịu sát thương lần nữa."],
    "e" : ["ability_0266_E", "E", "BỘ PHÁP HẮC ÁM", "Nội tại giúp Aatrox hồi máu khi gây sát thương lên tướng. Kích hoạt giúp Aatrox lướt theo hướng chỉ định."],
    "r" : ["ability_0266_R", "R", "CHIẾN BINH TẬN THẾ", "Aatrox hóa quỷ, làm hoảng sợ lính địch gần đó và được cộng SMCK, tăng hồi máu cũng như Tốc độ Di chuyển. Nếu hắn tham gia hạ gục, hiệu ứng này được kéo dài."]
}

    document.querySelectorAll(".ability-item").forEach((e) =>{
            e.addEventListener("click",()=>{
                document.querySelectorAll(".ability-item").forEach((ele)=>{
                    ele.classList.remove("active");
                })

                e.classList.add("active");

                document.getElementById("video").style = "opacity: 0";
                document.querySelector(".ability-info").style = "opacity: 0";


                setTimeout(()=>{
                    document.getElementById("video").src = "./videos/"+ abilities[e.id][0] +".webm";
                    document.querySelector(".ability-info-type").innerHTML = abilities[e.id][1];
                    document.querySelector(".ability-info-name").innerHTML = abilities[e.id][2];
                    document.querySelector(".ability-info-desc").innerHTML = abilities[e.id][3];

                    document.getElementById("video").style = "opacity: 1";
                    document.querySelector(".ability-info").style = "opacity: 1";
                },250)
            })
    })
    /*Change Image*/
    const skin = {
        "a" : ["Aatrox_1"],
        "b" : ["Aatrox_2"],
        "c" : ["Aatrox_3"],
        "d" : ["Aatrox_7"],
        "f" : ["Aatrox_8"],
        "g" : ["Aatrox_11"],
        "h" : ["Aatrox_30"]
    }
    document.querySelectorAll(".skin-item").forEach((e)=>{
        e.addEventListener("click",()=>{
            document.querySelectorAll(".skin-item").forEach((ele)=>{
                ele.classList.remove("active");
            })
        e.classList.add("active");
        setTimeout(()=>{
            document.getElementById("image").src = "./images/skin/"+ skin[e.id][0] +".jpg";
            },250)
        })
    })